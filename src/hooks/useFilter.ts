import { DataType, SortType } from "../types/Type";
import { matchingMonth } from "../utils/MatchingOption";
import { useSort } from "./useSort";

export const useFilter = (
  setData: React.Dispatch<React.SetStateAction<any[]>>
) => {
  const setLastDate = (option: string) => {
    const today = new Date();
    const gap = matchingMonth(option);
    const lastDate = today.setMonth(today.getMonth() - gap);
    return lastDate;
  };

  const handlePeriod = (originData: DataType[], dateOption: string) => {
    const lastDate = setLastDate(dateOption);
    setData(() =>
      originData.filter((i) => {
        const date = new Date(i.date).getTime();
        return date > lastDate;
      })
    );
  };

  return { handlePeriod };
};
