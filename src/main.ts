function myFunction() {
  // reviewTasksPlot();
  // createBirthdayReminders();
  // console.log(GeneratorsDriveSheets.load());
  testEmojis();
}

/**
 * The goal is to rename tasks with the last label of their generator, in order to switch
 * from a system where tasks have an ID stored in notes, made out of their generator's ID 
 * and their due date, to a system where generators titles are readonly and tasks are 
 * thus simply linked to their generator by their title.
 */
const renameTasks = () => {
  const idToTitle = new Map(GeneratorsDriveSheets.load().map(([id, , title, , ]) => [id, title]));
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
    generateDailyTasks,
    generateTomorrowDefaultTasks,
    moveDailyTasks,
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

  const nonPersistentGeneratorsIds: string[] = GeneratorsDriveSheets.load().filter(
    ([, , , , , persistent]) => !persistent
  ).map(
    ([id]) => id
  );
  for (const { id, notes } of completedTasks) {
    const generatorId = (notes !== undefined ? TaskGeneration.decomposeTaskId(notes) : undefined)?.generatorId;
    if (id !== undefined && generatorId !== undefined && nonPersistentGeneratorsIds.includes(generatorId)) {
      TasksTasks.getTasks().remove(listId, id);
    }
  }
}

const generateDailyTasks = () => {
  const defaultId = "@default";
  const today = new Date();
  const tasksGenerators: TaskGeneration.TaskGenerator[] = GeneratorsDriveSheets.load().map(
    ([id, startIsoDate, title, recurrenceJson, taskListId, persistent]) => ({
      id,
      startDate: new Date(startIsoDate),
      title,
      taskListId,
      ...JSON.parse(recurrenceJson),
      persistent,
    })
  ).filter(
    ({ taskListId }) => taskListId !== defaultId
  );
  console.log(tasksGenerators);
  const tasksData = TaskGeneration.generateTasks(today, tasksGenerators);
  console.log(tasksData);
  TaskGeneration.createTasks(tasksData);
};

const generateDefaultTasks = (date: Date) => {
  const toComeId = TasksList.getListIdByListTitle("À venir") as string;
  const defaultId = "@default";
  const tasksGenerators: TaskGeneration.TaskGenerator[] = GeneratorsDriveSheets.load().map(
    ([id, startIsoDate, title, recurrenceJson, taskListId]) => ({
      id,
      startDate: new Date(startIsoDate),
      title,
      taskListId,
      ...(JSON.parse(recurrenceJson) as TaskGeneration.Recurrence),
    }) as TaskGeneration.TaskGenerator
  ).filter(
    ({ taskListId }) => taskListId === defaultId
  ).map(
    ({ taskListId, ...rest }) => ({ ...rest, taskListId: toComeId })
  );
  console.log(tasksGenerators);
  const tasksData = TaskGeneration.generateTasks(date, tasksGenerators);
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
