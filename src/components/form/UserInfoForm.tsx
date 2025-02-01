import styled from "@emotion/styled";
import { useState, forwardRef, useImperativeHandle } from "react";
import Input from "../input/Input";
import majors from "../../utils/MajorList";
import Dropdown from "../input/MajorDropdown";

const InfoForm = styled.form`
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

export interface UserInfoFormHandles {
  validateForm: () => boolean;
  getFormData: () => { number: string; department: string };
}

const UserInfoForm = forwardRef<UserInfoFormHandles>((_, ref) => {
  const [studentId, setStudentId] = useState("");
  const [major, setMajor] = useState(majors[0]);
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

      <Dropdown
        label="학과/학부"
        options={majors}
        value={major}
        onChange={handleMajorChange}
      />
    </InfoForm>
  );
});

export default UserInfoForm;
