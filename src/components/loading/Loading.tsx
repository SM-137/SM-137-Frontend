import styled from "@emotion/styled";
import SpinnerGifFile from "../../assets/icons/spinner.gif";

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SpinnerGif = styled.img`
  width: 100px;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <SpinnerGif src={SpinnerGifFile} alt="로딩 gif" />
    </LoadingContainer>
  );
};

export default Loading;
