import styled from "@emotion/styled";
import Interaction from "./Interaction";

interface InteractionGroupProps {
  likes: number;
  bookmarks: number;
  resetTrigger?: boolean;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 100px;
  gap: 1rem;
`;

const InteractionGroup = ({
  likes,
  bookmarks,
  resetTrigger,
}: InteractionGroupProps) => {
  return (
    <Container>
      <Interaction type="thumbUp" count={likes} resetTrigger={resetTrigger} />
      <Interaction type="scrap" count={bookmarks} resetTrigger={resetTrigger} />
    </Container>
  );
};

export default InteractionGroup;
