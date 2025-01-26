import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import styled from "@emotion/styled";
import IconWithText from "./IconWithText";

const ProgressLine = styled.div`
  position: absolute;
  top: 15px;
  left: 38px;
  right: 15px;
  width: 399px;
  height: 4px;
  background-color: #d9d9d9;
  z-index: 0;
  transform: translateY(-50%);

  @media (max-width: 768px) {
    width: 300px;
    height: 3px;
    top: 13px;
  }

  @media (max-width: 480px) {
    width: 250px;
    height: 2px;
    top: 10px;
  }
`;

const ActiveLine = styled.div<{ step: number }>`
  position: absolute;
  top: 15px;
  left: 38px;
  width: ${({ step }) => (step - 1) * 33}% + 10px;
  height: 4px;
  background-color: var(--light-primary);
  z-index: 1;
  transition: width 0.3s ease-in-out;

  @media (max-width: 768px) {
    height: 3px;
  }

  @media (max-width: 480px) {
    height: 2px;
  }
`;

const TotalProgressBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 467px;

  @media (max-width: 768px) {
    width: 350px;
  }

  @media (max-width: 480px) {
    width: 300px;
  }
`;

interface ProgressBarProps {
  activeStep: number; 
}

const ProgressBar = ({ activeStep }: ProgressBarProps) => (
  <TotalProgressBar>
    <ProgressLine />
    <ActiveLine step={activeStep} />
    <IconWithText
      icon={PermIdentityRoundedIcon}
      text="학적정보 확인"
      isActive={activeStep >= 1}
    />
    <IconWithText
      icon={CategoryRoundedIcon}
      text="카테고리 선택"
      isActive={activeStep >= 2}
    />
    <IconWithText icon={EditRoundedIcon} text="민원 작성" isActive={activeStep >= 3} />
    <IconWithText icon={SendRoundedIcon} text="제출 완료" isActive={activeStep >= 4} />
  </TotalProgressBar>
);

export default ProgressBar;
