import styled from "@emotion/styled";
import play_circle_filled from "@mui/icons-material/PlayCircleFilled";
import pause_circle_filled from "@mui/icons-material/PauseCircleFilled";
import check_circle from "@mui/icons-material/CheckCircle";
import cancel from "@mui/icons-material/Cancel";
import { StatusType } from "../../types/Type";

interface StatusButtonProps {
  type: StatusType;
  isSelected: boolean;
  onClick?: () => void;
}

// 상태별 스타일
const PlayIcon = styled(play_circle_filled)`
  color: var(--light-primary);
  width: 20px;
  height: 20px;
`;

const PauseIcon = styled(pause_circle_filled)`
  color: var(--info-dark);
  width: 20px;
  height: 20px;
`;

const CheckIcon = styled(check_circle)`
  color: var(--succeess);
  width: 20px;
  height: 20px;
`;

const CancelIcon = styled(cancel)`
  color: var(--error-light);
  width: 20px;
  height: 20px;
`;

// 상태별 스타일
export const buttonStyles = {
  IN_PROGRESS: {
    Icon: PlayIcon,
    color: "var(--light-primary)",
    text: "진행",
  },
  WAITING: {
    Icon: PauseIcon,
    color: "var(--info-dark)",
    text: "대기",
  },
  RETURN: {
    Icon: CancelIcon,
    color: "var(--error-light)",
    text: "반려",
  },
  DONE: {
    Icon: CheckIcon,
    color: "var(--succeess)",
    text: "완료",
  },
  DEFAULT: {
    Icon: PlayIcon,
    color: "var(--white)",
    text: "알 수 없음",
  },
};

interface ButtonContainerProps {
  isSelected: boolean;
  borderColor: string;
}

const ButtonContainer = styled.button<ButtonContainerProps>`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.2rem 0.4rem;
  border-radius: 20px;
  background-color: var(--white);
  border: ${(props) =>
    props.isSelected ? `2px solid ${props.borderColor}` : "none"};
`;

const ButtonText = styled.pre<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 16px;
`;

// 단일 버튼 컴포넌트
const StatusButton = ({
  type = "WAITING",
  isSelected = false,
  onClick,
}: StatusButtonProps) => {
  const { color, Icon, text } = buttonStyles[type] || buttonStyles.DEFAULT;

  return (
    <ButtonContainer
      isSelected={isSelected}
      borderColor={color}
      onClick={onClick}
    >
      <Icon style={{ width: "20px", height: "20px", color }} />
      <ButtonText color={color}>{text}</ButtonText>
    </ButtonContainer>
  );
};

export default StatusButton;
