import styled from "@emotion/styled";
import { SvgIcon, SvgIconProps } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SearchBar from "../../components/search-bar/SearchBar";
import ContentList from "../../components/content/ContentList";
import { motion } from "framer-motion";
import SortBar from "../../components/sort-bar/SortBar";
import { createContext, useEffect, useState } from "react";
import { ContentType, SortType } from "../../types/Type";
import { NoComplaints } from "../../styles/NoComplaints";
import { FiltersProps, useFilter } from "../../hooks/useFilter";
import { SortOptionsProps, useSort } from "../../hooks/useSort";
import { usePagination } from "../../hooks/usePagination";
import Pagination from "../../components/Pagination";
import { complaintSearch } from "../../services/complaintService";
import Loading from "../../components/loading/Loading";

interface SearchDataProps {
  originData: ContentType[];
  filters: FiltersProps;
  handleFilterOptions: <K extends keyof FiltersProps>(
    option: K,
    value: FiltersProps[K]
  ) => void;
  handleFilter: () => void;
  handleSort: (inputData: ContentType[]) => void;
  sortOptions: SortOptionsProps;
  handleSortOption: (type: SortType) => void;
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
  align-items: center;
  width: 100%;
`;

export const SearchContext = createContext<SearchDataProps | undefined>(
  undefined
);

const Search = () => {
  //검색어 연동
  const params = new URLSearchParams(location.search);
  const [searchKeyword, setSearchKeyword] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);

  const NO_CONTENTS = "검색결과가 없습니다";

  const [originData, setOriginData] = useState([]);
  const { filteredData, handleFilter, handleFilterOptions, filters } =
    useFilter(originData);
  const { handleSort, sortOptions, handleSortOption, sortData } =
    useSort(filteredData);

  useEffect(() => {
    const SEARCH_KEYWORD = decodeURIComponent(params.get("keyword") || "");
    setSearchKeyword(SEARCH_KEYWORD);

    setIsLoading(true);
    complaintSearch(SEARCH_KEYWORD)
      .then((res) => setOriginData(res.data))
      .catch((error) => console.error(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    handleFilter();
  }, [filters, originData]);

  useEffect(() => {
    handleSort(filteredData);
  }, [sortOptions, filteredData, originData]);

  const isComplaintExist = !(filteredData.length == 0);

  const { currentPage, displayedData, totalPages, handlePageChange } =
    usePagination<ContentType>(sortData);

  return (
    <SearchContext.Provider
      value={{
        originData,
        handleFilter,
        filters,
        handleFilterOptions,
        handleSort,
        sortOptions,
        handleSortOption,
      }}
    >
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
              <SearchKeyword>"{searchKeyword}"</SearchKeyword>
            </AnimationContainer>
            <Title>민원 검색 결과</Title>
          </SearchTitleContainer>
          <SearchBar />
        </Background>

        <ContentContainer>
          <SortBar context={SearchContext} />
          {isLoading && <Loading />}
          {!isLoading && isComplaintExist ? (
            displayedData.map((i, index) => (
              <ContentList data={i} key={index} />
            ))
          ) : (
            <NoComplaints>{NO_CONTENTS}</NoComplaints>
          )}
        </ContentContainer>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </SearchArea>
    </SearchContext.Provider>
  );
};

export default Search;
