import { ApplyContentProps } from "../types/Type";
import apiClient from "./apiClient";

export const complaintWrite = async (data: ApplyContentProps) => {
  try {
    const formData = new FormData();
    const requestDto = {
      title: data.title,
      contentProb: data.contentProb,
      contentDir: data.contentDir,
      contentExpect: data.contentExpect,
      categoryName: data.categoryName,
      tagName: data.tagName,
    };
    formData.append("requestDto", JSON.stringify(requestDto));
    if (data.attachments) {
      formData.append("attachments", data.attachments);
    }

    console.log("FormData 확인:");
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    const response = await apiClient.post("api/complaints", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response); // 백엔드에서 전달된 데이터 확인
    return response.data;
  } catch (error) {
    console.error("민원 작성 중 에러 발생 :", error);
    throw error;
  }
};

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

export const complaintSearch = async (keyword: string) => {
  try {
    const response = await apiClient.get(
      `complaints/search?keyword=${keyword}`
    );
    console.log(response); // 백엔드에서 전달된 데이터 확인
    return response.data;
  } catch (error) {
    console.error("민원 검색 에러 발생 :", error);
    throw error;
  }
};

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
