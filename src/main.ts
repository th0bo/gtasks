function myFunction() {
  const generatorsLines = GeneratorsDriveSheets.load();
  // console.log(generatorsLines);
  const generators = generatorsLines.map(convertLineToGenerator);
  const completedListId = TasksList.getListIdByListTitle("Achevées") as string;
  const toComeListId = TasksList.getListIdByListTitle("À venir") as string;
  const defaultListId = "@default";
  const daysSpan = 100;
  const taskTitleToTaskListId = new Map(generators.map(({ title, taskListId }) => [title, taskListId]));
  const sourceListsIds = [...taskTitleToTaskListId.values()];
  const enabledGenerators = generators.filter(({ enabled }) => enabled);
  const nonPersistentGeneratorsTitles = generators.filter(({ persistent }) => !persistent).map(({ title }) => title);
  const today = formatCalendarDay(new Date());
  const tasksData: TaskGeneration.TaskData[] = setUpComputeMissingFutureTasks(enabledGenerators, toComeListId, daysSpan, today)();
  console.log(tasksData);
  const tasksToRemove: ReturnType<ListTasksToRemove> = setUpListNonPersistentCompletedTasks(nonPersistentGeneratorsTitles, [defaultListId, completedListId])();
  console.log(tasksToRemove);

  setUpGenerateTasks(setUpComputeMissingFutureTasks(enabledGenerators, toComeListId, daysSpan, today))();
  // setUpRemoveTasks(setUpListNonPersistentCompletedTasks(nonPersistentGeneratorsTitles, [completedListId]))();
}

/**
 * The goal is to rename tasks with the last label of their generator, in order to switch
 * from a system where tasks have an ID stored in notes, made out of their generator's ID 
 * and their due date, to a system where generators titles are readonly and tasks are 
 * thus simply linked to their generator by their title.
 */
