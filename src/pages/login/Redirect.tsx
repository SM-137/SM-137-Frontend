import Loading from "../../components/loading/Loading";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Info = styled.h3`
  color: var(--light-primary);
`;

const Redirect = () => {
  return (
    <Container>
      <Loading />
      <Info>로그인 중 입니다</Info>
    </Container>
  );
};

export default Redirect;
