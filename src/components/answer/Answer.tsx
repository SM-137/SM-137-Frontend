import styled from "@emotion/styled";
import { SvgIcon, SvgIconProps } from "@mui/material";
import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded";
import { motion } from "framer-motion";

interface AnswerProps {
  data: string;
}
const Container = styled.div`
  width: 100%;
  background-color: var(--gray2-subbtn);
  border-radius: 20px;
  padding: 0.75rem;
`;
const TitleContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;
const Title = styled.span`
  color: var(--light-primary);
`;
const Icon = styled(SvgIcon)<SvgIconProps>`
  fill: var(--light-primary);
  width: 50px;
  height: 50px;
`;
const Contents = styled(motion.div)`
  background-color: var(--white);
  width: 100%;
  border-radius: 8px;
  padding: 2rem 1rem;
  overflow: hidden;
`;

const animationVariants = {
  start: { maxHeight: 0, opacity: 0 },
  opening: {
    maxHeight: "1000px",
    opacity: 1,
    transition: {
      type: "tween",
      maxHeight: { duration: 4, ease: "easeOut" },
      opacity: { duration: 0.7, ease: "easeOut" },
    },
  },
};
const Answer = ({ data }: AnswerProps) => {
  return (
    <Container>
      <TitleContainer>
        <Icon component={HowToRegRoundedIcon} />
        <Title>관리자 답변</Title>
      </TitleContainer>
      <Contents variants={animationVariants} initial="start" animate="opening">
        {data}
      </Contents>
    </Container>
  );
};

export default Answer;
