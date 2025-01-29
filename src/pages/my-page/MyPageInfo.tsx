import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import CategoryTag from "../../components/category-tag/CategoryTag";
import { SvgIcon, SvgIconProps } from "@mui/material";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import Gmail from "../../assets/icons/gmail.png";
import { userInfo } from "../../services/userService";
import { My_DATA_Modify_URL } from "../../utils/URL";
import { useNavigate } from "react-router-dom";

interface UserResponse {
  name: string;
  email: string;
  number: string;
  department: string;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  padding: 4rem 4rem;
  border-radius: 8px;
  white-space: nowrap;
  gap: 0.3rem;
  position: relative;
`;

const Name = styled.h2``;
const Sid = styled.div`
  color: var(--gray4-placeholder-low);
`;

const Major = styled.div`
  color: var(--gray5-lowText);
`;

const Email = styled.p`
  background-color: var(--gray1-background);
  border-radius: 500px;
  padding: 0.2rem 1.5rem;
  color: var(--gray4-placeholder-low);
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
`;

const EmailIcon = styled.img`
  width: 20px;
`;

const EditIcon = styled(SvgIcon)<SvgIconProps>`
  width: 24px;
  fill: var(--gray5-lowText);
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  border-radius: 500px;
  &:hover {
    fill: var(--gray6-header);
    transition: fill 0.2s ease;
  }
`;

const MyPageInfo = () => {
  const [userData, setUserData] = useState<UserResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await userInfo();
        const { data } = response;
        setUserData({
          name: data.name,
          email: data.email,
          number: data.number,
          department: data.department,
        });
      } catch (error) {
        console.error("사용자 정보 조회 중 에러 발생 :", error);
        setError("사용자 정보를 불러오는 데 실패했습니다.");
      }
    };

    fetchUserData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!userData) {
    return null;
  }

  return (
    <Container>
      <EditIcon
        component={CreateRoundedIcon}
        onClick={() => navigate(My_DATA_Modify_URL)}
      />
      <CategoryTag
        contents="재학생"
        background="var(--primary)"
        color="var(--white)"
      />
      <Name>{userData.name}</Name>
      <Sid>{userData.number}</Sid>
      <Major>{userData.department}</Major>
      <Email>
        <EmailIcon src={Gmail} alt="gmail icon" />
        {userData.email}
      </Email>
    </Container>
  );
};

export default MyPageInfo;
