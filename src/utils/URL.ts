export const BASE_NAME = "/SM-137-Frontend";
export const BASE_URL = "https://sm-137.github.io/SM-137-Frontend/";

export const VIEW_URL = "/complaint-view";
export const HOME_URL = "/";
export const MYPAGE_URL = "/mypage";
export const MY_COMPLAINT_URL = "/mypage/my-complaint";
export const MY_SCRAP_URL = "/mypage/my-scrap";
export const COMPLAINT_APPLICATION_URL = "/complaint-request/1";

export const searchUrl = (keyword: string) =>
  `/complaint-search?keyword=${keyword}`;
