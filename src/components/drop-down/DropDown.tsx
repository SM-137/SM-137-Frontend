import styled from "@emotion/styled";
import { useContext, useEffect, useRef, useState } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { SearchContext } from "../../pages/search/Search";
import { useFilter } from "../../hooks/useFilter";
import { useSort } from "../../hooks/useSort";

interface OptionProps {
  isOpen: boolean;
}
const DropBox = styled.ul<OptionProps>`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 0.2rem 0.4rem;
  min-width: 120px;
  min-height: 30px;
  border: 1px solid var(--gray3-border);
  border-radius: 4px;
  gap: 0.5rem;
  color: var(--gray5-lowText);
  background-color: var(--white);
  z-index: 10;
  transform: 0.3 ease;
  &:focus {
    outline: none;
  }
  cursor: pointer;
  position: relative;
`;
const OptionContainer = styled.div<OptionProps>`
  display: flex;
  flex-direction: column;
  padding: 0.3rem 0.4rem;
  width: 100%;
  gap: 0.3rem;
  position: absolute;
  top: calc(100% + 1px);
  left: 0;
  border-left: ${(props) => props.isOpen && "1px solid var(--gray3-border)"};
  border-right: ${(props) => props.isOpen && "1px solid var(--gray3-border)"};
  border-bottom: ${(props) => props.isOpen && "1px solid var(--gray3-border)"};
  border-end-start-radius: 4px;
  border-end-end-radius: 4px;
  background-color: var(--white);
  max-height: ${({ isOpen }) => (isOpen ? "200px" : "0")};
  overflow: hidden;
  transition: 0.3s ease;
`;
const Options = styled.li`
  color: var(--gray5-lowText);
  width: 100%;
`;
const DropDownIcon = styled(SvgIcon)<SvgIconProps>`
  fill: var(--gray5-lowText);
  position: absolute;
  right: 0;
`;

const DropDown = () => {
  const OPTIONS = ["전체", "1개월", "3개월", "6개월"];
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(OPTIONS[0]);

  const { searchData, setFilteredData, sortOption } = useContext(SearchContext);
  const { handleSort } = useSort(setFilteredData);
  const { handlePeriod } = useFilter(setFilteredData);

  const handleOpenClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleClick = (option: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setData(option);
    setIsOpen(false);
    handlePeriod(searchData, option);
    handleSort(sortOption);
  };

  const dropDownRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <DropBox isOpen={isOpen} onClick={handleOpenClose} ref={dropDownRef}>
      {data}
      <OptionContainer isOpen={isOpen}>
        {isOpen &&
          OPTIONS.map((i, index) => (
            <Options key={index} onClick={(e) => handleClick(i, e)}>
              {i}
            </Options>
          ))}
      </OptionContainer>
      <DropDownIcon
        onClick={handleOpenClose}
        component={KeyboardArrowDownRoundedIcon}
      />
    </DropBox>
  );
};

export default DropDown;
