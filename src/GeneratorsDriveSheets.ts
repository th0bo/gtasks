/// <reference types="drive-sheets" />

declare const DriveSheets: DriveSheetsLibrary;

namespace GeneratorsDriveSheets {
  type Line = [string, string, string, string, string];

  const fileName = "Tasks Generators";
  const range = "Feuille 1!A2:E";

  export const load = () => {
    return DriveSheets.load({ fileName, range }) as Line[];
  }

  export const save = (values: Line[]) => {
    return DriveSheets.save({ fileName, values, range });
  }
}