export interface UserInfo {
  username: string;
  phoneNum: string;
  fullName: string;
  nickname: string;
  point: number;
  status: string;
  role: string;
  sck: string | null;
}

export interface BoardItem {
  id: number;
  username: string;
  nickname: string;
  userIp: string;
  title: string;
  hit: number;
  hate: number;
  likes: number;
  replyNum: number;
  createdDt: Date;
}

export interface BoardItem2 {
  id: number;
  postType: number;
  username: string;
  nickname: string;
  userIp: string;
  title: string;
  hit: number;
  hate: number;
  likes: number;
  replyNum: number;
  createdDt: Date;
}

export interface PhotoItem {
  id: number;
  postType: number;
  username: string;
  nickname: string;
  userIp: string;
  thumbNail: string;
  title: string;
  code: string;
  hit: number;
  hate: number;
  likes: number;
  replyNum: number;
  createdDt: Date;
}

export interface BoardDetailClientProps {
  content: {
    id: number;
    username: string;
    nickname: string;
    title: string;
    content: string;
    hit: number;
    hate: number;
    likes: number;
    replyNum: number;
    createdDt: string;
  };
}

export interface Comment {
  id: number;
  content: string;
  username: string;
  nickname: string;
  deleted: boolean;
  createdDt: string;
}

export type CommentRequest = {
  boardId: string;
  username: string;
  content: string;
};

export type savePostRequest = {
  postType: number;
  notification: boolean;
  title: string;
  content: string;
  thumbNail: string | null;
};

export const colors = [
  "transparent",
  "white",
  "red",
  "yellow",
  "green",
  "blue",
  "purple",
  "gray",
  "black",
];
export const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "color",
  "image",
  "background",
  "align",
];
