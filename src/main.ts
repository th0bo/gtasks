function myFunction() {
  const generatorsLines = GeneratorsDriveSheets.load();
  // console.log(generatorsLines);
  const generators = generatorsLines.map(convertLineToGenerator);
  const defaultListId = "@default";
  const daysSpan = 100;
  const enabledGenerators = generators.filter(({ enabled }) => enabled);
  const today = formatCalendarDay(new Date());
  const computeMissingTasks = setUpComputeMissingTasks(enabledGenerators, defaultListId, daysSpan, today);
  console.log(computeMissingTasks());
  // setUpGenerateTasks(computeMissingTasks)();
  const listNonPersistentCompletedTasks = setUpListNonPersistentCompletedTasks(generators.filter(({ persistent }) => !persistent).map(({ title }) => title), defaultListId);
  console.log(listNonPersistentCompletedTasks());
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
  const defaultListId = "@default";
  const enabledGenerators = generators.filter(({ enabled }) => enabled);
  const today = formatCalendarDay(new Date());
  const daysSpan = 100;
  const nonPersistentGeneratorsTitles = generators.filter(({ persistent }) => !persistent).map(({ title }) => title);
  const listNonPersistentCompletedTasks = setUpListNonPersistentCompletedTasks(nonPersistentGeneratorsTitles, defaultListId);
  const removeNonPersistentCompletedTasks = setUpRemoveTasks(listNonPersistentCompletedTasks);
  const computeMissingTasks = setUpComputeMissingTasks(enabledGenerators, defaultListId, daysSpan, today);
  const generateMissingTasks = setUpGenerateTasks(computeMissingTasks);
  const steps: Array<() => void> = [
    removeNonPersistentCompletedTasks,
    generateMissingTasks,
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

type ListTasksToRemove = () => Array<{ taskListId: string, taskId: string }>; 

const setUpListNonPersistentCompletedTasks:
  (nonPersistentGeneratorsTitles: string[], taskListId: string) => ListTasksToRemove =
  (nonPersistentGeneratorsTitles, taskListId) => {
    const listNonPersistentCompletedTasks: ListTasksToRemove = () => {
      const completedTasks = TasksTasks.listAllTasks(taskListId, {
        showCompleted: true,
        showHidden: true,
      }).filter(({ completed }) => completed !== undefined);
      return completedTasks
        .map(
          ({ id, title }) => id !== undefined && title !== undefined && nonPersistentGeneratorsTitles.includes(title) ? { taskListId, taskId: id } : null
        )
        .filter((v) => v !== null);
    };
    return listNonPersistentCompletedTasks;
  };

const setUpRemoveTasks:
  (listTasksToRemove: ListTasksToRemove) => (() => void) =
  (listTasksToRemove) => {
    const removeTasks = () => {
      for (const { taskListId, taskId } of listTasksToRemove()) {
        TasksTasks.getTasks().remove(taskListId, taskId);
      }
    }
    return removeTasks;
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

const setUpComputeMissingTasks:
  (enabledTasksGenerators: TaskGeneration.TaskGenerator[], taskListId: string, daysSpan: number, today: Date) => (() => TaskGeneration.TaskData[]) =
  (enabledTasksGenerators, taskListId, daysSpan, today) => {
    const computeMissingFutureTasks = () => {
      const existingTasks = TasksTasks.listAllTasks(taskListId, { showCompleted: true, showHidden: true }).filter(({ title }) => title !== undefined) as
        Array<GoogleAppsScript.Tasks.Schema.Task & Pick<Required<GoogleAppsScript.Tasks.Schema.Task>, 'title'>>;

      const taskTitleToCount: Map<string, number> = new Map();
      for (const { title } of existingTasks) {
        const count = (taskTitleToCount.get(title) ?? 0) + 1;
        taskTitleToCount.set(title, count);
      }

      enabledTasksGenerators = enabledTasksGenerators.map(
        ({ title, aheadQuantity, ...rest }) => ({ title, aheadQuantity: aheadQuantity - (taskTitleToCount.get(title) ?? 0), ...rest })
      );

      const computedDailyTasks = TaskGeneration.computeTasks(today, enabledTasksGenerators, taskListId);
      const dailyTasksToCreate = filterExistingTasksFromComputedTasks(existingTasks, computedDailyTasks);
      const computedFutureTasks: TaskGeneration.TaskData[] = TaskGeneration.computeTasksForDaysInRange(today, daysSpan, enabledTasksGenerators, taskListId);
      const futureTasksToCreate = filterExistingTasksFromComputedTasks(existingTasks, computedFutureTasks);
    
      return [...dailyTasksToCreate, ...futureTasksToCreate];
    };
    return computeMissingFutureTasks;
  };

const convertLineToGenerator:
  (line: GeneratorsDriveSheets.Line) => TaskGeneration.TaskGenerator =
  ([
    startIsoDate,
    title,
    notes,
    recurrenceJson,
    persistent,
    enabled,
    aheadQuantity,
  ]) => ({
    startDate: new Date(startIsoDate),
    title,
    notes,
    ...(JSON.parse(recurrenceJson) as TaskGeneration.Recurrence),
    persistent,
    enabled,
    aheadQuantity,
  });

const filterExistingTasksFromComputedTasks:
  (existingTasks: GoogleAppsScript.Tasks.Schema.Task[], computedTasks: TaskGeneration.TaskData[]) => TaskGeneration.TaskData[] =
  (existingTasks, computedTasks) => {
    const makeId = (({ due, title }: { due: string, title: string }) => `${title}|${due.substring(0, 10)}`);
    const existingTasksIds = new Set(existingTasks.filter(({ due, title }) => due !== undefined && title !== undefined).map(makeId));
    return computedTasks.filter((computedTask) => !existingTasksIds.has(makeId(computedTask)));
  };

const buildTask:
  (taskData: TaskGeneration.TaskData) => { newTask: GoogleAppsScript.Tasks.Schema.Task, taskListId: string } =
  ({ taskListId, ...rest }) => {
    const newTask = Object.assign(Tasks.newTask(), rest);
    return { newTask, taskListId };
  };