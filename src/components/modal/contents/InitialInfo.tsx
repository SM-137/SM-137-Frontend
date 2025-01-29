import styled from "@emotion/styled";
import { useRef } from "react";
import Button from "../../button/Button";
import UserInfoForm, { UserInfoFormHandles } from "../../form/UserInfoForm";
import InfoMessage from "../../info-message/InfoMessage";
import { modify } from "../../../services/userService";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  width: 100%;
  max-width: 500px;
`;

const InfoMessageText = `회원가입 후 최초 1회, 원활한 서비스 이용을 위해
학번, 학과, 이름 등의 개인정보 설정이 필요합니다`;

interface InitialInfoProps {
  handleClose: () => void;
}

const InitialInfo = ({ handleClose }: InitialInfoProps) => {
  const formRef = useRef<UserInfoFormHandles>(null);

  const handleNextClick = async () => {
    if (formRef.current?.validateForm()) {
      const formData = formRef.current.getFormData();

      try {
        await modify(formData);
        handleClose(); // 성공 시 모달 닫기
      } catch (e) {
        console.error("서버 요청 중 에러 발생:", e);
      }
    }
  };

  return (
    <Container>
      <InfoMessage
        sizeType="small"
        messageType="info"
        content={InfoMessageText}
      />
      <UserInfoForm ref={formRef} />
      <Button type="_120x40_Primary" content="다음" onClick={handleNextClick} />
    </Container>
  );
};

export default InitialInfo;
