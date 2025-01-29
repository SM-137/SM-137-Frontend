import styled from "@emotion/styled";

interface AlertProps {
  top: string;
}
export const AlertContainer = styled.div<AlertProps>`
  position: absolute;
  top: ${(props) => props.top};
  left: 50%;
  transform: translateX(-50%);
`;
