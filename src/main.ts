function myFunction() {
  // reviewTasksPlot();
  // createBirthdayReminders();
  // console.log(GeneratorsDriveSheets.load());
  // testEmojis();
  // const tasksData = computeDefaultTasks(new Date('2024-10-14'));
  // console.log(tasksData);
  console.log(generateMissingFutureTasks());
  // const lines = GeneratorsDriveSheets.load();
  // console.log(lines);
}

const listExistingTasks = (tasklists: string[]) => {
  const tasks = tasklists.map((tasklist) => TasksTasks.listAllTasks(tasklist, { showCompleted: true, showHidden: true })).flat();
  return tasks;
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
  for (const executeStep of [
    moveCompleted,
    moveDailyTasks,
    generateMissingDailyTasks,
    generateMissingFutureTasks,
  ]) {
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

function reviewTasksPlot() {
  const reviewListId = TasksList.getListIdByListTitle("Bilans") as string;
  const reviewTasks =
    TasksTasks.getTasks().list(reviewListId, {
      showCompleted: true,
      showHidden: true,
    }).items ?? [];
  console.log(reviewTasks.length);
  for (const { title, id, completed, ...rest } of reviewTasks) {
    console.log(`${title} - ${id} - ${completed} - ${JSON.stringify(rest)}`);
    // TasksTasks.getTasks().patch({ notes: 'hello world' }, reviewListId, id as string);
  }
  for (const calendar of CalendarApp.getAllCalendars()) {
    console.log(`${calendar.getName()} - ${calendar.getId()}`);
  }
}

const createBirthdayReminders = () => {
  const titleToDue = BirthdayReminders.extractDataFromCalendar();
  BirthdayReminders.storeDataAsTasks(titleToDue);
};

const moveDailyTasks = () => {
  const toComeId = TasksList.getListIdByListTitle("À venir") as string;
  const defaultId = "@default";
  for (const task of DailyTasks.list(toComeId) ?? []) {
    DailyTasks.move(task, toComeId, defaultId);
  }
};

const removeNonPersistentCompletedTasks = () => {
  const listId = TasksList.getListIdByListTitle("Achevées") as string;
  const completedTasks = TasksTasks.listAllTasks(listId, {
    showCompleted: true,
    showHidden: true,
  });

  const nonPersistentGeneratorsTitles: string[] = GeneratorsDriveSheets.load().map(convertLineToGenerator).filter(
    ({ persistent }) => !persistent
  ).map(
    ({ title }) => title
  );
  for (const { id, title } of completedTasks) {
    if (id !== undefined && title !== undefined && nonPersistentGeneratorsTitles.includes(title)) {
      TasksTasks.getTasks().remove(listId, id);
    }
  }
}

const generateMissingDailyTasks = () => {
  const today = new Date();
  const enabledTasksGenerators: TaskGeneration.TaskGenerator[] = GeneratorsDriveSheets.load().map(convertLineToGenerator).filter(
    ({ enabled }) => enabled
  );

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
  TaskGeneration.createTasks(tasksData);
};

const generateMissingFutureTasks = () => {
  const futureTasksToCreate = computeMissingFutureTasks();
  TaskGeneration.createTasks(futureTasksToCreate);
}

const computeMissingFutureTasks = () => {
  const today = new Date();
  const toComeId = TasksList.getListIdByListTitle("À venir") as string;

  const enabledTasksGenerators: TaskGeneration.TaskGenerator[] = GeneratorsDriveSheets.load().map(convertLineToGenerator).filter(
    ({ enabled }) => enabled
  );

  const computedFutureTasks: TaskGeneration.TaskData[] = TaskGeneration.computeTasksForDaysInRange(today, 100, enabledTasksGenerators)
    .map((computedTask) => ({ ...computedTask, taskListId: toComeId }));

  const existingFutureTasks = TasksTasks.listAllTasks(toComeId, { showCompleted: true, showHidden: true });

  const futureTasksToCreate = diffTasks(existingFutureTasks, computedFutureTasks);

  return futureTasksToCreate;
}

const diffTasks = (existingTasks: GoogleAppsScript.Tasks.Schema.Task[], computedTasks: TaskGeneration.TaskData[]) => {
  const makeId = (({ due, title }: { due: string, title: string }) => `${title}|${due.substring(0, 10)}`);
  const existingTasksIds = new Set(existingTasks.map(makeId));
  return computedTasks.filter((computedTask) => !existingTasksIds.has(makeId(computedTask)));
}

const convertLineToGenerator: (line: GeneratorsDriveSheets.Line) => TaskGeneration.TaskGenerator = ([
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

const computeDefaultTasks = (date: Date) => {
  const toComeId = TasksList.getListIdByListTitle("À venir") as string;
  const defaultId = "@default";
  const tasksGenerators: TaskGeneration.TaskGenerator[] = GeneratorsDriveSheets.load().map(convertLineToGenerator).filter(
    ({ taskListId, enabled }) => taskListId === defaultId && enabled
  ).map(
    ({ taskListId, ...rest }) => ({ ...rest, taskListId: toComeId })
  );
  console.log(tasksGenerators);
  return TaskGeneration.computeTasks(date, tasksGenerators);
}

const generateDefaultTasks = (date: Date) => {
  const tasksData = computeDefaultTasks(date);
  console.log(tasksData);
  TaskGeneration.createTasks(tasksData);
}

const generateTomorrowDefaultTasks = () => {
  const tomorrow = dayjs(new Date()).add(1, "day").toDate();
  generateDefaultTasks(tomorrow);
};

const generateNthDayDefaultTasks = () => {
  const scriptProperties = PropertiesService.getScriptProperties();
  const offset = scriptProperties.getProperty("nthDay") as string;
  const date = dayjs(new Date()).add(Number(offset), "day").toDate();
  generateDefaultTasks(date);
}

const moveCompleted = () => {
  const defaultListId = "@default";
  const reviewListId = TasksList.getListIdByListTitle("Bilans") as string;
  const completedListId = TasksList.getListIdByListTitle(
    "Achevées"
  ) as string;
  (
    TasksTasks.getTasks().list(defaultListId, {
      showCompleted: true,
      showHidden: true,
    }).items ?? []
  )
    .filter(({ completed }) => completed)
    .map((task) => {
      DailyTasks.move(task, defaultListId, completedListId);
    });
  (
    TasksTasks.getTasks().list(reviewListId, {
      showCompleted: true,
      showHidden: true,
    }).items ?? []
  )
    .filter(({ completed }) => completed)
    .map((task) => {
      DailyTasks.move(task, reviewListId, completedListId);
    });
};
