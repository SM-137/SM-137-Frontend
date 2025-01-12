import styled from "@emotion/styled";
import StatusButtonGroup from "../../components/status-button/StatusButtonGroup";

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: var(--gray1-background);
  border-radius: 50rem;
  padding: 1rem 2rem;
  z-index: 1;
`;

const ComplaintFilterBar = () => {
  return (
    <FilterContainer>
      <StatusButtonGroup usage="filter" />
    </FilterContainer>
  );
};

export default ComplaintFilterBar;
