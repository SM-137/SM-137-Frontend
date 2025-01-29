import styled from "@emotion/styled";
import PillButton from "../pill-button/PillButton";
import { getHashtags } from "../../services/hashtagService";
import { useEffect, useState } from "react";

interface RecHashTagProps {
  contentTotal: string;
}
const HashTagContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1.5rem;
  background-color: var(--gray2-subbtn);
  border-radius: 500px;
  justify-content: center;
  align-items: center;
  max-width: 627.34px;
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
  //AI 생성 해시태그 데이터
  const [hashtagData, setHashtagData] = useState<string[]>([]);

  useEffect(() => {
    getHashtags(contentTotal)
      .then((res) => {
        setHashtagData(res.split(", "));
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(hashtagData);
  return (
    <HashTagContainer>
      <ListTitle>추천 해시태그</ListTitle>
      <HashTagButton>
        {hashtagData.map((tag, index) => (
          <PillButton key={index} contents={tag} />
        ))}
      </HashTagButton>
    </HashTagContainer>
  );
};

export default RecHashTag;
