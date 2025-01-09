import styled from "@emotion/styled";
import Logo from "../../assets/icons/logo/logo-active.svg?react"
import Emblem from "../../assets/emblem-1_DarkGray.png"
import Login from "./Login";
import LoginTitle from "./LoginTitle";

const EmblemContainer = styled.img`
  width: 700px;
  height: 700px;
  position: absolute;
  top: -40%;
  left: -15%;
  opacity: 0.3;
`;

const Container = styled.div`
  background-color: var(--primary);
  height: 100vh;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const TitleSection = styled.div`
  height: 100%;
  align-content: end;
  position: relative;
`;

const LoginSection = styled.div`
  background-color: var(--white);
  height: 100%;
  width: 40%;
  border-top-left-radius: 52px;
`;

const LogoContainer = styled.div`
  margin-top: 5rem;
  transform: translateX(-100px);
`;


const AdminLogin = () => {
  return (
    <Container>

      <TitleSection>
      <LoginTitle />
      <EmblemContainer src={Emblem} />
      </TitleSection>

      <LoginSection>
        <LogoContainer><Logo width="550px" height="300px" /></LogoContainer>
        <Login />
      </LoginSection>

    </Container>
  );
};

export default AdminLogin;
