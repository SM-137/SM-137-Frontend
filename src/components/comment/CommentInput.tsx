import styled from "@emotion/styled";
import Button from "../button/Button";
import { Icon } from "../../styles/CommentTitleStyle";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import { useState } from "react";
import { complaintCommentsWrite } from "../../services/complaintService";

interface CommentInputProps {
  handleIsCommentAdd: () => void;
}

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
const CommentInput = ({ handleIsCommentAdd }: CommentInputProps) => {
  const ICON_WIDTH = "20px";
  const FILL = "var(--disabled-primary)";

  const urlParams = new URLSearchParams(window.location.search);
  const complaintId = Number(urlParams.get("complaintId"));

  const [commentContent, setCommentContent] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentContent(e.target.value);
  };
  const handleSubmit = () => {
    complaintCommentsWrite(complaintId, commentContent)
      .then(() => {
        handleIsCommentAdd();
        setCommentContent("");
      })
      .catch((error) => console.error(error));
  };

  //엔터 입력시 제출
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && commentContent.trim() !== "") {
      handleSubmit();
    }
  };

  return (
    <Container>
      <InputContainer>
        <Icon
          component={CommentRoundedIcon}
          sx={{ width: ICON_WIDTH, fill: FILL }}
        />
        <InputComment
          value={commentContent}
          placeholder="댓글을 입력해 주세요"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </InputContainer>
      <Button type="_100x35_Primary" content="등록" onClick={handleSubmit} />
    </Container>
  );
};

export default CommentInput;
