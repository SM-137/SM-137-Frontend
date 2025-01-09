import { useMemo } from "react";

interface UsePaginationProps {
  currentPage: number;
  totalPages: number;
  maxPagesToShow?: number;
}

const usePagination = ({ currentPage, totalPages, maxPagesToShow = 5 }: UsePaginationProps) => {
  const pages = useMemo(() => {
    const pageNumbers = [];

    if (totalPages <= maxPagesToShow) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      pageNumbers.push(1, 2, 3, "play", totalPages);
    } else if (currentPage >= totalPages - 2) {
      pageNumbers.push(1, "play", totalPages - 2, totalPages - 1, totalPages);
    } else {
      pageNumbers.push(1, "play", currentPage - 1, currentPage, currentPage + 1, "play", totalPages);
    }

    return pageNumbers;
  }, [currentPage, totalPages, maxPagesToShow]);

  return pages;
};

export default usePagination;
