import styled from "@emotion/styled";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

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
