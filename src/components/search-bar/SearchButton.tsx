import styled from "@emotion/styled";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { SvgIcon, SvgIconProps } from "@mui/material";
import { SEARCH_URL } from "../../utils/URL";
import { useNavigate } from "react-router-dom";

const SearchIcon = styled(SvgIcon)<SvgIconProps>`
  width: 24px;
  height: 24px;
`;

const Button = styled.button`
  top: 6px;
  left: 360px;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchButton = () => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(SEARCH_URL)}>
      <SearchIcon component={SearchRoundedIcon} />
    </Button>
  );
};

export default SearchButton;
