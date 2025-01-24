import { jsx, jsxs } from "react/jsx-runtime";
import styled from "@emotion/styled";
import play_circle_filled from "@mui/icons-material/PlayCircleFilled";
import pause_circle_filled from "@mui/icons-material/PauseCircleFilled";
import check_circle from "@mui/icons-material/CheckCircle";
import cancel from "@mui/icons-material/Cancel";
import SvgIcon from "@mui/material/SvgIcon/index.js";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ShareIcon from "@mui/icons-material/Share";
import { SvgIcon as SvgIcon$1 } from "@mui/material";
import { keyframes } from "@emotion/react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded";
const PlayIcon = styled(play_circle_filled)`
  color: var(--light-primary);
  width: 20px;
  height: 20px;
`;
const PauseIcon = styled(pause_circle_filled)`
  color: var(--info-dark);
  width: 20px;
  height: 20px;
`;
const CheckIcon = styled(check_circle)`
  color: var(--succeess);
  width: 20px;
  height: 20px;
`;
const CancelIcon = styled(cancel)`
  color: var(--error-light);
  width: 20px;
  height: 20px;
`;
const buttonStyles = {
  inProgress: {
    Icon: PlayIcon,
    color: "var(--light-primary)",
    text: "진행",
  },
  pending: {
    Icon: PauseIcon,
    color: "var(--info-dark)",
    text: "대기",
  },
  rejected: {
    Icon: CancelIcon,
    color: "var(--error-light)",
    text: "반려",
  },
  completed: {
    Icon: CheckIcon,
    color: "var(--light-primary)",
    text: "완료",
  },
};
styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.2rem 0.4rem;
  border-radius: 20px;
  background-color: var(--white);
  border: ${(props) =>
    props.isSelected ? `2px solid ${props.borderColor}` : "none"};
`;
styled.pre`
  color: ${(props) => props.color};
  font-size: 16px;
`;
const DisplayContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
`;
const DisplayText = styled.pre`
  color: ${(props) => props.color};
`;
const StatusDisplay = ({ type }) => {
  if (!type || !buttonStyles[type]) {
    return /* @__PURE__ */ jsx("div", { children: "Invalid status type" });
  }
  const { color, Icon: Icon2, text } = buttonStyles[type];
  return /* @__PURE__ */ jsxs(DisplayContainer, {
    children: [
      /* @__PURE__ */ jsx(Icon2, {}),
      /* @__PURE__ */ jsx(DisplayText, { color, children: text }),
    ],
  });
};
const Container$9 = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.1rem 0.7rem;
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  border-radius: 20px;
  min-width: 45px;
