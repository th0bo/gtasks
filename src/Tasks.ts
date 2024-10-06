namespace TasksTasks {
  export const getTasks = () => {
    if (Tasks.Tasks === undefined) {
      throw new Error(`Tasks API is not available.`);
    }
    return Tasks.Tasks;
  };

  export interface ListOptionalArgs {
    /**
     * Upper bound for a task's completion date (as a RFC 3339 timestamp) to filter by.
     * Optional. The default is not to filter by completion date.
     */
    completedMax?: string;
    /**
     * Lower bound for a task's completion date (as a RFC 3339 timestamp) to filter by.
     * Optional. The default is not to filter by completion date.
     */
    completedMin?: string;
    /**
     * Upper bound for a task's due date (as a RFC 3339 timestamp) to filter by.
     * Optional. The default is not to filter by due date.
     */
    dueMax?: string;
    /**
     * Lower bound for a task's due date (as a RFC 3339 timestamp) to filter by.
     * Optional. The default is not to filter by due date.
     */
    dueMin?: string;
    /**
     * Maximum number of tasks returned on one page. Optional. The default is 20 (max allowed: 100).
     */
    maxResults?: number;
    /**
     * Token specifying the result page to return. Optional.
     */
    pageToken?: string;
    /**
     * Flag indicating whether completed tasks are returned in the result.
     * Note that showHidden must also be True to show tasks completed in first party clients, such as the web UI and Google's mobile apps.
     * Optional. The default is True.
     */
    showCompleted?: boolean;
    /**
     * Flag indicating whether deleted tasks are returned in the result. Optional. The default is False.
     */
    showDeleted?: boolean;
    /**
     * Flag indicating whether hidden tasks are returned in the result. Optional. The default is False.
     */
    showHidden?: boolean;
    /**
     * Lower bound for a task's last modification time (as a RFC 3339 timestamp) to filter by.
     * Optional. The default is not to filter by last modification time.
     */
    updatedMin?: string;
    /**
     * Flag indicating whether tasks assigned to the current user are returned in the result.
     * Optional. The default is False.
     */
    showAssigned?: boolean;
  }

  export const listAllTasks = (tasklist: string, options: Omit<TasksTasks.ListOptionalArgs, "maxResults" | "pageToken">) => {
    let pageToken: string | undefined = undefined;
    const maxResults = 100;
    let allTasks: GoogleAppsScript.Tasks.Schema.Task[] = [];
    try {
      do {
        const { nextPageToken, items } = TasksTasks.getTasks().list(tasklist, { ...options, maxResults, pageToken } as TasksTasks.ListOptionalArgs);
        pageToken = nextPageToken;
        allTasks = allTasks.concat(items ?? []);
      } while (pageToken !== undefined);
    } catch (e) {
      console.warn(e);
    } finally {
      console.info(`${allTasks.length} tasks listed.`)
      return allTasks;
    }
  }
}