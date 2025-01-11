import styled from "@emotion/styled";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"; // 올바른 import 추가

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 3rem;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ComplaintIcon = styled(SvgIcon)<SvgIconProps>`
  // SvgIcon 및 SvgIconProps 사용
  color: var(--disabled-primary);
  width: 2rem;
  height: 2rem;
  margin-top: 2rem;
`;

const Title = styled.h2`
  color: var(--gray6-black);
`;

const Border = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--gray3-border);
  padding: 5rem;
  transform: translateY(-5rem);
  z-index: 0;
  width: 100vw;
  flex-wrap: wrap;
`;

// ComplaintGrid 스타일 정의
const ComplaintGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  justify-content: start;
  align-items: center;
`;

export {
  Container,
  TitleContainer,
  ComplaintIcon,
  Title,
  Border,
  ComplaintGrid,
};
