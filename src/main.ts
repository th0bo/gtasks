function myFunction() {
  const taskListId = "@default";
  const existingTasks = TasksTasks.listAllTasks(taskListId, {
    showCompleted: true,
    showHidden: true,
  });
  const now = new Date();
  console.log(computeCommandsToRun(DayGs.dayjs(now).add(1, "days").toDate(), taskListId, existingTasks));
}

const testEmojis = () => {
  const labels = [
    "Faire les courses",
    "Préparer le repas",
    "Faire la vaisselle",
    "Ranger la maison",
    "Laver le linge",
    "Repasser les vêtements",
    "Nettoyer la salle de bain",
    "Passer l'aspirateur",
    "Faire du sport",
    "Lire un livre",
    "Regarder un film",
    "Écouter de la musique",
    "Apprendre une nouvelle compétence",
    "Pratiquer un hobby",
    "Passer du temps avec des amis",
    "Se promener dans la nature",
    "Visiter un musée",
    "Faire du bénévolat",
    "Prendre soin de soi",
    "Dormir suffisamment"
  ];
  for (const text of labels.map((label) => `${Emojis.findMostRelevantEmoji(label)} ${label}`)) {
    console.log(text);
  }
}

const computeCommandsToRun:
  (date: Date, taskListId: string, existingTasks: GoogleAppsScript.Tasks.Schema.Task[]) => TasksCommands.Command[] =
  (date, taskListId, existingTasks) => {
    const calendarDay = buildCalendarDay(date);
    const generators = [
      ...Object.values(
        Object.groupBy(
          GeneratorsDriveSheets.load(),
          ([, title]) => title
        )
      )
    ].map(convertLinesToGenerator);
    const titleToSortedExistingTasks = sortExistingTasks(existingTasks);
    const { tasksIdsToRemove, tasksToCreateData } = generators.map((generator) => {
      const {
        title,
        scheduledQuantity,
        retainedQuantity,
      } = generator;
      const relatedTasks = (titleToSortedExistingTasks.get(title) ?? []).filter(({ due }) => due !== undefined);

      const {
        lastRelatedFutureTaskDue,
        lastRelatedTaskDue,
        relatedFutureTasksCount,
        relatedPastCompletedTasks,
      } = analyzeRelatedTasks(relatedTasks, calendarDay);
      
      const tasksToRemove = retainedQuantity > 0 ? relatedPastCompletedTasks.slice(0, -1 * retainedQuantity) : relatedPastCompletedTasks;
      const tasksIdsToRemove = tasksToRemove.map(({ id }) => ({ taskId: id as string, listId: taskListId })) as TasksCommands.TaskId[];
      const calendarDayBefore = DayGs.dayjs(calendarDay).add(-1, "days").toDate();
      const firstExcludedDay = new Date(lastRelatedFutureTaskDue ?? calendarDayBefore);
      const tasksToCreateCount = Math.max(scheduledQuantity - relatedFutureTasksCount, 0);
      const daysSpan = 800;
      const tasksToCreateData = TaskGeneration.computeTasksForDaysInRange(
        firstExcludedDay,
        daysSpan,
        tasksToCreateCount,
        generator,
        lastRelatedTaskDue,
        taskListId,
      );
      return { tasksIdsToRemove, tasksToCreateData };
    }).reduce(
      (
        {
          tasksIdsToRemove: previousTasksIdsToRemove,
          tasksToCreateData: previousTasksToCreateData,
        },
        {
          tasksIdsToRemove: currentTasksIdsToRemove,
          tasksToCreateData: currentTasksToCreateData,
        }
      ) => (
        {
          tasksIdsToRemove: [...previousTasksIdsToRemove, ...currentTasksIdsToRemove],
          tasksToCreateData: [...previousTasksToCreateData, ...currentTasksToCreateData],
        }
      ),
      {
        tasksIdsToRemove: [],
        tasksToCreateData: [],
      },
    );
    return [
      ...tasksIdsToRemove.map((taskId) => ({ action: "DELETE", ...taskId } as TasksCommands.Command)),
      ...tasksToCreateData.map((taskData) => ({ action: "CREATE", ...taskData } as TasksCommands.Command)),
    ];
  };

