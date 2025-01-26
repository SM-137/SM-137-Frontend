import styled from "@emotion/styled";
import CategoryTag from "./CategoryTag";

interface CategoryTagGroupProps {
  hashtag: string[];
}
const GroupContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const CategoryTagGroup = ({ hashtag }: CategoryTagGroupProps) => {
  return (
    <GroupContainer>
      {hashtag.map((tagItem, index) => (
        <CategoryTag key={index} contents={tagItem} />
      ))}
    </GroupContainer>
  );
};

export default CategoryTagGroup;
