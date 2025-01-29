import styled from "@emotion/styled";

interface InfoTextAreaProps {
  height?: string;
  hasError?: boolean;
}

interface TextAreaProps extends InfoTextAreaProps {
  label: string;
  placeholder: string;
  isRequired?: boolean;
  hasError?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: start;
  gap: 1.5rem;
`;

const LabelContainer = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 0.4rem;
`;

const FieldLabel = styled.label`
  color: var(--gray4-placeholder-low);
  text-align: right;
`;

const RequiredMark = styled.span`
  color: var(--error);
  font-size: 14px;
  margin-right: 4px;
`;

const StyledTextArea = styled.textarea<InfoTextAreaProps>`
  width: 85%;
  height: ${(props) => props.height || "119px"};
  padding: 0.8rem;
  border: ${(props) =>
    props.hasError
      ? "1px solid var(--error)"
      : "1px solid var(--gray3-border);"};
  border-radius: 4px;
  font-size: 14px;
  resize: none;

  &::placeholder {
    color: var(--gray4-placeholder-low);
  }

  &:focus::placeholder {
    opacity: 0;
  }
`;

const TextArea = ({
  label = "labelText",
  placeholder = "placeholder",
  height = "119px",
  isRequired = false,
  hasError = false,
  onChange,
}: TextAreaProps) => {
  return (
    <TextAreaContainer>
      <LabelContainer>
        {isRequired && <RequiredMark>*</RequiredMark>}
        <FieldLabel>{label}</FieldLabel>
      </LabelContainer>
      <StyledTextArea
        placeholder={placeholder}
        height={height}
        onChange={onChange}
        hasError={hasError}
      />
    </TextAreaContainer>
  );
};

export default TextArea;
