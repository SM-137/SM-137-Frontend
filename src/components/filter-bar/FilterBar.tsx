import styled from "@emotion/styled";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";
import StatusButtonGroup from "../status-button/StatusButtonGroup";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 28px;
  border-radius: 500px;
  gap: 16px;
  background-color: var(--gray1-background);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 16px 20px;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 352px;
  height: 35px;
  border-radius: 500px;
  background-color: var(--white);
  padding: 0 10px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 80%;
    height: 35px;
  }
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  flex-grow: 1;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: -0.02em;
  padding: 0 10px;
  color: var(--gray5-lowText);
  min-width: 0;

  &::placeholder {
    color: var(--gray4-placeholder-low);
  }
`;

const SearchTextWrapper = styled.div`
  color: var(--gray6-header);
  margin-right: 8px;
  margin-left: 8px;
  white-space: nowrap;
  line-height: 1.5rem;
`;

const FilterIcon = styled(FilterAltRoundedIcon)`
  color: var(--gray5-lowText);
  cursor: pointer;
  flex-shrink: 0;
`;

const StatusButtonGroupContainer = styled.div`
  display: flex;
  white-space: nowrap;
  align-items: center;
  height: 35px;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const FilterBar = () => {
  return (
    <Container>
      {/* 왼쪽 해시태그 검색 */}
      <SearchBar>
        <SearchTextWrapper>해시태그</SearchTextWrapper>
        <SearchInput placeholder="졸업" />
        <FilterIcon />
      </SearchBar>

      {/* 오른쪽 상태 버튼 그룹 */}
      <StatusButtonGroupContainer>
        <StatusButtonGroup />
      </StatusButtonGroupContainer>
    </Container>
  );
};

export default FilterBar;
