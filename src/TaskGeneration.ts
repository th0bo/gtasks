namespace TaskGeneration {
  type Recurrence = Partial<{
    dayInterval: number;
    weekInterval: number;
    weekDays: number[];
    monthInterval: number;
    monthDays: number[];
    monthWeeks: number[];
    yearInterval: number;
    yearDays: number[];
  }>;

  interface TaskGenerator {
    startDate: Date;
    recurrence: Recurrence;
    task: Pick<GoogleAppsScript.Tasks.Schema.Task, "title" | "notes">;
  }

  const tasksGenerators: TaskGenerator[] = [
    {
      startDate: new Date("2024-02-09"),
      recurrence: {},
      task: {
        title: "Arroser les plantes",
        notes: "3 pchits",
      },
    },
    {
      startDate: new Date("2024-01-08"),
      recurrence: {
        weekDays: [0, 1, 4],
      },
      task: {
        title: "Sortir le verre",
      },
    },
  ];

  export const generateTasks = (today: Date, defaultId: string) => {
    tasksGenerators.map(({ startDate, recurrence, task }) => {
      // Logger.log(startDate);
      if (checkRecurrence(today, startDate, recurrence)) {
        Logger.log(task.title);
        const newTask = Tasks.newTask();
        newTask.title = task.title;
        newTask.notes = task.notes;
        newTask.due = today.toISOString();
        Tasks.Tasks.insert(newTask, defaultId);
      }
    });
  };

  const checkRecurrence = (
    today: Date,
    startDate: Date,
    recurrence: Recurrence
  ) => {
    const dayA = dayjs(today);
    const dayB = dayjs(startDate);

    const dayInterval = recurrence.dayInterval ?? 1;
    const weekInterval = recurrence.weekInterval ?? 1;
    const monthInterval = recurrence.monthInterval ?? 1;
    const yearInterval = recurrence.yearInterval ?? 1;
    const monthDays =
      recurrence.monthDays ?? Array.from({ length: 31 }).map((_v, key) => key);
    const weekDays =
      recurrence.weekDays ?? Array.from({ length: 7 }).map((_v, key) => key);
    const yearDays =
      recurrence.yearDays ?? Array.from({ length: 366 }).map((_v, key) => key);
    const monthWeeks =
      recurrence.monthWeeks ?? Array.from({ length: 6 }).map((_v, key) => key);

    const yearDayIndex = dayA.diff(dayA.startOf("year"), "days");
    const monthWeekIndex = dayA.diff(dayA.startOf("month"), "weeks");
    const monthDayIndex = dayA.date() - 1;
    const weekDayIndex = dayA.day() - 1;

    return (
      dayA.diff(dayB, "days") % dayInterval === 0 &&
      dayA.diff(dayB, "weeks") % weekInterval === 0 &&
      dayA.diff(dayB, "months") % monthInterval === 0 &&
      dayA.diff(dayB, "years") % yearInterval === 0 &&
      (monthDays.includes(monthDayIndex) ||
        monthDays.includes(monthDayIndex * -1)) &&
      (weekDays.includes(weekDayIndex) ||
        weekDays.includes(weekDayIndex * -1)) &&
      (yearDays.includes(yearDayIndex) ||
        yearDays.includes(yearDayIndex * -1)) &&
      (monthWeeks.includes(monthWeekIndex) ||
        monthWeeks.includes(monthWeekIndex * -1))
    );
  };
}
