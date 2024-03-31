namespace DailyTasks {
  export const list = (toComeId: string) => {
    const endOfToday = new Date();
    endOfToday.setUTCDate(endOfToday.getUTCDate() + 1);
    endOfToday.setUTCSeconds(endOfToday.getUTCSeconds() - 1);
    return TasksTasks.getTasks().list(toComeId, {
      dueMax: endOfToday.toISOString(),
      showCompleted: false,
      showHidden: true,
    }).items;
  };

  /**
   * The move action of Tasks API does not move tasks from a list to another.
   * It only moves a task's position within a list. Thus the need for insert & remove.
   **/
  export const move = (
    task: GoogleAppsScript.Tasks.Schema.Task,
    fromId: string,
    toId: string
  ) => {
    console.log(`Moving ${JSON.stringify(task)} from ${fromId} to ${toId}.`);
    TasksTasks.getTasks().insert(task, toId);
    TasksTasks.getTasks().remove(fromId, task.id as string);
  };
}
