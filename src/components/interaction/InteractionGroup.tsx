import styled from "@emotion/styled";
import Interaction from "./Interaction";

interface InteractionGroupProps {
  likes: number;
  bookmarks: number;
  liked: boolean;
  scrapped: boolean;
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
  liked,
  scrapped,
}: InteractionGroupProps) => {
  return (
    <Container>
      <Interaction type="thumbUp" count={likes} isIconClicked={liked} />
      <Interaction type="scrap" count={bookmarks} isIconClicked={scrapped} />
    </Container>
  );
};

export default InteractionGroup;
