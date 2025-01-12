import styled from "@emotion/styled";

const StyledInput = styled.input`
  appearance: none;
  border: 1px solid var(--gray3-border);
  border-radius: 1px;
  width: 1rem;
  height: 1rem;
  background: var(--gray3-border);

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: var(--primary);
  }
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`;

const ConfirmationMessage = styled.p`
  margin-left: 0.25rem;
  color: var(--gray5-lowText);
`;

type CheckboxProps = {
  text: string; 
};

function Checkbox({ text }: CheckboxProps) {
  return (
    <StyledLabel htmlFor={text}>
      <StyledInput type="checkbox" id={text} name={text} />
      <ConfirmationMessage>{text}</ConfirmationMessage>
    </StyledLabel>
  );
}

export default Checkbox;