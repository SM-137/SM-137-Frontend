// import apiClient from "./apiClient";

import apiClient from "./apiClient";

// export const complaintWrite = async (data) => {
//   try {
//     const response = await apiClient.post(
//       import.meta.env.COMPLAINT_WRITE,
//       data
//     );
//     console.log(response); // 백엔드에서 전달된 데이터 확인
//     return response.data;
//   } catch (error) {
//     console.error("민원 작성 중 에러 발생 :", error);
//     throw error;
//   }
// };

// export const complaintModify = async (complaintId, data) => {
//   try {
//     const response = await apiClient.put(
//       import.meta.env.MODIFY_COMPLAINT + complaintId,
//       data
//     );
//     console.log(response); // 백엔드에서 전달된 데이터 확인
//     return response.data;
//   } catch (error) {
//     console.error("민원 수정 중 에러 발생 :", error);
//     throw error;
//   }
// };

// export const complaintLike = async (complaintId, data) => {
//   try {
//     const response = await apiClient.post(
//       `complaints/${complaintId}/like`,
//       data
//     );
//     console.log(response); // 백엔드에서 전달된 데이터 확인
//     return response.data;
//   } catch (error) {
//     console.error("민원 좋아요 처리 중 에러 발생 :", error);
//     throw error;
//   }
// };
// export const complaintComments = async (complaintId) => {
//   try {
//     const response = await apiClient.get(`complaints/${complaintId}/comments`);
//     console.log(response); // 백엔드에서 전달된 데이터 확인
//     return response.data;
//   } catch (error) {
//     console.error("민원 댓글 조회 중 에러 발생 :", error);
//     throw error;
//   }
// };
// export const complaintCommentsWrite = async (complaintId, data) => {
//   try {
//     const response = await apiClient.post(
//       `complaints/${complaintId}/comments`,
//       data
//     );
//     console.log(response); // 백엔드에서 전달된 데이터 확인
//     return response.data;
//   } catch (error) {
//     console.error("민원 댓글 작성 중 에러 발생 :", error);
//     throw error;
//   }
// };
// export const complaintCommentsLike = async (complaintId, data) => {
//   try {
//     const response = await apiClient.post(
//       `complaints/${complaintId}/like`,
//       data
//     );
//     console.log(response); // 백엔드에서 전달된 데이터 확인
//     return response.data;
//   } catch (error) {
//     console.error("민원 댓글 좋아요 처리 중 에러 발생 :", error);
//     throw error;
//   }
// };
// export const complaintScrap = async (complaintId, data) => {
//   try {
//     const response = await apiClient.post(`complaints/scrap`, data);
//     console.log(response); // 백엔드에서 전달된 데이터 확인
//     return response.data;
//   } catch (error) {
//     console.error("민원 스크랩 중 에러 발생 :", error);
//     throw error;
//   }
// };

// export const complaintDetail = async (complaintId) => {
//   try {
//     const response = await apiClient.get(`complaint/detail`, {
//       params: { complaintId }, // 쿼리 파라미터로 complaintId 전달...?
//     });
//     console.log(response); // 백엔드에서 전달된 데이터 확인
//     return response.data;
//   } catch (error) {
//     console.error("민원 내용 상세 조회 중 에러 발생 :", error);
//     throw error;
//   }
// };

// //keyword 부분 상의 필요
// export const complaintSearch = async (data) => {
//   try {
//     const response = await apiClient.get(`complaints/search?keyword=””`, data);
//     console.log(response); // 백엔드에서 전달된 데이터 확인
//     return response.data;
//   } catch (error) {
//     console.error("민원 검색 에러 발생 :", error);
//     throw error;
//   }
// };

interface categoryProps {
  categoryName: string | null | undefined;
}
export const complaintAll = async (categoryOption: categoryProps) => {
  try {
    const response = await apiClient.post(
      `api/complaints/category`,
      categoryOption
    );
    console.log(response); // 백엔드에서 전달된 데이터 확인
    return response.data;
  } catch (error) {
    console.error("전체 조회 중 에러 발생 :", error);
    throw error;
  }
};
