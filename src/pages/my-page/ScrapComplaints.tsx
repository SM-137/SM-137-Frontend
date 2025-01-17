import styled from "@emotion/styled";
import ContentBox from "../../components/content/ContentBox";
import { mockData } from "../../mockData";
import {
  ContentBoxContainer,
  ContentContainer,
  Title,
  TitleContainer,
} from "../../styles/ContentViewStyle";
import { useNavigate } from "react-router-dom";

import { MY_SCRAP_URL } from "../../utils/URL";

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

const ScrapComplaints = () => {
  const navigate = useNavigate();
  const data = mockData.slice(0, 2);

  return (
    <ContentContainer>
      <Background>
        <WidthContainer>
          <TitleContainer>
            <Title>스크랩한 민원</Title>
            <ViewMore onClick={() => navigate(MY_SCRAP_URL)}>더보기 +</ViewMore>
          </TitleContainer>
          <ContentBoxContainer>
            {data.map((i, index) => (
              <ContentBox key={index} type="large" data={i} />
            ))}
          </ContentBoxContainer>
        </WidthContainer>
      </Background>
    </ContentContainer>
  );
};

export default ScrapComplaints;
