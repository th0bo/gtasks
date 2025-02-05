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
    /**
     * The task will be generated n days after the date matching the recurrence pattern.
     * A negative daysOffset leads to task generation before the date matching the recurrence pattern.
     * Default behavior is daysOffset 0.
     */
    daysOffset: number;
  }>;

  export type TaskGenerator = {
    startDate: Date;
    title: string;
    scheduledQuantity: number;
    retainedQuantity: number;
    recurrences: Array<{ notes: string } & Recurrence>;
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
    { startDate, title, recurrences }: TaskGenerator,
    lastRelatedPastCompletedTaskDue: undefined | string,
    listId: string,
  ) => {
    for (const { notes, ...recurrence } of recurrences) {
      if (checkRecurrence(date, lastRelatedPastCompletedTaskDue !== undefined ? new Date(lastRelatedPastCompletedTaskDue) : startDate, recurrence)) {
        return {
          title, 
          notes,
          due: date.toISOString(),
          listId,
        };
      }
    }
    return null;
  };

  export const computeTasks = (
    date: Date,
    tasksGenerators: TaskGenerator[],
    lastRelatedPastCompletedTaskDue: undefined | string,
    taskListId: string,
  ) => {
    return tasksGenerators
      .map((taskGenerator) => computeTask(date, taskGenerator, lastRelatedPastCompletedTaskDue, taskListId))
      .filter((task) => task !== null);
  };

  export const computeTasksForDaysInRange:
    (
      firstExcludedDay: Date,
      daysRangeSize: number,
      tasksCount: number,
      taskGenerator: TaskGeneration.TaskGenerator,
      lastRelatedPastCompletedTaskDue: string | undefined,
      taskListId: string,
    ) => TasksCommands.TaskData[] =
    (firstExcludedDay, daysRangeSize, tasksCount, taskGenerator, lastRelatedPastCompletedTaskDue, listId) => {
    const computedDailyTasks: TasksCommands.TaskData[] = [];
    if (daysRangeSize <= 0 || tasksCount <= 0) {
      return computedDailyTasks;
    }
    const firstIncludedDay = dayjs(firstExcludedDay).add(1, "day").toDate();
    const computedTask = computeTask(firstIncludedDay, taskGenerator, lastRelatedPastCompletedTaskDue, listId);
    const computedTasks =  computedTask ? [computedTask] : [];

    return [
      ...computedTasks,
      ...TaskGeneration.computeTasksForDaysInRange(
        firstIncludedDay,
        daysRangeSize - 1,
        tasksCount - computedTasks.length,
        taskGenerator,
        lastRelatedPastCompletedTaskDue,
        listId,
      ),
    ];
  };

  const checkRecurrence = (
    today: Date,
    startDate: Date,
    recurrence: Recurrence
  ) => {
    const daysOffset = recurrence.daysOffset ?? 0;

    const dayA = dayjs(today).add(daysOffset * -1, "days");
    const dayB = dayjs(startDate);

    const {
      dayInterval,
      weekInterval,
      monthInterval,
      yearInterval,
     } = recurrence;
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

    const daysDiff = dayA.diff(dayB, "days");
    const weeksDiff = dayA.diff(dayB, "weeks");
    const monthsDiff = dayA.diff(dayB, "months");
    const yearsDiff = dayA.diff(dayB, "years");

    return (
      (
        dayInterval === undefined || (
          daysDiff > 0 &&
          daysDiff % dayInterval === 0
        )
      ) &&
      (
        weekInterval === undefined || (
          weeksDiff > 0 &&
          weeksDiff % weekInterval === 0
        )
      ) &&
      (
        monthInterval === undefined || (
          monthsDiff > 0 &&
          monthsDiff % monthInterval === 0
        )
      ) &&
      (
        yearInterval === undefined || (
          yearsDiff > 0 &&
          yearsDiff % yearInterval === 0
        )
      ) &&
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
