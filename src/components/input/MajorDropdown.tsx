import React, { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";

interface DropdownProps {
  label: string;
  options: string[];
  onChange?: (value: string) => void;
  value?: string;
}

const SelectBox = styled.div`
  position: relative;
  width: 165px;
  height: 40px;
  padding: 10px;
  border-radius: 5px;
  background-color: #ffffff;
  align-self: center;
  border: 1px solid #cccccc;

  cursor: pointer;
`;

const SelectOptions = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 1px);
  left: 0;
  width: 100%;
  background-color: #fefefe;
  border-radius: 5px;
  max-height: ${({ isOpen }) => (isOpen ? "200px" : "0")};
  overflow-y: auto;
  overflow-x: hidden;
  transition: max-height 0.3s ease-in-out;
  border: ${({ isOpen }) => (isOpen ? "1px solid #cccccc;" : "none")};
  z-index: 100;

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #777777;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: #cccccc;
    border-radius: 0px 3px 3px 0px;
  }
`;

const Option = styled.li`
  font-size: 14px;
  padding: 10px;
  transition: background-color 0.2s ease-in;
  cursor: pointer;

  &:hover {
    color: white;
    border-radius: 5px;
    background: linear-gradient(135deg, #5658df 0%, #2f6dd0 100%);
  }
`;

const MajorDropdown: React.FC<DropdownProps> = ({
  label,
  options,
  onChange,
  value,
}) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [currentValue, setCurrentValue] = useState(value || options[0]);
  const [isOpen, setIsOpen] = useState(false); // 열림 상태 관리

  const handleOnChangeSelectValue = (value: string) => {
    setCurrentValue(value);
    setIsOpen(false);
    if (onChange) {
      onChange(value);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <label>{label}</label>
      <SelectBox onClick={() => setIsOpen((prev) => !prev)} ref={selectRef}>
        <span>{currentValue}</span>
        <SelectOptions isOpen={isOpen}>
          {options.map((option, index) => (
            <Option
              key={index}
              onClick={() => handleOnChangeSelectValue(option)}
            >
              {option}
            </Option>
          ))}
        </SelectOptions>
      </SelectBox>
    </div>
  );
};

export default MajorDropdown;
