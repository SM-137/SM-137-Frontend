import styled from "@emotion/styled";
import UserInfo from "./UserInfo";
import { useNavigate } from "react-router-dom";
import {
  MY_COMPLAINT_URL,
  MY_SCRAP_URL,
  MYPAGE_URL,
  VIEW_URL,
} from "../../utils/URL";
import { googleLogout } from "../../services/userService";

const SideNavContainer = styled.div`
  @keyframes moveRight {
    0% {
      transform: translateX(-250px);
    }
    100% {
      transform: translateX(0px);
    }
  }
  width: 250px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid var(--gray3-border);
  background-color: var(--white);
  z-index: 100;
  animation: moveRight 0.3s ease;

  @media (max-width: 768px) {
    width: 200px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 3rem;
`;
const MenuSubTitle = styled.h2``;
const MenuContent = styled.div`
  color: var(--gray5-lowText);
  cursor: pointer;
  &:hover {
    color: var(--light-primary);
  }
`;
const LogoutBtn = styled.div`
  position: absolute;
  bottom: 10%;
  color: var(--light-primary);
`;

const SideNavigator = () => {
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
    <SideNavContainer>
      <UserInfo />
      <Menu>
        <MenuSubTitle>조회 / 신청</MenuSubTitle>
        <MenuContent onClick={() => navigate(VIEW_URL)}>
          전체 민원 조회
        </MenuContent>
        <MenuContent>민원 신청</MenuContent>
      </Menu>
      <Menu>
        <MenuSubTitle>마이페이지</MenuSubTitle>
        <MenuContent onClick={() => navigate(MYPAGE_URL)}>
          마이페이지
        </MenuContent>
        <MenuContent onClick={() => navigate(MY_COMPLAINT_URL)}>
          내 민원
        </MenuContent>
        <MenuContent>결과 조회</MenuContent>
        <MenuContent onClick={() => navigate(MY_SCRAP_URL)}>
          스크랩한 민원
        </MenuContent>
        <MenuContent>개인정보 수정</MenuContent>
      </Menu>
      <LogoutBtn onClick={handleLogout}>로그아웃</LogoutBtn>
    </SideNavContainer>
  );
};

export default SideNavigator;
