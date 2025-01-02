import styled from "@emotion/styled";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import { useState } from "react";

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
  return (
    <BarContainer>
      <SearchInput handleKeyword={handleKeyword} />
      <SearchButton searchKeyword={searchKeyword} />
    </BarContainer>
  );
};

export default SearchBar;
