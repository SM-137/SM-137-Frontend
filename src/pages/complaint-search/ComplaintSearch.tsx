import styled from "@emotion/styled";
import { SvgIcon, SvgIconProps } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SearchBar from "../../components/search-bar/SearchBar";
import ContentList from "../../components/content/ContentList";
import { mockData } from "../../mockData";
import { motion } from "framer-motion";
import SortBar from "../../components/sort-bar/SortBar";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { DataType } from "../../types/Type";

interface SearchDataProps {
  searchData: DataType[];
  setSearchData: Dispatch<SetStateAction<DataType[]>>;
}
const SearchArea = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;
const Background = styled.div`
  width: 100%;
  background-color: var(--primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  gap: 2rem;
`;
const SearchIcon = styled(SvgIcon)<SvgIconProps>`
  fill: var(--disabled-primary);
  width: 30px;
  height: 30px;
`;
const SearchTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
`;
const SearchKeyword = styled.h1`
  color: var(--white);
`;
const Title = styled.h2`
  color: var(--gray3-border);
`;
const AnimationContainer = styled(motion.div)``;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchContext = createContext<SearchDataProps>({
  searchData: mockData,
  setSearchData: () => {},
});

const ComplaintSearch = () => {
  //검색어 임시
  const SEARCH_KEYWORD = "도서관 냉난방";
  const [searchData, setSearchData] = useState(mockData);
  return (
    <SearchContext.Provider value={{ searchData, setSearchData }}>
      <SearchArea>
        <Background>
          <SearchTitleContainer>
            <SearchIcon component={SearchRoundedIcon} />
            <AnimationContainer
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
            >
              <SearchKeyword>"{SEARCH_KEYWORD}"</SearchKeyword>
            </AnimationContainer>
            <Title>민원 검색 결과</Title>
          </SearchTitleContainer>
          <SearchBar />
        </Background>

        <ContentContainer>
          <SortBar />
          {searchData.map((i, index) => (
            <ContentList data={i} key={index} />
          ))}
        </ContentContainer>
      </SearchArea>
    </SearchContext.Provider>
  );
};

export default ComplaintSearch;
