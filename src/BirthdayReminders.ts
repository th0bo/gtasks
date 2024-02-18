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
    const incomingListId = TasksList.findTasksListIdByTitle("À venir") as string;
    for (const task of TasksTasks.getTasks().list(incomingListId, {
      showCompleted: true,
      showHidden: true,
    }).items ?? []) {
      // console.log(task);
      const { title, id: birthdayTaskId } = task;
      if (
        title !== undefined &&
        birthdayTaskId !== undefined &&
        titleToDue.has(title)
      ) {
        console.log(task);
        TasksTasks.getTasks().patch(
          { due: titleToDue.get(title) as string, status: "needsAction" },
          incomingListId,
          birthdayTaskId
        );
        console.log(task);
        titleToDue.delete(title);
      }
    }
    
    for (const [title, due] of titleToDue) {
      const birthdayTask = Tasks.newTask();
      birthdayTask.title = title;
      birthdayTask.due = due;
      TasksTasks.getTasks().insert(birthdayTask, incomingListId);
    }
  };
}