import styled from "@emotion/styled";
import { SvgIcon, SvgIconProps } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import { motion } from "framer-motion";

interface AlertProps {
  content: string;
  type: "warning" | "info";
}
interface TypeProps {
  type: "warning" | "info";
}
const Container = styled(motion.div)<TypeProps>`
  display: inline-flex;
  padding: 0.5rem 1rem;
  background-color: ${(props) =>
    props.type === "warning"
      ? "var(--error-light)"
      : "var(--disabled-primary)"};
  color: ${(props) =>
    props.type === "warning" ? "var(--error-dark)" : "var(--light-primary)"};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const Icon = styled(SvgIcon)<SvgIconProps>`
  width: 15px;
  height: 15px;
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

const Alert = ({
  content = "메세지를 입력해 주세요",
  type = "info",
}: AlertProps) => {
  return (
    <Container
      variants={showVariants}
      initial="start"
      animate="clicking"
      type={type}
    >
      {type === "warning" ? (
        <Icon
          component={WarningRoundedIcon}
          sx={{ fill: "var(--error-dark)" }}
        />
      ) : (
        <Icon
          component={CheckCircleRoundedIcon}
          sx={{ fill: "var(--light-primary)" }}
        />
      )}
      {content}
    </Container>
  );
};

export default Alert;
