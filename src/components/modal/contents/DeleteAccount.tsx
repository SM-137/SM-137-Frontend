import styled from "@emotion/styled";
import Button from "../../button/Button";
import { deleteAccount } from "../../../services/userService";
import { useNavigate } from "react-router-dom";
import { deleteJWTToken } from "../../../utils/JWT";

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

const DeleteAccount = ({ handleCancel }: DeleteCommentProps) => {
  const DELETE_COMMENT = "정말 탈퇴하시겠습니까?";

  const navigate = useNavigate();
  const handleDeleteAccount = () => {
    deleteAccount()
      .then(() => {
        navigate("/login");
        deleteJWTToken();
      })
      .catch((error) => console.error(error));
  };

  return (
    <Container>
      <Comment>{DELETE_COMMENT}</Comment>
      <ButtonContainer>
        <Button
          styleType="_100x35_Gray2"
          content="취소"
          onClick={handleCancel}
        />
        <Button
          styleType="_100x35_Primary"
          content="탈퇴"
          onClick={handleDeleteAccount}
        />
      </ButtonContainer>
    </Container>
  );
};

export default DeleteAccount;
