import styled from "@emotion/styled";
import Input from "../input/Input";

const InfoForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  white-space: nowrap;
`;

const UserInfoForm = () => {
  return (
    <InfoForm>
      <Input label="학번" placeholder="2012345" />
      <Input label="학과/학부" placeholder="컴퓨터과학전공" />
    </InfoForm>
  );
};

export default UserInfoForm;
