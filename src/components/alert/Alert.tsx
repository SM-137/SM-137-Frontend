import styled from "@emotion/styled";
import { SvgIcon, SvgIconProps } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { motion } from "framer-motion";
import { Opacity } from "@mui/icons-material";

interface AlertProps {
  content: string;
}
const Container = styled(motion.div)`
  display: inline-flex;
  padding: 0.5rem 1rem;
  background-color: var(--disabled-primary);
  color: var(--light-primary);
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const Icon = styled(SvgIcon)<SvgIconProps>`
  width: 15px;
  height: 15px;
  fill: var(--light-primary);
`;

const showVariants = {
  start: { opacity: 0, y: "-100%" },
  clicking: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const Alert = ({ content = "메세지를 입력해 주세요" }: AlertProps) => {
  return (
    <Container variants={showVariants} initial="start" animate="clicking">
      <Icon component={CheckCircleRoundedIcon} />
      {content}
    </Container>
  );
};

export default Alert;
