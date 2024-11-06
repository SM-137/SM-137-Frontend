import styled from "@emotion/styled";
import ButtonTemp from "./components/button/ButtonTemp";
import "./reset.css";

const Wrap = styled.div`
  display: flex;
  gap: 1rem;
  background-color: #797979;
  width: 90%;
`;

function App() {
  return (
    <Wrap>
      <ButtonTemp content="로그인" type="login" />
      <ButtonTemp content="일반버튼" type="default" />
    </Wrap>
  );
}

export default App;
