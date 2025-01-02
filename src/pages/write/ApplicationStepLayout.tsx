import React from "react";
import styled from "@emotion/styled";
import ProgressBar from "../../components/progress-line/ProgressBar";
import MailRoundedIcon from "@mui/icons-material/MailRounded";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
`;

const BottomBackground = styled.div`
  position: absolute;
  top: 357px;
  left: 0;
  width: 100%;
  height: 100%; /* Primary 배경 높이 설정 */
  background-color: var(--gray1-background);
  z-index: -1; /* 배경이 다른 요소 아래로 가도록 설정 */
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 140px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: var(--gray6-header);
  margin: 0; /* margin-bottom 제거 */
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0; /* 최소 간격으로 설정 */
`;

const StyledMailIcon = styled(MailRoundedIcon)`
  font-size: 30px;
  color: var(--disabled-primary);
`;

const ProgressWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

interface LayoutProps {
  title: string;
  children: React.ReactNode;
  onNext?: () => void;
  onBack?: () => void;
  disableNext?: boolean;
  disableBack?: boolean;
}

const ApplicationStepLayout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <LayoutContainer>
      {/* 하단 Primary 배경 */}
      <BottomBackground />
      <ContentWrapper>
        <IconWrapper>
          <StyledMailIcon />
        </IconWrapper>
        <Title>{title}</Title>
        <ProgressWrapper>
          <ProgressBar />
        </ProgressWrapper>
        {children}
      </ContentWrapper>
    </LayoutContainer>
  );
};

export default ApplicationStepLayout;
