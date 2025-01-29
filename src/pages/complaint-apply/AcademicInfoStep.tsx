import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import Layout from "./ApplicationStepLayout";
import Button from "../../components/button/Button";
import AcademicInfo from "../../components/academic-info/AcademicInfoForm";
import Checkbox from "../../components/check-box/CheckBox";
import InfoMessage from "../../components/info-message/InfoMessage";

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

const AcademicInfoStep = () => {
  const INFO_MESSAGE =
    "학적 정보는 관리자에게 전송되며, 오직 민원 처리 목적으로만 사용됩니다";
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("../2", { replace: true });
  };

  return (
    <Layout activeStep={1}>
      <ContentWrapper>
        <FormTitleContainer>
          <FormTitle>학번, 학과/학부를 확인해 주세요</FormTitle>
          <InfoMessage
            content={INFO_MESSAGE}
            sizeType="small"
            messageType="info"
          />
        </FormTitleContainer>

        <AcademicInfo />

        <Checkbox text="확인했습니다" />

        <ButtonGroup>
          <Button content="확인" type="_120x40_Primary" onClick={handleNext} />
        </ButtonGroup>
      </ContentWrapper>
    </Layout>
  );
};

export default AcademicInfoStep;
