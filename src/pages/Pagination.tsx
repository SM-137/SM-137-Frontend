import React from "react";
import styled from "@emotion/styled";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const PageButton = styled.button<{ active?: boolean }>`
  width: 2.5rem;
  height: 2.5rem;
  margin: 0 5px;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 100%;
  background-color: ${(props) => (props.active ? "var(--primary)" : "var(--white)")};
  color: ${(props) => (props.active ? "var(--white)" : "var(--gray5-lowText)")};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};

  &:disabled {
    cursor: not-allowed;
    color: var(--gray5-lowText);
  }
`;

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      pages.push(1, 2, 3, "play", totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(1, "play", totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(1, "play", currentPage - 1, currentPage, currentPage + 1, "play", totalPages);
    }

    return pages;
  };

  return (
    <PaginationWrapper>
      {getPageNumbers().map((page, index) => (
        <PageButton
          key={index}
          onClick={() => typeof page === "number" ? onPageChange(page) : onPageChange(page === "play" ? currentPage + (index < 2 ? -2 : 2) : 1)}
          active={page === currentPage}
          disabled={typeof page !== "number" && page !== "play"}
        >
          {page === "play" ? <MoreHorizIcon /> : page}
        </PageButton>
      ))}
    </PaginationWrapper>
  );
};

export default Pagination;
