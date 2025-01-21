import { useContext, useEffect, useState } from "react";
import StatusButton from "./StatusButton";
import styled from "@emotion/styled";
import { StatusType } from "../../types/Type";
import { ViewContext } from "../../pages/view/View";
import { MyComplaintContext } from "../../pages/my-complaint/Complaint";

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
interface UsageProps {
  usage: "filter" | "normal";
}

const StatusButtonGroup = ({ usage = "normal" }: UsageProps) => {
  const initial: SelectedTypeObject = {
    inProgress: false,
    pending: false,
    rejected: false,
    completed: false,
  };

  const [selectedType, setSelectedType] = useState(initial);

  //일반 선택 로직
  const handleClick = (type: StatusType) => {
    if (type === undefined) {
      return;
    }
    setSelectedType((prev) => ({
      ...initial,
      [type]: !prev[type],
    }));
  };

  //필터링 로직
  const handleFilter = (type: StatusType) => {
    if (type === undefined) {
      return;
    }
    setSelectedType((prev) => {
      const updatedValue = !prev[type];
      const updatedType = {
        ...prev,
        [type]: updatedValue,
      };
      return updatedType;
    });
  };

  const addIfValid = (standard: SelectedTypeObject) => {
    let clickedStatusArray: StatusType[] = [];
    for (let i in standard) {
      let value = standard[i as keyof SelectedTypeObject];
      if (value) {
        clickedStatusArray.push(i as keyof SelectedTypeObject);
      }
      if (!value) {
        clickedStatusArray = clickedStatusArray.filter((status) => status != i);
      }
    }
    return clickedStatusArray;
  };

  //필터링 로직 vs 일반 선택 로직
  const setHandleFunction = (usage: "filter" | "normal") => {
    return usage === "filter" ? handleFilter : handleClick;
  };
  const handleClickHandler = setHandleFunction(usage);

  const context = useContext(ViewContext) || useContext(MyComplaintContext);

  useEffect(() => {
    if (usage === "filter") {
      if (!context) return;
      const filterOptionsArray = addIfValid(selectedType);
      context.handleFilterOptions("status", filterOptionsArray);
    }
  }, [selectedType, usage]);

  return (
    <ButtonGroupContainer>
      <StatusButton
        type="inProgress"
        isSelected={selectedType.inProgress}
        onClick={() => handleClickHandler("inProgress")}
      />
      <StatusButton
        type="pending"
        isSelected={selectedType.pending}
        onClick={() => handleClickHandler("pending")}
      />
      <StatusButton
        type="rejected"
        isSelected={selectedType.rejected}
        onClick={() => handleClickHandler("rejected")}
      />
      <StatusButton
        type="completed"
        isSelected={selectedType.completed}
        onClick={() => handleClickHandler("completed")}
      />
    </ButtonGroupContainer>
  );
};

export default StatusButtonGroup;
