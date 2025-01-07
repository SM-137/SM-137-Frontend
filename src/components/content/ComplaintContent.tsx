import StatusDisplay from "../status-button/StatusDisplay";
import CategoryTagGroup from "../category-tag/CategoryTagGroup";
import InteractionGroup from "../interaction/InteractionGroup";
import { DataType } from "../../types/Type";
import { Article, Title } from "../../styles/ContentStyle";
import styled from "@emotion/styled";
import ShareIcon from "@mui/icons-material/Share";
import { SvgIcon, SvgIconProps } from "@mui/material";
import { getFormatTime } from "../../utils/FormattingTime";

interface ComplaintContentProps {
  data: DataType;
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
  justify-content: space-between;
  gap: 8px;
  font-size: 16px;
  color: var(--light-primary);
  font-weight: 600;
  margin-top: 8px;
`;

const Icon = styled(SvgIcon)<SvgIconProps>`
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

const InteractionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const InfoComment = styled.div`
  color: var(--gray4-placeholder-low);
`;

const EditDeleteButtonContainer = styled.div`
  display: flex;
  color: var(--gray4-placeholder-low);
  gap: 0.8rem;
`;
const EditDeleteButton = styled.pre`
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid var(--gray4-placeholder-low);
  }
`;

const Category = styled.span`
  color: var(--light-primary);
`;

const ComplaintContent = ({ data }: ComplaintContentProps) => {
  const date = new Date(data.date);
  const formatTime = getFormatTime(date);

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
          <Icon component={ShareIcon} />
        </InteractionContainer>
      </Header>

      <ComplaintNumber>
        {/*백엔드 field에 따라 민원번호 변동 필요*/}
        <Category>{data.category}</Category>
        민원번호 : 00910
      </ComplaintNumber>

      {/* Content */}
      <div>
        <Title>{data.title}</Title>
        <Article line={0}>{data.content}</Article>
      </div>

      {/* Footer */}
      <Footer>
        {!data.answer ? (
          <EditDeleteButtonContainer>
            <EditDeleteButton>수정</EditDeleteButton>
            <pre>|</pre>
            <EditDeleteButton>삭제</EditDeleteButton>
          </EditDeleteButtonContainer>
        ) : (
          <InfoComment>
            답변이 달린 이후에는 수정 및 삭제가 불가능합니다
          </InfoComment>
        )}
        <DateSection>{formatTime}</DateSection>
      </Footer>
    </Container>
  );
};

export default ComplaintContent;
