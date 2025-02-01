import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { MY_MODIFY_URL } from "../../utils/URL";
import useUserInfoStore from "../../store/useUserInfoStore";

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 3rem;
  border-radius: 8px;
  background-color: var(--gray1-background);
  width: 50%;
`;

const Info = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 60%;
  gap: 1rem;
`;

const UserInfoBoxContainer = styled.div`
  display: flex;
  justify-content: end;
  width: auto;
  gap: 0.8rem;
`;
const UserInfoBoxTitle = styled.div`
  color: var(--gray5-lowText);
`;

const UserInfoBox = styled.div`
  width: 70%;
  padding: 0.3rem 0.5rem;
  border: 1px solid var(--gray3-border);
  border-radius: 4px;
`;

const ModifyComment = styled.div`
  color: var(--gray4-placeholder-low);
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid var(--gray4-placeholder-low);
  }
`;

const AcademicInfo = () => {
  const { number, department } = useUserInfoStore();

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(MY_MODIFY_URL);
  };

  return (
    <FormContainer>
      <Info>
        <UserInfoBoxContainer>
          <UserInfoBoxTitle>학번</UserInfoBoxTitle>
          <UserInfoBox>{number}</UserInfoBox>
        </UserInfoBoxContainer>

        <UserInfoBoxContainer>
          <UserInfoBoxTitle>학과/학부</UserInfoBoxTitle>
          <UserInfoBox>{department}</UserInfoBox>
        </UserInfoBoxContainer>
      </Info>

      <ModifyComment onClick={handleClick}>
        정보 수정이 필요한가요?
      </ModifyComment>
    </FormContainer>
  );
};

export default AcademicInfo;
