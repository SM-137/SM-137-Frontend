import styled from "@emotion/styled";
import Button from "../../button/Button";

interface DeleteCommentProps {
  handleClose: () => void;
  handleCancel: () => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;
const Comment = styled.pre`
  color: var(--light-primary);
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const DeleteComment = ({ handleClose, handleCancel }: DeleteCommentProps) => {
  const DELETE_COMMENT = "해당 게시물을 삭제하시겠습니까?";
  //handleClose 가 아닌, delete와 관련된 로직을 입력해야함

  return (
    <Container>
      <Comment>{DELETE_COMMENT}</Comment>
      <ButtonContainer>
        <Button type="_100x35_Gray2" content="취소" onClick={handleCancel} />
        <Button type="_100x35_Primary" content="삭제" onClick={handleClose} />
      </ButtonContainer>
    </Container>
  );
};

export default DeleteComment;
