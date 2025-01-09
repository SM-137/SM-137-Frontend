import React, { useState } from "react";
import styled from "@emotion/styled";
import CheckIcon from "@mui/icons-material/Check";

const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 500px;
  margin-top: 1.5rem;
`;

const SearchBox = styled.div`
  display: block;
  flex-direction: row;
  gap: 1rem;
`;

const SearchItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin-bottom: 1rem;
`;

const ItemTitle = styled.div`
  text-align: right;
  width: 60px;
  color: var(--white);
`;

const ItemInput = styled.input`
  width: 140px;
  height: 2rem;
  border: 1px solid var(--gray3-border);
  border-radius: 5px;
  background-color: var(--white);
`;

const WideItemInput = styled(ItemInput)`
  width: 200px;
`;

const StatusContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 500px;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const SelectLabel = styled.label<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => (props.active ? "var(--succeess)" : "var(--disabled-primary)")};
  cursor: pointer;
`;

const SearchComponent: React.FC = () => {
  const [isPrivate, setIsPrivate] = useState(true);
  const [status, setStatus] = useState("진행");

  return (
    <>
      <SearchContainer>
        <SearchBox>
          <SearchItem>
            <ItemTitle>민원번호</ItemTitle>
            <ItemInput />
          </SearchItem>
          <SearchItem>
            <ItemTitle>개인/공개</ItemTitle>
            <SelectLabel active={isPrivate} onClick={() => setIsPrivate(true)}>
              {isPrivate && <CheckIcon />} 개인
            </SelectLabel>
            <SelectLabel active={!isPrivate} onClick={() => setIsPrivate(false)}>
              {!isPrivate && <CheckIcon />} 공개
            </SelectLabel>
          </SearchItem>
        </SearchBox>

        <SearchBox>
          <SearchItem>
            <ItemTitle>제목</ItemTitle>
            <WideItemInput />
          </SearchItem>
          <SearchItem>
            <ItemTitle>신청일</ItemTitle>
            <WideItemInput type="date" />
          </SearchItem>
        </SearchBox>
      </SearchContainer>

      <StatusContainer>
        <ItemTitle>진행상태</ItemTitle>
        <SelectLabel active={status === "진행"} onClick={() => setStatus("진행")}>
          {status === "진행" && <CheckIcon />} 진행
        </SelectLabel>
        <SelectLabel active={status === "대기"} onClick={() => setStatus("대기")}>
          {status === "대기" && <CheckIcon />} 대기
        </SelectLabel>
        <SelectLabel active={status === "반려"} onClick={() => setStatus("반려")}>
          {status === "반려" && <CheckIcon />} 반려
        </SelectLabel>
        <SelectLabel active={status === "완료"} onClick={() => setStatus("완료")}>
          {status === "완료" && <CheckIcon />} 완료
        </SelectLabel>
      </StatusContainer>
    </>
  );
};

export default SearchComponent;