`;
const Contents$2 = styled.p``;
const CategoryTag = ({
  contents = "내용",
  background = "var(--gray2-subbtn)",
  color = "var(--gray5-lowText)",
}) => {
  return /* @__PURE__ */ jsx(Container$9, {
    color,
    background,
    children: /* @__PURE__ */ jsx(Contents$2, { children: contents }),
  });
};
const GroupContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const CategoryTagGroup = ({ hashtag }) => {
  return /* @__PURE__ */ jsx(GroupContainer, {
    children: hashtag.map((tagItem, index) =>
      /* @__PURE__ */ jsx(CategoryTag, { contents: tagItem }, index)
    ),
  });
};
const Container$8 = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  align-items: center;
`;
const IconWrapper = styled(motion.div)`
  display: inline-block;
  width: 22px;
  height: 22px;
`;
const UnClickIcon = styled(SvgIcon)`
  width: 22px;
  height: 22px;
  fill: var(--gray5-lowText);
  cursor: pointer;
  &:hover {
    fill: var(--gray6-header);
  }
`;
const ClickIcon = styled(SvgIcon)`
  width: 22px;
  height: 22px;
  fill: ${(props) => props.fill};
  cursor: pointer;
`;
const Value = styled.pre`
  color: var(--gray5-lowText);
`;
const clickVariants = {
  start: { scale: 0.8 },
  clicking: {
    scale: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      stiffness: 400,
      damping: 20,
    },
  },
};
const getIcon = (type) => {
  if (type === "thumbUp") {
    return ThumbUpAltOutlinedIcon;
  }
  if (type === "scrap") {
    return BookmarkBorderRoundedIcon;
  }
  if (type === "likes") {
    return FavoriteBorderRoundedIcon;
  }
};
const getClickIcon = (type) => {
  if (type === "thumbUp") {
    return ThumbUpAltRoundedIcon;
  }
  if (type === "scrap") {
    return BookmarkRoundedIcon;
  }
  if (type === "likes") {
    return FavoriteRoundedIcon;
  }
};
const getFill = (type) => {
  if (type === "thumbUp") {
    return "var(--succeess)";
  }
  if (type === "scrap") {
    return "var(--info-dark)";
  }
  if (type === "likes") {
    return "var(--error-light)";
  }
};
const Interaction = ({ type, count, resetTrigger = false }) => {
  const [isClick, setIsClick] = useState(false);
  const [, setValue] = useState(count);
  const handleClick = () => {
    setIsClick((prev) => !prev);
    setValue((prev) => (isClick ? prev - 1 : prev + 1));
  };
  useEffect(() => {
    if (resetTrigger) {
      setIsClick(false);
      setValue(count);
    }
  }, [resetTrigger, count]);
  return /* @__PURE__ */ jsxs(Container$8, {
    children: [
      isClick
        ? /* @__PURE__ */ jsx(IconWrapper, {
            variants: clickVariants,
            initial: "start",
            animate: "clicking",
            children: /* @__PURE__ */ jsx(ClickIcon, {
              component: getClickIcon(type),
              onClick: handleClick,
              sx: { fill: getFill(type) },
            }),
          })
        : /* @__PURE__ */ jsx(UnClickIcon, {
            component: getIcon(type),
            onClick: handleClick,
          }),
      /* @__PURE__ */ jsx(Value, { children: isClick ? count + 1 : count }),
    ],
  });
};
const Container$7 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 100px;
  gap: 1rem;
`;
const InteractionGroup = ({ likes, bookmarks, resetTrigger }) => {
  return /* @__PURE__ */ jsxs(Container$7, {
    children: [
      /* @__PURE__ */ jsx(Interaction, {
        type: "thumbUp",
        count: likes,
        resetTrigger,
      }),
      /* @__PURE__ */ jsx(Interaction, {
        type: "scrap",
        count: bookmarks,
        resetTrigger,
      }),
    ],
  });
};
const Title$1 = styled.span``;
const Article = styled.div`
  color: var(--gray5-lowText);
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${(props) => props.line};
  text-overflow: ellipsis;
  height: calc(1.5rem * 2);
  @media screen and (max-width: 480px) {
    -webkit-line-clamp: 1;
    max-height: calc(1.5rem * 1);
  }
