declare const daygs: any;

const test = () => {
  const dayjs = daygs.dayjs;
  Logger.log(dayjs("2023-12-01").isBefore(dayjs("2022-01-02")));
}