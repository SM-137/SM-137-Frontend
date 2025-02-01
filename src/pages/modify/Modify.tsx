import styled from "@emotion/styled";
import MoodRoundedIcon from "@mui/icons-material/MoodRounded";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import Gmail from "../../assets/icons/gmail.png";
import { useRef, useState, forwardRef, useImperativeHandle } from "react";
import majors from "../../utils/MajorList";
import { useNavigate } from "react-router-dom";
import { modify } from "../../services/userService";
import { MYPAGE_URL } from "../../utils/URL";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import { useModal } from "../../hooks/useModal";
import Modal from "../../components/modal/Modal";
import DeleteAccount from "../../components/modal/contents/DeleteAccount";
import useUserInfoStore from "../../store/useUserInfoStore";
import Dropdown from "../../components/input/MajorDropdown";

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

const Modify = () => {
  const formRef = useRef<ModifyFormHandles | null>(null);
  const navigate = useNavigate();
  const { email } = useUserInfoStore();

  const handleNext = async () => {
    if (formRef.current?.validateForm()) {
      try {
        const formData = formRef.current.getFormData();
        const response = await modify(formData);
        console.log("서버 응답:", response);

        navigate(MYPAGE_URL);
      } catch (error) {
        console.error("서버 요청 중 에러 발생:", error);
      }
    }
  };

  const { isModalOpen, handleModalClose, handleModalOpen } = useModal();

  const handleDeleteAccount = () => {
    handleModalOpen();
  };

  return (
    <Container>
      {isModalOpen && (
        <Modal
          contents={
            <DeleteAccount
              handleCancel={handleModalClose}
              handleClose={handleDeleteAccount}
            />
          }
          isOpen={isModalOpen}
          handleClose={handleModalClose}
        />
      )}
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
            {email}
          </Email>
        </ContentContainer>
        <WithdrawText onClick={handleDeleteAccount}>회원 탈퇴</WithdrawText>
        <Button
          styleType="_120x40_Primary"
          content="수정"
          onClick={handleNext}
        />
      </Background>
    </Container>
  );
};

export default Modify;

export interface ModifyFormHandles {
  validateForm: () => boolean;
  getFormData: () => { number: string; department: string };
}

const ModifyForm = forwardRef<ModifyFormHandles>((_, ref) => {
  const { number, department } = useUserInfoStore();
  const [studentId, setStudentId] = useState(number || "");
  const [major, setMajor] = useState(department || majors[0]);
  const [errors, setErrors] = useState({ studentId: "" });

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

  const handleMajorChange = (selectedMajor: string) => {
    setMajor(selectedMajor);
  };

  const validateForm = () => {
    const newErrors: { studentId: string } = { studentId: "" };

    if (studentId.length !== 7) {
      newErrors.studentId = "학번은 7자리 숫자로 입력해주세요.";
    }

    setErrors(newErrors);

    return !newErrors.studentId;
  };

  const getFormData = () => ({
    number: studentId,
    department: major === department ? department : major,
  });

  return (
    <InfoForm>
      <StyledInput
        label="학번"
        placeholder={number}
        value={studentId}
        onChange={handleStudentIdChange}
        hasError={!!errors.studentId}
      />
      {errors.studentId && <ErrorText>{errors.studentId}</ErrorText>}

      <Dropdown
        label="학과/학부"
        options={majors}
        value={major}
        onChange={handleMajorChange}
      />
    </InfoForm>
  );
});
