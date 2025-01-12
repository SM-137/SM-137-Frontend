import styled from "@emotion/styled";
import SpinnerGifFile from "../../assets/icons/spinner.gif";

const SpinnerGif = styled.img`
  width: 100px;
`;

const Loading = () => {
  return <SpinnerGif src={SpinnerGifFile} alt="로딩 gif" />;
};

export default Loading;
