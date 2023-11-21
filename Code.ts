function myFunction() {
  // reviewTasksPlot();
  createBirthdayReminders();
}

function reviewTasksPlot() {
  const reviewListId = findTasksListIdByTitle("Bilans") as string;
  const reviewTasks =
    Tasks.Tasks?.list(reviewListId, { showCompleted: true, showHidden: true })
      .items ?? [];
  Logger.log(reviewTasks.length);
  for (const { title, id, completed, ...rest } of reviewTasks) {
    Logger.log(`${title} - ${id} - ${completed} - ${rest}`);
    //Tasks.Tasks?.patch({ notes: 'hello world' }, reviewListId, id as string);
  }
  for (const calendar of CalendarApp.getAllCalendars()) {
    Logger.log(`${calendar.getName()} - ${calendar.getId()}`);
  }
}

function createBirthdayReminders() {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  const end = new Date(start);
  end.setFullYear(end.getFullYear() + 1);
  end.setDate(end.getDate() + 10);

  const titleToDue = new Map<string, string>(
    CalendarApp.getCalendarById(
      "addressbook#contacts@group.v.calendar.google.com"
    )
      .getEvents(start, end)
      .map((event) => [
        event.getTitle(),
        event.getAllDayEndDate().toISOString(),
      ])
  );

  const myTasksListId = findTasksListIdByTitle("Mes tâches") as string;
  for (const task of Tasks.Tasks?.list(myTasksListId, {
    showCompleted: true,
    showHidden: true,
  }).items ?? []) {
    // Logger.log(task);
    const { title, id: birthdayTaskId } = task;
    if (
      title !== undefined &&
      birthdayTaskId !== undefined &&
      titleToDue.has(title)
    ) {
      Logger.log(task);
      Tasks.Tasks?.patch(
        { due: titleToDue.get(title) as string, status: "needsAction" },
        myTasksListId,
        birthdayTaskId
      );
      Logger.log(task);
      titleToDue.delete(title);
    }
  }
  // Google App Script does not support for of on Map (ES5)
  titleToDue.forEach((due, title) => {
    const birthdayTask = Tasks.newTask();
    birthdayTask.title = title;
    birthdayTask.due = titleToDue.get(title) as string;
    Tasks.Tasks?.insert(birthdayTask, myTasksListId);
  });
}

function moveDailyTasks() {
  const toComeId = findTasksListIdByTitle("À venir");
  const defaultId = "@default";
  const endOfToday = new Date();
  endOfToday.setUTCDate(endOfToday.getUTCDate() + 1);
  endOfToday.setUTCSeconds(endOfToday.getUTCSeconds() - 1);
  for (const task of Tasks.Tasks.list(toComeId, {
    dueMax: endOfToday.toISOString(),
    showCompleted: false,
    showHidden: true,
  }).items) {
    move(task, toComeId, defaultId);
  }
}

function move(task: GoogleAppsScript.Tasks.Schema.Task, fromId: string, toId: string) {
  Logger.log(`Moving ${JSON.stringify(task)} from ${fromId} to ${toId}.`);
  Tasks.Tasks.insert(task, toId);
  Tasks.Tasks.remove(fromId, task.id);
}

function findTasksListIdByTitle(titleToFind: string) {
  const taskLists = Tasks.Tasklists?.list().items ?? [];
  let foundId: string | undefined;
  for (const { title, id } of taskLists) {
    // Logger.log(`${title} - ${id}`);
    if (title === titleToFind) {
      foundId = id;
    }
  }
  return foundId;
}
