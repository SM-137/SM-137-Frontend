import styled from "@emotion/styled";
import ComplaintContent from "../../components/content/ComplaintContent";
import { commentMockData, mockData } from "../../mockData";
import Comment from "../../components/comment/Comment";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import {
  CommentTitle,
  CommentTitleContainer,
  Icon,
} from "../../styles/CommentTitleStyle";
import CommentInput from "../../components/comment/CommentInput";
import Answer from "../../components/answer/Answer";

const Container = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
`;
const Background = styled.div`
  width: 100%;
  background-color: var(--gray1-background);
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  flex: 1;
  padding-bottom: 9rem;
`;
const CommentContainer = styled.div`
  width: 782px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const InputBackground = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  background-color: var(--white);
  padding: 0.75rem 0;
`;
const InputContainer = styled.div`
  width: 782px;
`;
const AnswerContainer = styled.div`
  max-width: 782px;
  width: 100%;
`;

const Detail = () => {
  //임시 데이터
  const MOCK_DATA = mockData[0];
  const isAnswered = MOCK_DATA.answer.length != 0;
  //length로 data의 개수를 계산하여 삽입 예정
  const COUNT = commentMockData.length;

  const TITLE_COLOR = "var(--gray6-black)";
  const ICON_WIDTH = "24px";
  const INDEX_OFFSET = 1;

  return (
    <Container>
      <ComplaintContent data={MOCK_DATA} />

      {/*관리자 답변 */}
      {isAnswered && (
        <AnswerContainer>
          <Answer data={MOCK_DATA.answer} />
        </AnswerContainer>
      )}

      <Background>
        <CommentContainer>
          <CommentTitleContainer>
            <Icon
              sx={{ fill: TITLE_COLOR, width: ICON_WIDTH }}
              component={CommentRoundedIcon}
            />
            <CommentTitle>댓글 {COUNT}</CommentTitle>
          </CommentTitleContainer>
          {commentMockData.map((i, index) => (
            <Comment data={i} index={index + INDEX_OFFSET} key={index} />
          ))}
        </CommentContainer>
      </Background>

      <InputBackground>
        <InputContainer>
          <CommentInput />
        </InputContainer>
      </InputBackground>
    </Container>
  );
};

export default Detail;
