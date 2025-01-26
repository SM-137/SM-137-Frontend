import styled from "@emotion/styled";

interface CategoryTag {
  contents: string;
  background?: string;
  color?: string;
}
interface ContainerProps {
  background: string;
  color: string;
}

const Container = styled.div<ContainerProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.1rem 0.7rem;
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  border-radius: 20px;
  min-width: 45px;
`;
const Contents = styled.p``;

const CategoryTag = ({
  contents = "내용",
  background = "var(--gray2-subbtn)",
  color = "var(--gray5-lowText)",
}: CategoryTag) => {
  return (
    <Container color={color} background={background}>
      <Contents>{contents}</Contents>
    </Container>
  );
};

export default CategoryTag;
