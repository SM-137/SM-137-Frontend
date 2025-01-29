import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import CompletedForm from "../../components/form/CompletedForm";
import Button from "../../components/button/Button";
import ApplicationLayout from "./ApplicationLayout";
import { HOME_URL } from "../../utils/URL";

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

  const handleNext = () => {
    navigate(HOME_URL, { replace: true });
  };

  return (
    <ApplicationLayout activeStep={4}>
      <ContentWrapper>
        <CompletedForm />
        <ButtonGroup>
          <Button
            content="홈으로 이동"
            styleType="_120x40_Primary"
            onClick={handleNext}
          />
        </ButtonGroup>
      </ContentWrapper>
    </ApplicationLayout>
  );
};

export default CompletedStep;
