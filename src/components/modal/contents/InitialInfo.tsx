import styled from "@emotion/styled";
import Button from "../../button/Button";
import UserInfoForm from "../../form/UserInfoForm";
import InfoMessage from "../../info-message/InfoMessage";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoMessageText = `회원가입 후 최초 1회, 원활한 서비스 이용을 위해
학번, 학과, 이름 등의 개인정보 설정이 필요합니다`;

interface InitialInfoProps {
  closeModal: () => void;
}

const InitialInfo = ({ closeModal }: InitialInfoProps) => {
  return (
    <Container>
      <InfoMessage
        sizeType="small"
        messageType="info"
        content={InfoMessageText}
      />
      <UserInfoForm />
      <Button content="시작하기" onClick={closeModal} />
    </Container>
  );
};

export default InitialInfo;
