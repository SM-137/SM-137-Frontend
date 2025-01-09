import { useContext, useState } from "react";
import StatusButton from "./StatusButton";
import styled from "@emotion/styled";
import { StatusType } from "../../types/Type";
import { ViewContext } from "../../pages/view/View";

const ButtonGroupContainer = styled.div`
  display: flex;
  gap: 12px;
  width: 296px;
  height: 29px;
`;

interface SelectedTypeObject {
  inProgress: boolean;
  pending: boolean;
  rejected: boolean;
  completed: boolean;
}

const StatusButtonGroup = () => {
  const initial: SelectedTypeObject = {
    inProgress: false,
    pending: false,
    rejected: false,
    completed: false,
  };
  const [selectedType, setSelectedType] = useState(initial);
  const context = useContext(ViewContext);
  if (!context) {
    throw new Error("statusButtonGroup에서 context 호출 중 오류 발생");
  }

  const handleClick = (type: StatusType) => {
    if (type === undefined) {
      return;
    }
    //중복 선택 가능
    let filterOptionsArray: StatusType[] = [];
    setSelectedType((prev) => {
      const updatedValue = !prev[type];
      const updatedType = {
        ...prev,
        [type]: updatedValue,
      };
      setTimeout(() => {
        filterOptionsArray = addIfValid(updatedType);
        context.handleFilterOptions("status", filterOptionsArray);
      }, 0);

      return updatedType;
    });
  };

  const addIfValid = (standard: SelectedTypeObject) => {
    const clickedStatusArray: StatusType[] = [];
    for (let i in standard) {
      let value = standard[i as keyof SelectedTypeObject];
      if (value) {
        clickedStatusArray.push(i as keyof SelectedTypeObject);
      }
      if (!value) {
        clickedStatusArray.filter((status) => status != i);
      }
    }
    return clickedStatusArray;
  };

  return (
    <ButtonGroupContainer>
      <StatusButton
        type="inProgress"
        isSelected={selectedType.inProgress}
        onClick={() => handleClick("inProgress")}
      />
      <StatusButton
        type="pending"
        isSelected={selectedType.pending}
        onClick={() => handleClick("pending")}
      />
      <StatusButton
        type="rejected"
        isSelected={selectedType.rejected}
        onClick={() => handleClick("rejected")}
      />
      <StatusButton
        type="completed"
        isSelected={selectedType.completed}
        onClick={() => handleClick("completed")}
      />
    </ButtonGroupContainer>
  );
};

export default StatusButtonGroup;
