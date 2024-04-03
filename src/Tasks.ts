namespace TasksTasks {
  export const getTasks = () => {
    if (Tasks.Tasks === undefined) {
      throw new Error(`Tasks API is not available.`);
    }
    return Tasks.Tasks;
  };

  export const listAllTasks = (tasklist: string, options: any) => {
    let pageToken: string | undefined = undefined;
    let allTasks: GoogleAppsScript.Tasks.Schema.Task[] = [];
    do {
      const { nextPageToken, items } = TasksTasks.getTasks().list(tasklist, { ...options, pageToken });
      pageToken = nextPageToken;
      allTasks = allTasks.concat(items ?? []);
    } while (pageToken !== undefined);
    return allTasks;
  }
}