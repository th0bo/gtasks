namespace TaskGeneration {
  export type Recurrence = Partial<{
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
    taskListId: string;
    persistent: boolean;
    enabled: boolean;
  } & Recurrence;

  type TaskData = {
    title: string;
    notes?: string;
    due: string;
    taskListId: string;
  };

  export const composeTaskId = ({ generatorId, date }: { generatorId: string, date: Date }) => [generatorId, date.toISOString()].join("_");
  export const decomposeTaskId = (taskId: string) => {
    const [generatorId, isoDate] = taskId.split("_") as [string, string];
    const date = new Date(isoDate);
    return { generatorId, date };
  }
  export const isTaskChild = (taskId: string, generatorId: string) => TaskGeneration.decomposeTaskId(taskId).generatorId === generatorId;

  export const generateTasks = (
    date: Date,
    tasksGenerators: TaskGenerator[]
  ) => {
    return tasksGenerators
      .filter(({ startDate, ...recurrence }) =>
        checkRecurrence(date, startDate, recurrence)
      )
      .map(
        ({ title, id: generatorId, taskListId }) =>
        ({
          title,
          taskListId,
          due: date.toISOString(),
        } as TaskData)
      );
  };

  export const createTasks = (tasksData: TaskData[]) => {
    for (const { title, taskListId, due, ...options } of tasksData) {
      try {
        const newTask = { ...Tasks.newTask(), ...options, title, due };
        TasksTasks.getTasks().insert(newTask, taskListId);
      } catch (e) {
        console.error(e);
      }
    }
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
    const sameDayOfFirstWeekOfMonth = dayA
      .startOf("month")
      .set("day", dayA.day());
    const firstSameDayOfMonth =
      sameDayOfFirstWeekOfMonth.month() === dayA.month()
        ? sameDayOfFirstWeekOfMonth
        : sameDayOfFirstWeekOfMonth.add(1, "weeks");
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
