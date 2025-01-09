import { CategoryValue, DataType } from "../types/Type";
import { matchingMonth } from "../utils/MatchingOption";

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

  const handleCategory = (
    originData: DataType[],
    subCategory: CategoryValue
  ) => {
    //subCategory를 선택했을 때만 필터링
    if (subCategory) {
      setData(() => originData.filter((i) => i.category === subCategory));
    }
  };

  return { handlePeriod, handleCategory };
};
