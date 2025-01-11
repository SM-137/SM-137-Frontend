import ContentBox from "../../components/content/ContentBox";
import { mockData } from "../../mockData";
import { motion } from "framer-motion";
import ContactPageRoundedIcon from "@mui/icons-material/ContactPageRounded";
import FilterBar from "./ComplaintFilterBar";
import {
  Container,
  TitleContainer,
  ComplaintIcon,
  Title,
  Border,
  ComplaintGrid,
} from "../../styles/ComplaintScrap";

const Complaint = () => {
  return (
    <Container>
      <TitleContainer>
        <ComplaintIcon component={ContactPageRoundedIcon} />
        <Title>내 민원</Title>
      </TitleContainer>

      <FilterBar />

      <Border>
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
      </Border>
    </Container>
  );
};

export default Complaint;
