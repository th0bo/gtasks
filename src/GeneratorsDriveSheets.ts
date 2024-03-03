/// <reference types="drive-sheets" />

declare const DriveSheets: DriveSheetsLibrary;

namespace GeneratorsDriveSheets {
  type Line = [string, string, string, string, string];

  const scriptProperties = PropertiesService.getScriptProperties();
  const fileName = scriptProperties.getProperty("generatorsFileName") as string;
  const range = scriptProperties.getProperty("generatorsRange") as string;

  export const load = () => {
    return DriveSheets.load({ fileName, range }) as Line[];
  }

  export const save = (values: Line[]) => {
    return DriveSheets.save({ fileName, range, values });
  }
}