import React, { useState } from "react";
import ContentBox from "../../components/content/ContentBox";
import { mockData } from "../../mockData";
import { motion } from "framer-motion";
import ContactPageRoundedIcon from "@mui/icons-material/ContactPageRounded";
import FilterBar from "./ComplaintFilterBar";
import styled from "@emotion/styled";
import {
  Container,
  TitleContainer,
  ComplaintIcon,
  Title,
  ComplaintGrid,
} from "../../styles/ComplaintScrap";
import { StatusType } from "../../types/Type";

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

const Complaint = () => {
  const [selectedType, setSelectedType] = useState<StatusType>("inProgress");

  const filteredData = mockData.filter((item) => item.status === selectedType);

  return (
    <Container>
      <TitleContainer>
        <ComplaintIcon component={ContactPageRoundedIcon} />
        <Title>내 민원</Title>
      </TitleContainer>

      <FilterBar
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />

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
  );
};

export default Complaint;
