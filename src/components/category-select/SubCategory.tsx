import styled from "@emotion/styled";
import { categoryName } from "../../utils/SubCategoryContent";
import { CategoryValue } from "../../types/Type";
import { useState } from "react";
// import { ViewContext } from "../../pages/view/View";

interface SubCategoryProps {
  category: keyof typeof categoryName;
  usage: "filter" | "normal";
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
  const { category, usage } = props;
  const subCategoryField = categoryName[category];

  // const context = usage === "filter" ? useContext(ViewContext) : null;

  const [subCategory, setSubCategory] = useState<CategoryValue>();
  const handleSubCategorySelect = (value: CategoryValue) => {
    if (subCategory === value) {
      setSubCategory(undefined);
      //백엔드에 null 전송 - originData 갖고오기
      return;
    }
    setSubCategory(value);
    //백엔드에서 해당 value에 따른 data 갖고 오기
  };

  const handleClick = (value: CategoryValue) => {
    setSubCategory((prev) => (prev === value ? undefined : value));
  };

  const handleClickHandler =
    usage === "filter" ? handleSubCategorySelect : handleClick;

  return (
    <Background>
      <Container>
        {subCategoryField.map((item, index) => (
          <SubCategoryButton
            isClick={subCategory === item}
            key={index}
            onClick={() => handleClickHandler(item)}
          >
            {item}
          </SubCategoryButton>
        ))}
      </Container>
    </Background>
  );
};

export default SubCategory;
