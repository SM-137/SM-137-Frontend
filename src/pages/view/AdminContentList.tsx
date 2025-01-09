import React, { useState } from "react";
import styled from "@emotion/styled";
import { DataType } from "../../types/Type";
import StatusDisplay from "../../components/status-button/StatusDisplay";
import CategoryTagGroup from "../../components/category-tag/CategoryTagGroup";
import Pagination from "../Pagination";

const Container = styled.div`
  max-width: 1114px;
  width: 100%;
  margin: 0 auto;
`;


const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const HeaderRow = styled.tr`
  background-color: var(--gray1-background);
`;

const HeaderCell = styled.th`
  text-align: center;
  font-weight: bold;
  padding: 0.7rem;
  color: var(--gray5-lowText);
  vertical-align: middle;

  &:first-of-type {
    border-top-left-radius: 20px;
  }

  &:last-of-type {
    border-top-right-radius: 20px;
  }
`;

const DataRow = styled.tr`
  border-bottom: 1px solid var(--gray3-border);
`;

const Cell = styled.td`
  text-align: center;
  justify-content: center;
  vertical-align: middle;
  padding: 0.7rem;
  color: var(--gray5-lowText);
`;

const TitleCell = styled(Cell)`
  color: black;
  font-weight: bold;
`;

interface ContentListProps {
  data: DataType[];
}

const AdminContentList: React.FC<ContentListProps> = ({ data }) => {
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);

  // 총 페이지 수 계산
  const totalPages = Math.ceil(data.length / pageSize);

  // 현재 페이지에 해당하는 데이터 슬라이싱
  const displayedData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  // 페이지 변경 핸들러
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Container>
      <Table>
        <thead>
          <HeaderRow>
            <HeaderCell>민원번호</HeaderCell>
            <HeaderCell>제목</HeaderCell>
            <HeaderCell>개인/공개</HeaderCell>
            <HeaderCell>카테고리</HeaderCell>
            <HeaderCell>진행상태</HeaderCell>
            <HeaderCell>신청일</HeaderCell>
          </HeaderRow>
        </thead>
        <tbody>
          {displayedData.map((item, index) => (
            <DataRow key={index}>
              <Cell>{`${(currentPage - 1) * pageSize + index + 1}`}</Cell>
              <TitleCell>{item.title}</TitleCell>
              <Cell>공개</Cell>
              <Cell>
                <CategoryTagGroup tagArray={[item.category[0]]} />
              </Cell>
              <Cell>
                <StatusDisplay type={item.status} />
              </Cell>
              <Cell>{item.date}</Cell>
            </DataRow>
          ))}
        </tbody>
      </Table>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </Container>
  );
};

export default AdminContentList;