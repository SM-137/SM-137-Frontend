import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { MYPAGE_URL } from "../../../utils/URL";

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
  return (
    <NavigatorContainer>
      <NavigatorContent onClick={() => navigate(MYPAGE_URL)}>
        마이페이지
      </NavigatorContent>
      <NavigatorContent>내 민원</NavigatorContent>
      <NavigatorContent>결과 조회</NavigatorContent>
      <NavigatorContent>스크랩</NavigatorContent>
      <NavigatorContent>개인정보 수정</NavigatorContent>
    </NavigatorContainer>
  );
};

export default HeaderNavigator;
