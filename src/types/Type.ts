export type StatusType = "inProgress" | "pending" | "rejected" | "completed";

export interface DataType {
  title: string;
  status: StatusType;
  category: string[];
  content: string;
  likes: number;
  bookmarks: number;
  date: string;
}

export interface MyPageProps {
  state: string;
  name: string;
  sid: number;
  major: string;
  email: string;
}
