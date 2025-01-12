import styled from "@emotion/styled";
import { SvgIcon, SvgIconProps } from "@mui/material";

export const CommentTitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;
export const CommentTitle = styled.pre``;
export const Icon = styled(SvgIcon)<SvgIconProps>`
  fill: ${(props) => props.fill};
  width: ${(props) => props.width};
`;
