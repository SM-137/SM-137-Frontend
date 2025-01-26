import React, { useState } from "react";
import styled from "@emotion/styled";
import Input from "../input/Input";
import TextArea from "../input/TextArea";
import FileUploadField from "../file-upload/FileUploadField";
import { useForm } from "../../hooks/useForm";
import { complaintWrite } from "../../services/complaintService";

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

interface FormDataProps {
  title: string;
  contentProb: string;
  contentDir: string;
  contentExpect: string;
  attachments: File | null;
  categoryName: string;
  tagName: string;
}

const ComplaintsForm = () => {
  const { formData, updateField } = useForm<FormDataProps>({
    title: "",
    contentProb: "",
    contentDir: "",
    contentExpect: "",
    attachments: null,
    categoryName: "",
    tagName: "",
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null); // 첨부파일 상태

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 카테고리와 해시태그는 임시로 입력
    const sendData = {
      ...formData,
      attachments: selectedFile,  // 선택된 파일을 전송 데이터에 추가
      categoryName: "시설",
      tagName: "해시태그",
    };

    complaintWrite(sendData)
      .then((res) => console.log("응답 데이터:", res))
      .catch((error) => console.error("에러 발생:", error));
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
          onChange={(e) => updateField("contentProb", e.target.value)}
        />
      </FormInputGroup>
      <FormInputGroup>
        <TextArea
          label="개선 방향"
          placeholder="내용을 입력해주세요"
          isRequired={true}
          onChange={(e) => updateField("contentDir", e.target.value)}
        />
      </FormInputGroup>
      <FormInputGroup>
        <TextArea
          label="기대효과"
          placeholder="내용을 입력해주세요"
          onChange={(e) => updateField("contentExpect", e.target.value)}
        />
      </FormInputGroup>
      <FileUploadField onFileChange={setSelectedFile} />
    </FormContainer>
  );
};

export default ComplaintsForm;