`;
const DATE_INDEX = 0;
const ONE_HOUR = 36e5;
const ONE_DAY = 864e5;
const getFormatTime = (date) => {
  const now = /* @__PURE__ */ new Date();
  const formatTime = formattingTime(date, now);
  return formatTime;
};
const calculateGap = (date, now) => {
  const time = date.getTime();
  const nowTime = now.getTime();
  const millisecondGap = nowTime - time;
  const hourGap = Math.floor(millisecondGap / ONE_HOUR);
  return { millisecondGap, hourGap };
};
const formattingTime = (date, now) => {
  const { millisecondGap, hourGap } = calculateGap(date, now);
  const formatDate = date.toISOString().split("T")[DATE_INDEX];
  if (millisecondGap < ONE_DAY) {
    if (hourGap > 0) {
      return `${hourGap}시간 전`;
    }
    return "방금 전";
  }
  return formatDate;
};
const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return {
    isModalOpen,
    handleModalClose,
    handleModalOpen,
  };
};
const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;
const UpAnimation = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0); 
    opacity: 1;
  }
`;
const ModalContent = styled.div`
  background: var(--white);
  padding: 3rem 6rem;
  border-radius: 8px;
  max-width: 562px;
  max-height: 348px;
  text-align: center;
  animation: ${UpAnimation} 0.5s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  position: relative;
`;
const ModalBackdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;
const Modal = ({ isOpen, handleClose, contents }) => {
  if (!isOpen) return null;
  return /* @__PURE__ */ jsxs(ModalWrapper, {
    children: [
      /* @__PURE__ */ jsx(ModalBackdrop, { onClick: handleClose }),
      /* @__PURE__ */ jsx(ModalContent, { children: contents }),
    ],
  });
};
const buttonType = {
  /*default type */
  _120x40_Primary: {
    width: "120px",
    height: "40px",
    padding: "0.5rem 3rem",
    backGround: "var(--light-primary)",
    hoverBackGround: "var(--primary)",
    color: "var(--white)",
    borderRadius: "4px",
  },
  _100x123_Primary: {
    width: "100px",
    height: "123px",
    padding: "0.5rem 3rem",
    backGround: "var(--light-primary)",
    hoverBackGround: "var(--primary)",
    color: "var(--white)",
    borderRadius: "4px",
  },
  _120x40_Gray2: {
    width: "120px",
    height: "40px",
    padding: "0.5rem 3rem",
    backGround: "var(--gray2-subbtn)",
    hoverBackGround: "var(--gray3-border)",
    color: "var(--gray5-lowText)",
    borderRadius: "4px",
  },
  _100x35_Gray2: {
    width: "100px",
    height: "35px",
    padding: "0rem 0rem",
    backGround: "var(--gray2-subbtn)",
    hoverBackGround: "var(--gray3-border)",
    color: "var(--gray5-lowText)",
    borderRadius: "4px",
  },
  _100x35_Primary: {
    width: "100px",
    height: "35px",
    padding: "0rem 0rem",
    backGround: "var(--light-primary)",
    hoverBackGround: "var(--primary)",
    color: "var(--white)",
    borderRadius: "4px",
  },
};
const DEFAULT_CONTENT = "버튼 내용";
const DEFAULT_TYPE = "_120x40_Primary";
const ButtonContainer$1 = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backGround};
  border-radius: ${(props) => props.borderRadius || "4px"};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer; // 버튼에 클릭 커서 추가
  &:hover {
    background-color: ${(props) => props.hoverBackGround};
  }
`;
const ButtonContents = styled.div`
  color: ${(props) => props.color};
  text-align: center;
`;
const Button = ({
  content = DEFAULT_CONTENT,
  type = DEFAULT_TYPE,
  onClick,
  // onClick props 추가
}) => {
  const buttonStyle = buttonType[type];
  const {
    width,
    height,
    padding,
    backGround,
    color,
    hoverBackGround,
    borderRadius,
  } = buttonStyle;
  return /* @__PURE__ */ jsx(ButtonContainer$1, {
    width,
    height,
    padding,
    backGround,
    hoverBackGround,
    borderRadius,
    onClick,
    children: /* @__PURE__ */ jsx(ButtonContents, { color, children: content }),
  });
};
const Container$6 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;
const Comment$1 = styled.pre`
  color: var(--light-primary);
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
const DeleteComment = ({ handleClose, handleCancel }) => {
  const DELETE_COMMENT = "해당 게시물을 삭제하시겠습니까?";
  return /* @__PURE__ */ jsxs(Container$6, {
    children: [
      /* @__PURE__ */ jsx(Comment$1, { children: DELETE_COMMENT }),
      /* @__PURE__ */ jsxs(ButtonContainer, {
        children: [
          /* @__PURE__ */ jsx(Button, {
            type: "_100x35_Gray2",
            content: "취소",
            onClick: handleCancel,
          }),
          /* @__PURE__ */ jsx(Button, {
            type: "_100x35_Primary",
            content: "삭제",
            onClick: handleClose,
          }),
        ],
      }),
    ],
  });
};
const Container$5 = styled(motion.div)`
  display: inline-flex;
  padding: 0.5rem 1rem;
  background-color: var(--disabled-primary);
  color: var(--light-primary);
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
const Icon$3 = styled(SvgIcon$1)`
  width: 15px;
  height: 15px;
  fill: var(--light-primary);
