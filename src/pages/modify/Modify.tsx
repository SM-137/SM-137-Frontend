import styled from "@emotion/styled";
import MoodRoundedIcon from "@mui/icons-material/MoodRounded";
import UserInfoForm from "../../components/form/UserInfoForm";
import Button from "../../components/button/Button";
import { myPageInfo } from "../../mockData";
import Gmail from "../../assets/gmail.png";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 3rem;
`;

const ModifyIcon = styled(SvgIcon)<SvgIconProps>`
  width: 2rem;
  height: 2rem;
  color: var(--disabled-primary);
  margin-top: 7rem;
`;

const Background = styled.div`
  background-color: var(--gray1-background);
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  background-color: var(--white);
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 2.5rem;
  padding: 2.5rem;
`;

const Email = styled.p`
  background-color: var(--gray1-background);
  border-radius: 500px;
  padding: 0.5rem 1.5rem;
  color: var(--gray4-placeholder-low);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const EmailIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const Modify = () => {
  return (
    <Container>
      <ModifyIcon component={MoodRoundedIcon} />
      <h2>개인정보 수정</h2>
      <Background>
        <ContentContainer>
          <UserInfoForm />
          <Email>
            <EmailIcon src={Gmail} alt="gmail icon" />
            {myPageInfo.email}
          </Email>
        </ContentContainer>
        <Button type="_120x40_Primary" content="다음" />
      </Background>
    </Container>
  );
};

export default Modify;
