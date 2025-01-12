import { useState } from "react";
import { DataType, SortType } from "../types/Type";

export interface SortOptionsProps {
  latest: boolean;
  scrap: boolean;
  likes: boolean;
}

export const useSort = (filteredData: DataType[]) => {
  const [sortData, setSortData] = useState<DataType[]>(filteredData);
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

  const handleSort = (inputData: DataType[]) => {
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

  const scrapSort = (inputData: DataType[]) => {
    return setSortData(
      [...inputData].sort((a, b) => b.bookmarks - a.bookmarks)
    );
  };

  const likeSort = (inputData: DataType[]) => {
    return setSortData([...inputData].sort((a, b) => b.likes - a.likes));
  };

  const latestSort = (inputData: DataType[]) => {
    return setSortData(
      [...inputData].sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
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
