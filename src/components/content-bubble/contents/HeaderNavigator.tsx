import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { MY_COMPLAINT_URL, MY_SCRAP_URL, MYPAGE_URL } from "../../../utils/URL";
import { googleLogout } from "../../../services/userService";

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
    try {
      const res = await googleLogout();
      console.log(res);
    } catch (error) {
      alert("로그아웃 중 에러가 발생하였습니다.");
      console.error(error);
    }
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
