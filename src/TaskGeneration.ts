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

  export type TaskGenerator = {
    id: string;
    startDate: Date;
    title: string;
    taskListId?: string;
  } & Recurrence;

  const getTasks = () => {
    if (Tasks.Tasks === undefined) {
      throw new Error(`Tasks API is not available.`);
    }
    return Tasks.Tasks;
  }

  export const getTasklists = () => {
    if (Tasks.Tasks === undefined) {
      throw new Error(`Tasklists API is not available.`);
    }
    return Tasks.Tasklists;
  }

  export const getTasksGenerators = (generatorsListId: string) => {
    return (
      getTasks().list(generatorsListId, {
        showCompleted: false,
        showHidden: true,
      }).items ?? []
    ).map((task) => {
      const { title, notes, due, id } = task;
      const recurrence = JSON.parse(notes ?? "{}") as Recurrence;
      return {
        id,
        startDate: due !== undefined ? new Date(due) : new Date(),
        title,
        ...recurrence,
      };
    }) as TaskGenerator[];
  };

  export const generateTasks = (
    today: Date,
    tasksGenerators: TaskGenerator[]
  ) => {
    const defaultId = "@default";
    tasksGenerators.map(({ startDate, title, id, taskListId, ...recurrence }) => {
      if (checkRecurrence(today, startDate, recurrence)) {
        console.log(title);
        const newTask = Tasks.newTask();
        newTask.title = title;
        newTask.notes = id;
        newTask.due = today.toISOString();
        getTasks().insert(newTask, taskListId ?? defaultId);
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
    const sameDayOfFirstWeekOfMonth = dayA.startOf("month").set("day", dayA.day());
    const firstSameDayOfMonth = sameDayOfFirstWeekOfMonth.month() === dayA.month() ? sameDayOfFirstWeekOfMonth : sameDayOfFirstWeekOfMonth.add(1, "weeks");
    const monthWeekIndex = dayA.diff(firstSameDayOfMonth, "weeks");
    const monthDayIndex = dayA.date() - 1;
    const weekDayIndex = dayA.day();

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
