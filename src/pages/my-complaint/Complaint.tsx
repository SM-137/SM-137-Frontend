import { createContext, useEffect, useState } from "react";
import ContentBox from "../../components/content/ContentBox";
import { mockData } from "../../mockData";
import { motion } from "framer-motion";
import ContactPageRoundedIcon from "@mui/icons-material/ContactPageRounded";
import styled from "@emotion/styled";
import {
  Container,
  TitleContainer,
  ComplaintIcon,
  Title,
  ComplaintGrid,
} from "../../styles/ComplaintScrap";
import { FiltersProps, useFilter } from "../../hooks/useFilter";
import ComplaintFilterBar from "./ComplaintFilterBar";
import { DataType } from "../../types/Type";

interface MyComplaintProps {
  originData: DataType[];
  handleFilterOptions: <K extends keyof FiltersProps>(
    option: K,
    value: FiltersProps[K]
  ) => void;
  handleFilter: () => void;
}

const Border = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--gray3-border);
  padding: 5rem;
  transform: translateY(-5rem);
  z-index: 0;
  width: 100vw;
  flex-wrap: wrap;
`;

export const MyComplaintContext = createContext<MyComplaintProps | undefined>(
  undefined
);

const Complaint = () => {
  const [originData] = useState(mockData);
  const { filteredData, handleFilter, handleFilterOptions, filters } =
    useFilter(originData);

  useEffect(() => {
    handleFilter();
  }, [filters]);

  return (
    <MyComplaintContext.Provider
      value={{ originData, handleFilterOptions, handleFilter }}
    >
      <Container>
        <TitleContainer>
          <ComplaintIcon component={ContactPageRoundedIcon} />
          <Title>내 민원</Title>
        </TitleContainer>

        <ComplaintFilterBar />

        <Border>
          <ComplaintGrid>
            {filteredData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ContentBox data={item} type="small" />
              </motion.div>
            ))}
          </ComplaintGrid>
        </Border>
      </Container>
    </MyComplaintContext.Provider>
  );
};

export default Complaint;
