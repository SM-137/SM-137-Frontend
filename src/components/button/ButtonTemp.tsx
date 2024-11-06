import styled from "@emotion/styled";

const DEFAULT_CONTENT = "버튼 내용";
const DEFAULT_TYPE = "default";

const buttonType = {
  default: {
    width: "120px",
    height: "40px",
    padding: "0.5rem 3rem ",
    backGround: "var(--light-primary)",
    hoverBackGround: "var(--primary)",
    color: "var(--white)",
  },
  login: {
    width: "100px",
    height: "123px",
    padding: "3rem 2rem ",
    backGround: "var(--light-primary)",
    hoverBackGround: "var(--primary)",
    color: "var(--white)",
  },
};

interface ContentProps {
  content: string;
  type: "default" | "login";
}
interface StyleProps {
  width?: string;
  height?: string;
  padding?: string;
  backGround?: string;
  hoverBackGround?: string;
  color?: string;
}

const ButtonContainer = styled.button<StyleProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backGround};
  border-radius: 4px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  &:hover {
    background-color: ${(props) => props.hoverBackGround};
  }
`;
const ButtonContents = styled.div<StyleProps>`
  display: flex;
  color: ${(props) => props.color};
  text-align: center;
`;

const ButtonTemp = ({
  content = DEFAULT_CONTENT,
  type = DEFAULT_TYPE,
}: ContentProps) => {
  const buttonStyle = buttonType[type];
  console.log(buttonStyle);

  const { width, height, padding, backGround, color, hoverBackGround } =
    buttonStyle;

  return (
    <ButtonContainer
      backGround={backGround}
      hoverBackGround={hoverBackGround}
      padding={padding}
      width={width}
      height={height}
    >
      <ButtonContents color={color}>{content}</ButtonContents>
    </ButtonContainer>
  );
};

export default ButtonTemp;
