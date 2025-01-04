import styled from "@emotion/styled";
import ContentBox from "../../components/content/ContentBox";
import { mockData } from "../../mockData";
import {
  ContentBoxContainer,
  ContentContainer,
  Title,
  TitleContainer,
  ViewMore,
} from "../../styles/ContentViewStyle";

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
const ScrapComplaints = () => {
  //임시
  const data = mockData.slice(0, 2);
  return (
    <ContentContainer>
      <Background>
        <WidthContainer>
          <TitleContainer>
            <Title>스크랩한 민원</Title>
            <ViewMore>더보기 +</ViewMore>
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
