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

    document.cookie = `jwtToken=${token}; path=/; max-age=3600; secure; SameSite=Lax`;

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

//수정한 부분
//타입 파일에서 ModifyData
//import { ModifyData } from "../types/Type";

//axios는 API 요청을 보내는 함수.
//data는 수정할 정보를 담고 있음.
export const modify = async (data: ModifyData) => {
  try {
    //patch에서 볼 수 있듯이 부분 업데이트임. 서버의 /user엔드포엔트에 요청을 보낸다.
    //data: 업데이트할 데이터를 요청의 본문(body)에 포함. -> 데이터 보내는 거임
    //타입은 type.ts에 정의함.
    const response = await apiClient.patch("/v1/user/modify", data);
    //서버로부터 응답 받은 데이터 반환
    return response.data;
  } catch (error) {
    console.error("개인정보 수정 중 에러 발생:", error);
    throw error;
  }
};

export interface ModifyData {
  number: string;
  department: string;
}

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
