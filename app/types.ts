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

export interface PartnerItem {
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
