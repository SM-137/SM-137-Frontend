import React from "react";
import styled from "@emotion/styled";
import ProgressBar from "../../components/progress-line/ProgressBar";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import usePrompt from "../../hooks/usePrompt";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
`;

const Background = styled.div`
  position: absolute;
  top: 257px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--gray1-background);
  z-index: -1;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 46px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: var(--gray6-header);
  margin: 0;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
`;

const StyledMailIcon = styled(MailRoundedIcon)`
  font-size: 30px;
  color: var(--disabled-primary);
`;

const ProgressWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;

interface LayoutProps {
  children: React.ReactNode;
  activeStep: number;
}

const ApplicationLayout: React.FC<LayoutProps> = ({ children, activeStep }) => {
  usePrompt();

  return (
    <LayoutContainer>
      <Background />
      <ContentWrapper>
        <IconWrapper>
          <StyledMailIcon />
        </IconWrapper>
        <Title>민원 신청</Title>
        <ProgressWrapper>
          <ProgressBar activeStep={activeStep} />
        </ProgressWrapper>
        {children}
      </ContentWrapper>
    </LayoutContainer>
  );
};

export default ApplicationLayout;
