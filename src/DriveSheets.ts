namespace DriveSheets {
  const getSpreadsheets = () => {
    if (Sheets.Spreadsheets === undefined) {
      throw new Error("Spreadsheets API is not available.");
    }
    return Sheets.Spreadsheets;
  };

  const getSpreadsheetsValues = () => {
    const Spreadsheets = getSpreadsheets();
    if (Spreadsheets.Values === undefined) {
      throw new Error("Spreadsheets Values API is not available.");
    }
    return Spreadsheets.Values;
  }

  const getFileByName = (name: string) => {
    const filesIterator = DriveApp.getFilesByName(name);
    if (!filesIterator.hasNext()) {
      throw new Error(`No file found for name ${name}.`);
    }
    return filesIterator.next();
  };

  export const store = (name: string, values: [string, string, string, string][]) => {
    const file = getFileByName(name);
    getSpreadsheetsValues().append({ values }, file.getId(), "Feuille 1", {
      valueInputOption: "USER_ENTERED",
    });
  };

  export const loadContent = (name: string) => {
    const file = getFileByName(name);
    const Values = getSpreadsheetsValues();
    const values = Values.get(file.getId(), "Feuille 1!A2:E", {
      valueRenderOption: "UNFORMATTED_VALUE",
    }).values as [string, string, string, string, string][];
    return values.map(([id, startIsoDate, title, recurrenceJson, taskListId]) => ({
      id,
      startDate: new Date(startIsoDate),
      title,
      taskListId,
      ...(JSON.parse(recurrenceJson)),
    })) as TaskGeneration.TaskGenerator[];
  };
}