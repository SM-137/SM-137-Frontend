import styled from "@emotion/styled";
import Layout from "./ApplicationStepLayout";
import CategorySelect from "../../components/category-select/CategorySelect";
import Button from "../../components/button/Button";

const ContentWrapper = styled.div`
  background-color: var(--white);
  border-radius: 8px;
  padding: 2rem;
  width: 100%;
  margin: 3rem auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormTitleContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
  flex-direction: column;
  align-items: center;
`;

const FormTitle = styled.span`
  color: var(--gray6-header);
  text-align: center;
  font-size: 1.2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  gap: 1rem;
`;

const CategorySelectionStep = () => {
  const handleCategoryChange = (selectedCategory: string) => {
    console.log(`Selected Category: ${selectedCategory}`);
  };

  return (
    <Layout>
      <ContentWrapper>
        <FormTitleContainer>
          <FormTitle>가장 연관이 깊은 1개의 카테고리(분류)를 선택해 주세요</FormTitle>
        </FormTitleContainer>
        <CategorySelect usage="normal" onCategoryChange={handleCategoryChange} />
        <ButtonGroup>
          <Button content="이전" type="_120x40_Gray2" />
          <Button content="다음" type="_120x40_Primary" />
        </ButtonGroup>
      </ContentWrapper>
    </Layout>
  );
};

export default CategorySelectionStep;
