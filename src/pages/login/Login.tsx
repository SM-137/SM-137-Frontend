import styled from "@emotion/styled";
import Logo from "../../assets/icons/logo/logo-bubble.svg?react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

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
  align-items: center;
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
  justify-content: end;
  flex-direction: column;
  gap: 5rem;
  max-height: 700px;
`;
const SchoolName = styled.h1`
  font-size: 120px;
  color: var(--light-primary);
`;
const Title = styled.h1`
  font-size: 120px;
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

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const LoginInfoMessage = styled.h2`
  color: var(--gray6-header);
`;

const Login = () => {
  const IMAGE_SRC = "/SM-137-Frontend/src/assets/emblem-1_DarkGray.png";
  //백엔드로 credential 전송 및 jwt 토큰 받기

  return (
    <Background>
      <EmblemContainer>
        <Emblem src={IMAGE_SRC} />
      </EmblemContainer>

      <TitleSection>
        <TitleContainer>
          <SchoolName>숙명여자대학교</SchoolName>
          <Title>민원 시스템</Title>
        </TitleContainer>
      </TitleSection>

      <LoginSection>
        <LoginSectionContainer>
          <LogoContainer>
            <Logo width="500px" height="300px" />
          </LogoContainer>

          <LoginContainer>
            <LoginInfoMessage>숙명 Gmail로 로그인</LoginInfoMessage>
            <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID_TEST}>
              <GoogleLogin
                onSuccess={(res) => console.log(res)}
                onError={() => console.log("실패")}
              />
            </GoogleOAuthProvider>
          </LoginContainer>
        </LoginSectionContainer>
      </LoginSection>
    </Background>
  );
};

export default Login;
