import { useState } from "react";

export const usePagination = <T>(data: T[]) => {
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / pageSize);

  const displayedData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return { currentPage, totalPages, displayedData, handlePageChange };
};
