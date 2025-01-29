import styled from "@emotion/styled";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 8px;
  margin-top: 1.5rem;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
`;

const StyleCompleteIcon = styled(CheckCircleRoundedIcon)`
  font-size: 100px;
  color: var(--succeess);
`;

const CompletedForm = ({
  mainMessage = "민원이 신청되었습니다",
  subMessage = "민원 내용 확인 및 수정은 '내 민원' 창을 확인해 주세요",
}) => {
  return (
    <FormContainer>
      <IconWrapper>
        <StyleCompleteIcon />
      </IconWrapper>
      <h2 style={{ color: "var(--gray5-lowText)" }}>{mainMessage}</h2>
      <p style={{ color: "var(--gray4-placeholder-low)" }}>{subMessage}</p>
    </FormContainer>
  );
};

export default CompletedForm;
