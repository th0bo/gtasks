namespace TaskGeneration {
  enum RecurrenceType {
    DAILY,
    WEEKLY,
    MONTHLY,
    YEARLY,
  }
  type Recurrence = {
    type: RecurrenceType;
  } & (
    | {
        type: RecurrenceType.DAILY;
        dayInterval: number;
      }
    | {
        type: RecurrenceType.WEEKLY;
        weekInterval: number;
        weekDays: number[];
      }
    | ({
        type: RecurrenceType.MONTHLY;
        monthInterval: number;
      } & (
        | {
            monthDays: number[];
          }
        | {
            monthWeeks: number[];
            weekDays: number[];
          }
      ))
    | {
        type: RecurrenceType.YEARLY;
        yearInterval: number;
        yearDays: number[];
      }
  );
  type TaskGenerator = {
    startDate: Date;
    recurrence: Recurrence;
    task: Pick<GoogleAppsScript.Tasks.Schema.Task, "title" | "notes">;
  };
  const tasksGenerators: TaskGenerator[] = [
    {
      startDate: new Date("2024-02-09"),
      recurrence: {
        type: RecurrenceType.DAILY,
        dayInterval: 1,
      },
      task: {
        title: "Arroser les plantes",
        notes: "3 pchits",
      },
    },
    {
      startDate: new Date("2024-01-08"),
      recurrence: {
        type: RecurrenceType.WEEKLY,
        weekInterval: 1,
        weekDays: [0, 1, 4]
      },
      task: {
        title: "Sortir le verre",
      },
    },
  ];

  export const generateTasks = (today: Date, defaultId: string) => {
    tasksGenerators.map(({ startDate, recurrence, task }) => {
      if (checkRecurrence(today, startDate, recurrence)) {
        Logger.log(task.title);
        const newTask = Tasks.newTask();
        newTask.title = task.title;
        newTask.notes = task.notes;
        newTask.due = today.toISOString();
        Tasks.Tasks.insert(newTask, defaultId);
      }
    })
  };

  const checkRecurrence = (
    today: Date,
    startDate: Date,
    recurrence: Recurrence
  ) => {
    const dayA = dayjs(today);
    const dayB = dayjs(startDate);

    if ("dayInterval" in recurrence) {
      return dayA.diff(dayB, "days") % recurrence.dayInterval === 0;
    }
    if ("weekInterval" in recurrence) {
      return (
        recurrence.weekDays.includes(dayA.day()) &&
        dayA.diff(dayB, "weeks") % recurrence.weekInterval === 0
      );
    }
    if ("monthInterval" in recurrence) {
      const isRightMonth =
        dayA.diff(dayB, "months") % recurrence.monthInterval === 0;
      if ("monthDays" in recurrence) {
        return (
          isRightMonth &&
          (recurrence.monthDays.includes(dayA.date()) ||
            recurrence.monthDays.includes(dayA.date() - dayA.daysInMonth()))
        );
      } else {
        const weekMonthIndex = dayA.diff(dayA.startOf("month"), "weeks");
        return (
          isRightMonth &&
          recurrence.weekDays.includes(dayA.day()) &&
          (recurrence.monthWeeks.includes(weekMonthIndex) ||
            recurrence.monthWeeks.includes(weekMonthIndex * -1))
        );
      }
    }
    if ("yearInterval" in recurrence) {
      const dayYearIndex = dayA.diff(dayA.startOf("year"), "dates");
      return (
        dayA.diff(dayB, "year") % recurrence.yearInterval === 0 &&
        (recurrence.yearDays.includes(dayYearIndex) ||
          recurrence.yearDays.includes(dayYearIndex * -1))
      );
    }
    recurrence;
  };
}
