import { useContext, useState } from "react";
import StatusButton from "./StatusButton";
import styled from "@emotion/styled";
import { StatusType } from "../../types/Type";
import { ViewContext } from "../../pages/view/View";
import { FiltersProps } from "../../hooks/useFilter";

const ButtonGroupContainer = styled.div`
  display: flex;
  gap: 12px;
  width: 296px;
  height: 29px;
`;

const StatusButtonGroup = () => {
  const [selectedType, setSelectedType] = useState<StatusType>();
  const context = useContext(ViewContext);
  if (!context) {
    throw new Error("statusButtonGroup에서 context 호출 중 오류 발생");
  }

  const handleClick = (type: StatusType) => {
    setSelectedType(type);
    context.setFilters((prev: FiltersProps) => ({
      ...prev,
      status: type,
    }));
  };

  return (
    <ButtonGroupContainer>
      <StatusButton
        type="inProgress"
        isSelected={selectedType === "inProgress"}
        onClick={() => handleClick("inProgress")}
      />
      <StatusButton
        type="pending"
        isSelected={selectedType === "pending"}
        onClick={() => handleClick("pending")}
      />
      <StatusButton
        type="rejected"
        isSelected={selectedType === "rejected"}
        onClick={() => handleClick("rejected")}
      />
      <StatusButton
        type="completed"
        isSelected={selectedType === "completed"}
        onClick={() => handleClick("completed")}
      />
    </ButtonGroupContainer>
  );
};

export default StatusButtonGroup;
