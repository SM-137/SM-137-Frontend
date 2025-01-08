import styled from "@emotion/styled";
import { SvgIcon, SvgIconProps } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CategorySelect from "../../components/category-select/CategorySelect";
import SearchFilterBar from "../../components/search-filter/SearchFilter";
import SortBar from "../../components/sort-bar/SortBar";
import { mockData } from "../../mockData";
import ContentList from "../../components/content/ContentList";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { DataType, SortType } from "../../types/Type";
import { NoComplaints } from "../../styles/NoComplaints";
import { FiltersProps, useFilter } from "../../hooks/useFilter";
import { SortOptionsProps, useSort } from "../../hooks/useSort";

interface ViewProps {
  originData: DataType[];
  filters: FiltersProps;
  setFilters: Dispatch<SetStateAction<any>>;
  handleFilter: () => void;
  handleSort: (inputData: DataType[]) => void;
  sortOptions: SortOptionsProps;
  handleSortOption: (type: SortType) => void;
}

const Container = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
const Background = styled.div`
  width: 100%;
  background-color: var(--primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 4rem;
  gap: 2rem;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;
const Title = styled.h2`
  color: var(--white);
`;
const Icon = styled(SvgIcon)<SvgIconProps>`
  fill: var(--disabled-primary);
  width: 30px;
  height: 30px;
`;
const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  transform: translateY(-3vw);
  width: 100%;
  max-width: 1114px;
`;
const SortContainer = styled.div`
  width: 100%;
`;

export const ViewContext = createContext<ViewProps | undefined>(undefined);

const View = () => {
  const [originData] = useState(mockData);

  const { filteredData, handleFilter, setFilters, filters } =
    useFilter(originData);
  const { handleSort, sortOptions, handleSortOption, sortData } =
    useSort(filteredData);

  const isComplaintExist = !(filteredData.length == 0);

  useEffect(() => {
    handleFilter();
  }, [filters]);

  useEffect(() => {
    handleSort(filteredData);
  }, [sortOptions, filteredData]);

  return (
    <ViewContext.Provider
      value={{
        originData,
        handleFilter,
        filters,
        setFilters,
        handleSort,
        sortOptions,
        handleSortOption,
      }}
    >
      <Container>
        <Background>
          <TitleContainer>
            <Icon component={SearchRoundedIcon} />
            <Title>전체 민원 조회</Title>
          </TitleContainer>
          <CategorySelect />
        </Background>

        <ContentsContainer>
          <SearchFilterBar />
          {/*정렬 필터링 + 컨텐츠*/}
          <SortContainer>
            <SortBar context={ViewContext} />
            {isComplaintExist ? (
              sortData.map((i, index) => <ContentList data={i} key={index} />)
            ) : (
              <NoComplaints>조건에 맞는 게시물이 없습니다</NoComplaints>
            )}
          </SortContainer>
        </ContentsContainer>
      </Container>
    </ViewContext.Provider>
  );
};

export default View;
