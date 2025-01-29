import { CommentType, ContentDetailProps } from "./types/Type";

export const defaultComplaintData: ContentDetailProps = {
  complaintId: 0,
  tag: "",
  category: "",
  complaintStatus: "WAITING",
  complaintTitle: "",
  contentProb: "",
  contentDir: "",
  contentExpect: "",
  answer: null,
  likeCount: 0,
  scrapCount: 0,
  createdAt: "",
  liked: false,
  scrapped: false,
  attachmentUrls: [],
};

export const defaultCommentData: CommentType[] = [
  {
    commentId: 0,
    userId: 0,
    userEmail: "",
    content: "",
    isLiked: false,
    createdAt: "",
    likeCount: 0,
  },
];
