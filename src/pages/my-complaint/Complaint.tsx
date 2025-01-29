import { createContext, useEffect, useState } from "react";
import ContentBox from "../../components/content/ContentBox";
import { motion } from "framer-motion";
import ContactPageRoundedIcon from "@mui/icons-material/ContactPageRounded";
import styled from "@emotion/styled";
import StatusButtonGroup from "../../components/status-button/StatusButtonGroup";
import {
  Container,
  TitleContainer,
  ComplaintIcon,
  Title,
  ComplaintGrid,
} from "../../styles/ComplaintScrap";
import { FiltersProps, useFilter } from "../../hooks/useFilter";
import { myComplaint } from "../../services/userService";
import { ContentType } from "../../types/Type";

interface MyComplaintProps {
  originData: ContentType[];
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
  text-align: center;
`;

const EmptyMessage = styled.div`
  font-size: 1.2rem;
  color: var(--gray4-placeholder-low);
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: var(--gray1-background);
  border-radius: 50rem;
  padding: 1rem 2rem;
  z-index: 1;
`;

export const MyComplaintContext = createContext<MyComplaintProps | undefined>(
  undefined
);

const Complaint = () => {
  const [originData, setOriginData] = useState<ContentType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { filteredData, handleFilter, handleFilterOptions, filters } =
    useFilter(originData);

  useEffect(() => {
    const fetchMyComplaint = async () => {
      try {
        const response = await myComplaint();
        const { data } = response;

        const transformedData = data.map((item: ContentType) => ({
          complaintId: item.complaintId,
          tag: item.tag,
          category: item.category,
          complaintStatus: item.complaintStatus,
          complaintTitle: item.complaintTitle,
          contentProb: item.contentProb,
          likeCount: item.likeCount,
          scrapCount: item.scrapCount,
        }));

        setOriginData(transformedData);
      } catch (error) {
        console.error("내 민원을 불러오는 데 실패했습니다:", error);
        setError("내 민원을 불러오는 데 실패했습니다.");
      }
    };

    fetchMyComplaint();
  }, []);

  useEffect(() => {
    handleFilter();
  }, [filters]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <MyComplaintContext.Provider
      value={{ originData, handleFilterOptions, handleFilter }}
    >
      <Container>
        <TitleContainer>
          <ComplaintIcon component={ContactPageRoundedIcon} />
          <Title>내 민원</Title>
        </TitleContainer>

        <FilterContainer>
          <StatusButtonGroup usage="filter" />
        </FilterContainer>

        <Border>
          {filteredData.length === 0 ? (
            <EmptyMessage>내 민원이 없습니다.</EmptyMessage>
          ) : (
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
          )}
        </Border>
      </Container>
    </MyComplaintContext.Provider>
  );
};

export default Complaint;
