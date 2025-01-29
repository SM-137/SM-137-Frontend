import React, { useState } from "react";
import styled from "@emotion/styled";
import Button from "../button/Button";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

const FileInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
`;

const FileLabelContainer = styled.div`
  width: 15%;
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

const FileInputWrapper = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const FileDetailsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column; /* 파일 정보를 세로로 나열 */
  align-items: flex-start;
  justify-content: flex-start;
  border: 1px solid var(--gray3-border);
  border-radius: 4px;
  padding: 5px 10px;
  height: auto; /* 높이를 파일 목록에 맞게 자동 조정 */
  gap: 10px;
`;

const FileName = styled.div`
  font-size: 14px;
  color: var(--gray5-lowText);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
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

interface FileUploadFieldProps {
  onFileChange: (file: File[] | null) => void;
}

const FileUploadField = ({ onFileChange }: FileUploadFieldProps) => {
  //file view
  const [selectedFile, setSelectedFile] = useState<File[] | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("작동");
    e.preventDefault();
    const fileList = e.target.files;
    if (fileList) {
      const newFiles = Array.from(fileList);
      setSelectedFile((prev) => (prev ? [...prev, ...newFiles] : newFiles));
      onFileChange(newFiles);
    }
  };

  const handleFileRemove = (index: number) => {
    if (selectedFile) {
      const updatedFiles = Array.from(selectedFile);
      updatedFiles.splice(index, 1);
      setSelectedFile(updatedFiles ? updatedFiles : null);
      onFileChange(updatedFiles);
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
      <FileInputWrapper>
        <HiddenFileInput
          type="file"
          id="file"
          multiple
          onChange={handleFileChange}
        />
        <div onClick={handleFileClick}>
          <Button content="첨부파일" styleType="_100x35_Gray2" type="button" />
        </div>
        <FileDetailsContainer>
          {selectedFile &&
            Array.from(selectedFile).map((file, index) => (
              <div
                key={index}
                style={{ display: "flex", alignItems: "center" }}
              >
                <FileName>{file.name}</FileName>
                <DeleteFileButton
                  component={CancelRoundedIcon}
                  onClick={() => handleFileRemove(index)}
                />
              </div>
            ))}
          {!selectedFile?.length && "선택된 파일 없음"}
        </FileDetailsContainer>
      </FileInputWrapper>
    </FileInputContainer>
  );
};

export default FileUploadField;
