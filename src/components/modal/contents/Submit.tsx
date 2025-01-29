import styled from "@emotion/styled";
import InfoMessage from "../../info-message/InfoMessage";
import Button from "../../button/Button";
import { complaintWrite } from "../../../services/complaintService";
import useComplaintStore from "../../../store/useComplaintStore";
import { useNavigate } from "react-router-dom";

interface SubmitProps {
  handleModalClose: () => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Submit = ({ handleModalClose }: SubmitProps) => {
  const {
    title,
    contentProb,
    contentDir,
    contentExpect,
    categoryName,
    tagName,
    attachments,
  } = useComplaintStore();
  const sendData = {
    title: title,
    contentDir: contentDir,
    contentProb: contentProb,
    contentExpect: contentExpect,
    categoryName: categoryName,
    tagName: tagName,
    attachments: attachments,
  };

  const navigate = useNavigate();
  const handleSubmit = () => {
    complaintWrite(sendData)
      .then((res) => {
        console.log(res);
        navigate("/complaint-request/4");
      })
      .catch((error) => console.error(error));
  };

  return (
    <Container>
      <InfoMessage
        content="제출하시겠습니까?"
        sizeType="small"
        messageType="info"
      />
      <ButtonContainer>
        <Button
          content="제출"
          styleType="_120x40_Primary"
          onClick={handleSubmit}
        />
        <Button
          content="취소"
          styleType="_120x40_Gray2"
          onClick={handleModalClose}
        />
      </ButtonContainer>
    </Container>
  );
};

export default Submit;
