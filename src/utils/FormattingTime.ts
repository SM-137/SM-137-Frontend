const DATE_INDEX = 0;
const ONE_HOUR = 3600000;
const ONE_DAY = 86400000;

export const getFormatTime = (dateData: string) => {
  const date = new Date(dateData);
  const now = new Date();
  console.log(now);
  const formatTime = formattingTime(date, now);
  return formatTime;
};

const calculateGap = (date: Date, now: Date) => {
  const time = date.getTime();
  const nowTime = now.getTime();
  const millisecondGap = nowTime - time;
  console.log(millisecondGap);
  const hourGap = Math.floor(millisecondGap / ONE_HOUR);
  return { millisecondGap, hourGap };
};

const formattingTime = (date: Date, now: Date) => {
  const { millisecondGap, hourGap } = calculateGap(date, now);
  const formatDate = date.toISOString().split("T")[DATE_INDEX];

  if (millisecondGap < ONE_DAY) {
    if (hourGap > 0) {
      return `${hourGap}시간 전`;
    }
    return "방금 전";
  }

  return formatDate;
};
