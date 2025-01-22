import { jwtDecode } from "jwt-decode";
import apiClient from "./apiClient";

export const googleLogin = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  window.location.href = `${baseUrl}/oauth2/authorization/google`;
};
export const googleRedirect = async () => {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams);
    const token = urlParams.get("token");
    if (!token) {
      console.error("token이 없습니다");
      return;
    }
    const decodeToken = jwtDecode(token);
    console.log(decodeToken);
    return token;
  } catch (error) {
    console.error("JWT 토큰 받아오는 중 오류 발생 :", error);
    throw error;
  }
};

// //path, post 데이터에 대해 타입 정의 필요
// export const modify = async (data ) => {
//   try {
//     const response = await apiClient.patch(import.meta.env.USER_MODIFY, data);
//     return response.data;
//   } catch (error) {
//     console.error("개인정보 수정 중 에러 발생 :", error);
//     throw error;
//   }
// };

export const myPage = async () => {
  try {
    const response = await apiClient.get(`/v1/user`);
    console.log(response); // 백엔드에서 전달된 데이터 확인
    return response.data;
  } catch (error) {
    console.error("마이페이지 조회 중 에러 발생 :", error);
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
