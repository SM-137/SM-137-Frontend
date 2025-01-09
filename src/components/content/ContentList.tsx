import styled from "@emotion/styled";
import StatusDisplay from "../status-button/StatusDisplay";
import CategoryTagGroup from "../category-tag/CategoryTagGroup";
import { Article, Title } from "../../styles/ContentStyle";
import { DataType } from "../../types/Type";
import InteractionGroup from "../interaction/InteractionGroup";

interface ContentListProps {
  data: DataType;
  resetTrigger?: boolean;
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

const ContentList = ({ data, resetTrigger }: ContentListProps) => {
  const ARTICLE_LINE = 2;
  return (
    <Container>
      <StatusContainer>
        <InfoContainer>
          <StatusDisplay type={data.status} />
          <CategoryTagGroup hashtag={data.hashtag} />
        </InfoContainer>
        <InteractionGroup
          likes={data.likes}
          bookmarks={data.bookmarks}
          resetTrigger={resetTrigger}
        />
      </StatusContainer>
      <Title>{data.title}</Title>
      <Article line={ARTICLE_LINE}>{data.content}</Article>
    </Container>
  );
};

export default ContentList;
