import apiClient from "./apiClient";

//path, post 데이터에 대해 타입 정의 필요
export const modify = async (data) => {
  try {
    const response = await apiClient.patch(import.meta.env.USER_MODIFY, data);
    return response.data;
  } catch (error) {
    console.error("개인정보 수정 중 에러 발생 :", error);
    throw error;
  }
};

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
