import { useEffect, useState } from "react";

export const usePagination = <T>(data: T[]) => {
  const PAGE_SIZE = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / PAGE_SIZE);

  const displayedData = data.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // 현재 페이지에 데이터가 없을 경우 첫 페이지로 이동
  useEffect(() => {
    if (displayedData.length === 0 && currentPage !== 1) {
      setCurrentPage(1);
    }
  }, [displayedData, currentPage]);

  return { currentPage, totalPages, displayedData, handlePageChange };
};
