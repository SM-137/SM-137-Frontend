import styled from "@emotion/styled";
import FilterListIcon from "@mui/icons-material/FilterList";
import StatusButtonGroup from "../status-button/StatusButtonGroup"; // StatusButtonGroup 경로에 맞게 수정
import { useRef, useState } from "react";
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
  max-height: 30px;
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

const HashtagDeleteArea = styled.div`
  border-radius: 20px;
  display: inline;
  cursor: pointer;
`;
const DeleteInfoMessage = styled.p`
  color: var(--light-primary);
`;
const InfoHashtagContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SearchFilterBar = () => {
  const [hashtagArray, setHashtagArray] = useState<string[]>([]);
  const [hashtagInput, setHashtagInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHashtagInput(e.target.value);
  };

  const handleHashtagEnter = () => {
    if (inputRef.current) {
      if (validateHashtag()) setHashtagArray((prev) => [...prev, hashtagInput]);
      setHashtagInput("");
      inputRef.current.value = "";
    }
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
      if (validateHashtag()) {
        validateHashtag();
        setHashtagArray((prev) => [...prev, hashtagInput]);
        setHashtagInput("");
      }
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  const validateHashtag = () => {
    if (hashtagInput.length === 0 || !hashtagInput) {
      return false;
    }
    if (hashtagArray.includes(hashtagInput)) {
      return false;
    }
    //해시태그 글자수 제한
    return true;
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
          <SearchInput
            placeholder="졸업"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            ref={inputRef}
          />
          <FilterIcon onClick={handleHashtagEnter} />
        </SearchBar>

        {isHashtagSearchActive && (
          <InfoHashtagContainer>
            <HashtagContainer>
              {hashtagArray.map((i) => (
                <HashtagDeleteArea onClick={() => handleHashtagDelete(i)}>
                  <CategoryTag contents={i} />
                </HashtagDeleteArea>
              ))}
            </HashtagContainer>
            <DeleteInfoMessage>
              해시태그를 클릭하면 삭제됩니다
            </DeleteInfoMessage>
          </InfoHashtagContainer>
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
