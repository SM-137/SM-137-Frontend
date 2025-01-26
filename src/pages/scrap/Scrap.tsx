import { motion } from "framer-motion";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import ContentBox from "../../components/content/ContentBox";
import { sampleData } from "../../mockData";
import {
  Container,
  TitleContainer,
  ComplaintIcon as ScrapIcon,
  Title,
  ComplaintGrid as ScrapGrid,
} from "../../styles/ComplaintScrap";
import styled from "@emotion/styled";

const Border = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--gray3-border);
  padding: 5rem;
  transform: translateY(1.5rem);
  z-index: 0;
  width: 100vw;
  flex-wrap: wrap;
`;

const Scrap = () => {
  const scrapData = sampleData.filter((item) => item.scrapCount > 0);

  return (
    <Container>
      <TitleContainer>
        <ScrapIcon component={BookmarkRoundedIcon} />
        <Title>스크랩한 민원</Title>
      </TitleContainer>

      <Border>
        <ScrapGrid>
          {scrapData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ContentBox data={item} type="small" />
            </motion.div>
          ))}
        </ScrapGrid>
      </Border>
    </Container>
  );
};

export default Scrap;
