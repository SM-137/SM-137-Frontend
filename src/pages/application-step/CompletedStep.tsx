import styled from "@emotion/styled"; 
import Layout from "./ApplicationStepLayout";
import CompletedForm from "../../components/form/CompletedForm";
import Button from "../../components/button/Button";

const ContentWrapper = styled.div`
  background-color: var(--white);
  border-radius: 8px; 
  padding: 2rem; 
  width: 100%; 
  margin: 3rem auto 0; 
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  gap: 1rem;
`;

const CompletedStep = () => {
  return (
    <Layout>
      <ContentWrapper>
        <CompletedForm /> 
        <ButtonGroup>
          <Button content="이전" type="_120x40_Gray2"/>
          <Button content="다음" type="_120x40_Primary"/>
        </ButtonGroup>
      </ContentWrapper>
    </Layout>
  );
};

export default CompletedStep;

