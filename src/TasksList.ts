namespace TasksList {
  export const findTasksListIdByTitle = (titleToFind: string) => {
    const taskLists = Tasks.Tasklists?.list().items ?? [];
    let foundId: string | undefined;
    for (const { title, id } of taskLists) {
      // console.log(`${title} - ${id}`);
      if (title === titleToFind) {
        foundId = id;
      }
    }
    return foundId;
  }
}