`;
const showVariants = {
  start: { opacity: 0, y: "-100%" },
  clicking: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};
const Alert = ({ content = "메세지를 입력해 주세요" }) => {
  return /* @__PURE__ */ jsxs(Container$5, {
    variants: showVariants,
    initial: "start",
    animate: "clicking",
    children: [
      /* @__PURE__ */ jsx(Icon$3, { component: CheckCircleRoundedIcon }),
      content,
    ],
  });
};
const BASE_NAME = "/SM-137-Frontend";
const Container$4 = styled.div`
  max-width: 782px;
  background: var(--white);
  padding: 20px;
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
const Icon$2 = styled(SvgIcon$1)`
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
const ComplaintContent = ({ data }) => {
  const date = new Date(data.date);
  const formatTime = getFormatTime(date);
  const { isModalOpen, handleModalClose, handleModalOpen } = useModal();
  const [alertDelete, setAlertDelete] = useState(false);
  const handleConfirmDelete = () => {
    handleModalOpen();
  };
  const handleDelete = () => {
    setAlertDelete(true);
    handleModalClose();
    setTimeout(() => {
      setAlertDelete(false);
    }, 1500);
  };
  const COPIED_COMMENT = "링크가 복사되었습니다";
  const [isCopied, setIsCopied] = useState(false);
  const baseURL = window.location.origin;
  const contentURL = useLocation().pathname;
  const sharedLink = baseURL + BASE_NAME + contentURL;
  const imageLink = "https://sm-137.github.io/SM-137-Frontend/preview.png";
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
  return /* @__PURE__ */ jsxs(Container$4, {
    children: [
      /* @__PURE__ */ jsxs(Helmet, {
        children: [
          /* @__PURE__ */ jsx("meta", {
            property: "og:title",
            content: "테스트 제목",
          }),
          /* @__PURE__ */ jsx("meta", {
            property: "og:description",
            content: "테스트 컨텐츠",
          }),
          /* @__PURE__ */ jsx("meta", {
            property: "og:image",
            content: imageLink,
          }),
        ],
      }),
      /* @__PURE__ */ jsx(Modal, {
        isOpen: isModalOpen,
        handleClose: handleModalClose,
        contents: /* @__PURE__ */ jsx(DeleteComment, {
          handleClose: handleDelete,
          handleCancel: handleModalClose,
        }),
      }),
      /* @__PURE__ */ jsxs(Header, {
        children: [
          /* @__PURE__ */ jsxs(HeaderContent, {
            children: [
              /* @__PURE__ */ jsx(StatusDisplay, { type: data.status }),
              /* @__PURE__ */ jsx(CategoryContainer, {
                children: data.hashtag.map((hashtag, index) =>
                  /* @__PURE__ */ jsx(
                    CategoryTagGroup,
                    { hashtag: [hashtag] },
                    index
                  )
                ),
              }),
            ],
          }),
          /* @__PURE__ */ jsxs(InteractionContainer, {
            children: [
              /* @__PURE__ */ jsx(InteractionGroup, {
                likes: data.likes,
                bookmarks: data.bookmarks,
              }),
              isCopied &&
                /* @__PURE__ */ jsx(AlertContainer, {
                  children: /* @__PURE__ */ jsx(Alert, {
                    content: COPIED_COMMENT,
                  }),
                }),
              /* @__PURE__ */ jsx(Icon$2, {
                component: ShareIcon,
                onClick: copyToClipboard,
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ jsxs(ComplaintNumber, {
        children: [
          /* @__PURE__ */ jsx(Category, { children: data.category }),
          "민원번호 : 00910",
        ],
      }),
      /* @__PURE__ */ jsxs("div", {
        children: [
          /* @__PURE__ */ jsx(Title$1, { children: data.title }),
          /* @__PURE__ */ jsx(Article, { line: 0, children: data.content }),
        ],
      }),
      /* @__PURE__ */ jsxs(Footer, {
        children: [
          !data.answer
            ? /* @__PURE__ */ jsxs(EditDeleteButtonContainer, {
                children: [
                  /* @__PURE__ */ jsx(EditDeleteButton, { children: "수정" }),
                  /* @__PURE__ */ jsx("pre", { children: "|" }),
                  alertDelete &&
                    /* @__PURE__ */ jsx(AlertContainer, {
                      children: /* @__PURE__ */ jsx(Alert, {
                        content: "삭제되었습니다",
                      }),
                    }),
                  /* @__PURE__ */ jsx(EditDeleteButton, {
                    onClick: handleConfirmDelete,
                    children: "삭제",
                  }),
                ],
              })
            : /* @__PURE__ */ jsx(InfoComment, {
                children: "답변이 달린 이후에는 수정 및 삭제가 불가능합니다",
              }),
          /* @__PURE__ */ jsx(DateSection, { children: formatTime }),
        ],
      }),
    ],
  });
};
const mockData = [
  {
    id: 1,
    title: "저녁 수업 냉난방 가동 요청",
    hashtag: ["시설", "설비", "냉난방"],
    category: "공간",
    status: "inProgress",
    content:
      "안녕하세요, 저는 저녁 시간대에 수업을 듣고 있는 학생입니다. 최근 들어 강의실 내부가 너무 덥거나 추운 경우가 많아 학습 환경이 다소 불편한데, 저녁 수업시간에도 냉난방을 틀어주실 수 있을까요?",
    likes: 10,
    bookmarks: 0,
    date: "2025-01-06T10:15:00.000Z",
    // 1개월 이내
    answer: "",
  },
  {
    id: 2,
    title: "도서관 열람실 조용히 해주세요",
    hashtag: ["시설", "도서관", "조용한 환경"],
    category: "도서관",
    status: "rejected",
    content:
      "도서관 열람실에서 시끄러운 소음이 계속 발생하고 있어 집중이 잘 되지 않습니다. 조용한 환경을 유지할 수 있도록 조치를 부탁드립니다.",
    likes: 8,
    bookmarks: 1,
    date: "2024-12-03T09:00:00.000Z",
    // 1개월 이내
    answer: "안녕하세요, 숙명여자대학교 시설관리팀입니다.",
  },
  {
    id: 3,
    title: "수업자료 공유 요청",
    hashtag: ["수업", "자료", "도서관"],
    category: "도서관",
    status: "inProgress",
    content:
      "이번 수업에 사용된 자료를 공유해주실 수 있을까요? 수업 중에 놓친 부분이 있어서 자료가 필요합니다.",
    likes: 12,
    bookmarks: 10,
    date: "2024-12-04T17:45:00.000Z",
    // 1개월 이내
    answer: "안녕하세요, 숙명여자대학교 시설관리팀입니다.",
  },
  {
    id: 4,
    title: "엘리베이터 점검 요청",
    hashtag: ["시설", "설비", "엘리베이터"],
    category: "공간",
    status: "pending",
    content:
      "엘리베이터가 자주 멈추고 고장 나는 것 같습니다. 점검을 요청드립니다.",
    likes: 0,
    bookmarks: 5,
    date: "2024-10-05T14:30:00.000Z",
    // 3개월 이내
    answer: "",
  },
  {
    id: 5,
    title: "Wi-Fi 연결 문제",
    hashtag: ["기술", "네트워크", "Wi-Fi"],
    category: "정보통신",
    status: "rejected",
    content: "Wi-Fi 연결이 자주 끊깁니다. 연결 상태를 개선해주시길 바랍니다.",
    likes: 1,
    bookmarks: 1,
    date: "2024-10-01T13:00:00.000Z",
    // 3개월 이내
    answer: "",
  },
  {
    id: 6,
    title: "주차 공간 추가 요청",
    hashtag: ["시설", "주차", "공간 추가"],
    category: "공간",
    status: "pending",
    content:
      "캠퍼스 내 주차 공간이 부족하여 주차가 어려운 경우가 많습니다. 주차 공간을 추가로 마련해주시기 바랍니다.",
    likes: 1,
    bookmarks: 5,
    date: "2024-10-03T12:30:00.000Z",
    // 3개월 이내
    answer: "",
  },
  {
    id: 7,
    title: "수업 일정 변경 요청",
    hashtag: ["수업", "경력개발", "변경"],
    category: "학사",
    status: "completed",
    content:
      "다음 주 수업 시간이 갑자기 변경되어 불편합니다. 가능한 한 예고 없이 일정 변경을 자제해주시기 바랍니다.",
    likes: 24,
    bookmarks: 4,
    date: "2024-07-05T10:00:00.000Z",
    // 6개월 이내
    answer: "",
  },
  {
    id: 8,
    title: "카페에서 음료 제공 시간 연장",
    hashtag: ["시설", "식음료", "시간 연장"],
    category: "공간",
    status: "inProgress",
    content:
      "카페의 음료 제공 시간이 너무 일찍 종료됩니다. 더 늦게까지 음료를 제공해주시면 좋겠습니다.",
    likes: 15,
    bookmarks: 3,
    date: "2024-07-10T11:15:00.000Z",
    // 6개월 이내
    answer: "",
  },
  {
    id: 9,
    title: "교내 행사 관련 공지 요청",
    hashtag: ["행사", "공지", "알림"],
    category: "학생활동지원",
    status: "completed",
    content:
      "다음 주 예정된 교내 행사에 대한 자세한 공지가 필요합니다. 참여자들에게 사전 안내를 부탁드립니다.",
    likes: 6,
    bookmarks: 3,
    date: "2024-07-11T16:45:00.000Z",
    // 6개월 이내
    answer: "",
  },
  {
    id: 10,
    title: "학생 회관 내부 청소 요청",
    hashtag: ["시설", "청소", "학생 회관"],
    category: "공간",
    status: "pending",
    content: "학생 회관 내부가 많이 지저분합니다. 청소를 해주실 수 있나요?",
    likes: 2,
    bookmarks: 3,
    date: "2024-07-12T14:00:00.000Z",
    // 6개월 이내
    answer: "안녕하세요, 숙명여자대학교 시설관리팀입니다.",
  },
  {
    id: 11,
    title: "카페에서 음료 제공 시간 연장",
    hashtag: ["시설", "식음료", "시간 연장"],
    category: "공간",
    status: "inProgress",
    content:
      "카페의 음료 제공 시간이 너무 일찍 종료됩니다. 더 늦게까지 음료를 제공해주시면 좋겠습니다.",
    likes: 15,
    bookmarks: 3,
    date: "2024-07-10T11:15:00.000Z",
    // 6개월 이내
    answer: "",
  },
  {
    id: 12,
    title: "교내 행사 관련 공지 요청",
    hashtag: ["행사", "공지", "알림"],
    category: "학생활동지원",
    status: "completed",
    content:
      "다음 주 예정된 교내 행사에 대한 자세한 공지가 필요합니다. 참여자들에게 사전 안내를 부탁드립니다.",
    likes: 6,
    bookmarks: 3,
    date: "2024-07-11T16:45:00.000Z",
    // 6개월 이내
    answer: "",
  },
  {
    id: 13,
    title: "학생 회관 내부 청소 요청",
    hashtag: ["시설", "청소", "학생 회관"],
    category: "공간",
    status: "pending",
    content: "학생 회관 내부가 많이 지저분합니다. 청소를 해주실 수 있나요?",
    likes: 2,
    bookmarks: 3,
    date: "2024-07-12T14:00:00.000Z",
    // 6개월 이내
    answer: "안녕하세요, 숙명여자대학교 시설관리팀입니다.",
  },
];
const commentMockData = [
  {
    content:
      "냉난방 시스템을 개선해 주신다면 정말 도움이 될 것 같습니다. 학생들이 편안하게 수업을 받을 수 있는 환경이 필요해요.",
    likes: 3,
    date: "2025-01-06T23:15:00.000Z",
    // 1개월 이내
  },
  {
    content:
      "냉난방 시스템을 개선해 주신다면 정말 도움이 될 것 같습니다. 학생들이 편안하게 수업을 받을 수 있는 환경이 필요해요.",
    date: "2024-07-11T16:45:00.000Z",
    // 1개월 이내
    likes: 3,
  },
  {
    content:
      "냉난방 시스템을 개선해 주신다면 정말 도움이 될 것 같습니다. 학생들이 편안하게 수업을 받을 수 있는 환경이 필요해요.냉난방 시스템을 개선해 주신다면 정말 도움이 될 것 같습니다. 학생들이 편안하게 수업을 받을 수 있는 환경이 필요해요.",
    date: "2024-07-11T16:45:00.000Z",
    // 1개월 이내
    likes: 10,
  },
];
const CommentTitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const CommentTitle = styled.pre``;
const Icon$1 = styled(SvgIcon$1)`
  fill: ${(props) => props.fill};
  width: ${(props) => props.width};
