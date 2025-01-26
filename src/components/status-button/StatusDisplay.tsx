import styled from "@emotion/styled";
import { buttonStyles } from "./StatusButton";
import { StatusType } from "../../types/Type";

interface StatusDisplayProps {
  type: StatusType;
}
const DisplayContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
`;

const DisplayText = styled.pre<{ color: string }>`
  color: ${(props) => props.color};
`;

const StatusDisplay = ({ type }: StatusDisplayProps) => {
  const { color, Icon, text } = buttonStyles[type] || buttonStyles.DEFAULT;

  return (
    <DisplayContainer>
      <Icon />
      <DisplayText color={color}>{text}</DisplayText>
    </DisplayContainer>
  );
};
export default StatusDisplay;
