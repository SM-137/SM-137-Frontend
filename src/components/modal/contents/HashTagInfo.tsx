import styled from "@emotion/styled";
import Button from "../../button/Button";
import InfoMessage from "../../info-message/InfoMessage";
import RecHashTag from "../../rec-hashtag/RecHashTag";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  width: 100%;
  max-width: 500px;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const INFO_MESSAGE_TEXT =
  "해시태그를 선택해 민원의 분류를 도와주세요 (최대 3개)";
const SUB_MESSAGE_TEXT = "다음은 민원글을 분석한 추천 해시태그입니다";

interface HashtagInfoProps {
  contentTotal: string;
  handleModalStep: () => void;
}

const HashTagInfo = ({ contentTotal, handleModalStep }: HashtagInfoProps) => {
  return (
    <Container>
      <MessageContainer>
        <InfoMessage
          sizeType="small"
          messageType="info"
          content={INFO_MESSAGE_TEXT}
        />
        <div style={{ color: "var(--gray4-placeholder-low)" }}>
          {SUB_MESSAGE_TEXT}
        </div>
      </MessageContainer>
      <RecHashTag contentTotal={contentTotal} />
      <ButtonGroup>
        <Button
          content="제출"
          styleType="_120x40_Primary"
          onClick={handleModalStep}
        />
      </ButtonGroup>
    </Container>
  );
};

export default HashTagInfo;