`;
const Container$3 = styled.div`
  width: 100%;
  background-color: var(--white);
  border-radius: 4px;
  padding: 0.75rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const ContentsContainer = styled.div`
  display: flex;
  align-items: end;
  gap: 2rem;
`;
const Contents$1 = styled.div`
  color: var(--gray5-lowText);
`;
const Time = styled.pre`
  color: var(--gray4-placeholder-low);
`;
const Comment = ({ data, index }) => {
  const COMMENT_COLOR = "var(--disabled-primary)";
  const ICON_WIDTH = "20px";
  const date = new Date(data.date);
  const formatTime = getFormatTime(date);
  return /* @__PURE__ */ jsxs(Container$3, {
    children: [
      /* @__PURE__ */ jsxs(InfoContainer, {
        children: [
          /* @__PURE__ */ jsxs(CommentTitleContainer, {
            children: [
              /* @__PURE__ */ jsx(Icon$1, {
                component: CommentRoundedIcon,
                sx: { fill: COMMENT_COLOR, width: ICON_WIDTH },
              }),
              /* @__PURE__ */ jsxs(CommentTitle, { children: ["댓글", index] }),
            ],
          }),
          /* @__PURE__ */ jsx(Interaction, {
            type: "likes",
            count: data.likes,
          }),
        ],
      }),
      /* @__PURE__ */ jsxs(ContentsContainer, {
        children: [
          /* @__PURE__ */ jsx(Contents$1, { children: data.content }),
          /* @__PURE__ */ jsx(Time, { children: formatTime }),
        ],
      }),
    ],
  });
};
const Container$2 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1.5rem;
  z-index: 10;
  border-radius: 4px;
  padding: 1rem;
