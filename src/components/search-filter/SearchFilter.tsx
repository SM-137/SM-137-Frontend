import styled from "@emotion/styled";
import FilterListIcon from "@mui/icons-material/FilterList";
import StatusButtonGroup from "../status-button/StatusButtonGroup"; // StatusButtonGroup 경로에 맞게 수정

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
`;

const FilterIcon = styled(FilterListIcon)`
  color: gray5-lowText;
  cursor: pointer;
`;

const StatusButtonGroupContainer = styled.div`
  display: flex;
`;

const SearchFilterBar = () => {
  return (
    <Container>
      {/* 왼쪽 서치바 */}
      <SearchBar>
        <SearchText>해시태그</SearchText>
        <SearchInput placeholder="졸업" />
        <FilterIcon />
      </SearchBar>

      {/* 오른쪽 상태 버튼 그룹 */}
      <StatusButtonGroupContainer>
        <StatusButtonGroup usage="filter" />
      </StatusButtonGroupContainer>
    </Container>
  );
};

export default SearchFilterBar;
