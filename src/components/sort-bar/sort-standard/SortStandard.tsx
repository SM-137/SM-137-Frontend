import styled from "@emotion/styled";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import ThumbUpOffAltRoundedIcon from "@mui/icons-material/ThumbUpOffAltRounded";
import { SvgIcon, SvgIconProps } from "@mui/material";

interface SortStandardProps {
  type: "latest" | "scrap" | "likes";
  isClick: boolean;
  handleClick: (type: "latest" | "scrap" | "likes") => void;
}
interface ContainerProps {
  isClick: boolean;
}
const Container = styled.div<ContainerProps>`
  display: flex;
  gap: 0.5rem;
  cursor: pointer;
  & > svg {
    fill: ${(props) => props.isClick && "var(--light-primary)"};
  }
  & > pre {
    color: ${(props) => props.isClick && "var(--light-primary)"};
  }
`;
const Icon = styled(SvgIcon)<SvgIconProps>`
  fill: var(--gray5-lowText);
  width: 24px;
  height: 24px;
`;
const String = styled.pre`
  color: var(--gray5-lowText);
`;

const SortStandard = ({ type, isClick, handleClick }: SortStandardProps) => {
  const match = {
    latest: {
      string: "최신순",
      icon: TimelineRoundedIcon,
    },
    scrap: {
      string: "스크랩순",
      icon: BookmarkRoundedIcon,
    },
    likes: {
      string: "좋아요순",
      icon: ThumbUpOffAltRoundedIcon,
    },
  };
  console.log(type, isClick);
  return (
    <Container isClick={isClick} onClick={() => handleClick(type)}>
      <Icon component={match[type].icon}></Icon>
      <String>{match[type].string}</String>
    </Container>
  );
};

export default SortStandard;
