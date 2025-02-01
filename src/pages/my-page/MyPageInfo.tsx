import styled from "@emotion/styled";
import CategoryTag from "../../components/category-tag/CategoryTag";
import { SvgIcon, SvgIconProps } from "@mui/material";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import Gmail from "../../assets/icons/gmail.png";
import { useNavigate } from "react-router-dom";
import { MY_MODIFY_URL } from "../../utils/URL";
import useUserInfoStore from "../../store/useUserInfoStore";

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
  const navigate = useNavigate();
  const { name, number, department, email } = useUserInfoStore();

  return (
    <Container>
      <EditIcon
        component={CreateRoundedIcon}
        onClick={() => navigate(MY_MODIFY_URL)}
      />
      <CategoryTag
        contents="재학생"
        background="var(--primary)"
        color="var(--white)"
      />
      <Name>{name}</Name>
      <Sid>{number}</Sid>
      <Major>{department}</Major>
      <Email>
        <EmailIcon src={Gmail} alt="gmail icon" />
        {email}
      </Email>
    </Container>
  );
};

export default MyPageInfo;
