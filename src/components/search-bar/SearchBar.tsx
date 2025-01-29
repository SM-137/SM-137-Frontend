import styled from "@emotion/styled";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--white);
  border-radius: 500px;
  padding: 0.5rem 1rem;
  width: 400px;
  height: 35px;
`;

const SearchBar = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const navigate = useNavigate();
  const handleSearch = () => {
    const SEARCH_URL = `/complaint-search?keyword=${searchKeyword}`;
    navigate(SEARCH_URL);
  };

  return (
    <BarContainer>
      <SearchInput
        handleKeyword={handleKeyword}
        handleKeyDown={handleKeyDown}
      />
      <SearchButton handleSearch={handleSearch} />
    </BarContainer>
  );
};

export default SearchBar;
