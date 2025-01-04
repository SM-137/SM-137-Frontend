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
`;

const ModifyTitle = styled.h2`
  margin: 1rem 0;
`;

const PillMark = styled.div`
  background-color: var(--light-primary);
  border-radius: 3rem;
  width: 3rem;
  height: 1.375rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: var(--white);
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

const FormWrapper = styled.div`
  width: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1rem;
  padding-top: 1rem;
`;

const Email = styled.p`
  background-color: var(--gray1-background);
  border-radius: 3.125rem;
  width: 13.068rem;
  height: 1.844rem;
  padding: 0.5rem 1rem;
  color: var(--gray4-placeholder-low);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const EmailIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const WithdrawText = styled.p`
  color: var(--error);
  margin-bottom: 1rem;
  cursor: pointer;
  transform: translate(9rem, -1.5rem);

  &:hover {
  }
`;

const Modify = () => {
  return (
    <Container>
      <ModifyIcon component={MoodRoundedIcon} />
      <ModifyTitle>개인정보 수정</ModifyTitle>
      <Background>
        <ContentContainer>
          <PillMark>재학생</PillMark>
          <FormWrapper>
            <UserInfoForm />
          </FormWrapper>
          <Email>
            <EmailIcon src={Gmail} alt="gmail icon" />
            {myPageInfo.email}
          </Email>
        </ContentContainer>
        <WithdrawText>회원 탈퇴</WithdrawText>
        <Button type="_120x40_Primary" content="다음" />
      </Background>
    </Container>
  );
};

export default Modify;
