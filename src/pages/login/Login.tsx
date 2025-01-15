import styled from "@emotion/styled";
import LoginForm from "./LoginForm";
import Logo from "../../assets/icons/logo/logo-bubble.svg?react";

const Background = styled.div`
  width: 100%;
  background-color: var(--primary);
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
`;

const LoginSection = styled.div`
  background-color: var(--white);
  position: absolute;
  right: 0;
  width: 40%;
  min-width: 500px;
  height: 100%;
  border-top-left-radius: 48px;
  display: flex;
  justify-content: start;
  box-shadow: -10px -10px 30px rgba(0, 0, 0, 0.1);
`;

const LoginSectionContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: 10rem 0;
`;

const LogoContainer = styled.div`
  transform: translateX(-100px);
`;

const TitleSection = styled.div`
  width: 60%;
  white-space: nowrap;
  height: 100vh;
  max-width: 1000px;
  display: flex;
  transform: translateX(-200px);
`;

const TitleContainer = styled.div`
  display: inline-flex;
  justify-content: start;
  flex-direction: column;
  gap: 5rem;
  margin-top: 35rem;
`;
const SubTitleContainer = styled.div`
  display: inline-flex;
  justify-content: end;
  gap: 1rem;
`;

const SchoolName = styled.h1`
  font-size: 120px;
  color: var(--light-primary);
`;
const Title = styled.h1`
  font-size: 120px;
  color: var(--disabled-primary);
`;
const UsageTitle = styled.h1`
  font-size: 60px;
  color: var(--disabled-primary);
`;

const EmblemContainer = styled.div`
  position: absolute;
  top: -300px;
  transform: translateX(-600px);
`;
const Emblem = styled.img`
  width: 800px;
  opacity: 0.2;
`;

const Login = () => {
  return (
    <Background>
      <EmblemContainer>
        <Emblem src="/src/assets/emblem-1_DarkGray.png" />
      </EmblemContainer>

      <TitleSection>
        <TitleContainer>
          <SchoolName>숙명여자대학교</SchoolName>
          <SubTitleContainer>
            <Title>민원 시스템</Title>
            <UsageTitle>관리자용</UsageTitle>
          </SubTitleContainer>
        </TitleContainer>
      </TitleSection>
      <LoginSection>
        <LoginSectionContainer>
          <LogoContainer>
            <Logo width="500px" height="300px" />
          </LogoContainer>
          <LoginForm />
        </LoginSectionContainer>
      </LoginSection>
    </Background>
  );
};

export default Login;
