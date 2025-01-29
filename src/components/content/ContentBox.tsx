import styled from "@emotion/styled";
import StatusDisplay from "../status-button/StatusDisplay";
import CategoryTagGroup from "../category-tag/CategoryTagGroup";
import { Article, Title } from "../../styles/ContentStyle";
import { ContentType } from "../../types/Type";
import { useNavigate } from "react-router-dom";

interface ContenteBoxProps {
  type: keyof typeof boxType;
  data: ContentType;
}
interface ContainerProps {
  width: string;
  height: string;
}

const boxType = {
  small: {
    width: "287px",
    height: "255px",
    flex: "column",
  },
  large: {
    width: "537px",
    height: "207px",
    flex: "row",
  },
};

const Container = styled.div<ContainerProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 0.6rem;
  background-color: var(--white);
  border: 1px solid var(--gray3-border);
  border-radius: 8px;
  padding: 24px;
  cursor: pointer;
  &:hover {
    border: 1px solid var(--gray4-placeholder-low);
  }
  @media screen and (max-width: 768px) {
    display: inline-flex;
    padding: 1rem;
    width: 100vw;
  }
`;
//진행상태 + 좋아요/스크랩
const StatusContainer = styled.div<{ flex: string }>`
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  gap: 0.65rem;
  flex-direction: ${(props) => props.flex};
  @media screen and (max-width: 480px) {
    flex-direction: row;
  }
`;

const ContentBox = ({ type = "small", data }: ContenteBoxProps) => {
  const boxStyle = boxType[type];
  const ARTICLE_LINE = 2;
  const navigate = useNavigate();

  return (
    <Container
      width={boxStyle.width}
      height={boxStyle.height}
      onClick={() =>
        navigate(`/complaint-detail?complaintId=${data.complaintId}`)
      }
    >
      <StatusContainer flex={boxStyle.flex}>
        <StatusDisplay type={data.complaintStatus} />
      </StatusContainer>
      <CategoryTagGroup hashtag={[data.tag]} />
      <Title>{data.complaintTitle}</Title>
      <Article line={ARTICLE_LINE}>{data.contentProb}</Article>
    </Container>
  );
};

export default ContentBox;
