import styled from "@emotion/styled";
import { useState } from "react";
import useComplaintStore from "../../store/useComplaintStore";

interface PillButtonProps {
  contents: string;
}
interface ContainerProps {
  isClick: boolean;
}
const Container = styled.button<ContainerProps>`
  display: inline-flex;
  padding: 0.3rem 1rem;
  background-color: var(--white);
  border-radius: 3rem;
  border: ${(props) => props.isClick && "2px solid var(--light-primary)"};
  color: ${(props) =>
    props.isClick ? "var(--light-primary)" : "var(--gray5-lowText)"};
  &:hover {
    color: ${(props) => !props.isClick && "var(--gray5-header)"};
  }
  @media (max-width: 768px) {
    padding: 0 0.8rem;
    font-size: 0.875rem;
  }
  @media (max-width: 480px) {
    padding: 0 0.5rem;
    font-size: 0.75rem;
  }
`;
const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PillButton = ({ contents = "예시" }: PillButtonProps) => {
  const [isClick, setIsClick] = useState(false);
  // 선택한 데이터
  const { tagName, setTagName } = useComplaintStore();
  const handleClick = (select: string) => {
    setIsClick((prev) => !prev);
    setTagName(select);
  };

  console.log(tagName);
  return (
    <Container isClick={isClick} onClick={() => handleClick(contents)}>
      <Contents>{contents}</Contents>
    </Container>
  );
};

export default PillButton;
