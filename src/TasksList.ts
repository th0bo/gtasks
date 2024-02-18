namespace TasksList {
  export const getTasklists = () => {
    if (Tasks.Tasklists === undefined) {
      throw new Error(`Tasklists API is not available.`);
    }
    return Tasks.Tasklists;
  };

  export const findTasksListIdByTitle = (titleToFind: string) => {
    const taskLists = getTasklists().list().items ?? [];
    let foundId: string | undefined;
    for (const { title, id } of taskLists) {
      // console.log(`${title} - ${id}`);
      if (title === titleToFind) {
        foundId = id;
      }
    }
    return foundId;
  };
}
