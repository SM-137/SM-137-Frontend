import StatusDisplay from "../status-button/StatusDisplay";
import CategoryTagGroup from "../category-tag/CategoryTagGroup";
import InteractionGroup from "../interaction/InteractionGroup";
import { StatusType } from "../../types/Type";
import { Article, Title } from "../../styles/ContentStyle";
import styled from "@emotion/styled";
import CheckCircle from "@mui/icons-material/CheckCircle";
import ShareIcon from "@mui/icons-material/Share";
import { SvgIcon, SvgIconProps } from "@mui/material";

interface ComplaintContentProps {
  data: {
    title: string;
    status: StatusType;
    hashtag: string[];
    content: string;
    likes: number;
    bookmarks: number;
    date: string;
  };
}

const Container = styled.div`
  max-width: 782px;
  background: var(--white);
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ComplaintNumber = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  color: var(--light-primary);
  font-weight: 600;
  margin-top: 8px;
`;

const CheckIcon = styled(CheckCircle)`
  color: var(--disabled-primary);
`;

const UnClickIcon = styled(SvgIcon)<SvgIconProps>`
  width: 24px;
  height: 24px;
  fill: var(--gray5-lowText);
  cursor: pointer;
  &:hover {
    fill: var(--gray6-header);
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const DateSection = styled.div`
  font-size: 16px;
  color: var(--gray4-placeholder-low);
  text-align: right;
`;

const Actions = styled.div`
  display: flex;
  gap: 16px;
  font-size: 16px;
  color: var(--gray4-placeholder-low);
  cursor: pointer;

  div {
    position: relative;
  }

  div:hover::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0px;
    width: 100%;
    height: 1px;
    background: var(--gray4-placeholder-low);
  }
`;

const InteractionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ComplaintContent = ({ data }: ComplaintContentProps) => {
  return (
    <Container>
      {/* Header */}
      <Header>
        <HeaderContent>
          <StatusDisplay type={data.status} />
          <CategoryContainer>
            {data.hashtag.map((hashtag, index) => (
              <CategoryTagGroup key={index} hashtag={[hashtag]} />
            ))}
          </CategoryContainer>
        </HeaderContent>
        <InteractionContainer>
          <InteractionGroup likes={data.likes} bookmarks={data.bookmarks} />
          <UnClickIcon component={ShareIcon} />
        </InteractionContainer>
      </Header>

      <ComplaintNumber>
        <CheckIcon /> 민원번호 : 00910
      </ComplaintNumber>

      {/* Content */}
      <div>
        <Title>{data.title}</Title>
        <Article line={0}>{data.content}</Article>
      </div>

      {/* Footer */}
      <Footer>
        <Actions>
          <div>수정</div>
          <div>삭제</div>
        </Actions>
        <DateSection>{data.date}</DateSection>
      </Footer>
    </Container>
  );
};

export default ComplaintContent;
