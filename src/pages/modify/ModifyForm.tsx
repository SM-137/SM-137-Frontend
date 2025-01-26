import styled from "@emotion/styled";
import Input from "../../components/input/Input";
import { useState, forwardRef, useImperativeHandle } from "react";
import majors from "../../utils/MajorList";

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
}

const ModifyForm = forwardRef<ModifyFormHandles>((_, ref) => {
  const [studentId, setStudentId] = useState("");
  const [major, setMajor] = useState("");
  const [errors, setErrors] = useState({ studentId: "", major: "" });

  useImperativeHandle(ref, () => ({
    validateForm,
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

export default ModifyForm;
