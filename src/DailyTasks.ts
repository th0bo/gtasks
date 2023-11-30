namespace DailyTasks {
  export const list = (toComeId: string, defaultId: string) => {
    const endOfToday = new Date();
    endOfToday.setUTCDate(endOfToday.getUTCDate() + 1);
    endOfToday.setUTCSeconds(endOfToday.getUTCSeconds() - 1);
    return Tasks.Tasks.list(toComeId, {
      dueMax: endOfToday.toISOString(),
      showCompleted: false,
      showHidden: true,
    }).items;
  };

  export const move = (
    task: GoogleAppsScript.Tasks.Schema.Task,
    fromId: string,
    toId: string
  ) => {
    Logger.log(`Moving ${JSON.stringify(task)} from ${fromId} to ${toId}.`);
    Tasks.Tasks.insert(task, toId);
    Tasks.Tasks.remove(fromId, task.id);
  };
}
