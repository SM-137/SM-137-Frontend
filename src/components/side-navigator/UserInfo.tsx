import styled from "@emotion/styled";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useHeaderContext } from "../../contexts/HeaderOpenContext";
import siteLogo from "../../assets/symbol_Color.png";
import useUserInfoStore from "../../store/useUserInfoStore";

const Logo = styled.img`
  width: 70px;
  border-radius: 500px;
  position: relative;
`;
const Info = styled.div`
  width: 100%;
  height: 20%;
  min-height: 140px;
  max-height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  background-color: var(--gray1-background);
`;
const Name = styled.span``;
const IconContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
const CrossIcon = styled(SvgIcon)<SvgIconProps>`
  position: absolute;
  top: 2%;
  right: 7%;
  color: var(--gray6-header);
`;

const UserInfo = () => {
  const { handleOpen } = useHeaderContext();
  const { name } = useUserInfoStore();

  return (
    <Info>
      <IconContainer onClick={() => handleOpen("isSideNavOpen")}>
        <CrossIcon component={CloseRoundedIcon} />
      </IconContainer>
      <Logo src={siteLogo} />
      <Name>{name}</Name>
    </Info>
  );
};

export default UserInfo;
