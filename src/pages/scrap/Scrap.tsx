import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import ContentBox from "../../components/content/ContentBox";
import { myScrap } from "../../services/userService";
import {
  Container,
  TitleContainer,
  ComplaintIcon as ScrapIcon,
  Title,
  ComplaintGrid as ScrapGrid,
} from "../../styles/ComplaintScrap";
import styled from "@emotion/styled";
import Loading from "../../components/loading/Loading";

type StatusType = "IN_PROGRESS" | "WAITING" | "RETURN" | "DONE";

interface ContentType {
  complaintId: number;
  tag: string;
  category: string;
  complaintStatus: StatusType;
  complaintTitle: string;
  contentProb: string;
  likeCount: number;
  scrapCount: number;
  date: Date;
}

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
  text-align: center;
`;

const EmptyMessage = styled.div`
  font-size: 1.2rem;
  color: var(--gray4-placeholder-low);
`;

const Scrap = () => {
  const [scrapData, setScrapData] = useState<ContentType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    myScrap()
      .then((res) => {
        setScrapData(res.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <TitleContainer>
        <ScrapIcon component={BookmarkRoundedIcon} />
        <Title>스크랩한 민원</Title>
      </TitleContainer>

      <Border>
        {isLoading && <Loading />}
        {!isLoading && scrapData.length === 0 ? (
          <EmptyMessage>스크랩한 민원이 없습니다.</EmptyMessage>
        ) : (
          <ScrapGrid>
            {scrapData.map((item) => (
              <motion.div
                key={item.complaintId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ContentBox data={item} type="small" />
              </motion.div>
            ))}
          </ScrapGrid>
        )}
      </Border>
    </Container>
  );
};

export default Scrap;
