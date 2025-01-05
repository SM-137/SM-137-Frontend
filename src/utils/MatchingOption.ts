export const matchingMonth = (option: string) => {
  if (option === "1개월") {
    return 1;
  }
  if (option === "3개월") {
    return 3;
  }
  if (option === "6개월") {
    return 6;
  }
  //기본값: 12개월
  return 12;
};
