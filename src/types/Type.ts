import { categoryName } from "../utils/SubCategoryContent";

export type StatusTypeExample =
  | "inProgress"
  | "pending"
  | "rejected"
  | "completed"
  | undefined;

export interface DataType {
  id: number;
  title: string;
  status: StatusType;
  hashtag: string[];
  content: string;
  likes: number;
  bookmarks: number;
  date: string;
  answer: string;
  category: string;
}

export interface MyPageProps {
  state: string;
  name: string;
  sid: number;
  major: string;
  email: string;
}

export interface AlarmDataProps {
  type: "info" | "message";
  title: string;
  content: string;
}

export interface SortStandardProps {
  type: "latest" | "scrap" | "likes";
}
export type SortType = "latest" | "scrap" | "likes";

export type CategoryValue =
  | (typeof categoryName)[keyof typeof categoryName][number]
  | undefined;

//백엔드 연동
export interface ApplyContentProps {
  title: string;
  contentProb: string;
  contentDir: string;
  contentExpect: string;
  categoryName: string;
  tagName: string;
  attachments: File | null;
}

export interface ContentType {
  complaintId: number;
  tag: string;
  category: string;
  complaintStatus: StatusType;
  complaintTitle: string;
  contentProb: string;
  likeCount: number;
  scrapCount: number;
  createdAt: Date;
}

export interface ContentDetailProps {
  complaintId: number;
  tag: string;
  category: string;
  complaintStatus: StatusType;
  complaintTitle: string;
  contentProb: string;
  contentDir: string;
  contentExpect: string;
  answer: string | null;
  likeCount: number;
  scrapCount: number;
  createdAt: string;
  liked: boolean;
  scrapped: boolean;
  attachmentUrls: string[];
}

export type StatusType = "WAITING" | "IN_PROGRESS" | "RETURN" | "DONE";

export interface MyPageProps {
  state: string;
  name: string;
  sid: number;
  major: string;
  email: string;
}

export interface CommentType {
  commentId: number;
  userId: number;
  userEmail: string;
  content: string;
  isLiked: boolean;
  createdAt: string;
  likeCount: number;
}

export interface UserInfoType {
  department: string;
  email: string;
  name: string;
  number: string;
}

//전역 상태
export interface ComplaintForm {
  title: string;
  contentProb: string;
  contentDir: string;
  contentExpect: string;
  categoryName: string | undefined;
  tagName: string;
  attachment: File[] | null;
  setTitle: (title: string) => void;
  setContentProb: (contentProb: string) => void;
  setContentDir: (contentDir: string) => void;
  setContentExpect: (contentExpect: string) => void;
  setCategoryName: (categoryName: string | undefined) => void;
  setTagName: (tagName: string) => void;
  setAttachment: (update: (prev: File[] | null) => File[] | null) => void;
}

export interface EssentialWriteState {
  isEssentialWrite: {
    title: boolean;
    contentProb: boolean;
    contentDir: boolean;
  };
  setEssentialWrite: (formType: string) => void;
}
