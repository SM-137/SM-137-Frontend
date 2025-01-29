import styled from "@emotion/styled";
import ComplaintsForm from "../../components/form/ComplaintsForm";
import Button from "../../components/button/Button";
import ApplicationLayout from "./ApplicationLayout";
import { ContentWrapper } from "../../styles/ApplyStyles";
import { useState } from "react";
import useComplaintStore from "../../store/useComplaintStore";
import { AlertContainer } from "../../styles/AlertStyles";
import Alert from "../../components/alert/Alert";

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin: 2rem 0;
`;

const TitleMessage = styled.span`
  color: var(--gray6-header);
  text-align: center;
  font-size: 1.2rem;
  line-height: 0;
`;

const InfoMessage = styled.p`
  font-size: 14px;
  color: var(--error);
  text-align: center;
  margin-top: 0.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  gap: 1rem;
`;

const ComplaintsWrittingStep = () => {
  const INVALID_CONTENT_MESSAGE = "필수 항목을 모두 작성해 주세요";
  const {
    title,
    contentProb,
    contentDir,
    contentExpect,
    categoryName,
    tagName,
    attachment,
  } = useComplaintStore();

  const [isEssentialWrite, setIsEssentialWrite] = useState({
    title: true,
    contentProb: true,
    contentDir: true,
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = () => {
    const isValidTitle = title.length !== 0;
    const isValidContentProb = contentProb.length !== 0;
    const isValidContentDir = contentDir.length !== 0;

    setIsEssentialWrite({
      title: true,
      contentDir: true,
      contentProb: true,
    });
    setShowAlert(false);
    if (!isValidTitle) {
      setIsEssentialWrite((prev) => ({ ...prev, title: false }));
    }
    if (!isValidContentProb) {
      setIsEssentialWrite((prev) => ({ ...prev, contentProb: false }));
    }
    if (!isValidContentDir) {
      setIsEssentialWrite((prev) => ({ ...prev, contentDir: false }));
    }
    if (!isValidTitle || !isValidContentDir || !isValidContentProb) {
      setShowAlert(true);
    }
  };

  return (
    <ApplicationLayout activeStep={3}>
      {showAlert && (
        <AlertContainer top="18rem">
          <Alert content={INVALID_CONTENT_MESSAGE} type="warning" />
        </AlertContainer>
      )}

      <ContentWrapper>
        <MessageContainer>
          <TitleMessage>민원의 세부내용을 작성해 주세요</TitleMessage>
          <InfoMessage>* 표시는 필수항목입니다</InfoMessage>
        </MessageContainer>
        <ComplaintsForm isEssentialWrite={isEssentialWrite} />
        <ButtonGroup>
          <Button content="이전" styleType="_120x40_Gray2" />
          <Button
            content="다음"
            styleType="_120x40_Primary"
            type="submit"
            onClick={handleSubmit}
          />
        </ButtonGroup>
      </ContentWrapper>
    </ApplicationLayout>
  );
};

export default ComplaintsWrittingStep;
