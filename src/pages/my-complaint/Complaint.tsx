import styled from "@emotion/styled";
import ContentBox from "../../components/content/ContentBox";
import { mockData } from "../../mockData";
import { motion } from "framer-motion";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import ContactPageRoundedIcon from "@mui/icons-material/ContactPageRounded";
import FilterBar from "./ComplaintFilterBar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 3rem;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ComplaintIcon = styled(SvgIcon)<SvgIconProps>`
  color: var(--disabled-primary);
  width: 2rem;
  height: 2rem;
  margin-top: 2rem;
`;

const ComplaintTitle = styled.h2`
  color: var(--gray6-black);
`;

const ComplaintBorder = styled.div`
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

//complaint를 시작점부터 배치
const ComplaintGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  justify-content: start;
  align-items: center;
`;

const Complaint = () => {
  return (
    <Container>
      <TitleContainer>
        <ComplaintIcon component={ContactPageRoundedIcon} />
        <ComplaintTitle>내 민원</ComplaintTitle>
      </TitleContainer>

      <FilterBar />

      <ComplaintBorder>
        <ComplaintGrid>
          {mockData.map((item, index) => (
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
      </ComplaintBorder>
    </Container>
  );
};

export default Complaint;
