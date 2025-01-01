import styled from "@emotion/styled";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import MoodRoundedIcon from "@mui/icons-material/MoodRounded";
import UserInfoForm from "../../components/form/UserInfoForm";
import Button from "../../components/button/Button";

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
  height: 1.3rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--white);
`;

// //배경 회색 어떻게 만들지..
// const BottonContainer = styled.div`
//   background-color: var(--gray1-background);
// `;

const WithdrawText = styled.div`
  color: var(--error);
  font-size: 0.9rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transform: translate(10rem);

  &:hover {
    text-decoration: underline;
  }
`;

//학번, 학과, 학부 유효성 검사 추가 필요
const ContentContainer = styled.div`
  background-color: var(--white);
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 2.5rem;
  padding: 2.5rem;
`;

const Modify = () => {
  return (
    <Container>
      <ModifyIcon component={MoodRoundedIcon} />
      <ModifyTitle>개인정보 수정</ModifyTitle>
      <ContentContainer>
        <PillMark>재학생</PillMark>
        <UserInfoForm />
      </ContentContainer>
      <WithdrawText>회원 탈퇴</WithdrawText>
      <Button type="_120x40_Primary" content="다음" />
    </Container>
  );
};

export default Modify;
