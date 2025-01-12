import styled from "@emotion/styled"; 
import Layout from "./ApplicationStepLayout";
import AcademicInfoForm from "../../components/form/AcademicInfoForm";
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

const FormTitleContainer = styled.div`
  display: flex;
  margin-top: 1rem; 
  flex-direction: column;
  align-items: center; 
`;

const FormTitle = styled.span`
  color: var(--gray6-header);
  text-align: center;
  font-size: 1.2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

const AcademicInfoStep = () => {
  return (
    <Layout>
      <ContentWrapper>
        <FormTitleContainer>
          <FormTitle>학번, 학과/학부를 확인해 주세요</FormTitle>
        </FormTitleContainer>
        <AcademicInfoForm /> 
        <ButtonGroup>
          <Button content="다음" type="_120x40_Primary" />
        </ButtonGroup>
      </ContentWrapper>
    </Layout>
  );
};

export default AcademicInfoStep;

