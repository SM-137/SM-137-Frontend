import styled from "@emotion/styled";
import MyPageInfo from "./MyPageInfo";
import { myPageInfo } from "../../mockData";
import MyPageAlarm from "./MyPageAlarm";
import MyComplaints from "./MyComplaints";
import ScrapComplaints from "./ScrapComplaints";

const Container = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
`;
const BackGround = styled.div`
  background-color: var(--primary);
  width: 100vw;
  max-height: 420px;
  padding: 3rem;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    max-height: none;
    height: auto;
  }
`;
const BackgroundContents = styled.div`
  width: 100%;
  max-width: 1114px;
  display: grid;
  grid-template-columns: 3.5fr 8fr;
  gap: 2rem;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const BackgroundOutside = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;
const MyPage = () => {
  return (
    <Container>
      <BackGround>
        <BackgroundContents>
          <MyPageInfo data={myPageInfo} />
          <MyPageAlarm />
        </BackgroundContents>
      </BackGround>

      <BackgroundOutside>
        <MyComplaints />
        <ScrapComplaints />
      </BackgroundOutside>
    </Container>
  );
};

export default MyPage;
