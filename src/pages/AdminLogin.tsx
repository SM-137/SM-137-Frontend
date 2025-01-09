import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  position: relative;
  padding: 0 1rem;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  background: var(--primary);
`;

const LoginSection = styled.div`
  position: absolute;
  width: 41.8vw; /* 602px / 1440px * 100 */
  height: 100vh; /* 화면 높이에 맞춤 */
  left: 58.19vw; /* 838px / 1440px * 100 */
  top: 0;
  background: var(--white);
  box-shadow: -0.28vw 0.28vw 0.28vw 0.69vw rgba(0, 0, 0, 0.25);
  border-radius: 3.61rem 0 0 3.61rem; /* 52px converted to rem */
`;

const TitleContainer = styled.div`
  position: absolute;
  left: 3.56rem; /* 57px / 16 */
  top: 60%; /* 비율로 조정 */
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 2rem; /* 간격을 2rem으로 확장 */
  max-width: calc(58.19vw - 3.56rem); /* 흰색 섹션을 넘지 않도록 제한 */
`;

const TitlePrimary = styled.h2`
  font-weight: 600;
  font-size: 7.5rem; /* 120px / 16 */
  color: var(--light-primary);
  white-space: nowrap;
`;

const TitleSecondaryContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1rem;
`;

const TitleSecondary = styled.h2`
  font-weight: 600;
  font-size: 7.5rem; /* 120px / 16 */
  color: var(--disabled-primary);
  white-space: nowrap;
`;

const Subtitle = styled.h3`
  font-weight: 600;
  font-size: 3.75rem; /* 60px / 16 */
  color: var(--disabled-primary);
  white-space: nowrap;
`;

const AdminLogin = () => {
  return (
    <Container>
      <TitleContainer>
        <TitlePrimary>숙명여자대학교</TitlePrimary>
        <TitleSecondaryContainer>
          <TitleSecondary>민원 시스템</TitleSecondary>
          <Subtitle>관리자용</Subtitle>
        </TitleSecondaryContainer>
      </TitleContainer>
      <LoginSection />
    </Container>
  );
};

export default AdminLogin;
