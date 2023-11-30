namespace BirthdayReminders {
  export const extractDataFromCalendar = () => {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const end = new Date(start);
    end.setFullYear(end.getFullYear() + 1);
    end.setDate(end.getDate() + 10);

    return new Map<string, string>(
      CalendarApp.getCalendarById(
        "addressbook#contacts@group.v.calendar.google.com"
      )
        .getEvents(start, end)
        .map((event) => [
          event.getTitle(),
          event.getAllDayEndDate().toISOString(),
        ])
    );
  };

  export const storeDataAsTasks = (titleToDue: Map<string, string>) => {
    const incomingListId = findTasksListIdByTitle("À venir") as string;
    for (const task of Tasks.Tasks?.list(incomingListId, {
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
          incomingListId,
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
      Tasks.Tasks?.insert(birthdayTask, incomingListId);
    });
  };
}