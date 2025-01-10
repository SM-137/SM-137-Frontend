import FilterListIcon from "@mui/icons-material/FilterList";
import styled from "@emotion/styled";
import CategoryTag from "../category-tag/CategoryTag";
import { useContext, useEffect, useRef, useState } from "react";
import { ViewContext } from "../../pages/view/View";

//해시태그 input + 검색 결과
const HashtagArea = styled.div`
  display: flex;
  gap: 1rem;
`;
const HashtagContainer = styled.div`
  display: flex;
  gap: 0.5rem;
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

const HashtagSearch = () => {
  const [hashtagArray, setHashtagArray] = useState<string[]>([]);
  const [hashtagInput, setHashtagInput] = useState("");

  //필터링
  const context = useContext(ViewContext);
  if (!context) {
    throw new Error("SubCategory context 호출 중 오류 발생");
  }
  useEffect(() => {
    context.handleFilterOptions("hashtag", hashtagArray);
  }, [hashtagArray]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHashtagInput(e.target.value);
  };

  const handleHashtagEnter = () => {
    if (inputRef.current && validateHashtag()) {
      setHashtagArray((prev) => [...prev, hashtagInput]);
      setHashtagInput("");
      inputRef.current.value = "";
      context.handleFilterOptions("hashtag", hashtagArray);
    }
  };
  //키보드 입력
  const inputRef = useRef<HTMLInputElement>(null);
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
      if (validateHashtag()) {
        validateHashtag();
        setHashtagArray((prev) => [...prev, hashtagInput]);
        setHashtagInput("");
        context.handleFilterOptions("hashtag", hashtagArray);
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
            {hashtagArray.map((i, index) => (
              <HashtagDeleteArea
                key={index}
                onClick={() => handleHashtagDelete(i)}
              >
                <CategoryTag contents={i} />
              </HashtagDeleteArea>
            ))}
          </HashtagContainer>
          <DeleteInfoMessage>해시태그를 클릭하면 삭제됩니다</DeleteInfoMessage>
        </InfoHashtagContainer>
      )}
    </HashtagArea>
  );
};

export default HashtagSearch;
