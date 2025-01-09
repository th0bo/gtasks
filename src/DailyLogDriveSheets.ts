namespace DailyLogDriveSheets {
  export type Line = [string, number];
  const fileSheetRange = "A1:B";

  const scriptProperties = PropertiesService.getScriptProperties();
  const fileName = scriptProperties.getProperty("dailyLogFileName") as string;
  const range = `${scriptProperties.getProperty("dailyLogFileSheet") as string}!${fileSheetRange}`;

  export const save = (values: Line[]) => {
    return DriveSheets.save({ fileName, range, values });
  }
}