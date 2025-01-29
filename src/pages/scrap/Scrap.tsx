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

type StatusType = "IN_PROGRESS" | "WAITING" | "RETURN" | "DONE";

interface ScrapResponse {
  complaintId: number;
  tag: string;
  category: string;
  complaintStatus: string;
  complaintTitle: string;
  contentProb: string;
  likeCount: number;
  scrapCount: number;
  createdAt: string;
}

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

const toStatusType = (status: string): StatusType => {
  const statusMap: Record<string, StatusType> = {
    IN_PROGRESS: "IN_PROGRESS",
    WAITING: "WAITING",
    RETURN: "RETURN",
    DONE: "DONE",
    COMPLETED: "DONE",
  };
  return statusMap[status] || "WAITING";
};

const Scrap = () => {
  const [scrapData, setScrapData] = useState<ContentType[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchScrapData = async () => {
      try {
        const response = await myScrap();
        const { data } = response;

        const transformedData = data.map((item: ScrapResponse) => ({
          complaintId: item.complaintId,
          tag: item.tag,
          category: item.category,
          complaintStatus: toStatusType(item.complaintStatus),
          complaintTitle: item.complaintTitle,
          contentProb: item.contentProb,
          likeCount: item.likeCount,
          scrapCount: item.scrapCount,
          date: new Date(item.createdAt),
        }));

        setScrapData(transformedData);
      } catch (error) {
        console.error("스크랩 데이터를 불러오는 거 실패하였습니다.", error);
        setError("스크랩 데이터를 불러오는 거 실패하였습니다.");
      }
    };

    fetchScrapData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container>
      <TitleContainer>
        <ScrapIcon component={BookmarkRoundedIcon} />
        <Title>스크랩한 민원</Title>
      </TitleContainer>

      <Border>
        {scrapData.length === 0 ? (
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