const renameTasks = () => {
  const idToTitle = new Map(GeneratorsDriveSheets.load().map(convertLineToGenerator).map(({ id, title }) => [id, title]));
  const tasklist = TasksList.getListIdByListTitle("Achevées") as string;
  const tasks = TasksTasks.listAllTasks(tasklist, { showCompleted: true, showHidden: true });
  for (const task of tasks) {
    const notes = task.notes;
    if (notes !== undefined && notes !== '') {
      const { generatorId } = TaskGeneration.decomposeTaskId(notes);
      const taskNewTitle = idToTitle.get(generatorId);
      if (taskNewTitle === undefined && !/_\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/.test(notes)) {
        console.error(generatorId);
      } else {
        task.title = taskNewTitle ?? task.title;
        task.notes = '';
        try {
          Tasks.Tasks?.patch(task, tasklist, task.id as string);
        } catch (e) {
          console.error(e);
        } finally {
          console.info(task);
        }
      }
    }
  }
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

/**
 * A Google Apps Script trigger runs this function between
 * 02:00 and 03:00 AM. 
 */
const runEarly = () => {
  const errors: any[] = [];
  const generators = GeneratorsDriveSheets.load().map(convertLineToGenerator);
  const completedListId = TasksList.getListIdByListTitle("Achevées") as string;
  const toComeListId = TasksList.getListIdByListTitle("À venir") as string;
  const defaultListId = "@default";
  const taskTitleToTaskListId = new Map(generators.map(({ title, taskListId }) => [title, taskListId]));
  const sourceListsIds = [...taskTitleToTaskListId.values()];
  const enabledGenerators = generators.filter(({ enabled }) => enabled);
  const today = formatCalendarDay(new Date());
  const daysSpan = 100;
  const nonPersistentGeneratorsTitles = generators.filter(({ persistent }) => !persistent).map(({ title }) => title);
  const listNonPersistentCompletedTasks = setUpListNonPersistentCompletedTasks(nonPersistentGeneratorsTitles, [defaultListId, completedListId]);
  const removeNonPersistentCompletedTasks = setUpRemoveTasks(listNonPersistentCompletedTasks);
  const moveCompleted = setUpMoveCompleted(sourceListsIds, completedListId);
  const moveDailyTasks = setUpMoveDailyTasks(taskTitleToTaskListId, toComeListId, defaultListId);
  const computeMissingDailyTasks = setUpComputeMissingDailyTasks(enabledGenerators, today);
  const generateMissingDailyTasks = setUpGenerateTasks(computeMissingDailyTasks);
  const computeMissingFutureTasks = setUpComputeMissingFutureTasks(enabledGenerators, toComeListId, daysSpan, today);
  const generateMissingFutureTasks = setUpGenerateTasks(computeMissingFutureTasks);
  const steps: Array<() => void> = [
    removeNonPersistentCompletedTasks,
    moveCompleted,
    moveDailyTasks,
    generateMissingDailyTasks,
    generateMissingFutureTasks,
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

type ListTasksToRemove = () => Array<{ listId: string, taskId: string }>; 

const setUpListNonPersistentCompletedTasks:
  (nonPersistentGeneratorsTitles: string[], taskListsIds: string[]) => ListTasksToRemove =
  (nonPersistentGeneratorsTitles, taskListsIds) => {
    const listNonPersistentCompletedTasks = (
      () => taskListsIds.map((listId) => {
        const completedTasks = TasksTasks.listAllTasks(listId, {
          showCompleted: true,
          showHidden: true,
        }).filter(({ completed }) => completed !== undefined);
        return completedTasks
          .map(
            ({ id, title }) => id !== undefined && title !== undefined && nonPersistentGeneratorsTitles.includes(title) ? { listId, taskId: id } : null
          )
          .filter((v) => v !== null);
      }).flat()
    );
    return listNonPersistentCompletedTasks;
  };

const setUpRemoveTasks:
  (listTasksToRemove: ListTasksToRemove) => (() => void) =
  (listTasksToRemove) => {
    const removeTasks = () => {
      for (const { listId, taskId } of listTasksToRemove()) {
        TasksTasks.getTasks().remove(listId, taskId);
      }
    }
    return removeTasks;
  };

const setUpMoveDailyTasks:
  (taskTitleToTaskListId: Map<string, string>, toComeListId: string, defaultListId: string) => (() => void) =
  (taskTitleToTaskListId, toComeListId, defaultListId) => {
    const moveDailyTasks = () => {
      const endOfToday = new Date();
      endOfToday.setUTCDate(endOfToday.getUTCDate() + 1);
      endOfToday.setUTCSeconds(endOfToday.getUTCSeconds() - 1);
      const tasks = TasksTasks.listAllTasks(toComeListId, {
        dueMax: endOfToday.toISOString(),
        showCompleted: false,
        showHidden: true,
      });
      for (const task of tasks) {
        const targetListId = taskTitleToTaskListId.get(task.title as string) ?? defaultListId;
        DailyTasks.move(task, toComeListId, targetListId);
      }
    };
    return moveDailyTasks;
  };

const setUpComputeMissingDailyTasks:
  (enabledTasksGenerators: TaskGeneration.TaskGenerator[], today: Date) => (() => TaskGeneration.TaskData[]) =
  (enabledTasksGenerators, today) => {
    const computeMissingDailyTasks = () => {    
      const taskListsIds = [...new Set(enabledTasksGenerators.map(({ taskListId }) => taskListId))];
      const taskListIdToExistingTasksTitles = new Map(taskListsIds.map((taskListId) => {
        const existingTasks = TasksTasks.listAllTasks(taskListId, {
          showCompleted: true,
          showHidden: true,
        });
        return [taskListId, new Set(existingTasks.map(({ title }) => title))];
      }));
    
      const enabledNeededTasksGenerators = enabledTasksGenerators.filter(
        ({ taskListId, title }) => !(taskListIdToExistingTasksTitles.get(
          taskListId) as Set<string>
        ).has(title)
      );
    
      const tasksData = TaskGeneration.computeTasks(today, enabledNeededTasksGenerators);
      return tasksData;
    };
    return computeMissingDailyTasks;
  };

const setUpGenerateTasks:
  (computeTasks: () => TaskGeneration.TaskData[]) => (() => void) =
  (computeTasks) => {
    return () => {
      for (const taskData of computeTasks()) {
        const { newTask, taskListId } = buildTask(taskData);
        TasksTasks.getTasks().insert(newTask, taskListId);
      }
    };
  };

const setUpComputeMissingFutureTasks:
  (enabledTasksGenerators: TaskGeneration.TaskGenerator[], toComeListId: string, daysSpan: number, today: Date) => (() => TaskGeneration.TaskData[]) =
  (enabledTasksGenerators, toComeListId, daysSpan, today) => {
    const computeMissingFutureTasks = () => {
      const existingFutureTasks = TasksTasks.listAllTasks(toComeListId, { showCompleted: true, showHidden: true }).filter(({ title }) => title !== undefined) as
        Array<GoogleAppsScript.Tasks.Schema.Task & Pick<Required<GoogleAppsScript.Tasks.Schema.Task>, 'title'>>;

      const taskTitleToCount: Map<string, number> = new Map();
      for (const { title } of existingFutureTasks) {
        const count = (taskTitleToCount.get(title) ?? 0) + 1;
        taskTitleToCount.set(title, count);
      }

      enabledTasksGenerators = enabledTasksGenerators.map(
        ({ title, aheadQuantity, ...rest }) => ({ title, aheadQuantity: aheadQuantity - (taskTitleToCount.get(title) ?? 0), ...rest })
      );

      const computedFutureTasks: TaskGeneration.TaskData[] = TaskGeneration.computeTasksForDaysInRange(today, daysSpan, enabledTasksGenerators)
        .map((computedTask) => ({ ...computedTask, taskListId: toComeListId }));
    
      const futureTasksToCreate = filterExistingTasksFromComputedTasks(existingFutureTasks, computedFutureTasks);
    
      return futureTasksToCreate;
    };
    return computeMissingFutureTasks;
  };

const setUpMoveCompleted:
  (sourceListsIds: string[], completedListId: string) => (() => void) = 
  (sourceListsIds, completedListId) => {
  const moveCompleted = () => {
    const options = {
      showCompleted: true,
      showHidden: true,
    };
    for (const sourceListId of sourceListsIds) {
      const completedTasks = TasksTasks.listAllTasks(sourceListId, options).filter(({ completed }) => completed);
      for (const completedTask of completedTasks) {
        DailyTasks.move(completedTask, sourceListId, completedListId);
      }
    }
  };
  return moveCompleted;
};

const convertLineToGenerator:
  (line: GeneratorsDriveSheets.Line) => TaskGeneration.TaskGenerator =
  ([
    id,
    startIsoDate,
    title,
    notes,
    recurrenceJson,
    taskListId,
    persistent,
    enabled,
    aheadQuantity,
  ]) => ({ 
    id,
    startDate: new Date(startIsoDate),
    title,
    notes,
    taskListId,
    ...(JSON.parse(recurrenceJson) as TaskGeneration.Recurrence),
    persistent,
    enabled,
    aheadQuantity,
  });

const filterExistingTasksFromComputedTasks:
  (existingTasks: GoogleAppsScript.Tasks.Schema.Task[], computedTasks: TaskGeneration.TaskData[]) => TaskGeneration.TaskData[] =
  (existingTasks, computedTasks) => {
    const makeId = (({ due, title }: { due: string, title: string }) => `${title}|${due.substring(0, 10)}`);
    const existingTasksIds = new Set(existingTasks.map(makeId));
    return computedTasks.filter((computedTask) => !existingTasksIds.has(makeId(computedTask)));
  };

const buildTask:
  (taskData: TaskGeneration.TaskData) => { newTask: GoogleAppsScript.Tasks.Schema.Task, taskListId: string } =
  ({ taskListId, ...rest }) => {
    const newTask = Object.assign(Tasks.newTask(), rest);
    return { newTask, taskListId };
  };