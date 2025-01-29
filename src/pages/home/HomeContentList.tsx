import styled from "@emotion/styled";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ContentBox from "../../components/content/ContentBox";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { complaintHome } from "../../services/complaintService";
import Loading from "../../components/loading/Loading";
import { ContentType } from "../../types/Type";

const Title = styled.h2`
  width: 100%;
  text-align: left;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
const ContentContainer = styled(motion.div)`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
const ContentBoxContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  gap: 2.5rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const AnimationContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  gap: 2.5rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const ArrowIconLeft = styled(SvgIcon)<SvgIconProps>`
  width: 24px;
  height: 24px;
  fill: var(--gray5-lowText);
  position: absolute;
  left: -2.5rem;
  top: calc(50% - 12px);
  cursor: pointer;
  &:hover {
    background-color: var(--gray2-subbtn);
    border-radius: 100px;
    transition: 0.3s ease;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const ArrowIconRight = styled(ArrowIconLeft)`
  left: auto;
  right: -2.5rem;
`;

const HomeContentList = () => {
  //애니메이션 트리거
  const [animateKey, setAnimateKey] = useState(0);
  //최근 주목받은 민원
  const [homeComplaint, setHomeComplaint] = useState<ContentType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    complaintHome()
      .then((res) => setHomeComplaint(res.data))
      .catch((error) => console.log(error));
    setIsLoading(false);
  }, []);

  const FIRST_PAGE_INDEX = 0;
  //추천 개수
  const RECOMMEND_COUNT = 4;
  const [currentIndex, setCurrentIndex] = useState(FIRST_PAGE_INDEX);
  const data = homeComplaint.slice(0, RECOMMEND_COUNT);
  const complaintList = data.slice(currentIndex, currentIndex + 2);

  const nextPage = () => {
    setAnimateKey((prev) => prev + 1);
    if (currentIndex + 2 < data.length) {
      setCurrentIndex(currentIndex + 2);
      return;
    }
    setCurrentIndex(FIRST_PAGE_INDEX);
  };

  const prevPage = () => {
    setAnimateKey((prev) => prev - 1);
    if (currentIndex - 2 >= 0) {
      setCurrentIndex(currentIndex - 2);
      return;
    }
    if (data.length < RECOMMEND_COUNT) {
      setCurrentIndex(Math.floor(data.length / 2 + 1));
      return;
    }
    setCurrentIndex(FIRST_PAGE_INDEX);
  };
  console.log(currentIndex);
  return (
    <ContentContainer>
      <Title>최근 주목받은 민원</Title>
      {isLoading ? (
        <Loading />
      ) : (
        <ContentBoxContainer>
          <ArrowIconLeft
            component={ArrowBackIosNewRoundedIcon}
            onClick={prevPage}
          />
          <ArrowIconRight
            component={ArrowForwardIosRoundedIcon}
            onClick={nextPage}
          />
          <AnimationContainer
            key={animateKey}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            {complaintList.map((i, index) => (
              <ContentBox key={index} type="large" data={i} />
            ))}
          </AnimationContainer>
        </ContentBoxContainer>
      )}
    </ContentContainer>
  );
};

export default HomeContentList;
