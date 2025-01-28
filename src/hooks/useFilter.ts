import { useState } from "react";
import { CategoryValue, ContentType, StatusType } from "../types/Type";
import { matchingMonth } from "../utils/MatchingOption";

export interface FiltersProps {
  period: string | null;
  category: CategoryValue | null;
  status: StatusType[] | null;
  hashtag: string[] | null;
}

export const useFilter = (originData: ContentType[]) => {
  const [filteredData, setFilteredData] = useState<ContentType[]>(originData);
  const [filters, setFilters] = useState<FiltersProps>({
    //필터 옵션 저장
    period: null,
    category: null,
    status: null,
    hashtag: null,
  });

  const handleFilterOptions = <K extends keyof FiltersProps>(
    option: K,
    value: FiltersProps[K]
  ) => {
    setFilters((prev) => ({
      ...prev,
      [option]: value,
    }));
  };

  const handleFilter = () => {
    let result: ContentType[] = originData;
    if (filters.period) {
      result = handlePeriod(result, filters.period);
    }
    if (filters.status) {
      result = handleStatus(result, filters.status);
    }
    if (filters.hashtag) {
      result = handleHashtag(result, filters.hashtag);
    }
    setFilteredData(result);
  };

  const setLastDate = (option: string) => {
    const today = new Date();
    const gap = matchingMonth(option);
    const lastDate = today.setMonth(today.getMonth() - gap);
    return lastDate;
  };

  const handlePeriod = (originData: ContentType[], dateOption: string) => {
    if (dateOption === "전체") {
      return originData;
    }
    const lastDate = setLastDate(dateOption);
    const result = originData.filter((i) => {
      const date = new Date(i.date).getTime();
      return date > lastDate;
    });
    return result;
  };

  const handleStatus = (originData: ContentType[], status: StatusType[]) => {
    let result = originData;
    const noStatusOption = status.length === 0;
    //option이 선택된 경우에만 필터링
    if (!noStatusOption) {
      result = originData.filter((i) => status.includes(i.complaintStatus));
    }
    return result;
  };

  const handleHashtag = (originData: ContentType[], hashtag: string[]) => {
    let result = originData;
    for (let tag of hashtag) {
      result = originData.filter((i) => i.tag.includes(tag));
    }
    return result;
  };

  return { filters, filteredData, handleFilter, handleFilterOptions };
};
