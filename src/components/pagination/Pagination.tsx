import React from "react";
import styled from "@emotion/styled";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import usePagination from "../../hooks/usePagination"; 

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
  const pages = usePagination({ currentPage, totalPages, maxPagesToShow: 5 });

  return (
    <PaginationWrapper>
      {pages.map((page, index) => (
        <PageButton
          key={index}
          onClick={() =>
            typeof page === "number"
              ? onPageChange(page)
              : onPageChange(page === "play" ? currentPage + (index < 2 ? -2 : 2) : 1)
          }
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
