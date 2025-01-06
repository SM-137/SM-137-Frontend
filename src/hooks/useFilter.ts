import { DataType } from "../types/Type";
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

  //category-select 필터링
  const handleCategory = (
    originData: DataType[],
    subCategoryArray: string[]
  ) => {
    setData(() =>
      originData.filter((i) => {
        for (let subCategory of subCategoryArray) {
          i.category.includes(subCategory);
        }
      })
    );
  };

  return { handlePeriod, handleCategory };
};
