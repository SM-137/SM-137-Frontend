import {
  AlarmDataProps,
  CommentType,
  ContentType,
  DataType,
  MyPageProps,
} from "./types/Type";

export const sampleData: ContentType[] = [
  {
    complaintId: 1,
    tag: "환경",
    category: "환경오염",
    complaintStatus: "WAITING", // StatusType에 따라 적절히 수정
    complaintTitle: "공원 쓰레기 문제",
    contentProb: "공원에 쓰레기가 너무 많아 미관을 해치고 있습니다.",
    likeCount: 23,
    scrapCount: 5,
    date: new Date("2025-01-20"),
  },
  {
    complaintId: 2,
    tag: "교통",
    category: "교통신호",
    complaintStatus: "IN_PROGRESS", // StatusType에 따라 적절히 수정
    complaintTitle: "신호등 고장",
    contentProb: "신호등이 고장나 교통사고 위험이 있습니다.",
    likeCount: 15,
    scrapCount: 2,
    date: new Date("2025-01-18"),
  },
  {
    complaintId: 3,
    tag: "건축",
    category: "불법건축물",
    complaintStatus: "DONE", // StatusType에 따라 적절히 수정
    complaintTitle: "불법 건축물 철거 요청",
    contentProb: "도로변에 불법 건축물이 있어 통행에 불편을 겪고 있습니다.",
    likeCount: 40,
    scrapCount: 10,
    date: new Date("2025-01-15"),
  },
  {
    complaintId: 4,
    tag: "위생",
    category: "음식점 위생",
    complaintStatus: "WAITING", // StatusType에 따라 적절히 수정
    complaintTitle: "음식점 내 위생 상태 불량",
    contentProb: "음식점 내 위생 상태가 심각하여 개선이 필요합니다.",
    likeCount: 18,
    scrapCount: 4,
    date: new Date("2025-01-22"),
  },
  {
    complaintId: 5,
    tag: "소음",
    category: "공사 소음",
    complaintStatus: "IN_PROGRESS", // StatusType에 따라 적절히 수정
    complaintTitle: "야간 공사 소음 문제",
    contentProb: "야간 공사 소음으로 인해 주민들이 피해를 보고 있습니다.",
    likeCount: 30,
    scrapCount: 7,
    date: new Date("2025-01-19"),
  },
];

export const mockData: DataType[] = [
  {
    id: 1,
    title: "저녁 수업 냉난방 가동 요청",
    hashtag: ["시설", "설비", "냉난방"],
    category: "공간",
    status: "IN_PROGRESS",
    content:
      "안녕하세요, 저는 저녁 시간대에 수업을 듣고 있는 학생입니다. 최근 들어 강의실 내부가 너무 덥거나 추운 경우가 많아 학습 환경이 다소 불편한데, 저녁 수업시간에도 냉난방을 틀어주실 수 있을까요?",
    likes: 10,
    bookmarks: 0,
    date: "2025-01-06T10:15:00.000Z", // 1개월 이내
    answer: "",
  },
  {
    id: 2,
    title: "도서관 열람실 조용히 해주세요",
    hashtag: ["시설", "도서관", "조용한 환경"],
    category: "도서관",
    status: "RETURN",
    content:
      "도서관 열람실에서 시끄러운 소음이 계속 발생하고 있어 집중이 잘 되지 않습니다. 조용한 환경을 유지할 수 있도록 조치를 부탁드립니다.",
    likes: 8,
    bookmarks: 1,
    date: "2024-12-03T09:00:00.000Z", // 1개월 이내
    answer: "안녕하세요, 숙명여자대학교 시설관리팀입니다.",
  },
  {
    id: 3,
    title: "수업자료 공유 요청",
    hashtag: ["수업", "자료", "도서관"],
    category: "도서관",
    status: "IN_PROGRESS",
    content:
      "이번 수업에 사용된 자료를 공유해주실 수 있을까요? 수업 중에 놓친 부분이 있어서 자료가 필요합니다.",
    likes: 12,
    bookmarks: 10,
    date: "2024-12-04T17:45:00.000Z", // 1개월 이내
    answer: "안녕하세요, 숙명여자대학교 시설관리팀입니다.",
  },
  {
    id: 4,
    title: "엘리베이터 점검 요청",
    hashtag: ["시설", "설비", "엘리베이터"],
    category: "공간",
    status: "WAITING",
    content:
      "엘리베이터가 자주 멈추고 고장 나는 것 같습니다. 점검을 요청드립니다.",
    likes: 0,
    bookmarks: 5,
    date: "2024-10-05T14:30:00.000Z", // 3개월 이내
    answer: "",
  },
  {
    id: 5,
    title: "Wi-Fi 연결 문제",
    hashtag: ["기술", "네트워크", "Wi-Fi"],
    category: "정보통신",
    status: "RETURN",
    content: "Wi-Fi 연결이 자주 끊깁니다. 연결 상태를 개선해주시길 바랍니다.",
    likes: 1,
    bookmarks: 1,
    date: "2024-10-01T13:00:00.000Z", // 3개월 이내
    answer: "",
  },
  {
    id: 6,
    title: "주차 공간 추가 요청",
    hashtag: ["시설", "주차", "공간 추가"],
    category: "공간",
    status: "WAITING",
    content:
      "캠퍼스 내 주차 공간이 부족하여 주차가 어려운 경우가 많습니다. 주차 공간을 추가로 마련해주시기 바랍니다.",
    likes: 1,
    bookmarks: 5,
    date: "2024-10-03T12:30:00.000Z", // 3개월 이내
    answer: "",
  },
  {
    id: 7,
    title: "수업 일정 변경 요청",
    hashtag: ["수업", "경력개발", "변경"],
    category: "학사",
    status: "DONE",
    content:
      "다음 주 수업 시간이 갑자기 변경되어 불편합니다. 가능한 한 예고 없이 일정 변경을 자제해주시기 바랍니다.",
    likes: 24,
    bookmarks: 4,
    date: "2024-07-05T10:00:00.000Z", // 6개월 이내
    answer: "",
  },
  {
    id: 8,
    title: "카페에서 음료 제공 시간 연장",
    hashtag: ["시설", "식음료", "시간 연장"],
    category: "공간",
    status: "IN_PROGRESS",
    content:
      "카페의 음료 제공 시간이 너무 일찍 종료됩니다. 더 늦게까지 음료를 제공해주시면 좋겠습니다.",
    likes: 15,
    bookmarks: 3,
    date: "2024-07-10T11:15:00.000Z", // 6개월 이내
    answer: "",
  },
  {
    id: 9,
    title: "교내 행사 관련 공지 요청",
    hashtag: ["행사", "공지", "알림"],
    category: "학생활동지원",
    status: "DONE",
    content:
      "다음 주 예정된 교내 행사에 대한 자세한 공지가 필요합니다. 참여자들에게 사전 안내를 부탁드립니다.",
    likes: 6,
    bookmarks: 3,
    date: "2024-07-11T16:45:00.000Z", // 6개월 이내
    answer: "",
  },
  {
    id: 10,
    title: "학생 회관 내부 청소 요청",
    hashtag: ["시설", "청소", "학생 회관"],
    category: "공간",
    status: "WAITING",
    content: "학생 회관 내부가 많이 지저분합니다. 청소를 해주실 수 있나요?",
    likes: 2,
    bookmarks: 3,
    date: "2024-07-12T14:00:00.000Z", // 6개월 이내
    answer: "안녕하세요, 숙명여자대학교 시설관리팀입니다.",
  },
  {
    id: 11,
    title: "카페에서 음료 제공 시간 연장",
    hashtag: ["시설", "식음료", "시간 연장"],
    category: "공간",
    status: "IN_PROGRESS",
    content:
      "카페의 음료 제공 시간이 너무 일찍 종료됩니다. 더 늦게까지 음료를 제공해주시면 좋겠습니다.",
    likes: 15,
    bookmarks: 3,
    date: "2024-07-10T11:15:00.000Z", // 6개월 이내
    answer: "",
  },
  {
    id: 12,
    title: "교내 행사 관련 공지 요청",
    hashtag: ["행사", "공지", "알림"],
    category: "학생활동지원",
    status: "DONE",
    content:
      "다음 주 예정된 교내 행사에 대한 자세한 공지가 필요합니다. 참여자들에게 사전 안내를 부탁드립니다.",
    likes: 6,
    bookmarks: 3,
    date: "2024-07-11T16:45:00.000Z", // 6개월 이내
    answer: "",
  },
  {
    id: 13,
    title: "학생 회관 내부 청소 요청",
    hashtag: ["시설", "청소", "학생 회관"],
    category: "공간",
    status: "WAITING",
    content: "학생 회관 내부가 많이 지저분합니다. 청소를 해주실 수 있나요?",
    likes: 2,
    bookmarks: 3,
    date: "2024-07-12T14:00:00.000Z", // 6개월 이내
    answer: "안녕하세요, 숙명여자대학교 시설관리팀입니다.",
  },
];

