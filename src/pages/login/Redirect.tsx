import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import styled from "@emotion/styled";
import { googleRedirect } from "../../services/userService";
import { handleValidDomain } from "../../utils/JWT";

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
        if (jwtToken && isValidDomain) {
          navigate("/");
          return;
        }
        //유효하지 않은 도메인
        alert("숙명 Gmail 계정으로만 로그인 가능합니다.");
        navigate("/login");
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
