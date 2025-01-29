import styled from "@emotion/styled";
import StatusDisplay from "../status-button/StatusDisplay";
import CategoryTagGroup from "../category-tag/CategoryTagGroup";
import { Article, Title } from "../../styles/ContentStyle";
import { ContentType } from "../../types/Type";
import { useNavigate } from "react-router-dom";

interface ContentListProps {
  data: ContentType;
}

const Container = styled.div`
  width: 1114px;
  height: 173px;
  padding: 1.5rem 3rem;
  border-bottom: 1px solid var(--gray3-border);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.3rem;
  cursor: pointer;
  &:hover {
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;
//진행상태 + 배열 버튼
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`;
//InfoContainer + 좋아요/스크랩/공유
const StatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContentList = ({ data }: ContentListProps) => {
  const ARTICLE_LINE = 2;

  const navigate = useNavigate();
  return (
    <Container
      onClick={() =>
        navigate(`/complaint-detail?complaintId=${data.complaintId}`)
      }
    >
      <StatusContainer>
        <InfoContainer>
          <StatusDisplay type={data.complaintStatus} />
          {data.tag && <CategoryTagGroup hashtag={[data.tag]} />}
        </InfoContainer>
      </StatusContainer>
      <Title>{data.complaintTitle}</Title>
      <Article line={ARTICLE_LINE}>{data.contentProb}</Article>
    </Container>
  );
};

export default ContentList;
