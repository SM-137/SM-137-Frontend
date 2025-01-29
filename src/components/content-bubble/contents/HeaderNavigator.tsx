import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import {
  LOGIN_URL,
  MY_COMPLAINT_URL,
  MY_SCRAP_URL,
  MYPAGE_URL,
} from "../../../utils/URL";
import { deleteJWTToken } from "../../../utils/JWT";
import axios from "axios";

const NavigatorContainer = styled.ul`
  display: flex;
  gap: 0.75rem;
  flex-direction: column;
  color: var(--gray5-lowText);
  text-align: center;
  align-items: center;
`;
const NavigatorContent = styled.div`
  width: 100%;
  cursor: pointer;
  &:hover {
    color: var(--light-primary);
  }
`;

const HeaderNavigator = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    deleteJWTToken();
    delete axios.defaults.headers.common["Authorization"];
    window.location.replace(LOGIN_URL);
  };

  return (
    <NavigatorContainer>
      <NavigatorContent onClick={() => navigate(MYPAGE_URL)}>
        마이페이지
      </NavigatorContent>
      <NavigatorContent onClick={() => navigate(MY_COMPLAINT_URL)}>
        내 민원
      </NavigatorContent>
      <NavigatorContent onClick={() => navigate(MY_SCRAP_URL)}>
        스크랩
      </NavigatorContent>
      <NavigatorContent>개인정보 수정</NavigatorContent>
      <NavigatorContent onClick={handleLogout}>로그아웃</NavigatorContent>
    </NavigatorContainer>
  );
};

export default HeaderNavigator;
