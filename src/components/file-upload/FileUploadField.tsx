import styled from "@emotion/styled";
import Button from "../button/Button";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import useComplaintStore from "../../store/useComplaintStore";

const FileInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 1.5rem;
  width: 100%;
`;

const FileLabelContainer = styled.div`
  width: 17%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const FileInputLabel = styled.label`
  color: var(--gray4-placeholder-low);
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const InputInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  gap: 0.5rem;
`;

const FileInputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const FileDetailsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border: 1px solid var(--gray3-border);
  border-radius: 4px;
  padding: 5px 10px;
  height: auto;
  gap: 10px;
`;

const FileNameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;

const FileName = styled.div`
  color: var(--gray5-lowText);
  display: inline;
`;

const DeleteFileButton = styled(SvgIcon)<SvgIconProps>`
  color: var(--gray3-border);
  width: 24px;
  height: 24px;
  cursor: pointer;

  &:hover {
    color: var(--gray5-lowText);
  }
`;

const FileUploadField = () => {
  const INVALID_EXTENSION = "Jpg / Jpeg / Png 파일만 업로드 할 수 있습니다";

  const { attachments, setAttachments } = useComplaintStore((state) => state);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    const files = fileList && Array.from(fileList);

    if (files) {
      setAttachments((prev: File[] | null) =>
        prev ? [...prev, ...files] : [...files]
      );

      const newFilesData = files.map((file) => ({
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified,
      }));

      const storedFiles = sessionStorage.getItem("files");
      const filesArray = storedFiles ? JSON.parse(storedFiles) : [];
      const updatedFilesArray = [...filesArray, ...newFilesData];
      sessionStorage.setItem("files", JSON.stringify(updatedFilesArray));
    }
  };

  const handleFileRemove = (index: number) => {
    if (attachments) {
      const updatedFiles = attachments.filter((_, idx) => idx !== index);
      setAttachments(() => updatedFiles);
      const newFilesData = updatedFiles.map((file) => ({
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified,
      }));
      sessionStorage.setItem("files", JSON.stringify(newFilesData));
    }
    const storedFiles = sessionStorage.getItem("files");
    if (storedFiles && JSON.parse(storedFiles).length === 0) {
      sessionStorage.removeItem("files");
    }
  };

  const handleFileClick = () => {
    document.getElementById("file")?.click();
  };

  return (
    <FileInputContainer>
      <FileLabelContainer>
        <FileInputLabel>첨부파일</FileInputLabel>
      </FileLabelContainer>

      <InputInfoContainer>
        <FileInputWrapper>
          <HiddenFileInput
            type="file"
            id="file"
            multiple
            onChange={handleFileChange}
            accept=".jpg, .png, .jpeg"
          />

          <div onClick={handleFileClick}>
            <Button
              content="첨부파일"
              styleType="_100x35_Gray2"
              type="button"
            />
          </div>

          <FileDetailsContainer>
            {attachments &&
              Array.from(attachments).map((file, index) => (
                <FileNameContainer key={index}>
                  <FileName>{file.name}</FileName>
                  <DeleteFileButton
                    component={CancelRoundedIcon}
                    onClick={() => handleFileRemove(index)}
                  />
                </FileNameContainer>
              ))}
            {!attachments?.length && <FileName>{INVALID_EXTENSION}</FileName>}
          </FileDetailsContainer>
        </FileInputWrapper>
      </InputInfoContainer>
    </FileInputContainer>
  );
};

export default FileUploadField;
