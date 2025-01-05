namespace TasksList {
  const getTasklistsApi = () => {
    if (Tasks.Tasklists === undefined) {
      throw new Error(`Tasklists API is not available.`);
    }
    return Tasks.Tasklists;
  };

  const listTitleToListId = new Map<string, string>();

  const initListTitleToListId = () => {
    const taskLists = getTasklistsApi().list().items ?? [];
    for (const { title, id } of taskLists) {
      if (title !== undefined && id !== undefined) {
        listTitleToListId.set(title, id);
      }
    }
  }

  export const getListIdByListTitle = (title: string) => {
    let listId = listTitleToListId.get(title);
    if (listId !== undefined) {
      return listId;
    }
    initListTitleToListId();
    return listTitleToListId.get(title);
  }
}
