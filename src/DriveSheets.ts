namespace DriveSheets {
  type Line = [string, string, string, string, string];

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
  };

  const getFileByName = (name: string) => {
    const filesIterator = DriveApp.getFilesByName(name);
    if (!filesIterator.hasNext()) {
      throw new Error(`No file found for name ${name}.`);
    }
    return filesIterator.next();
  };

  export const saveGenerators = (name: string, values: Line[]) => {
    const file = getFileByName(name);
    getSpreadsheetsValues().append({ values }, file.getId(), "Feuille 1", {
      valueInputOption: "USER_ENTERED",
    });
  };

  export const loadGenerators = (name: string) => {
    const file = getFileByName(name);
    const Values = getSpreadsheetsValues();
    return Values.get(file.getId(), "Feuille 1!A2:E", {
      valueRenderOption: "UNFORMATTED_VALUE",
    }).values as Line[];
  };
}
