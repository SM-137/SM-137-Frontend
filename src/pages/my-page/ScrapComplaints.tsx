import styled from "@emotion/styled";
import ContentBox from "../../components/content/ContentBox";
import {
  ContentBoxContainer,
  ContentContainer,
  Title,
  TitleContainer,
} from "../../styles/ContentViewStyle";
import { useNavigate } from "react-router-dom";
import { MY_SCRAP_URL } from "../../utils/URL";
import { useEffect, useState } from "react";
import { myScrap } from "../../services/userService";

const Background = styled.div`
  z-index: 0;
  background-color: var(--gray1-background);
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 3rem 0;
`;

const WidthContainer = styled.div`
  max-width: 1114px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const ViewMore = styled.div`
  cursor: pointer;
`;

const EmptyMessage = styled.div`
  text-align: center;
  color: var(--gray4-placeholder-low);
  font-size: 1rem;
  margin: 2rem 0;
`;

const ScrapComplaints = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await myScrap();
        if (response && response.length > 0) {
          setData(response.slice(0, 2));
        } else {
          setData([]);
        }
      } catch (error) {
        console.error("스크랩한 민원을 불러오는 데 실패했습니다.", error);
        setError("스크랩한 민원을 불러오는 데 실패했습니다.");
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <ContentContainer>{error}</ContentContainer>;
  }

  return (
    <ContentContainer>
      <Background>
        <WidthContainer>
          <TitleContainer>
            <Title>스크랩한 민원</Title>
            <ViewMore onClick={() => navigate(MY_SCRAP_URL)}>더보기 +</ViewMore>
          </TitleContainer>
          <ContentBoxContainer>
            {data.length > 0 ? (
              data.map((item, index) => (
                <ContentBox key={index} type="large" data={item} />
              ))
            ) : (
              <EmptyMessage>스크랩한 민원이 없습니다.</EmptyMessage>
            )}
          </ContentBoxContainer>
        </WidthContainer>
      </Background>
    </ContentContainer>
  );
};

export default ScrapComplaints;
