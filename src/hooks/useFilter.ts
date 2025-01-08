import { useState } from "react";
import { CategoryValue, DataType, StatusType } from "../types/Type";
import { matchingMonth } from "../utils/MatchingOption";

export interface FiltersProps {
  period: string | null;
  category: CategoryValue | null;
  status: StatusType | null;
}

export const useFilter = (originData: DataType[]) => {
  const [filteredData, setFilteredData] = useState<DataType[]>(originData);
  const [filters, setFilters] = useState<FiltersProps>({
    //필터 옵션 저장
    period: null,
    category: null,
    status: null,
  });

  const handleFilter = () => {
    let result: DataType[] = originData;
    if (filters.period) {
      result = handlePeriod(originData, filters.period);
    }
    if (filters.category) {
      result = handleCategory(result, filters.category);
    }
    if (filters.status) {
      //status 함수
    }
    setFilteredData(result);
  };

  const setLastDate = (option: string) => {
    const today = new Date();
    const gap = matchingMonth(option);
    const lastDate = today.setMonth(today.getMonth() - gap);
    return lastDate;
  };

  const handlePeriod = (originData: DataType[], dateOption: string) => {
    const lastDate = setLastDate(dateOption);
    const result = originData.filter((i) => {
      const date = new Date(i.date).getTime();
      return date > lastDate;
    });
    return result;
  };

  const handleCategory = (
    originData: DataType[],
    subCategory: CategoryValue
  ) => {
    //subCategory를 선택했을 때만 필터링
    let result = originData;
    if (subCategory) {
      result = originData.filter((i) => i.category === subCategory);
    }
    return result;
  };

  return { filters, filteredData, handleFilter, setFilters };
};
