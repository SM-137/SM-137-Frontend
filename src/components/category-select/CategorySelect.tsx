import styled from "@emotion/styled";
import SubCategory from "./SubCategory";
import { useEffect, useState } from "react";
import { categoryName } from "../../utils/SubCategoryContent";
import { motion } from "framer-motion";

interface CategoryProps {
  isClick: boolean;
}

interface UsageProps {
  usage: "filter" | "normal";
  onCategoryChange?: (selectedCategory: keyof typeof categoryName) => void;
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const CategoryContainer = styled.div`
  border: 2px solid var(--light-primary);
  border-radius: 4px;
  width: 100%;
  max-width: 480px;
  display: flex;
  position: relative;
`;

const Category = styled.button<CategoryProps>`
  width: 25%;
  height: 40px;
  color: var(--light-primary);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${(props) => props.isClick && "var(--white)"};
  z-index: 100;
`;

const BackGround = styled.div`
  background-color: var(--white);
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Highlight = styled(motion.div)`
  position: absolute;
  width: 25%;
  height: 40px;
  background-color: var(--light-primary);
`;

const CategorySelect = ({ usage }: UsageProps) => {
  const CATEGORY = ["facility", "degree", "career", "school"] as const;
  const CATEGORY_CONTENT = ["시설/설비", "대학원", "진로/취업", "학교생활"];

  const storedMajorCategory = sessionStorage.getItem("majorCategory");
  const [category, setCategory] = useState<keyof typeof categoryName>(
    storedMajorCategory &&
      categoryName[storedMajorCategory as keyof typeof categoryName]
      ? (storedMajorCategory as keyof typeof categoryName)
      : "facility"
  );

  const [isClick, setIsClick] = useState({
    facility: true, // 첫 선택 값이 true로 설정
    degree: false,
    career: false,
    school: false,
  });

  useEffect(() => {
    if (
      storedMajorCategory &&
      CATEGORY.includes(storedMajorCategory as keyof typeof categoryName)
    ) {
      setIsClick(() => ({
        facility: false,
        degree: false,
        career: false,
        school: false,
        [storedMajorCategory]: true,
      }));
    }
  }, [storedMajorCategory]);

  const handleCategorySelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.getAttribute("data-category")!;
    if (value) {
      setCategory(value as keyof typeof categoryName);
      setIsClick((prev) => {
        const newPrev = { ...prev };
        for (let key in newPrev) {
          newPrev[key as keyof typeof categoryName] = key === value;
        }
        sessionStorage.setItem("majorCategory", value);
        return newPrev;
      });
    }
    sessionStorage.removeItem("majorCategory");
  };

  return (
    <Wrap>
      <CategoryContainer>
        <BackGround>
          <Highlight
            layoutId="highlight"
            style={{ left: `${CATEGORY.indexOf(category) * 25}%` }}
            transition={{ stiffness: 500 }}
          />
          {CATEGORY.map((i, index) => (
            <Category
              key={index}
              data-category={i}
              isClick={isClick[i]}
              onClick={handleCategorySelect}
            >
              {CATEGORY_CONTENT[index]}
            </Category>
          ))}
        </BackGround>
      </CategoryContainer>
      <SubCategory category={category} usage={usage} />
    </Wrap>
  );
};

export default CategorySelect;
