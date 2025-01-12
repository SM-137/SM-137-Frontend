import React from "react";
import styled from "@emotion/styled";
import Input from "../input/Input";
import TextArea from "../input/TextArea";
import FileUploadField from "../file-upload/FileUploadField";
import { useForm } from "../../hooks/useForm";

const FormContainer = styled.form`
  min-width: 80%;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 3rem;
  border-radius: 8px;
`;

const FormInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

interface FormDataProps {
  title: string;
  description: string;
  improvements: string;
  effect: string;
  file: File | null;
}

const ComplaintsForm = () => {
  const { formData, updateField, handleFileChange } = useForm<FormDataProps>({
    title: "",
    description: "",
    improvements: "",
    effect: "",
    file: null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormInputGroup>
        <Input
          label="제목"
          placeholder="내용을 입력해주세요"
          isRequired={true}
          height="40px"
          onChange={(e) => updateField("title", e.target.value)}
        />
      </FormInputGroup>
      <FormInputGroup>
        <TextArea
          label="현황 및 문제점"
          placeholder="내용을 입력해주세요"
          isRequired={true}
          onChange={(e) => updateField("description", e.target.value)}
        />
      </FormInputGroup>
      <FormInputGroup>
        <TextArea
          label="개선 방향"
          placeholder="내용을 입력해주세요"
          isRequired={true}
          onChange={(e) => updateField("improvements", e.target.value)}
        />
      </FormInputGroup>
      <FormInputGroup>
        <TextArea
          label="기대효과"
          placeholder="내용을 입력해주세요"
          onChange={(e) => updateField("effect", e.target.value)}
        />
      </FormInputGroup>
      <FileUploadField onFileChange={handleFileChange("file")} />
    </FormContainer>
  );
};

export default ComplaintsForm;
