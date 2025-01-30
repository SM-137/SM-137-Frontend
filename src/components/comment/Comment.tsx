import styled from "@emotion/styled";
import {
  CommentTitle,
  CommentTitleContainer,
  Icon,
} from "../../styles/CommentTitleStyle";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import Interaction from "../interaction/Interaction";
import { getFormatTime } from "../../utils/FormattingTime";
import { CommentType } from "../../types/Type";

interface CommentProps {
  data: CommentType;
  index: number;
}

const Container = styled.div`
  width: 100%;
  background-color: var(--white);
  border-radius: 4px;
  padding: 0.75rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

/*contents + time */
const ContentsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 2rem;
  width: 100%;
`;
const Contents = styled.div`
  color: var(--gray5-lowText);
`;
const Time = styled.pre`
  color: var(--gray4-placeholder-low);
`;

const Comment = ({ data, index }: CommentProps) => {
  const COMMENT_COLOR = "var(--disabled-primary)";
  const ICON_WIDTH = "20px";

  const date = new Date(data.createdAt);
  const formatTime = getFormatTime(date);
  return (
    <Container>
      <InfoContainer>
        <CommentTitleContainer>
          <Icon
            component={CommentRoundedIcon}
            sx={{ fill: COMMENT_COLOR, width: ICON_WIDTH }}
          />
          <CommentTitle>댓글 {index}</CommentTitle>
        </CommentTitleContainer>
        <Interaction
          type="likes"
          count={data.likeCount}
          isIconClicked={data.isLiked}
          commentId={data.commentId}
        />
      </InfoContainer>

      {/*컨텐츠 + 시간*/}
      <ContentsContainer>
        <Contents>{data.content}</Contents>
        <Time>{formatTime}</Time>
      </ContentsContainer>
    </Container>
  );
};

export default Comment;
