import styled from "@emotion/styled";
import FilterListIcon from "@mui/icons-material/FilterList";
import StatusButtonGroup from "../status-button/StatusButtonGroup"; // StatusButtonGroup 경로에 맞게 수정
import { useState } from "react";
import CategoryTag from "../category-tag/CategoryTag";

const Container = styled.div`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 500px;
  background-color: var(--gray1-background);
  padding: 1rem 1.8rem;
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

//해시태그 input + 검색 결과
const HashtagArea = styled.div`
  display: flex;
  gap: 1rem;
`;

const SearchBar = styled.div`
  display: inline-flex;
  align-items: center;
  border-radius: 500px;
  background-color: white;
  padding: 0.2rem 0.8rem;
`;

const SearchText = styled.div`
  color: var(--gray6-header);
  margin-right: 8px;
  margin-left: 8px;
  white-space: nowrap;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  flex-grow: 1;
  font-size: 14px;
  padding: 0 8px;
  color: var(--gray4-placeholder-loq);
  &::placeholder {
    color: var(--gray4-placeholder-low);
  }
  &:focus::placeholder {
    opacity: 0;
  }
`;

const FilterIcon = styled(FilterListIcon)`
  color: var(--gray5-lowText);
  cursor: pointer;
`;

const StatusButtonGroupContainer = styled.div`
  display: flex;
`;

const HashtagContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const SearchFilterBar = () => {
  const [hashtagArray, setHashtagArray] = useState<string[]>([]);
  const [hashtagInput, setHashtagInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHashtagInput(e.target.value);
  };

  const handleHashtagEnter = () => {
    validateHashtag();
    setHashtagArray((prev) => [...prev, hashtagInput]);
    setHashtagInput("");
  };

  const validateHashtag = () => {
    if (hashtagInput.length === 0 || !hashtagInput) {
      return;
    }
    if (hashtagArray.includes(hashtagInput)) {
      return;
    }
  };

  const handleHashtagDelete = (value: string) => {
    setHashtagArray((prev) => prev.filter((i) => i !== value));
  };
  const isHashtagSearchActive = hashtagArray.length !== 0;

  return (
    <Container>
      {/* 왼쪽 서치바 */}
      <HashtagArea>
        <SearchBar>
          <SearchText>해시태그</SearchText>
          <SearchInput placeholder="졸업" onChange={handleChange} />
          <FilterIcon onClick={handleHashtagEnter} />
        </SearchBar>

        {isHashtagSearchActive && (
          <HashtagContainer>
            {hashtagArray.map((i) => (
              <CategoryTag
                contents={i}
                // onClick={() => handleHashtagDelete(i)}
              />
            ))}
          </HashtagContainer>
        )}
      </HashtagArea>

      {/* 오른쪽 상태 버튼 그룹 */}
      <StatusButtonGroupContainer>
        <StatusButtonGroup usage="filter" />
      </StatusButtonGroupContainer>
    </Container>
  );
};

export default SearchFilterBar;
