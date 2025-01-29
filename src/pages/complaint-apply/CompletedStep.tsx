import styled from "@emotion/styled"; 
import { useNavigate } from "react-router-dom";
import Layout from "./ApplicationStepLayout";
import CompletedForm from "../../components/form/CompletedForm";
import Button from "../../components/button/Button";

// 민원신청 완료 후 경로
const COMPLETE_STEP_PATH = "../../"; 

const ContentWrapper = styled.div`
  background-color: var(--white);
  border-radius: 8px;
  padding: 1.5rem;
  width: 100%;
  margin: 3rem auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  gap: 1rem;
`;

const CompletedStep = () => {
  const navigate = useNavigate();  

  const handleBack = () => {
    navigate("../3", { replace: true });
  };

  const handleNext = () => {
    navigate(COMPLETE_STEP_PATH, { replace: true });  
  };

  return (
    <Layout activeStep={4}>
      <ContentWrapper>
        <CompletedForm /> 
        <ButtonGroup>
          <Button content="이전" type="_120x40_Gray2" onClick={handleBack} />
          <Button content="다음" type="_120x40_Primary" onClick={handleNext} />
        </ButtonGroup>
      </ContentWrapper>
    </Layout>
  );
};

export default CompletedStep;
