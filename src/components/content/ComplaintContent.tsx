import StatusDisplay from "../status-button/StatusDisplay";
import CategoryTagGroup from "../category-tag/CategoryTagGroup";
import InteractionGroup from "../interaction/InteractionGroup";
import { ContentDetailProps } from "../../types/Type";
import { Title } from "../../styles/ContentStyle";
import styled from "@emotion/styled";
import ShareIcon from "@mui/icons-material/Share";
import { SvgIcon, SvgIconProps } from "@mui/material";
import { getFormatTime } from "../../utils/FormattingTime";
import { useModal } from "../../hooks/useModal";
import Modal from "../modal/Modal";
import DeleteComment from "../modal/contents/DeleteComment";
import Alert from "../alert/Alert";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import ContentImage from "./ContentImage";
import { AlertContainer } from "../../styles/AlertStyles";

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
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
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

const Article = styled.div`
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow: hidden;
  color: var(--gray5-lowText);
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
const InfoIcon = styled(SvgIcon)<SvgIconProps>`
  width: 20px;
  height: 20px;
  fill: var(--disabled-primary);
`;

const CategoryContainer = styled.div`
  display: flex;
  gap: 8px;
`;
const SubTitle = styled.span`
  color: var(--disabled-primary);
  display: flex;
  align-items: center;
  gap: 0.3rem;
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

const ComplaintContent = ({ data }: ComplaintContentProps) => {
  const navigate = useNavigate();

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
  const sharedLink = baseURL + contentURL + window.location.search;
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
    document.title = data.complaintTitle;
    document
      .querySelector("meta[property='og:title']")
      ?.setAttribute("content", `${data.complaintTitle}`);
    document
      .querySelector("meta[property='og:description']")
      ?.setAttribute("content", `${data.contentProb}`);
    document
      .querySelector("meta[property='og:image']")
      //이미지 링크 변경 예정
      // ?.setAttribute("content", `${data.attachmentUrls[0]}`);
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
          {data.tag && (
            <CategoryContainer>
              <CategoryTagGroup hashtag={[data.tag]} />
            </CategoryContainer>
          )}
        </HeaderContent>
        <InteractionContainer>
          <InteractionGroup
            likes={data.likeCount}
            bookmarks={data.scrapCount}
            liked={data.liked}
            scrapped={data.scrapped}
          />

          {/*공유 */}
          {isCopied && (
            <AlertContainer top="10px">
              <Alert type="info" content={COPIED_COMMENT} />
            </AlertContainer>
          )}
          <Icon component={ShareIcon} onClick={copyToClipboard} />
        </InteractionContainer>
      </Header>

      <ComplaintNumber>
        {/*백엔드 field에 따라 민원번호 변동 필요*/}
        <Category>{data.category}</Category>
        민원 번호 : {data.complaintId}
      </ComplaintNumber>
      <Title>{data.complaintTitle}</Title>

      {/* Content */}
      <Content>
        <ContentContainer>
          <SubTitle>
            <InfoIcon component={InfoRoundedIcon} />
            현황 및 문제점
          </SubTitle>
          <Article>{data.contentProb}</Article>
        </ContentContainer>
        <ContentContainer>
          <SubTitle>
            <InfoIcon component={InfoRoundedIcon} />
            개선방향
          </SubTitle>
          <Article>{data.contentDir}</Article>
        </ContentContainer>
        <ContentContainer>
          {data.contentExpect && (
            <>
              <SubTitle>
                <InfoIcon component={InfoRoundedIcon} />
                기대효과
              </SubTitle>
              <Article>{data.contentExpect}</Article>
            </>
          )}
        </ContentContainer>
      </Content>

      {data.attachmentUrls && (
        <ContentImage attachmentUrls={data.attachmentUrls} />
      )}

      {/* Footer */}
      <Footer>
        {!data.answer ? (
          <EditDeleteButtonContainer>
            <EditDeleteButton
              onClick={() =>
                navigate(`/complaint-modify?complaintId=${data.complaintId}`)
              }
            >
              수정
            </EditDeleteButton>
            <pre>|</pre>

            {alertDelete && (
              <AlertContainer top="10px">
                <Alert type="info" content="삭제되었습니다" />
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
