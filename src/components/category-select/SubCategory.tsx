import styled from "@emotion/styled";
import { categoryName } from "../../utils/SubCategoryContent";
import { CategoryValue } from "../../types/Type";
import { useContext, useEffect, useState } from "react";
import { ViewContext } from "../../pages/view/View";
import { useFilter } from "../../hooks/useFilter";
import { useSort } from "../../hooks/useSort";

interface SubCategoryProps {
  category: keyof typeof categoryName;
}

const Background = styled.div`
  max-width: 490px;
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

  const [subCategory, setSubCategory] = useState<CategoryValue>();
  const handleSubCategorySelect = (value: CategoryValue) => {
    setSubCategory(value);
  };

  //필터링 및 정렬
  const { setFilteredData, originData, sortOption } = useContext(ViewContext);
  const filter = useFilter(setFilteredData);
  const sort = useSort(setFilteredData);
  useEffect(() => {
    if (subCategory) {
      filter.handleCategory(originData, subCategory);
      //필터링 이후 정렬 재진행
      sort.handleSort(sortOption);
    }
  }, [subCategory]);

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
