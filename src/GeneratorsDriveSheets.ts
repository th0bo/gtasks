/// <reference types="drive-sheets" />

declare const DriveSheets: DriveSheetsLibrary;

namespace GeneratorsDriveSheets {
  export type Line = [string, string, string, string, number, number];
  const generatorsFileSheetRange = "A2:H";

  const scriptProperties = PropertiesService.getScriptProperties();
  const fileName = scriptProperties.getProperty("generatorsFileName") as string;
  const range = `${scriptProperties.getProperty("generatorsFileSheet") as string}!${generatorsFileSheetRange}`;

  export const load = () => {
    return DriveSheets.load({ fileName, range }) as Line[];
  }

  export const save = (values: Line[]) => {
    return DriveSheets.save({ fileName, range, values });
  }
}