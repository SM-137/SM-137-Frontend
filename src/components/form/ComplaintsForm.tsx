import styled from "@emotion/styled";
import Input from "../input/Input";
import TextArea from "../input/TextArea";
import FileUploadField from "../file-upload/FileUploadField";
import useComplaintStore from "../../store/useComplaintStore";

interface ComplaintsFormProps {
  isEssentialWrite: {
    title: boolean;
    contentProb: boolean;
    contentDir: boolean;
  };
}

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

const ComplaintsForm = ({ isEssentialWrite }: ComplaintsFormProps) => {
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

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    formType: string
  ) => {
    if (formType === "title") {
      setTitle(e.target.value);
    }
    if (formType === "contentProb") {
      setContentProb(e.target.value);
    }
    if (formType === "contentDir") {
      setContentDir(e.target.value);
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
          onChange={(e) => handleChange(e, "title")}
          hasError={!isEssentialWrite.title}
        />
      </FormInputGroup>
      <FormInputGroup>
        <TextArea
          label="현황 및 문제점"
          placeholder="내용을 입력해주세요"
          isRequired={true}
          onChange={(e) => handleChange(e, "contentProb")}
          hasError={!isEssentialWrite.contentProb}
        />
      </FormInputGroup>
      <FormInputGroup>
        <TextArea
          label="개선 방향"
          placeholder="내용을 입력해주세요"
          isRequired={true}
          onChange={(e) => handleChange(e, "contentDir")}
          hasError={!isEssentialWrite.contentDir}
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
