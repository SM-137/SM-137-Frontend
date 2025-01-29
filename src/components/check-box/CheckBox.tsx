import styled from "@emotion/styled";
import { useState } from "react";

interface hasErroProps {
  hasError: boolean;
}
type CheckboxProps = {
  text: string;
  hasError: boolean;
  onChange: (checked: boolean) => void;
};

const StyledLabel = styled.label<hasErroProps>`
  display: flex;
  align-items: center;
  user-select: none;
  background-color: ${(props) => props.hasError && "var(--error-light)"};
  border-radius: 4px;
  padding: 0.3rem 0.5rem;
`;

const StyledInput = styled.input`
  appearance: none;
  border: 1px solid var(--gray3-border);
  border-radius: 1px;
  width: 1rem;
  height: 1rem;
  background-color: var(--white);

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: var(--primary);
  }
`;

const ConfirmationMessage = styled.p<hasErroProps>`
  margin-left: 0.25rem;
  color: ${(props) =>
    props.hasError ? "var(--error-dark)" : "var(--gray5-lowText)"};
`;

function Checkbox({ text, hasError, onChange }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = () => {
    const newCheckState = !isChecked;
    setIsChecked((prev) => !prev);
    onChange(newCheckState);
  };

  return (
    <StyledLabel htmlFor={text} hasError={hasError}>
      <StyledInput
        type="checkbox"
        id={text}
        name={text}
        onChange={handleCheck}
      />
      <ConfirmationMessage hasError={hasError}>{text}</ConfirmationMessage>
    </StyledLabel>
  );
}

export default Checkbox;
