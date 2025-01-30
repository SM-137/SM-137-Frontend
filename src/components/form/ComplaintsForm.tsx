import styled from "@emotion/styled";
import Input from "../input/Input";
import TextArea from "../input/TextArea";
import FileUploadField from "../file-upload/FileUploadField";
import useComplaintStore from "../../store/useComplaintStore";
import { removeBlankContent } from "../../utils/SessionStorage";
import { useEffect, useState } from "react";
import Loading from "../loading/Loading";

interface ComplaintsFormProps {
  isEssentialWrite: {
    title: boolean;
    contentProb: boolean;
    contentDir: boolean;
  };
  //데이터 수정용 초기데이터
  initialData?: {
    complaintTitle: string;
    contentProb: string;
    contentDir: string;
    contentExpect: string;
    attachmentUrls: File[];
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

const ComplaintsForm = ({
  isEssentialWrite,
  initialData,
}: ComplaintsFormProps) => {
  const {
    setTitle,
    setContentDir,
    setContentProb,
    setContentExpect,
    setAttachments,
  } = useComplaintStore((state) => state);
  const [isLoading, setIsLoading] = useState(true);

  const { title, contentDir, contentProb, contentExpect } = useComplaintStore(
    (state) => state
  );

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
    if (formType === "contentExpect") {
      setContentExpect(e.target.value);
    }
    sessionStorage.setItem(formType, e.target.value);
    removeBlankContent(e, formType);
  };

  //데이터 수정용
  useEffect(() => {
    if (initialData) {
      setTitle(initialData.complaintTitle);
      setContentProb(initialData.contentProb);
      setContentDir(initialData.contentDir);
      setContentExpect(initialData.contentExpect);
      //임시 첨부파일명 (첨부파일 수정 기능 추가 필요)
      setAttachments(() => initialData.attachmentUrls);
      setIsLoading(false);
    }
  }, [initialData, setTitle, setContentProb, setContentDir]);

  return (
    <FormContainer>
      {isLoading && <Loading />}

      {!isLoading && (
        <>
          <FormInputGroup>
            <Input
              label="제목"
              placeholder="내용을 입력해주세요"
              isRequired={true}
              height="40px"
              onChange={(e) => handleChange(e, "title")}
              hasError={!isEssentialWrite.title}
              value={title}
            />
          </FormInputGroup>
          <FormInputGroup>
            <TextArea
              label="현황 및 문제점"
              placeholder="내용을 입력해주세요"
              isRequired={true}
              onChange={(e) => handleChange(e, "contentProb")}
              hasError={!isEssentialWrite.contentProb}
              value={contentProb}
            />
          </FormInputGroup>
          <FormInputGroup>
            <TextArea
              label="개선 방향"
              placeholder="내용을 입력해주세요"
              isRequired={true}
              onChange={(e) => handleChange(e, "contentDir")}
              hasError={!isEssentialWrite.contentDir}
              value={contentDir}
            />
          </FormInputGroup>
          <FormInputGroup>
            <TextArea
              label="기대효과"
              placeholder="내용을 입력해주세요"
              onChange={(e) => handleChange(e, "contentExpect")}
              value={contentExpect}
            />
          </FormInputGroup>
        </>
      )}
      <FileUploadField />
    </FormContainer>
  );
};

export default ComplaintsForm;
