export type StatusType = "inProgress" | "pending" | "rejected" | "completed";

export interface DataType {
  id: number;
  title: string;
  status: StatusType;
  category: string[];
  content: string;
  likes: number;
  bookmarks: number;
  date: string;
  answer: string;
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
