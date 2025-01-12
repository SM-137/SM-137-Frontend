import styled from "@emotion/styled"; 
import UserInfoForm from "./UserInfoForm";
import Checkbox from "../check-box/CheckBox";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 3rem;
  border-radius: 8px;
  background-color: var(--gray1-background);
  margin-top: 1.5rem;
`;

const InfoMessage = styled.p`
  font-size: 14px;
  color: var(--light-primary);
  text-align: center;
  margin-top: 0.5rem;
`;

const AcademicInfoForm = () => {
  return (
    <FormContainer>
      <UserInfoForm /> 
      <InfoMessage>
        학적 정보는 민원 처리를 위해 관리자에게 전송되며,<br />
        오직 민원 처리 목적으로만 사용됩니다.
      </InfoMessage>
      <Checkbox text="확인했습니다" />
    </FormContainer>
  );
};

export default AcademicInfoForm;


