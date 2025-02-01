import React, { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { SvgIcon, SvgIconProps } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

interface DropdownProps {
  label: string;
  options: string[];
  onChange?: (value: string) => void;
  value?: string;
}

interface OptionProps {
  isOpen: boolean;
}

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: start;
  gap: 1.5rem;
  width: 100%;
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 0.4rem;
  width: 15%;
`;

const InfoLabel = styled.label`
  color: var(--gray4-placeholder-low);
  text-align: right;
`;

const SelectBox = styled.div`
  position: relative;
  width: 85%;
  height: 2rem;
  padding: 0.4rem 0.6rem;
  border-radius: 4px;
  color: var(--gray5-lowText);
  background-color: var(--white);
  border: 1px solid var(--gray3-border);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SelectOptions = styled.ul<OptionProps>`
  position: absolute;
  top: calc(100% + 1px);
  left: 0;
  width: 100%;
  background-color: var(--white);
  border-radius: 4px;
  max-height: ${({ isOpen }) => (isOpen ? "200px" : "0")};
  overflow-y: auto;
  overflow-x: hidden;
  transition: max-height 0.3s ease-in-out;
  border: ${({ isOpen }) =>
    isOpen ? "1px solid var(--gray3-border)" : "none"};
  z-index: 10;

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--gray4-placeholder-low);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--white);
    border-radius: 0px 3px 3px 0px;
  }
`;

const Option = styled.li`
  font-size: 14px;
  padding: 10px;
  transition: background-color 0.2s ease-in;
  cursor: pointer;
`;

const DropDownIcon = styled(SvgIcon)<SvgIconProps>`
  fill: var(--gray5-lowText);
`;

const MajorDropdown: React.FC<DropdownProps> = ({
  label,
  options,
  onChange,
  value,
}) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [currentValue, setCurrentValue] = useState(value || options[0]);
  const [isOpen, setIsOpen] = useState(false);

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

  const handleOnChangeSelectValue = (value: string) => {
    setCurrentValue(value);
    setIsOpen(false);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Container>
      <LabelContainer>
        <InfoLabel>{label}</InfoLabel>
      </LabelContainer>
      <SelectBox onClick={() => setIsOpen((prev) => !prev)} ref={selectRef}>
        <span>{currentValue}</span>
        <DropDownIcon component={KeyboardArrowDownRoundedIcon} />
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
    </Container>
  );
};

export default MajorDropdown;
