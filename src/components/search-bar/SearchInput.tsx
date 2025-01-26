import styled from "@emotion/styled";

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;

const FixedText = styled.div`
  color: var(--gray6-header);
`;

const Input = styled.input`
  border: none;
  outline: none;

  &::placeholder {
    color: var(--gray4-placeholder-low);
  }
  &:focus {
    border: none;
  }
  &:focus::placeholder {
    opacity: 0;
  }
`;

interface SearchInputProps {
  placeholder?: string;
  handleKeyword: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({
  placeholder = "디즈니 인턴십 학점 인정",
  handleKeyword,
}: SearchInputProps) => {
  return (
    <InputWrapper>
      <FixedText>민원 검색</FixedText>
      <Input type="text" placeholder={placeholder} onChange={handleKeyword} />
    </InputWrapper>
  );
};

export default SearchInput;
