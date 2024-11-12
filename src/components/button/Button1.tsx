import styled from "@emotion/styled";
//typeScript 정의
interface ButtonProps {
  width?: string; // Button 컴포넌트의 props 타입 정의
}
interface ButtonContainerProps {
  width?: string; // width가 선택적 속성임을 정의
}
const ButtonContainer = styled.div<ButtonContainerProps>`
  /*flex 줄 */
  display: flex;
  align-items: center;
  text-align: center;
  gap: 1rem; //ButtonContainer 밑에 하위 컴포넌트가 2개일 경우
  justify-content: center;

  width: ${(props) => props.width};
  height: 100px; //컴포넌트의 특정 크기 - px
  border-radius: 4px; //컴포넌트 라운딩 처리
  background-color: var(--primary); // var() - index.css에 정의해둔 변수명
`;
const ButtonContents = styled.h2`
  //h2 - 피그마 기준으로 Desktop - header2
  color: white; // 폰트 색상
`;

const Button = ({ width }: ButtonProps) => {
  return (
    <ButtonContainer width={width}>
      <ButtonContents>hi</ButtonContents>
    </ButtonContainer>
  );
};

export default Button;
