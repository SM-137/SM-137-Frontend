import styled from "@emotion/styled";
import { mockData } from "../mockData";
import CategorySelect from "../components/category-select/CategorySelect";
import SortBar from "../components/sort-bar/SortBar";
import AdminContentList from "./view/AdminContentlist";
import FormComponent from "./view/AdminSearch";

const Background = styled.div`
  width: 100%;
  background-color: var(--primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  gap: rem;
`;

const HomeArea = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

const Title = styled.h2`
  width: 100%;
  padding: 1rem;
  text-align: center;
  color: var(--white);
`;

const CategoryContainer = styled.div`
  margin: 0.5 0rem;
  width: 100%;
`;

const ContentContainer = styled.div`
  margin: 0 0 10 0rem;
  width: 100%
`

const AdminHome = () => {
  return (
    <HomeArea>

      <Background>
        <Title>민원 관리</Title>
        <CategoryContainer>
          <CategorySelect />
        </CategoryContainer>
        <FormComponent />
      </Background>

      <SortBar />
      <ContentContainer>
        <AdminContentList data={mockData} />
      </ContentContainer>

    </HomeArea>
  );
};

export default AdminHome;
