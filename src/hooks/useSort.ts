import { useState } from "react";
import { ContentType, SortType } from "../types/Type";

export interface SortOptionsProps {
  latest: boolean;
  scrap: boolean;
  likes: boolean;
}

export const useSort = (filteredData: ContentType[]) => {
  const [sortData, setSortData] = useState<ContentType[]>(filteredData);
  const [sortOptions, setSortOptions] = useState({
    latest: true,
    scrap: false,
    likes: false,
  });

  const sortOptionsReset = () => {
    setSortOptions(() => ({
      latest: false,
      scrap: false,
      likes: false,
    }));
  };

  const handleSortOption = (type: SortType) => {
    sortOptionsReset();
    setSortOptions((prev) => ({
      ...prev,
      [type]: true,
    }));
  };

  const handleSort = (inputData: ContentType[]) => {
    if (sortOptions.scrap) {
      return scrapSort(inputData);
    }
    if (sortOptions.likes) {
      return likeSort(inputData);
    }
    if (sortOptions.latest) {
      return latestSort(inputData);
    }
    return inputData;
  };

  const scrapSort = (inputData: ContentType[]) => {
    return setSortData(
      [...inputData].sort((a, b) => b.scrapCount - a.scrapCount)
    );
  };

  const likeSort = (inputData: ContentType[]) => {
    return setSortData(
      [...inputData].sort((a, b) => b.likeCount - a.likeCount)
    );
  };

  const latestSort = (inputData: ContentType[]) => {
    return setSortData(
      [...inputData].sort((a, b) => {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        return dateB - dateA;
      })
    );
  };

  return {
    sortOptions,
    handleSortOption,
    handleSort,
    sortData,
  };
};
