import styled from "@emotion/styled";
import DropDown from "../drop-down/DropDown";
import SortStandard from "./sort-standard/SortStandard";
import { useContext } from "react";
import { SearchContext } from "../../pages/search/Search";
import { useSort } from "../../hooks/useSort";

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

const SortBar = () => {
  const OPTION = ["1개월", "3개월", "6개월"];
  // sort할 데이터를 변경하는 set함수
  const { setSearchData } = useContext(SearchContext);

  const { isClick, handleStandard } = useSort(setSearchData);

  return (
    <Container>
      <SortOptionContainer>
        <SortStandard
          type="latest"
          isClick={isClick.latest}
          handleClick={handleStandard}
        />
        <Divide>|</Divide>
        <SortStandard
          type="scrap"
          isClick={isClick.scrap}
          handleClick={handleStandard}
        />
        <Divide>|</Divide>
        <SortStandard
          type="likes"
          isClick={isClick.likes}
          handleClick={handleStandard}
        />
      </SortOptionContainer>
      <DropDown options={OPTION} />
    </Container>
  );
};

export default SortBar;
