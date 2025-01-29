import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import Layout from "./ApplicationStepLayout";
import ComplaintsForm from "../../components/form/ComplaintsForm";
import Button from "../../components/button/Button";

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

const MessageContainer = styled.div`
  display: flex;
  margin: 2rem 0rem;
  flex-direction: column;
  align-items: center;
`;

const TitleMessage = styled.span`
  color: var(--gray6-header);
  text-align: center;
  font-size: 1.2rem;
`;

const InfoMessage = styled.p`
  font-size: 14px;
  color: var(--error);
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  gap: 1rem;
`;

const ComplaintsWrittingStep = () => {
  const navigate = useNavigate();  

  const handleBack = () => {
    navigate("../2", { replace: true });
  };

  const handleNext = () => {
    navigate("../4", { replace: true });
  };

  return (
    <Layout activeStep={3}>
      <ContentWrapper>
        <MessageContainer>
          <TitleMessage>민원의 세부내용을 작성해 주세요</TitleMessage>
          <InfoMessage>* 표시는 필수항목입니다</InfoMessage>
        </MessageContainer>
        <ComplaintsForm />
        <ButtonGroup>
          <Button content="이전" type="_120x40_Gray2" onClick={handleBack} />
          <Button content="다음" type="_120x40_Primary" onClick={handleNext} />
        </ButtonGroup>
      </ContentWrapper>
    </Layout>
  );
};

export default ComplaintsWrittingStep;
