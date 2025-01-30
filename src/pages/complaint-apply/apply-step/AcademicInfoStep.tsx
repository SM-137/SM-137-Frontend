import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Checkbox from "../../../components/check-box/CheckBox";
import InfoMessage from "../../../components/info-message/InfoMessage";
import AcademicInfo from "../../../components/academic-info/AcademicInfoForm";
import Button from "../../../components/button/Button";
import Alert from "../../../components/alert/Alert";
import ApplicationLayout from "../ApplicationLayout";
import { ContentWrapper } from "../../../styles/ApplyStyles";
import { AlertContainer } from "../../../styles/AlertStyles";

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

const AcademicInfoStep = () => {
  const INFO_MESSAGE =
    "학적 정보는 관리자에게 전송되며, 오직 민원 처리 목적으로만 사용됩니다";
  const NEXT_PAGE_URL = "../2";

  const storedValue = sessionStorage.getItem("isChecked");
  const [isChecked, setIsChecked] = useState(
    storedValue ? JSON.parse(storedValue) : false
  );
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  const handleNext = () => {
    if (!isChecked) {
      setShowAlert(true);
      return;
    }
    setShowAlert(false);
    navigate(NEXT_PAGE_URL);
  };

  const handleIsChecked = (isChecked: boolean) => {
    setIsChecked(isChecked);
    if (isChecked) {
      setShowAlert(false);
      sessionStorage.setItem("isChecked", JSON.stringify(true));
    }
    if (!isChecked) {
      sessionStorage.removeItem("isChecked");
    }
  };

  return (
    <ApplicationLayout activeStep={1}>
      <ContentWrapper>
        <AlertContainer top="15rem">
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
            isChecked={isChecked}
            handleIsChecked={handleIsChecked}
          />
        </FormTitleContainer>

        <AcademicInfo />

        <ButtonGroup>
          <Button
            content="다음"
            styleType="_120x40_Primary"
            onClick={handleNext}
          />
        </ButtonGroup>
      </ContentWrapper>
    </ApplicationLayout>
  );
};

export default AcademicInfoStep;
