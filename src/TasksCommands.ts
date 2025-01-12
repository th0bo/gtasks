namespace TasksCommands {
    export type TaskId = {
        listId: string;
        taskId: string;
    };

    type DeleteCommand = { action: "DELETE" } & TaskId;

    export type TaskData = {
        title: string;
        notes?: string;
        due: string;
        listId: string;
      };
    
    type CreateCommand = { action: "CREATE" } & TaskData;

    export type Command = DeleteCommand | CreateCommand;

    export const deleteTask:
      (taskId: TasksCommands.TaskId) => void =
      ({ listId, taskId }) => {
        TasksTasks.getTasks().remove(listId, taskId);
      };
    
    export const createTask:
      (taskData: TasksCommands.TaskData) => void =
      (taskData) => {
        const { newTask, listId } = buildTask(taskData);
        TasksTasks.getTasks().insert(newTask, listId);
      };

    const buildTask:
    (taskData: TasksCommands.TaskData) => { newTask: GoogleAppsScript.Tasks.Schema.Task, listId: string } =
    ({ listId, ...rest }) => {
        const newTask = Object.assign(Tasks.newTask(), rest);
        return { newTask, listId };
    };
    
    export const executeCommands:
      (commands: TasksCommands.Command[]) => void =
      (commands) => {
        for (const command of commands) {
            console.log(command);
            switch (command.action) {
                case "CREATE":
                    TasksCommands.createTask(command);
                    break;
                case "DELETE":
                    TasksCommands.deleteTask(command);
                    break;
                default:
                    isNever(command);
            }
            console.log(`Action ${command.action} executed.`);
        }
      };
    
    const isNever: (_v: never) => void = (_v) => {};
}