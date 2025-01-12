import styled from "@emotion/styled";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import { useNavigate } from "react-router-dom";

interface QuickLinkItemProps {
  icon: React.ComponentType<SvgIconProps>;
  text: string;
  url: string;
}

const QuickLinkIconTextItem = styled.div`
  width: 25%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;
  gap: 1rem;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  flex: 1;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 1rem 0;
  }
`;

const QuickLinkIcon = styled(SvgIcon)<SvgIconProps>`
  color: var(--gray5-lowText);
  width: 25px;
  height: 25px;
  @media screen and (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

const QuickLinkText = styled.span`
  color: var(--gray5-lowText);
  display: inline-block;
  text-align: center;
  line-height: 0;
  white-space: normal;
`;

const QuickLinkItem = ({
  icon: IconComponent,
  text,
  url,
}: QuickLinkItemProps) => {
  const navigate = useNavigate();

  return (
    <QuickLinkIconTextItem onClick={() => navigate(url)}>
      <QuickLinkIcon component={IconComponent} />
      <QuickLinkText>{text}</QuickLinkText>
    </QuickLinkIconTextItem>
  );
};

export default QuickLinkItem;
