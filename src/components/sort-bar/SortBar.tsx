import styled from "@emotion/styled";
import DropDown from "../drop-down/DropDown";
import SortStandard from "./sort-standard/SortStandard";
import { useContext, useState } from "react";
import { SearchContext } from "../../pages/complaint-search/ComplaintSearch";

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
  const [isClick, setIsClick] = useState({
    latest: false,
    scrap: false,
    likes: false,
  });
  const { setSearchData } = useContext(SearchContext);

  const handleClick = (type: "latest" | "scrap" | "likes") => {
    setIsClick(() => ({
      latest: false,
      scrap: false,
      likes: false,
      [type]: true,
    }));

    if (type === "scrap") {
      setSearchData((prev) => {
        return [...prev].sort((a, b) => {
          return b.bookmarks - a.bookmarks;
        });
      });
    }
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
      <DropDown options={OPTION} />
    </Container>
  );
};

export default SortBar;
