import styled from "@emotion/styled";
import ContentBox from "../../components/content/ContentBox";
import {
  ContentBoxContainer,
  ContentContainer,
  TitleContainer,
  Title,
} from "../../styles/ContentViewStyle";
import { useNavigate } from "react-router-dom";
import { MY_COMPLAINT_URL } from "../../utils/URL";
import { useEffect, useState } from "react";
import { myComplaint } from "../../services/userService";
import Loading from "../../components/loading/Loading";

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

const EmptyMessage = styled.div`
  text-align: center;
  color: var(--gray4-placeholder-low);
  font-size: 1rem;
  margin: 2rem 0;
`;

const MyComplaints = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const SHOW_DATA_COUNT = 2;

  useEffect(() => {
    myComplaint()
      .then((res) => {
        setData(res.data.slice(0, SHOW_DATA_COUNT));
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container>
      <TitleContainer>
        <Title>내 민원</Title>
        <ViewMore onClick={() => navigate(MY_COMPLAINT_URL)}>더보기 +</ViewMore>
      </TitleContainer>
      <ContentBoxContainer>
        {isLoading && <Loading />}
        {!isLoading && data.length > 0 ? (
          data.map((item, index) => (
            <ContentBox key={index} type="large" data={item} />
          ))
        ) : (
          <EmptyMessage>내 민원이 없습니다.</EmptyMessage>
        )}
      </ContentBoxContainer>
    </Container>
  );
};

export default MyComplaints;
