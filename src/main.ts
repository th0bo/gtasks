function myFunction() {
  console.log(setUpRun(DayGs.dayjs(new Date()).add(1, "days").toDate()));
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

type TaskIds = {
  id: string;
  listId: string;
}

type RunSetUp = {
  tasksIdsToRemove: TaskIds[];
  tasksToCreateData: TaskGeneration.TaskData[];
};

const setUpRun:
  (date: Date) => RunSetUp =
  (date) => {
    const today = formatCalendarDay(date);
    const generators = [
      ...Object.values(
        Object.groupBy(
          GeneratorsDriveSheets.load(),
          (
            [
              ,
              title,
            ]
          ) => title
        )
      )
    ].map(convertLinesToGenerator);
    const taskListId = "@default";
    const existingTasks = TasksTasks.listAllTasks(taskListId, {
      showCompleted: true,
      showHidden: true,
    });
    const sortedExistingTasks = sortExistingTasks(existingTasks);
    return generators.map((generator) => {
      const {
        title,
        scheduledQuantity,
        retainedQuantity,
      } = generator;
      const relatedTasks = (sortedExistingTasks.get(title) ?? []).filter(({ due }) => due !== undefined);
      const relatedFutureTasks = relatedTasks.filter(
        ({ due }) =>
          (due !== undefined ? (new Date(due)).getTime() : Infinity) >= today.getTime()
      );
      const relatedFutureUncompletedTasks = relatedFutureTasks.filter(
        ({ completed }) =>
          completed === undefined
      );
      const relatedPastCompletedTasks = relatedTasks.filter(
        ({ completed, due }) =>
          completed !== undefined
          && (due !== undefined ? (new Date(due)).getTime() : Infinity) <= today.getTime()
      );
      const tasksToRemove = retainedQuantity > 0 ? relatedPastCompletedTasks.slice(0, -1 * retainedQuantity) : relatedPastCompletedTasks;
      const tasksIdsToRemove = tasksToRemove.map(({ id }) => ({ id, listId: taskListId })) as TaskIds[];
      const yesterday = DayGs.dayjs(today).add(-1, "days").toDate();
      const firstExcludedDay = new Date(relatedFutureTasks.at(-1)?.due ?? yesterday);
      const tasksToCreateCount = Math.max(scheduledQuantity - relatedFutureUncompletedTasks.length, 0);
      const daysSpan = 2000;
      const tasksToCreateData = TaskGeneration.computeTasksForDaysInRange(firstExcludedDay, daysSpan, tasksToCreateCount, generator, "@default");
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
  };

/**
 * A Google Apps Script trigger runs this function between
 * 02:00 and 03:00 AM. 
 */
const runEarly = () => {
  const errors: any[] = [];
  const runSetUp = setUpRun(new Date());

  const removeTasks = () => {
    for (const { id: taskId, listId } of runSetUp.tasksIdsToRemove) {
      TasksTasks.getTasks().remove(listId, taskId);
    }
  }
  const createTasks = () => {
    for (const taskData of runSetUp.tasksToCreateData) {
      const { newTask, taskListId } = buildTask(taskData);
      TasksTasks.getTasks().insert(newTask, taskListId);
    }
  }
  const steps: Array<() => void> = [
    removeTasks,
    createTasks,
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
 * Create a calendar date as a Date of format YYYY-MM-DDT00:00:00.000Z.
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
const formatCalendarDay:
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

const buildTask:
  (taskData: TaskGeneration.TaskData) => { newTask: GoogleAppsScript.Tasks.Schema.Task, taskListId: string } =
  ({ taskListId, ...rest }) => {
    const newTask = Object.assign(Tasks.newTask(), rest);
    return { newTask, taskListId };
  };