const analyzeRelatedTasks:
  (relatedTasks: GoogleAppsScript.Tasks.Schema.Task[], calendarDay: Date) => {
    lastRelatedFutureTaskDue: undefined | string,
    lastRelatedTaskDue: undefined | string,
    relatedFutureTasksCount: number,
    relatedPastCompletedTasks: GoogleAppsScript.Tasks.Schema.Task[],
  } =
  (relatedTasks, calendarDay) => {
    const relatedFutureTasks = relatedTasks.filter(
      ({ due }) =>
        (due !== undefined ? (new Date(due)).getTime() : Infinity) >= calendarDay.getTime()
    );
    const relatedFutureUncompletedTasks = relatedFutureTasks.filter(
      ({ completed }) =>
        completed === undefined
    );
    const relatedPastCompletedTasks = relatedTasks.filter(
      ({ completed, due }) =>
        completed !== undefined
        && (due !== undefined ? (new Date(due)).getTime() : Infinity) <= calendarDay.getTime()
    );
    return {
      lastRelatedFutureTaskDue: relatedFutureTasks.at(-1)?.due,
      relatedFutureTasksCount: relatedFutureUncompletedTasks.length,
      lastRelatedTaskDue: relatedTasks.at(-1)?.due,
      relatedPastCompletedTasks,
    };
  }

/**
 * A Google Apps Script trigger runs this function between
 * 02:00 and 03:00 AM. 
 */
const runEarly = () => {
  const errors: any[] = [];

  const taskListId = "@default";
  const existingTasks = TasksTasks.listAllTasks(taskListId, {
    showCompleted: true,
    showHidden: true,
  });

  const now = new Date();

  const commands = computeCommandsToRun(now, taskListId, existingTasks);

  const saveUnscheduledTasksCount = () => {
    const unscheduledTasksCount = existingTasks.filter(({ due, completed }) => due === undefined && completed === undefined).length;
    DailyLogDriveSheets.save([[now.toISOString(), unscheduledTasksCount]]);
  }

  const executeTasksCommands = () => {
    TasksCommands.executeCommands(commands);
  }

  const steps: Array<() => void> = [
    saveUnscheduledTasksCount,
    executeTasksCommands,
  ];
  for (const executeStep of steps) {
    try {
      executeStep();
    } catch (e) {
      errors.push(e);
      console.error(e);
    }
  }
  if (errors.length > 0) {
    throw errors;
  }
};

const sortExistingTasks:
  (existingTasks: GoogleAppsScript.Tasks.Schema.Task[]) => Map<string | undefined, GoogleAppsScript.Tasks.Schema.Task[]> =
  (existingTasks) => {
    const sortedExistingTasks = [...existingTasks].sort(({ due: dueA }, { due: dueB }) => (dueA ?? "").localeCompare(dueB ?? ""));
    const titleToExistingTasks = Map.groupBy(sortedExistingTasks, ({ title }) => title);
    return titleToExistingTasks;
  };



/**
 * Create a calendar day as a Date of format YYYY-MM-DDT00:00:00.000Z.
 * Indeed, due dates are represented this way in Tasks API, without timezone nor time of day data.
 * 
 * Time of day can be set and accessed through UI, but not through API.
 * 
 * A task can be moved from a list to another through UI, but not through API.
 * Instead, the task must be deleted from source list and copied in the target list.
 * In the process, time of day data is thus erased.
 * 
 * @param date 
 * @returns 
 */
const buildCalendarDay:
  (date: Date) => Date =
  (date) => {
  const calendarDay = new Date(date);
  calendarDay.setUTCFullYear(calendarDay.getFullYear());
  calendarDay.setUTCMonth(calendarDay.getMonth());
  calendarDay.setUTCDate(calendarDay.getDate());
  calendarDay.setUTCHours(0);
  calendarDay.setUTCMinutes(0);
  calendarDay.setUTCSeconds(0);
  calendarDay.setUTCMilliseconds(0);
  return calendarDay;
}

const convertLinesToGenerator:
  (lines: GeneratorsDriveSheets.Line[]) => TaskGeneration.TaskGenerator =
  (lines) => {
    const [
      startIsoDate,
      title,
      ,
      ,
      scheduledQuantity,
      retainedQuantity,
    ] = lines[0];
    const recurrences = lines.map(([
      ,
      ,
      notes,
      recurrenceJson,
    ]) => ({
      notes,
      ...(JSON.parse(recurrenceJson) as TaskGeneration.Recurrence),
    }));
    return {
      startDate: new Date(startIsoDate),
      title,
      recurrences,
      scheduledQuantity,
      retainedQuantity,
    };
  };