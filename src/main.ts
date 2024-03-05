function myFunction() {
  // reviewTasksPlot();
  // createBirthdayReminders();
  console.log(GeneratorsDriveSheets.load());
}

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

const generateDailyTasks = () => {
  const today = new Date();
  const tasksGenerators = GeneratorsDriveSheets.load().map(
    ([id, startIsoDate, title, recurrenceJson, taskListId]) => ({
      id,
      startDate: new Date(startIsoDate),
      title,
      taskListId,
      ...JSON.parse(recurrenceJson),
    })
  );
  console.log(tasksGenerators);
  const tasksData = TaskGeneration.generateTasks(today, tasksGenerators);
  console.log(tasksData);
  TaskGeneration.createTasks(tasksData);
};

const transferTasksGenerators = () => {
  const generatorsId = TasksList.getListIdByListTitle(
    "Générateurs"
  ) as string;
  const tasksGenerators = TaskGeneration.getTasksGenerators(generatorsId);
  GeneratorsDriveSheets.save(tasksGenerators.map(({ id, startDate, title, ...rest }) => [
    id,
    startDate.toISOString(),
    title,
    JSON.stringify(rest),
    "",
  ]));
};

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
