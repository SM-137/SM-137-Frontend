import styled from "@emotion/styled";
import Button from "../../button/Button";

interface DeleteCommentProps {
  handleClose: () => void;
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

const DeleteComment = ({ handleClose }: DeleteCommentProps) => {
  const DELETE_COMMENT = "해당 게시물을 삭제하시겠습니까?";

  return (
    <Container>
      <Comment>{DELETE_COMMENT}</Comment>
      <Button type="_100x35_Primary" content="삭제" onClick={handleClose} />
    </Container>
  );
};

export default DeleteComment;
