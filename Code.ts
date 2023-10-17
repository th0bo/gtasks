function myFunction() {
  const taskLists = Tasks.Tasklists?.list().items ?? [];
  // const reviewListTitle = "Bilans";
  const reviewListTitle = "Bilans";
  let reviewListId: string | undefined;
  for (const { title, id } of taskLists) {
    Logger.log(`${title} - ${id}`);
    if (title === reviewListTitle) {
      reviewListId = id;
    }
  }
  if (reviewListId === undefined) {
    return;
  }
  const reviewTasks = Tasks.Tasks?.list(reviewListId, { showCompleted: true, showHidden: true }).items ?? [];
  Logger.log(reviewTasks.length);
  for (const { title, id, completed } of reviewTasks) {
    Logger.log(`${title} - ${id} - ${completed}`);
    //Tasks.Tasks?.patch({ notes: 'hello world' }, reviewListId, id as string);
  }
}
