import React from 'react';
import styled from '@emotion/styled';
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";

interface ButtonProps {
  width?: string;
  type?: 'default' | 'attach' | 'previous' | 'library' | 'login' | 'register'; 
}

interface ButtonContainerProps {
  width?: string;
}

const ButtonContainer = styled.div<ButtonContainerProps & ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => (props.type === 'library' ? '0.5rem' : '1rem')};
  width: ${(props) => props.width || '120px'};
  height: ${(props) => (props.type === 'login' ? '123px' : '40px')};
  border-radius: 4px;
  background-color: ${({ type }) =>
    type === 'attach' || type === 'library' ? 'var(--gray2-subbtn)' : 'var(--primary)'};
  cursor: pointer;
  font-family: "pretendardM";
  font-size: 1rem; 
  line-height: 1.5rem; 
  letter-spacing: -0.02em; 
`;

const ButtonContents = styled.span<ButtonProps>` 
  color: ${({ type }) => 
    type === 'attach' || type === 'library' ? 'var(--gray5-lowtext)' : 'var(--white)'};
  font-family: inherit; 
`;

const LibraryIcon = styled(SvgIcon)<SvgIconProps>`
  color: var(--primary);
  width: 24px;
  height: 24px;
`;

const Button: React.FC<ButtonProps> = ({ width, type = 'default' }) => {
  let label;
  switch (type) {
    case 'attach':
      label = '첨부파일';
      break;
    case 'previous':
      label = '이전';
      break;
    case 'library':
      label = '도서관';
      break;
    case 'login':
      label = '로그인';
      break;
    case 'register':
      label = '등록';
      break;
    default:
      label = '다음';
  }

  return (
    <ButtonContainer width={width} type={type}>
      {type === 'library' && <LibraryIcon component={MenuBookRoundedIcon} />}
      <ButtonContents type={type}>{label}</ButtonContents>
    </ButtonContainer>
  );
};

export default Button;
