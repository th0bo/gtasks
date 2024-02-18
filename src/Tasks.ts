namespace TasksTasks {
  export const getTasks = () => {
    if (Tasks.Tasks === undefined) {
      throw new Error(`Tasks API is not available.`);
    }
    return Tasks.Tasks;
  };
}