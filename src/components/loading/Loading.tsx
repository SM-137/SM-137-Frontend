import styled from "@emotion/styled";

const SpinnerGif = styled.img`
  width: 100px;
`;

const Loading = () => {
  return <SpinnerGif src="/src/assets/icons/spinner.gif" alt="로딩 gif" />;
};

export default Loading;
