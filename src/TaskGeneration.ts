namespace TaskGeneration {
  const comingDaysCount = 60;

  export type Recurrence = Partial<{
    dayInterval: number;
    weekInterval: number;
    weekDays: number[];
    monthInterval: number;
    monthDays: number[];
    monthWeeks: number[];
    yearInterval: number;
    yearDays: number[];
    /**
     * The task will be generated n days after the date matching the recurrence pattern.
     * A negative daysOffset leads to task generation before the date matching the recurrence pattern.
     * Default behavior is daysOffset 0.
     */
    daysOffset: number;
  }>;

  export type TaskGenerator = {
    id: string;
    startDate: Date;
    title: string;
    notes: string;
    taskListId: string;
    persistent: boolean;
    enabled: boolean;
    aheadQuantity: number;
  } & Recurrence;

  export type TaskData = {
    title: string;
    notes?: string;
    due: string;
    taskListId: string;
  };

  /**
   * @param taskId Task ID made by concatenating the due date and the task generator ID and stored in the task notes
   * @returns Generator ID and due date
   * @deprecated Task - generator link is no longer handled through IDs stored in notes
   */
  export const decomposeTaskId = (taskId: string) => {
    const [generatorId, isoDate] = taskId.split("_") as [string, string];
    const date = new Date(isoDate);
    return { generatorId, date };
  }

  const computeTask = (
    date: Date,
    { startDate, title, notes, taskListId, ...recurrence }: TaskGenerator
  ) => {
    return checkRecurrence(date, startDate, recurrence) ? {
      title,
      notes,
      taskListId,
      due: date.toISOString(),
    } as TaskData : null;
  };

  export const computeTasks = (
    date: Date,
    tasksGenerators: TaskGenerator[]
  ) => {
    return tasksGenerators
      .map((taskGenerator) => computeTask(date, taskGenerator))
      .filter((task) => task !== null);
  };

  export const computeTasksForDaysInRange: (firstExcludedDay: Date, daysRangeSize: number, taskGenerators: TaskGeneration.TaskGenerator[]) => TaskData[] = (firstExcludedDay, daysRangeSize, taskGenerators) => {
    const computedDailyTasks: TaskData[] = [];
    const remainingTaskGenerators = taskGenerators.map((taskGenerator) => ({ ...taskGenerator })).filter(({ aheadQuantity }) => aheadQuantity > 0);
    if (daysRangeSize <= 0 || remainingTaskGenerators.length <= 0) {
      return computedDailyTasks;
    }
    const firstIncludedDay = dayjs(firstExcludedDay).add(1, "day").toDate();
    const clonedRemainingTaskGenerators = remainingTaskGenerators.map((taskGenerator) => ({ ...taskGenerator }))

    for (const taskGenerator of clonedRemainingTaskGenerators) {
      const task = computeTask(firstIncludedDay, taskGenerator);
      if (task !== null) {
        computedDailyTasks.push(task);
        taskGenerator.aheadQuantity--;
      }
    }

    return [
      ...computedDailyTasks,
      ...TaskGeneration.computeTasksForDaysInRange(firstIncludedDay, daysRangeSize - 1, clonedRemainingTaskGenerators),
    ];
  };

  const createTask = ({ title, taskListId, due, ...options }: TaskData) => {
    try {
      const newTask = { ...Tasks.newTask(), ...options, title, due };
      TasksTasks.getTasks().insert(newTask, taskListId);
    } catch (e) {
      console.error(e);
    }
  }

  export const createTasks = (tasksData: TaskData[]) => {
    for (const taskData of tasksData) {
      createTask(taskData);
    }
  };

  const checkRecurrence = (
    today: Date,
    startDate: Date,
    recurrence: Recurrence
  ) => {
    const daysOffset = recurrence.daysOffset ?? 0;

    const dayA = dayjs(today).add(daysOffset * -1, "days");
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
