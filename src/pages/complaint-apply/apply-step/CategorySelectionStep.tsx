import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Alert from "../../../components/alert/Alert";
import CategorySelect from "../../../components/category-select/CategorySelect";
import Button from "../../../components/button/Button";
import ApplicationLayout from "../ApplicationLayout";
import { ContentWrapper } from "../../../styles/ApplyStyles";
import { AlertContainer } from "../../../styles/AlertStyles";
import useComplaintStore from "../../../store/useComplaintStore";

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

const CategoryView = styled.div`
  display: inline-flex;
  padding: 0.5rem 3rem;
  justify-content: center;
  background-color: var(--primary);
  color: var(--white);
  margin-top: 1rem;
  text-align: center;
  border-radius: 8px;
`;

const CategorySelectionStep = () => {
  const PREV_PAGE_URL = "../1";
  const NEXT_PAGE_URL = "../3";

  const { categoryName } = useComplaintStore((state) => state);
  const noSelect = categoryName?.length === 0;
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(PREV_PAGE_URL);
  };
  const handleNext = () => {
    if (noSelect) {
      setShowAlert(true);
      return;
    }
    navigate(NEXT_PAGE_URL);
  };

  return (
    <ApplicationLayout activeStep={2}>
      {showAlert && noSelect && (
        <AlertContainer top="16rem">
          <Alert type="warning" content="카테고리를 선택해 주세요" />
        </AlertContainer>
      )}
      <ContentWrapper>
        <FormTitleContainer>
          <FormTitle>
            가장 연관이 깊은 1개의 카테고리(분류)를 선택해 주세요
          </FormTitle>
        </FormTitleContainer>

        <CategorySelect usage="normal" />
        {categoryName && <CategoryView>{categoryName}</CategoryView>}

        <ButtonGroup>
          <Button
            content="이전"
            styleType="_120x40_Gray2"
            onClick={handleBack}
          />
          <Button
            content="다음"
            styleType="_120x40_Primary"
            onClick={handleNext}
          />
        </ButtonGroup>
      </ContentWrapper>
    </ApplicationLayout>
  );
};

export default CategorySelectionStep;
