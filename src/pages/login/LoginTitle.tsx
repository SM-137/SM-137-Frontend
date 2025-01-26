import styled from "@emotion/styled";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 0;
  margin: 4rem;
`;

const UniversityText = styled.div`
  font-weight: 600;
  color: var(--light-primary);
  font-size: 7rem;
  line-height: 1.2;
  margin-bottom: 1rem;
`;

const SubTextContainer = styled.div`
  display: flex;
  align-items: baseline; 
  gap: 2rem;
`;

const SystemText = styled.div`
  font-weight: 600;
  color: var(--disabled-primary);
  font-size: 6rem;
  line-height: 1.2;
`;


const LoginTitle = () => {
  return (
    <HeaderContainer>
      <UniversityText>숙명여자대학교</UniversityText>
      <SubTextContainer>
        <SystemText>민원 시스템</SystemText>
      </SubTextContainer>
    </HeaderContainer>
  );
};

export default LoginTitle;
