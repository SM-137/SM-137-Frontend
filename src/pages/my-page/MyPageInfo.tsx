import styled from "@emotion/styled";
import { MyPageProps } from "../../types/Type";
import Gmail from "/public/assets/icons/gmail.png";
import CategoryTag from "../../components/category-tag/CategoryTag";
import { SvgIcon, SvgIconProps } from "@mui/material";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";

interface MyPageInfoProps {
  data: MyPageProps;
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

const MyPageInfo = ({ data }: MyPageInfoProps) => {
  return (
    <Container>
      <EditIcon component={CreateRoundedIcon} />
      <CategoryTag
        contents="재학생"
        background="var(--primary)"
        color="var(--white)"
      />
      <Name>{data.name}</Name>
      <Sid>{data.sid}</Sid>
      <Major>{data.major}</Major>
      <Email>
        <EmailIcon src={Gmail} alt="gmail icon" />
        {data.email}
      </Email>
    </Container>
  );
};

export default MyPageInfo;
