import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* 페이지를 덮는 레이어 */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const UpAnimation = keyframes`
  from {
    transform: translateY(100%); /* 화면 아래에서 시작 */
    opacity: 0;
  }
  to {
    transform: translateY(0); /* 원래 위치로 이동 */
    opacity: 1;
  }
`;

const ModalContent = styled.div`
  background: var(--white);
  padding: 3rem 6rem;
  border-radius: 8px;
  max-width: 562px;
  max-height: 348px;
  text-align: center;
  animation: ${UpAnimation} 0.5s ease-out; /* UpAnimation 적용 */
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const Backdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: transparent;
`;

interface ModalProps {
  contents: React.ReactNode;
  onClose: () => void;
}

const Modal = ({ contents, onClose }: ModalProps) => {
  return (
    <ModalWrapper>
      <Backdrop onClick={onClose} /> {/* 모달 외부를 클릭하면 닫힘 */}
      <ModalContent>{contents}</ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
