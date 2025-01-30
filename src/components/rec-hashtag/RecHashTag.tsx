import styled from "@emotion/styled";
import PillButton from "../pill-button/PillButton";
import { getHashtags } from "../../services/hashtagService";
import { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import { AlertContainer } from "../../styles/AlertStyles";
import Alert from "../alert/Alert";

interface RecHashTagProps {
  contentTotal: string;
}
const HashTagContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1.5rem 3rem;
  background-color: var(--gray2-subbtn);
  border-radius: 500px;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  width: 100%;
`;
const HashTagButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const ListTitle = styled.span`
  width: 100%;
  text-align: center;
  color: var(--light-primary);
  margin-bottom: 0.5rem;
`;

const RecHashTag = ({ contentTotal }: RecHashTagProps) => {
  const COUNT_WARNING = "3개까지 선택할 수 있습니다";

  //AI 생성 해시태그 데이터
  const [hashtagData, setHashtagData] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  //임시 tagArray
  const [tagArray, setTagArray] = useState<string[]>([]);
  const [showAlert, setShowAlert] = useState(false);

  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    getHashtags(contentTotal)
      .then((res) => {
        setHashtagData(res.split(", "));
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setHasError(true);
      });
  }, []);

  return (
    <HashTagContainer>
      {showAlert && (
        <AlertContainer top="-1rem">
          <Alert content={COUNT_WARNING} type="warning" />
        </AlertContainer>
      )}
      <ListTitle>추천 해시태그</ListTitle>
      {isLoading ? (
        <Loading />
      ) : (
        <HashTagButton>
          {hashtagData.map((tag, index) => (
            <PillButton
              key={index}
              contents={tag}
              tagArray={tagArray}
              setTagArray={setTagArray}
              setShowAlert={setShowAlert}
            />
          ))}
          {!isLoading && hasError && (
            <div>사용할 수 있는 크레딧이 초과되었습니다</div>
          )}
        </HashTagButton>
      )}
    </HashTagContainer>
  );
};

export default RecHashTag;
