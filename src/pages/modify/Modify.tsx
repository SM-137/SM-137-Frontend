import styled from "@emotion/styled";
import MoodRoundedIcon from "@mui/icons-material/MoodRounded";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import Gmail from "../../assets/icons/gmail.png";
import { useRef, useState, forwardRef, useImperativeHandle } from "react";
import majors from "../../utils/MajorList";
import { myPageInfo } from "../../mockData";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import { modify } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import { MYPAGE_URL } from "../../utils/URL";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 3rem;
`;

const HeaderContainer = styled.div`
  background-color: var(--white);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 100vw;
  height: 100vh;
  margin-top: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;
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
`;

const InfoForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  white-space: nowrap;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 0.875rem;
  margin-top: -0.5rem;
`;

const StyledInput = styled(Input)<{ hasError: boolean }>`
  border: ${(props) => (props.hasError ? "1px solid red" : "1px solid #ccc")};
`;

export interface ModifyFormHandles {
  validateForm: () => boolean;
  getFormData: () => { number: string; department: string };
}

const ModifyForm = forwardRef<ModifyFormHandles>((_, ref) => {
  const [studentId, setStudentId] = useState("");
  const [major, setMajor] = useState("");
  const [errors, setErrors] = useState({ studentId: "", major: "" });

  useImperativeHandle(ref, () => ({
    validateForm,
    getFormData,
  }));

  const handleStudentIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setStudentId(value);
    }
  };

  const handleMajorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMajor(e.target.value);
  };

  const validateForm = () => {
    const newErrors: { studentId: string; major: string } = {
      studentId: "",
      major: "",
    };

    if (studentId.length !== 7) {
      newErrors.studentId = "학번은 7자리 숫자로 입력해주세요.";
    }

    if (!majors.includes(major)) {
      newErrors.major = "유효한 학과/학부를 입력해주세요.";
    }

    setErrors(newErrors);

    return !newErrors.studentId && !newErrors.major;
  };

  const getFormData = () => ({
    number: studentId,
    department: major,
  });

  return (
    <InfoForm>
      <StyledInput
        label="학번"
        placeholder="2012345"
        value={studentId}
        onChange={handleStudentIdChange}
        hasError={!!errors.studentId}
      />
      {errors.studentId && <ErrorText>{errors.studentId}</ErrorText>}

      <StyledInput
        label="학과/학부"
        placeholder="컴퓨터과학전공"
        value={major}
        onChange={handleMajorChange}
        hasError={!!errors.major}
      />
      {errors.major && <ErrorText>{errors.major}</ErrorText>}
    </InfoForm>
  );
});

const Modify = () => {
  const formRef = useRef<ModifyFormHandles>(null);
  const navigate = useNavigate();

  const handleNext = async () => {
    if (formRef.current?.validateForm()) {
      try {
        const formData = formRef.current.getFormData(); // 유효성 검사를 통과한 데이터 가져오기
        const response = await modify(formData); // 서버 요청
        console.log("서버 응답:", response);

        // 서버 요청이 성공하면 페이지 이동
        navigate(MYPAGE_URL);
      } catch (error) {
        console.error("서버 요청 중 에러 발생:", error);
      }
    }
  };

  return (
    <Container>
      <HeaderContainer>
        <ModifyIcon component={MoodRoundedIcon} />
        <ModifyTitle>개인정보 수정</ModifyTitle>
      </HeaderContainer>
      <Background>
        <ContentContainer>
          <PillMark>재학생</PillMark>
          <FormWrapper>
            <ModifyForm ref={formRef} />
          </FormWrapper>
          <Email>
            <EmailIcon src={Gmail} alt="gmail icon" />
            {myPageInfo.email}
          </Email>
        </ContentContainer>
        <WithdrawText>회원 탈퇴</WithdrawText>
        <Button type="_120x40_Primary" content="다음" onClick={handleNext} />
      </Background>
    </Container>
  );
};

export default Modify;
