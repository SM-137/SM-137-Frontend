import styled from "@emotion/styled";

export const Title = styled.span`
  text-align: left;
`;
export const Article = styled.div<{ line: number }>`
  color: var(--gray5-lowText);
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${(props) => props.line};
  text-overflow: ellipsis;
  height: calc(1.5rem * 2);
  @media screen and (max-width: 480px) {
    -webkit-line-clamp: 1;
    max-height: calc(1.5rem * 1);
  }
`;
