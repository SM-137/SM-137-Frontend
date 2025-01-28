import apiClient, { updateApiClientToken } from "./apiClient";

export const googleLogin = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  window.location.href = `${baseUrl}/oauth2/authorization/google`;
};
export const googleRedirect = async () => {
  try {
    const cookie = document.cookie;
    if (!cookie) {
      console.error("쿠키가 없습니다.");
    }

    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    updateApiClientToken(token);

    if (!token) {
      console.error("token이 없습니다");
      return;
    }

    const isLocalhost = window.location.hostname === "localhost";
    // 로컬
    let cookieString = `jwtToken=${token}; path=/; max-age=3600; SameSite=Lax`;
    // 배포
    if (!isLocalhost) {
      cookieString += "; Secure";
    }
    document.cookie = cookieString;

    return token;
  } catch (error) {
    console.error("JWT 토큰 받아오는 중 오류 발생 :", error);
    throw error;
  }
};

export const googleLogout = async () => {
  try {
    const response = await apiClient.post("api/google/logout");
    return response.data;
  } catch (error) {
    console.error("로그아웃 중 에러 발생", error);
  }
};

// export const modify = async ( ) => {
//   try {
//     const response = await apiClient.patch("/api/user/modify", data);
//     return response.data;
//   } catch (error) {
//     console.error("개인정보 수정 중 에러 발생 :", error);
//     throw error;
//   }
// };

export const userInfo = async () => {
  try {
    const response = await apiClient.get(`api/user`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("사용자 정보 조회 중 에러 발생 :", error);
    throw error;
  }
};

export const myComplaint = async () => {
  try {
    const response = await apiClient.get(`/v1/user/complaint`);
    console.log(response); // 백엔드에서 전달된 데이터 확인
    return response.data;
  } catch (error) {
    console.error("개인정보 수정 중 에러 발생 :", error);
    throw error;
  }
};

export const Result = async () => {
  try {
    const response = await apiClient.get(`/v1/user/result`);
    console.log(response); // 백엔드에서 전달된 데이터 확인
    return response.data;
  } catch (error) {
    console.error("결과 조회 중 에러 발생 :", error);
    throw error;
  }
};

export const myScrap = async () => {
  try {
    const response = await apiClient.get(`/v1/user/scrap`);
    console.log(response); // 백엔드에서 전달된 데이터 확인
    return response.data;
  } catch (error) {
    console.error("스크랩한 민원 로딩 중 에러 발생 :", error);
    throw error;
  }
};
