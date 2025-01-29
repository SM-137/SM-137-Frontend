import styled from "@emotion/styled";
import useComplaintStore from "../../../store/useComplaintStore";
import { useState } from "react";
import { ContentWrapper } from "../../../styles/ApplyStyles";
import ComplaintsForm from "../../../components/form/ComplaintsForm";
import Button from "../../../components/button/Button";
import Alert from "../../../components/alert/Alert";
import { AlertContainer } from "../../../styles/AlertStyles";
import ApplicationLayout from "../ApplicationLayout";
import Modal from "../../../components/modal/Modal";
import HashTagInfo from "../../../components/modal/contents/HashTagInfo";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../../hooks/useModal";
import Submit from "../../../components/modal/contents/Submit";

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
  const PREV_URL = "../2";
  const INVALID_CONTENT_MESSAGE = "필수 항목을 모두 작성해 주세요";

  const { title, contentProb, contentDir, contentExpect } = useComplaintStore();

  const [isEssentialWrite, setIsEssentialWrite] = useState({
    title: true,
    contentProb: true,
    contentDir: true,
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleValid = () => {
    const isValidTitle = title.length !== 0;
    const isValidContentProb = contentProb.length !== 0;
    const isValidContentDir = contentDir.length !== 0;

    setIsEssentialWrite({
      title: true,
      contentDir: true,
      contentProb: true,
    });
    setShowAlert(false);

    if (!isValidTitle || !isValidContentDir || !isValidContentProb) {
      setIsEssentialWrite((prev) => ({
        ...prev,
        title: isValidTitle,
        contentProb: isValidContentProb,
        contentDir: isValidContentDir,
      }));
      setShowAlert(true);
      return false;
    }
    return true;
  };

  const navigate = useNavigate();
  const handlePrev = () => {
    navigate(PREV_URL);
  };

  const handleNext = () => {
    if (handleValid()) {
      handleModalOpen();
    }
  };

  const [modalStep, setModalStep] = useState(1);
  //해시태그 선택 -> 제출 모달 변경
  const handleModalStep = () => {
    setModalStep(2);
  };
  const { handleModalClose, handleModalOpen, isModalOpen } = useModal();
  const contentTotal = contentProb + contentDir + contentExpect;

  return (
    <ApplicationLayout activeStep={3}>
      {isModalOpen && modalStep === 1 ? (
        <Modal
          contents={
            <HashTagInfo
              contentTotal={contentTotal}
              handleModalStep={handleModalStep}
            />
          }
          isOpen={isModalOpen}
          handleClose={handleModalClose}
        />
      ) : isModalOpen && modalStep === 2 ? (
        <Modal
          contents={<Submit handleModalClose={handleModalClose} />}
          isOpen={isModalOpen}
          handleClose={handleModalClose}
        />
      ) : null}

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
          <Button
            content="이전"
            styleType="_120x40_Gray2"
            onClick={handlePrev}
          />
          <Button
            content="다음"
            styleType="_120x40_Primary"
            type="submit"
            onClick={handleNext}
          />
        </ButtonGroup>
      </ContentWrapper>
    </ApplicationLayout>
  );
};

export default ComplaintsWrittingStep;