`;
const InputContainer$1 = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  border: 1px solid var(--gray3-border);
  border-radius: 4px;
  padding: 0.75rem 1rem;
  background-color: var(--white);
`;
const InputComment = styled.input`
  flex: 1;
  &:focus::placeholder {
    opacity: 0;
  }
  &:focus {
    outline: none;
    border: none;
  }
`;
const CommentInput = () => {
  const ICON_WIDTH = "20px";
  const FILL = "var(--disabled-primary)";
  return /* @__PURE__ */ jsxs(Container$2, {
    children: [
      /* @__PURE__ */ jsxs(InputContainer$1, {
        children: [
          /* @__PURE__ */ jsx(Icon$1, {
            component: CommentRoundedIcon,
            sx: { width: ICON_WIDTH, fill: FILL },
          }),
          /* @__PURE__ */ jsx(InputComment, {
            placeholder: "댓글을 입력해 주세요",
          }),
        ],
      }),
      /* @__PURE__ */ jsx(Button, { type: "_100x35_Primary", content: "등록" }),
    ],
  });
};
const Container$1 = styled.div`
  width: 100%;
  background-color: var(--gray2-subbtn);
  border-radius: 20px;
  padding: 0.75rem;
`;
const TitleContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;
const Title = styled.span`
  color: var(--light-primary);
`;
const Icon = styled(SvgIcon$1)`
  fill: var(--light-primary);
  width: 50px;
  height: 50px;
`;
const Contents = styled(motion.div)`
  background-color: var(--white);
  width: 100%;
  border-radius: 8px;
  padding: 2rem 1rem;
  overflow: hidden;
`;
const animationVariants = {
  start: { maxHeight: 0, opacity: 0 },
  opening: {
    maxHeight: "1000px",
    opacity: 1,
    transition: {
      type: "tween",
      maxHeight: { duration: 4, ease: "easeOut" },
      opacity: { duration: 0.7, ease: "easeOut" },
    },
  },
};
const Answer = ({ data }) => {
  return /* @__PURE__ */ jsxs(Container$1, {
    children: [
      /* @__PURE__ */ jsxs(TitleContainer, {
        children: [
          /* @__PURE__ */ jsx(Icon, { component: HowToRegRoundedIcon }),
          /* @__PURE__ */ jsx(Title, { children: "관리자 답변" }),
        ],
      }),
      /* @__PURE__ */ jsx(Contents, {
        variants: animationVariants,
        initial: "start",
        animate: "opening",
        children: data,
      }),
    ],
  });
};
const Container = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
`;
const Background = styled.div`
  width: 100%;
  background-color: var(--gray1-background);
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  flex: 1;
  padding-bottom: 9rem;
