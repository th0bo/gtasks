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

  const getSheet = (spreadsheet: GoogleAppsScript.Sheets.Schema.Spreadsheet, sheetIndex: number = 0) => {
    const sheet = spreadsheet.sheets?.[sheetIndex];
    if (sheet == undefined) {
      throw new Error(`No sheet for index ${sheetIndex} in spreadsheet ${spreadsheet.spreadsheetId}.`);
    }
    return sheet;
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
    const values = Values.get(file.getId(), "Feuille 1!A2:D", {
      valueRenderOption: "UNFORMATTED_VALUE",
    }).values;
  };
}