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
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--gray3-border);
  border-radius: 4px;
  padding: 5px 10px;
  height: 40px;
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
  onFileChange: (file: File | null) => void;
}

const FileUploadField: React.FC<FileUploadFieldProps> = ({ onFileChange }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      setSelectedFile(files[0]);
      onFileChange(files[0]);
    }
  };

  const handleFileRemove = () => {
    setSelectedFile(null);
    onFileChange(null);
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
          onChange={handleFileChange}
        />
        <Button
          content="첨부파일"
          type="_100x35_Gray2"
          onClick={() => document.getElementById("file")?.click()}
        />
        <FileDetailsContainer>
          <FileName>
            {selectedFile ? selectedFile.name : "선택된 파일 없음"}
          </FileName>
          {selectedFile && (
            <DeleteFileButton
              component={CancelRoundedIcon}
              onClick={handleFileRemove}
            />
          )}
        </FileDetailsContainer>
      </FileInputWrapper>
    </FileInputContainer>
  );
};

export default FileUploadField;
