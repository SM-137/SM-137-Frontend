import { CommentType, DataType } from "./types/Type";

export const mockData: DataType[] = [
  {
    title: "저녁 수업 냉난방 가동 요청",
    category: ["시설", "설비", "냉난방"],
    status: "inProgress",
    content:
      "안녕하세요, 저는 저녁 시간대에 수업을 듣고 있는 학생입니다. 최근 들어 강의실 내부가 너무 덥거나 추운 경우가 많아 학습 환경이 다소 불편한데, 저녁 수업시간에도 냉난방을 틀어주실 수 있을까요?",
    likes: 12,
    bookmarks: 0,
    date: "2024-09-20",
  },
  {
    title: "도서관 열람실 조용히 해주세요",
    category: ["시설", "도서관", "조용한 환경"],
    status: "rejected",
    content:
      "도서관 열람실에서 시끄러운 소음이 계속 발생하고 있어 집중이 잘 되지 않습니다. 조용한 환경을 유지할 수 있도록 조치를 부탁드립니다.",
    likes: 12,
    bookmarks: 1,
    date: "2024-09-20",
  },
  {
    title: "수업자료 공유 요청",
    category: ["수업", "자료", "공유"],
    status: "inProgress",
    content:
      "이번 수업에 사용된 자료를 공유해주실 수 있을까요? 수업 중에 놓친 부분이 있어서 자료가 필요합니다.",
    likes: 12,
    bookmarks: 10,
    date: "2024-09-20",
  },
  {
    title: "엘리베이터 점검 요청",
    category: ["시설", "설비", "엘리베이터"],
    status: "pending",
    content:
      "엘리베이터가 자주 멈추고 고장 나는 것 같습니다. 점검을 요청드립니다.",
    likes: 12,
    bookmarks: 5,
    date: "2024-09-20",
  },
  {
    title: "Wi-Fi 연결 문제",
    category: ["기술", "네트워크", "Wi-Fi"],
    status: "rejected",
    content: "Wi-Fi 연결이 자주 끊깁니다. 연결 상태를 개선해주시길 바랍니다.",
    likes: 12,
    bookmarks: 1,
    date: "2024-09-20",
  },
  {
    title: "주차 공간 추가 요청",
    category: ["시설", "주차", "공간 추가"],
    status: "pending",
    content:
      "캠퍼스 내 주차 공간이 부족하여 주차가 어려운 경우가 많습니다. 주차 공간을 추가로 마련해주시기 바랍니다.",
    likes: 12,
    bookmarks: 5,
    date: "2024-09-20",
  },
  {
    title: "수업 일정 변경 요청",
    category: ["수업", "일정", "변경"],
    status: "completed",
    content:
      "다음 주 수업 시간이 갑자기 변경되어 불편합니다. 가능한 한 예고 없이 일정 변경을 자제해주시기 바랍니다.",
    likes: 12,
    bookmarks: 4,
    date: "2024-09-20",
  },
  {
    title: "카페에서 음료 제공 시간 연장",
    category: ["시설", "식음료", "시간 연장"],
    status: "inProgress",
    content:
      "카페의 음료 제공 시간이 너무 일찍 종료됩니다. 더 늦게까지 음료를 제공해주시면 좋겠습니다.",
    likes: 12,
    bookmarks: 3,
    date: "2024-09-20",
  },
  {
    title: "교내 행사 관련 공지 요청",
    category: ["행사", "공지", "알림"],
    status: "completed",
    content:
      "다음 주 예정된 교내 행사에 대한 자세한 공지가 필요합니다. 참여자들에게 사전 안내를 부탁드립니다.",
    likes: 12,
    bookmarks: 3,
    date: "2024-09-20",
  },
  {
    title: "학생 회관 내부 청소 요청",
    category: ["시설", "청소", "학생 회관"],
    status: "pending",
    content: "학생 회관 내부가 많이 지저분합니다. 청소를 해주실 수 있나요?",
    likes: 12,
    bookmarks: 3,
    date: "2024-09-20",
  },
];

export const commentMockData: CommentType[] = [
  {
    content:
      "냉난방 시스템을 개선해 주신다면 정말 도움이 될 것 같습니다. 학생들이 편안하게 수업을 받을 수 있는 환경이 필요해요.",
    time: "1시간 전",
    likes: 3,
  },
  {
    content:
      "냉난방 시스템을 개선해 주신다면 정말 도움이 될 것 같습니다. 학생들이 편안하게 수업을 받을 수 있는 환경이 필요해요.",
    time: "1시간 전",
    likes: 3,
  },
];
