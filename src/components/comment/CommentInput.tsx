import styled from "@emotion/styled";
import Button from "../button/Button";
import { Icon } from "../../styles/CommentTitleStyle";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1.5rem;
  z-index: 10;
  border-radius: 4px;
  padding: 1rem;
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  border: 1px solid var(--gray3-border);
  border-radius: 4px;
  padding: 0.75rem 1rem;
  background-color: var(--white);
`;
const InputComment = styled.input`
  flex: 1;
  &:focus::placeholder {
    opacity: 0;
  }
  &:focus {
    outline: none;
    border: none;
  }
`;
const CommentInput = () => {
  const ICON_WIDTH = "20px";
  const FILL = "var(--disabled-primary)";
  return (
    <Container>
      <InputContainer>
        <Icon
          component={CommentRoundedIcon}
          sx={{ width: ICON_WIDTH, fill: FILL }}
        />
        <InputComment placeholder="댓글을 입력해 주세요" />
      </InputContainer>
      <Button type="_100x35_Primary" content="등록" />
    </Container>
  );
};

export default CommentInput;
