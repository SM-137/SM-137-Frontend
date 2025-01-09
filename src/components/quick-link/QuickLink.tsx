import styled from "@emotion/styled";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import SmsRoundedIcon from "@mui/icons-material/SmsRounded";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import QuickLinkItem from "./QuickLinkItem";
import { MY_COMPLAINT_URL, MY_SCRAP_URL, VIEW_URL } from "../../utils/URL";

const QuickLinkWrapper = styled.div`
  display: inline-flex;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: var(--gray1-background);
  width: 100%;
  cursor: pointer;
`;

const QuickLinkDisplay = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const QuickLink = () => {
  return (
    <QuickLinkWrapper>
      <QuickLinkDisplay>
        <QuickLinkItem
          icon={LibraryBooksRoundedIcon}
          text="전체 민원 조회"
          url={VIEW_URL}
        />
        <QuickLinkItem
          icon={AccountBoxRoundedIcon}
          text="내 민원"
          url={MY_COMPLAINT_URL}
        />
      </QuickLinkDisplay>
      <QuickLinkDisplay>
        <QuickLinkItem icon={SmsRoundedIcon} text="스크랩" url={MY_SCRAP_URL} />
        <QuickLinkItem icon={CreateRoundedIcon} text="민원 신청" url="/" />
      </QuickLinkDisplay>
    </QuickLinkWrapper>
  );
};

export default QuickLink;
