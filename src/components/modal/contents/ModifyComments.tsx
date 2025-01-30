import styled from "@emotion/styled";
import Button from "../../button/Button";

interface ModifyCommentsProps {
  handleSend: () => void;
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
const Comment = styled.pre`
  color: var(--light-primary);
`;
const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ModifyComments = ({ handleSend }: ModifyCommentsProps) => {
  const MODIFY_COMMENTS = "수정하시겠습니까?";

  return (
    <Container>
      <Comment>{MODIFY_COMMENTS}</Comment>
      <ButtonGroup>
        <Button styleType="_120x40_Gray2" content="취소" />
        <Button
          styleType="_120x40_Primary"
          content="완료"
          onClick={handleSend}
        />
      </ButtonGroup>
    </Container>
  );
};

export default ModifyComments;