export const commentMockData: CommentType[] = [
  {
    content:
      "냉난방 시스템을 개선해 주신다면 정말 도움이 될 것 같습니다. 학생들이 편안하게 수업을 받을 수 있는 환경이 필요해요.",
    likes: 3,
    date: "2025-01-06T23:15:00.000Z", // 1개월 이내
  },
  {
    content:
      "냉난방 시스템을 개선해 주신다면 정말 도움이 될 것 같습니다. 학생들이 편안하게 수업을 받을 수 있는 환경이 필요해요.",
    date: "2024-07-11T16:45:00.000Z", // 1개월 이내

    likes: 3,
  },
  {
    content:
      "냉난방 시스템을 개선해 주신다면 정말 도움이 될 것 같습니다. 학생들이 편안하게 수업을 받을 수 있는 환경이 필요해요.냉난방 시스템을 개선해 주신다면 정말 도움이 될 것 같습니다. 학생들이 편안하게 수업을 받을 수 있는 환경이 필요해요.",
    date: "2024-07-11T16:45:00.000Z", // 1개월 이내
    likes: 10,
  },
];

export const myPageInfo: MyPageProps = {
  name: "홍길동",
  state: "재학생",
  sid: 2012345,
  major: "컴퓨터과학전공",
  email: "test1234@gmail.com",
};

export const alarmData: AlarmDataProps[] = [
  {
    type: "info",
    title: "'저녁 수업 냉난방 가동 요청' 민원에 답변이 달렸습니다.",
    content: "",
  },
  {
    type: "message",
    title: "저녁 수업 냉난방 가동 요청 민원에 댓글이 달렸습니다. ",
    content:
      "동의합니다... 재직자들은 저녁에 수업이 있는데 너무 더워서 집중이 안돼요 ...",
  },
  {
    type: "message",
    title: "저녁 수업 냉난방 가동 요청 민원에 댓글이 달렸습니다. ",
    content:
      "동의합니다... 재직자들은 저녁에 수업이 있는데 너무 더워서 집중이 안돼요 ...",
  },
  {
    type: "message",
    title: "저녁 수업 냉난방 가동 요청 민원에 댓글이 달렸습니다. ",
    content:
      "동의합니다... 재직자들은 저녁에 수업이 있는데 너무 더워서 집중이 안돼요 ...",
  },
  {
    type: "info",
    title: "'저녁 수업 냉난방 가동 요청' 민원에 답변이 달렸습니다.",
    content: "",
  },
];
