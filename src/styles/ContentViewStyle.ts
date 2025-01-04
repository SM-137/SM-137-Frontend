import styled from "@emotion/styled";
import { motion } from "framer-motion";

// Title + content n개가 정렬돼있는 형태 스타일
export const ContentContainer = styled(motion.div)`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
export const ContentBoxContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  gap: 2.5rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 100%;
`;
export const Title = styled.h2`
  color: var(--gray6-header);
`;
export const ViewMore = styled.div`
  color: var(--gray5-lowText);
  cursor: pointer;
  &:hover {
    color: var(--gray6-header);
  }
`;
