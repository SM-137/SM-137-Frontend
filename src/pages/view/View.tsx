import styled from "@emotion/styled";
import { SvgIcon, SvgIconProps } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CategorySelect from "../../components/category-select/CategorySelect";
import SearchFilterBar from "../../components/search-filter/SearchFilter";
import SortBar from "../../components/sort-bar/SortBar";
import ContentList from "../../components/content/ContentList";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { ContentType, SortType } from "../../types/Type";
import { NoComplaints } from "../../styles/NoComplaints";
import { FiltersProps, useFilter } from "../../hooks/useFilter";
import { SortOptionsProps, useSort } from "../../hooks/useSort";
import Pagination from "../../components/Pagination";
import { usePagination } from "../../hooks/usePagination";
import { complaintAll } from "../../services/complaintService";
import Loading from "../../components/loading/Loading";

interface ViewProps {
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
  setCategoryData: Dispatch<SetStateAction<undefined>>;
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
  padding-bottom: 3rem;
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
  const [originData, setOriginData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [resetButton, setResetButton] = useState(false);

  const { filteredData, handleFilter, handleFilterOptions, filters } =
    useFilter(originData);
  const { handleSort, sortOptions, handleSortOption, sortData } =
    useSort(filteredData);
  const [, setCategoryData] = useState();

  // 필터링이나 정렬이 변경되면 버튼 상태 리셋
  const handleResetButtonState = () => {
    setResetButton(true);
  };

  useEffect(() => {
    complaintAll({ categoryName: filters.category })
      .then((res) => {
        setOriginData(res.data);
        if (!res.data) {
          console.log("데이터가 없습니다");
          setOriginData([]);
        }
        setIsLoading(false);
      })
      .catch(() => {
        console.log("전체 민원 조회 데이터를 가져오는 중 오류 발생");
      });
  }, [filters.category]);

  useEffect(() => {
    handleFilter();
    handleResetButtonState();
  }, [filters]);

  useEffect(() => {
    handleSort(filteredData);
    handleResetButtonState();
  }, [sortOptions, filteredData]);

  const isComplaintExist = !(filteredData.length == 0);

  const { currentPage, totalPages, displayedData, handlePageChange } =
    usePagination<ContentType>(sortData);

  return (
    <ViewContext.Provider
      value={{
        originData,
        handleFilter,
        filters,
        handleFilterOptions,
        handleSort,
        sortOptions,
        handleSortOption,
        setCategoryData,
      }}
    >
      <Container>
        <Background>
          <TitleContainer>
            <Icon component={SearchRoundedIcon} />
            <Title>전체 민원 조회</Title>
          </TitleContainer>
          <CategorySelect usage="filter" />
        </Background>

        <ContentsContainer>
          <SearchFilterBar />
          {/*정렬 필터링 + 컨텐츠*/}
          <SortContainer>
            <SortBar context={ViewContext} />
            {/*로딩 중일 경우 로딩 컴포넌트 렌더링 */}
            {isLoading ? (
              <Loading />
            ) : isComplaintExist ? (
              displayedData.map((i, index) => (
                <ContentList data={i} key={index} resetTrigger={resetButton} />
              ))
            ) : (
              <NoComplaints>조건에 맞는 게시물이 없습니다</NoComplaints>
            )}
          </SortContainer>
        </ContentsContainer>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </Container>
    </ViewContext.Provider>
  );
};

export default View;
