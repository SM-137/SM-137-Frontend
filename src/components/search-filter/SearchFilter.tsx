import styled from "@emotion/styled";
import StatusButtonGroup from "../status-button/StatusButtonGroup";
import HashtagSearch from "./HashtagSearch";

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

const StatusButtonGroupContainer = styled.div`
  display: flex;
`;

const SearchFilterBar = () => {
  return (
    <Container>
      {/* 왼쪽 서치바 */}
      <HashtagSearch />

      {/* 오른쪽 상태 버튼 그룹 */}
      <StatusButtonGroupContainer>
        <StatusButtonGroup usage="filter" />
      </StatusButtonGroupContainer>
    </Container>
  );
};

export default SearchFilterBar;
