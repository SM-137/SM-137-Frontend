import { categoryName } from "../utils/SubCategoryContent";

export type StatusType = "inProgress" | "pending" | "rejected" | "completed";

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
export interface CommentType {
  content: string;
  //백엔드 전달 데이터 타입에 따라 필요
  time: string;
  likes: number;
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