`;
const CommentContainer = styled.div`
  width: 782px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const InputBackground = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  background-color: var(--white);
  padding: 0.75rem 0;
`;
const InputContainer = styled.div`
  width: 782px;
`;
const AnswerContainer = styled.div`
  max-width: 782px;
  width: 100%;
`;
const Detail = () => {
  const MOCK_DATA = mockData[0];
  const isAnswered = MOCK_DATA.answer.length != 0;
  const COUNT = commentMockData.length;
  const TITLE_COLOR = "var(--gray6-black)";
  const ICON_WIDTH = "24px";
  const INDEX_OFFSET = 1;
  return /* @__PURE__ */ jsxs(Container, {
    children: [
      /* @__PURE__ */ jsx(ComplaintContent, { data: MOCK_DATA }),
      isAnswered &&
        /* @__PURE__ */ jsx(AnswerContainer, {
          children: /* @__PURE__ */ jsx(Answer, { data: MOCK_DATA.answer }),
        }),
      /* @__PURE__ */ jsx(Background, {
        children: /* @__PURE__ */ jsxs(CommentContainer, {
          children: [
            /* @__PURE__ */ jsxs(CommentTitleContainer, {
              children: [
                /* @__PURE__ */ jsx(Icon$1, {
                  sx: { fill: TITLE_COLOR, width: ICON_WIDTH },
                  component: CommentRoundedIcon,
                }),
                /* @__PURE__ */ jsxs(CommentTitle, {
                  children: ["댓글 ", COUNT],
                }),
              ],
            }),
            commentMockData.map((i, index) =>
              /* @__PURE__ */ jsx(
                Comment,
                { data: i, index: index + INDEX_OFFSET },
                index
              )
            ),
          ],
        }),
      }),
      /* @__PURE__ */ jsx(InputBackground, {
        children: /* @__PURE__ */ jsx(InputContainer, {
          children: /* @__PURE__ */ jsx(CommentInput, {}),
        }),
      }),
    ],
  });
};
export { Detail as default };
