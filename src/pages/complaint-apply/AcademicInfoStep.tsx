import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import Layout from "./ApplicationStepLayout";
import Button from "../../components/button/Button";
import AcademicInfo from "../../components/academic-info/AcademicInfoForm";
import Checkbox from "../../components/check-box/CheckBox";
import InfoMessage from "../../components/info-message/InfoMessage";
import { useState } from "react";
import Alert from "../../components/alert/Alert";

const ContentWrapper = styled.div`
  background-color: var(--white);
  border-radius: 8px;
  padding: 1.5rem;
  width: 100%;
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const FormTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const FormTitle = styled.span`
  color: var(--gray6-header);
  text-align: center;
  font-size: 1.2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;
const AlertContainer = styled.div`
  position: absolute;
  top: 250px;
`;

const AcademicInfoStep = () => {
  const INFO_MESSAGE =
    "학적 정보는 관리자에게 전송되며, 오직 민원 처리 목적으로만 사용됩니다";

  const [isChecked, setIsChecked] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  const handleNext = () => {
    if (!isChecked) {
      setShowAlert(true);
      return;
    }
    setShowAlert(false);
    navigate("../2", { replace: true });
  };

  const handleIsChecked = (isChecked: boolean) => {
    setIsChecked(isChecked);
    if (isChecked) {
      setShowAlert(false);
    }
  };

  return (
    <Layout activeStep={1}>
      <ContentWrapper>
        <AlertContainer>
          {showAlert && (
            <Alert type="warning" content="체크박스에 체크해 주세요" />
          )}
        </AlertContainer>

        <FormTitleContainer>
          <FormTitle>학번, 학과/학부를 확인해 주세요</FormTitle>
          <InfoMessage
            content={INFO_MESSAGE}
            sizeType="small"
            messageType="info"
          />
          <Checkbox
            text="확인했습니다"
            hasError={showAlert}
            onChange={handleIsChecked}
          />
        </FormTitleContainer>

        <AcademicInfo />

        <ButtonGroup>
          <Button content="확인" type="_120x40_Primary" onClick={handleNext} />
        </ButtonGroup>
      </ContentWrapper>
    </Layout>
  );
};

export default AcademicInfoStep;
