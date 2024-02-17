function myFunction() {
  // reviewTasksPlot();
  // createBirthdayReminders();
  let a = true;
  a &&= false;
  console.log(a);
}

function reviewTasksPlot() {
  const reviewListId = TasksList.findTasksListIdByTitle("Bilans") as string;
  const reviewTasks =
    Tasks.Tasks?.list(reviewListId, { showCompleted: true, showHidden: true })
      .items ?? [];
  console.log(reviewTasks.length);
  for (const { title, id, completed, ...rest } of reviewTasks) {
    console.log(`${title} - ${id} - ${completed} - ${JSON.stringify(rest)}`);
    //Tasks.Tasks?.patch({ notes: 'hello world' }, reviewListId, id as string);
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
  const toComeId = TasksList.findTasksListIdByTitle("À venir") as string;
  const defaultId = "@default";
  for (const task of DailyTasks.list(toComeId, defaultId) ?? []) {
    DailyTasks.move(task, toComeId, defaultId);
  }
};

const generateDailyTasks = () => {
  const generatorsId = TasksList.findTasksListIdByTitle(
    "Générateurs"
  ) as string;
  const defaultId = "@default";
  const today = new Date();
  const tasksGenerators = TaskGeneration.getTasksGenerators(generatorsId);
  TaskGeneration.generateTasks(today, defaultId, tasksGenerators);
};

const transferTasksGenerators = () => {
  const generatorsId = TasksList.findTasksListIdByTitle(
    "Générateurs"
  ) as string;
  const tasksGenerators = TaskGeneration.getTasksGenerators(generatorsId);
  DriveSheets.store(
    "Tasks Generators",
    tasksGenerators.map(({ id, startDate, title, ...rest }) => [
      id,
      startDate.toISOString(),
      title,
      JSON.stringify(rest),
    ])
  );
};
