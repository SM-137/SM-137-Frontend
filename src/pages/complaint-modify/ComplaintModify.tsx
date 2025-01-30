import { useEffect, useState } from "react";
import ComplaintsForm from "../../components/form/ComplaintsForm";
import styled from "@emotion/styled";
import {
  ComplaintIcon,
  Title,
  TitleContainer,
} from "../../styles/ComplaintScrap";
import Button from "../../components/button/Button";
import RateReviewRoundedIcon from "@mui/icons-material/RateReviewRounded";
import useComplaintStore from "../../store/useComplaintStore";
import Alert from "../../components/alert/Alert";
import { AlertContainer } from "../../styles/AlertStyles";
import {
  complaintDetail,
  complaintModify,
} from "../../services/complaintService";
import Loading from "../../components/loading/Loading";
import Modal from "../../components/modal/Modal";
import { useModal } from "../../hooks/useModal";
import ModifyComments from "../../components/modal/contents/ModifyComments";
import { useNavigate } from "react-router-dom";

const Background = styled.div`
  width: 100vw;
  background-color: var(--gray1-background);
  display: flex;
  justify-content: center;
  padding: 3rem 0;
  margin-top: 3rem;
  z-index: 0;
`;

const Container = styled.div`
  position: absolute;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const WidthLimits = styled.div`
  width: 1114px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  background-color: var(--white);
  padding: 2rem 0;
  border-radius: 8px;
`;

const ComplaintModify = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [initialData, setInitialData] = useState();
  const urlParams = new URLSearchParams(window.location.search);
  const complaintId = Number(urlParams.get("complaintId"));

  useEffect(() => {
    complaintDetail(complaintId)
      .then((res) => {
        setInitialData(res.data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const ESSENTIAL_CONTENT = "필수 항목을 모두 작성해 주세요";
  const [showAlert, setShowAlert] = useState(false);
  const { isModalOpen, handleModalClose, handleModalOpen } = useModal();

  const { title, contentProb, contentDir, contentExpect } = useComplaintStore();
  const sendData = {
    title: title,
    contentDir: contentDir,
    contentProb: contentProb,
    contentExpect: contentExpect,
  };

  const [isEssentialWrite, setIsEssentialWrite] = useState({
    title: true,
    contentProb: true,
    contentDir: true,
  });

  const handleSubmit = () => {
    if (handleValid()) {
      handleModalOpen();
    }
  };

  const handleSend = () => {
    handleModalClose();
    navigate(`/complaint-detail?complaintId=${complaintId}`);

    complaintModify(complaintId, sendData)
      .then((res) => {
        console.log(res);
        alert("수정되었습니다");
      })
      .catch((error) => console.error(error));
  };

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

  return (
    <>
      {showAlert && (
        <AlertContainer top="13rem">
          <Alert content={ESSENTIAL_CONTENT} type="warning" />
        </AlertContainer>
      )}
      {isModalOpen && (
        <Modal
          handleClose={handleSend}
          isOpen={isModalOpen}
          contents={<ModifyComments handleSend={handleSend} />}
        />
      )}
      <TitleContainer>
        <ComplaintIcon component={RateReviewRoundedIcon} />
        <Title>민원 수정</Title>
      </TitleContainer>

      {isLoading && <Loading />}
      {!isLoading && (
        <Container>
          <Background>
            <WidthLimits>
              <ComplaintsForm
                isEssentialWrite={isEssentialWrite}
                initialData={initialData}
              />
              <Button
                content="완료"
                styleType="_120x40_Primary"
                type="submit"
                onClick={handleSubmit}
              />
            </WidthLimits>
          </Background>
        </Container>
      )}
    </>
  );
};

export default ComplaintModify;
