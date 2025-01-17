import styled from "@emotion/styled";
import ContentBox from "../../components/content/ContentBox";
import { mockData } from "../../mockData";
import {
  ContentBoxContainer,
  ContentContainer,
  TitleContainer,
  Title,
} from "../../styles/ContentViewStyle";
import { useNavigate } from "react-router-dom";

import { MY_COMPLAINT_URL } from "../../utils/URL";

const Container = styled(ContentContainer)`
  margin-top: 60px;
  width: 100%;
  @media (max-width: 768px) {
    margin-top: 120px;
  }
`;

const ViewMore = styled.div`
  cursor: pointer;
`;

const MyComplaints = () => {
  const navigate = useNavigate();
  const data = mockData.slice(0, 2);

  return (
    <Container>
      <TitleContainer>
        <Title>내 민원</Title>
        <ViewMore onClick={() => navigate(MY_COMPLAINT_URL)}>더보기 +</ViewMore>
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
