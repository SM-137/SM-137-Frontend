import styled from "@emotion/styled";

interface InfoInputProps {
  height?: string;
}

interface InputProps extends InfoInputProps {
  label: string;
  placeholder: string;
  type?: string;
  isRequired?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: start;
  gap: 1.5rem;
  width: 100%;
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 0.4rem;
  width: 15%;
`;

const InfoLabel = styled.label`
  color: var(--gray4-placeholder-low);
  text-align: right;
`;

const RequiredMark = styled.span`
  color: var(--error);
  font-size: 14px;
  margin-right: 4px;
`;

const InfoInput = styled.input<InfoInputProps>`
  width: 85%;
  height: ${(props) => props.height || "35px"};
  padding: 5px 16px;
  border: 1px solid var(--gray3-border);
  border-radius: 4px;
  font-size: 14px;

  &::placeholder {
    color: var(--gray4-placeholder-low);
  }

  &:focus::placeholder {
    opacity: 0;
  }
`;

const Input = ({
  label = "labelText",
  placeholder = "placeholder",
  type = "text",
  height = "35px",
  isRequired = false,
  onChange,
}: InputProps) => {
  return (
    <Container>
      <LabelContainer>
        {isRequired && <RequiredMark>*</RequiredMark>}
        <InfoLabel>{label}</InfoLabel>
      </LabelContainer>
      <InfoInput
        type={type}
        placeholder={placeholder}
        height={height}
        onChange={onChange}
      />
    </Container>
  );
};

export default Input;
