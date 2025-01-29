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

const InfoMessageText = "해시태그를 선택해 민원의 분류를 도와주세요";
const SubMessageText = "다음은 민원글을 분석한 추천 해시태그입니다";

interface InitialInfoProps {
  handleClose: () => void;
}

const HashTagInfo = ({ handleClose }: InitialInfoProps) => {
  return (
    <Container>
      <MessageContainer>
        <InfoMessage
          sizeType="small"
          messageType="info"
          content={InfoMessageText}
        />
        <div style={{ color: "var(--gray4-placeholder-low)" }}>
          {SubMessageText}
        </div>
      </MessageContainer>
      <RecHashTag />
      <ButtonGroup>
        <Button
          content="이전"
          styleType="_120x40_Gray2"
          onClick={handleClose}
        />
        <Button
          content="다음"
          styleType="_120x40_Primary"
          onClick={handleClose}
        />
      </ButtonGroup>
    </Container>
  );
};

export default HashTagInfo;
