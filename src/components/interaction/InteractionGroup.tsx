import styled from "@emotion/styled";
import Interaction from "./Interaction";

interface InteractionGroupProps {
  likes: number;
  bookmarks: number;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 100px;
  gap: 1rem;
`;

const InteractionGroup = ({ likes, bookmarks }: InteractionGroupProps) => {
  return (
    <Container>
      <Interaction type="thumbUp" count={likes} />
      <Interaction type="scrap" count={bookmarks} />
    </Container>
  );
};

export default InteractionGroup;
