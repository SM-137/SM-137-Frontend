import styled from "@emotion/styled";
import { useModal } from "../../hooks/useModal";
import Modal from "../modal/Modal";

interface ContentImageProps {
  attachmentUrls: string[];
}
const ImageContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 8px;
  cursor: pointer;
`;

const ContentImage = ({ attachmentUrls }: ContentImageProps) => {
  console.log(attachmentUrls);
  //이미지 로드
  const { isModalOpen, handleModalClose, handleModalOpen } = useModal();
  const handleImageClick = () => {
    handleModalOpen();
  };

  return (
    <>
      <ImageContainer>
        {attachmentUrls &&
          attachmentUrls.map((i, index) => (
            <div key={index}>
              <Image src={i} onClick={handleImageClick} />
              <Modal
                contents={<img src={i} />}
                isOpen={isModalOpen}
                handleClose={handleModalClose}
              />
            </div>
          ))}
      </ImageContainer>
    </>
  );
};

export default ContentImage;
