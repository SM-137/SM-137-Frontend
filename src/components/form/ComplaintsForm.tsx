import styled from "@emotion/styled";
import Input from "../input/Input";
import TextArea from "../input/TextArea";
import FileUploadField from "../file-upload/FileUploadField";
import useComplaintStore from "../../store/store";

const FormContainer = styled.form`
  min-width: 80%;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 8px;
`;

const FormInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const ComplaintsForm = () => {
  const {
    setTitle,
    setContentDir,
    setContentProb,
    setContentExpect,
    setAttachment,
  } = useComplaintStore((state) => state);

  const handleFileChange = (file: File[] | null) => {
    if (file) {
      setAttachment((prev: File[] | null) =>
        prev ? [...prev, ...file] : [...file]
      );
    }
  };

  return (
    <FormContainer>
      <FormInputGroup>
        <Input
          label="제목"
          placeholder="내용을 입력해주세요"
          isRequired={true}
          height="40px"
          onChange={(e) => setTitle(e.target.value)}
        />
      </FormInputGroup>
      <FormInputGroup>
        <TextArea
          label="현황 및 문제점"
          placeholder="내용을 입력해주세요"
          isRequired={true}
          onChange={(e) => setContentProb(e.target.value)}
        />
      </FormInputGroup>
      <FormInputGroup>
        <TextArea
          label="개선 방향"
          placeholder="내용을 입력해주세요"
          isRequired={true}
          onChange={(e) => setContentDir(e.target.value)}
        />
      </FormInputGroup>
      <FormInputGroup>
        <TextArea
          label="기대효과"
          placeholder="내용을 입력해주세요"
          onChange={(e) => setContentExpect(e.target.value)}
        />
      </FormInputGroup>
      <FileUploadField onFileChange={handleFileChange} />
    </FormContainer>
  );
};

export default ComplaintsForm;
