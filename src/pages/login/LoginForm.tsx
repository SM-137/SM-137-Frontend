import styled from "@emotion/styled";
import Button from "../../components/button/Button";

const Container = styled.div`
  width: 30rem;
  margin: 0 auto;
`;
const Title = styled.h2`
  width: 100%;
  text-align: center;
  color: var(--black);
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
const TextBox = styled.div`
  width: 60px;
  margin-right: 10px;
  display: flex;
  justify-content: flex-end;
`;
const Text = styled.h3`
  color: var(--gray5-lowText);
  font-size: 1rem;
`;
const Input = styled.input`
  width: 12rem;
  height: 3rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: var(--white);
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: center;
`;
const FieldContainer = styled.div`
  height: 5rem;
  gap: 10px;
`;

const FieldBox = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const LoginForm = () => {
  return (
    <Container>
      <Title>관리자 로그인</Title>
      <ButtonContainer>
        <FieldContainer>
          <FieldBox>
            <TextBox>
              <Text>아이디</Text>
            </TextBox>
            <Input placeholder="아이디 입력" />
          </FieldBox>
          <FieldBox>
            <TextBox>
              <Text>비밀번호</Text>
            </TextBox>
            <Input placeholder="비밀번호 입력" />
          </FieldBox>
        </FieldContainer>
        <Button content="다음" type={"_100x123_Primary"} />
      </ButtonContainer>
    </Container>
  );
};

export default LoginForm;
