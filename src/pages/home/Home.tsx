import styled from "@emotion/styled";
import HashtagCloud from "../../components/hashtag-cloud/HashtagCloud";
import SearchBar from "../../components/search-bar/SearchBar";
import QuickLink from "../../components/quick-link/QuickLink";
import HomeContentList from "./HomeContentList";
import Emblem from "../../assets/emblem-1_DarkGray.png";
import { useEffect, useState } from "react";
import Modal from "../../components/modal/Modal";
import InitialInfo from "../../components/modal/contents/InitialInfo";

const HomeContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  position: relative;
`;

const QuickLinkContainer = styled.div`
  margin: 4rem 0;
  width: 100%;
`;

const EmblemContainer = styled.img`
  width: 750px;
  height: 750px;
  position: absolute;
  top: -55%;
  left: -40%;
  opacity: 0.2;
  z-index: 0;
  @media screen and (max-width: 768px) {
    width: 500px;
    height: 500px;
    top: -30%;
    left: -40%;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const SearchContainer = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  z-index: 300;
`;

const KeyWordContainer = styled.div`
  width: 350px;
  height: 200px;
`;

const mockHashtag = [
  "냉난방",
  "학사일정",
  "교환학생",
  "연계전공",
  "졸업",
  "시설",
  "설비",
];

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <HomeContainer>
      <Modal
        isOpen={isModalOpen}
        handleClose={handleModalClose}
        contents={<InitialInfo handleClose={handleModalClose} />}
      />

      <EmblemContainer src={Emblem} />

      <SearchContainer>
        <KeyWordContainer>
          <HashtagCloud data={mockHashtag} />
        </KeyWordContainer>
        <SearchBar />
      </SearchContainer>

      <QuickLinkContainer>
        <QuickLink />
      </QuickLinkContainer>

      <HomeContentList />
    </HomeContainer>
  );
};

export default Home;
