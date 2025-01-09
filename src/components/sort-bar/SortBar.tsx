import styled from "@emotion/styled";
import DropDown from "../drop-down/DropDown";
import SortStandard from "./sort-standard/SortStandard";
import { useSort } from "../../hooks/useSort";
import { useContext } from "react";
import { SortType } from "../../types/Type";

interface SortBarProps {
  context: React.Context<any>;
}

const Container = styled.div`
  max-width: 1114px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid var(--gray2-subbtn);
  padding-bottom: 1rem;
`;
const SortOptionContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
const Divide = styled.pre`
  color: var(--gray4-placeholder-low);
`;

const SortBar = ({ context }: SortBarProps) => {
  const { setFilteredData, setSortOption } = useContext(context);

  const { handleSort, isClick } = useSort(setFilteredData);
  const handleClick = (type: SortType) => {
    handleSort(type);
    setSortOption(type);
  };
  return (
    <Container>
      <SortOptionContainer>
        <SortStandard
          type="latest"
          isClick={isClick.latest}
          handleClick={handleClick}
        />
        <Divide>|</Divide>
        <SortStandard
          type="scrap"
          isClick={isClick.scrap}
          handleClick={handleClick}
        />
        <Divide>|</Divide>
        <SortStandard
          type="likes"
          isClick={isClick.likes}
          handleClick={handleClick}
        />
      </SortOptionContainer>
      <DropDown context={context} />
    </Container>
  );
};

export default SortBar;
