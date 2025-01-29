import styled from "@emotion/styled";
import { useModal } from "../../hooks/useModal";
import Modal from "../modal/Modal";
import { useState } from "react";

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
  const { isModalOpen, handleModalClose, handleModalOpen } = useModal();
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const handleImageClick = (src: string) => {
    setSelectedImage(src);
    handleModalOpen();
  };

  return (
    <>
      <ImageContainer>
        {isModalOpen && (
          <Modal
            contents={<img src={selectedImage} />}
            isOpen={isModalOpen}
            handleClose={handleModalClose}
          />
        )}
        {attachmentUrls &&
          attachmentUrls.map((i, index) => (
            <div key={index}>
              <Image src={i} onClick={() => handleImageClick(i)} />
            </div>
          ))}
      </ImageContainer>
    </>
  );
};

export default ContentImage;
