import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const UpAnimation = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0); 
    opacity: 1;
  }
`;

const ModalContent = styled.div`
  background: var(--white);
  padding: 3rem 6rem;
  border-radius: 8px;
  max-width: 562px;
  text-align: center;
  animation: ${UpAnimation} 0.5s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  contents: React.ReactNode;
}

const Modal = ({ isOpen, contents }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <ModalWrapper>
      <ModalBackdrop />
      <ModalContent>{contents}</ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
