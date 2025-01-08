import styled from "@emotion/styled";
import { categoryName } from "../../utils/SubCategoryContent";
import { CategoryValue } from "../../types/Type";
import { useContext, useState } from "react";
import { ViewContext } from "../../pages/view/View";

interface SubCategoryProps {
  category: keyof typeof categoryName;
}

const Background = styled.div`
  max-width: 490px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  padding: 1rem 0.75rem;
  background-color: var(--gray1-background);
  border-radius: 8px;
`;
const Container = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const SubCategoryButton = styled.button<{ isClick: boolean }>`
  width: 150px;
  height: 45px;
  background-color: var(--white);
  color: var(--gray5-lowText);
  border-radius: 8px;
  border: ${(props) => props.isClick && "2px solid var(--light-primary)"};
  color: ${(props) => props.isClick && "var(--light-primary)"};
`;

const SubCategory = (props: SubCategoryProps) => {
  const { category } = props;
  const subCategoryField = categoryName[category];

  const context = useContext(ViewContext);
  if (!context) {
    throw new Error("SubCategory context 호출 중 오류 발생");
  }

  //필터링
  const [subCategory, setSubCategory] = useState<CategoryValue>();
  const handleSubCategorySelect = (value: CategoryValue) => {
    if (subCategory === value) {
      //기존 선택지 해제
      setSubCategory(undefined);
      context.handleFilterOptions("category", null);
      return;
    }
    setSubCategory(value);
    context.handleFilterOptions("category", value);
  };

  return (
    <Background>
      <Container>
        {subCategoryField.map((item, index) => (
          <SubCategoryButton
            isClick={subCategory === item}
            key={index}
            onClick={() => handleSubCategorySelect(item)}
          >
            {item}
          </SubCategoryButton>
        ))}
      </Container>
    </Background>
  );
};

export default SubCategory;
