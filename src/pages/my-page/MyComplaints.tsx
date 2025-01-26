import styled from "@emotion/styled";
import ContentBox from "../../components/content/ContentBox";
import {
  ContentBoxContainer,
  ContentContainer,
  TitleContainer,
  ViewMore,
  Title,
} from "../../styles/ContentViewStyle";
import { sampleData } from "../../mockData";

const Container = styled(ContentContainer)`
  //색이 칠해진 부분을 피하기 위함
  margin-top: 60px;
  width: 100%;
  @media (max-width: 768px) {
    margin-top: 120px;
  }
`;

const MyComplaints = () => {
  //임시 데이터
  const data = sampleData.slice(0, 2);
  return (
    <Container>
      <TitleContainer>
        <Title>내 민원</Title>
        <ViewMore>더보기 +</ViewMore>
      </TitleContainer>
      <ContentBoxContainer>
        {data.map((i, index) => (
          <ContentBox key={index} type="large" data={i} />
        ))}
      </ContentBoxContainer>
    </Container>
  );
};

export default MyComplaints;
