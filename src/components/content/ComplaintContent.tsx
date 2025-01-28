import StatusDisplay from "../status-button/StatusDisplay";
import CategoryTagGroup from "../category-tag/CategoryTagGroup";
import InteractionGroup from "../interaction/InteractionGroup";
import { ContentDetailProps } from "../../types/Type";
import { Article, Title } from "../../styles/ContentStyle";
import styled from "@emotion/styled";
import ShareIcon from "@mui/icons-material/Share";
import { SvgIcon, SvgIconProps } from "@mui/material";
import { getFormatTime } from "../../utils/FormattingTime";
import { useModal } from "../../hooks/useModal";
import Modal from "../modal/Modal";
import DeleteComment from "../modal/contents/DeleteComment";
import Alert from "../alert/Alert";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface ComplaintContentProps {
  data: ContentDetailProps;
}

const Container = styled.div`
  width: 100%;
  max-width: 782px;
  background: var(--white);
  padding: 20px 0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ComplaintNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  font-size: 16px;
  color: var(--light-primary);
  font-weight: 600;
  margin-top: 8px;
`;

const Icon = styled(SvgIcon)<SvgIconProps>`
  width: 24px;
  height: 24px;
  fill: var(--gray5-lowText);
  cursor: pointer;
  &:hover {
    fill: var(--gray6-header);
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const DateSection = styled.div`
  font-size: 16px;
  color: var(--gray4-placeholder-low);
  text-align: right;
`;

const InteractionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const InfoComment = styled.div`
  color: var(--gray4-placeholder-low);
`;

const EditDeleteButtonContainer = styled.div`
  display: flex;
  color: var(--gray4-placeholder-low);
  gap: 0.8rem;
`;
const EditDeleteButton = styled.pre`
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid var(--gray4-placeholder-low);
  }
`;

const Category = styled.span`
  color: var(--light-primary);
`;

const AlertContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
`;

const ComplaintContent = ({ data }: ComplaintContentProps) => {
  const date = data.createdAt ? new Date(data.createdAt) : new Date();
  const formatTime = getFormatTime(date);

  const { isModalOpen, handleModalClose, handleModalOpen } = useModal();
  const [alertDelete, setAlertDelete] = useState(false);
  const handleConfirmDelete = () => {
    handleModalOpen();
  };
  const handleDelete = () => {
    //delete 로직
    setAlertDelete(true);
    handleModalClose();
    setTimeout(() => {
      setAlertDelete(false);
    }, 1500);
  };

  const COPIED_COMMENT = "링크가 복사되었습니다";
  const [isCopied, setIsCopied] = useState(false);
  //복사할 URL 설정
  const baseURL = window.location.origin;
  const contentURL = useLocation().pathname;
  const sharedLink = baseURL + contentURL;
  const imageLink = "https://sm137.netlify.app/preview.png";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(sharedLink);
      setIsCopied(true);
    } catch (error) {
      console.error(`링크복사 실패 : ${error}`);
    }
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };
  useEffect(() => {
    document.title = "동적 페이지 제목";
    document
      .querySelector("meta[property='og:title']")
      ?.setAttribute("content", "동적 페이지 제목");
    document
      .querySelector("meta[property='og:description']")
      ?.setAttribute("content", "동적 페이지 설명");
    document
      .querySelector("meta[property='og:image']")
      ?.setAttribute("content", imageLink);
  }, []);

  return (
    <Container>
      <Modal
        isOpen={isModalOpen}
        handleClose={handleModalClose}
        contents={
          <DeleteComment
            handleClose={handleDelete}
            handleCancel={handleModalClose}
          />
        }
      />
      {/* Header */}
      <Header>
        <HeaderContent>
          <StatusDisplay type={data.complaintStatus} />
          <CategoryContainer>
            <CategoryTagGroup hashtag={[data.tag]} />
          </CategoryContainer>
        </HeaderContent>
        <InteractionContainer>
          <InteractionGroup
            likes={data.likeCount}
            bookmarks={data.scrapCount}
          />

          {/*공유 */}
          {isCopied && (
            <AlertContainer>
              <Alert content={COPIED_COMMENT} />
            </AlertContainer>
          )}
          <Icon component={ShareIcon} onClick={copyToClipboard} />
        </InteractionContainer>
      </Header>

      <ComplaintNumber>
        {/*백엔드 field에 따라 민원번호 변동 필요*/}
        <Category>{data.category}</Category>
        {data.complaintId}
      </ComplaintNumber>

      {/* Content */}
      <div>
        <Title>{data.complaintTitle}</Title>
        <Article line={0}>{data.contentProb}</Article>
      </div>

      {/* Footer */}
      <Footer>
        {!data.answer ? (
          <EditDeleteButtonContainer>
            <EditDeleteButton>수정</EditDeleteButton>
            <pre>|</pre>

            {alertDelete && (
              <AlertContainer>
                <Alert content="삭제되었습니다" />
              </AlertContainer>
            )}
            <EditDeleteButton onClick={handleConfirmDelete}>
              삭제
            </EditDeleteButton>
          </EditDeleteButtonContainer>
        ) : (
          <InfoComment>
            답변이 달린 이후에는 수정 및 삭제가 불가능합니다
          </InfoComment>
        )}
        <DateSection>{formatTime}</DateSection>
      </Footer>
    </Container>
  );
};

export default ComplaintContent;
