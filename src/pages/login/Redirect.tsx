import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import styled from "@emotion/styled";
import { googleRedirect } from "../../services/userService";
import { deleteJWTToken, handleValidDomain } from "../../utils/JWT";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Info = styled.h3`
  color: var(--light-primary);
`;

const Redirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleRedirect = async () => {
      try {
        const jwtToken = await googleRedirect();
        const isValidDomain = handleValidDomain();
        if (!isValidDomain) {
          alert("숙명 Gmail 계정으로만 로그인 가능합니다.");
          deleteJWTToken();

          navigate("/login");
          return;
        }
        if (!jwtToken) {
          alert("로그인 중 에러가 발생하였습니다. 다시 시도해 주세요.");
          return;
        }
        navigate("/");
        return;
      } catch (error) {
        console.error("로그인 실패:", error);
      }
    };
    handleRedirect();
  }, [location.search, navigate]);

  return (
    <Container>
      <Loading />
      <Info>로그인 중 입니다</Info>
    </Container>
  );
};

export default Redirect;
