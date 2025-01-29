import styled from "@emotion/styled";
import { Dispatch, SetStateAction, useState } from "react";
import useComplaintStore from "../../store/useComplaintStore";

interface PillButtonProps {
  contents: string;
  tagArray: string[];
  setTagArray: Dispatch<SetStateAction<string[]>>;
  setShowAlert: Dispatch<SetStateAction<boolean>>;
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

const PillButton = ({
  contents = "예시",
  tagArray,
  setTagArray,
  setShowAlert,
}: PillButtonProps) => {
  const SELECT_LIMITS = 3;

  const [isClick, setIsClick] = useState(false);
  const { setTagName } = useComplaintStore();

  const handleClick = (select: string) => {
    const newIsClick = !isClick;

    if (newIsClick && tagArray.length >= SELECT_LIMITS) {
      setShowAlert(true);
      return;
    }

    if (tagArray.length <= SELECT_LIMITS) {
      setShowAlert(false);
    }

    if (newIsClick) {
      setTagArray((prev: string[]) => [...prev, select]);
      setTagName(select);
    } else {
      setTagArray(tagArray.filter((i) => i !== select));
    }

    setIsClick(newIsClick);
  };

  return (
    <Container isClick={isClick} onClick={() => handleClick(contents)}>
      <Contents>{contents}</Contents>
    </Container>
  );
};

export default PillButton;
