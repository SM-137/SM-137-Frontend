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
    formData.append(
      "requestDto",
      new Blob([JSON.stringify(requestDto)], { type: "application/json" })
    );

    if (data.attachments) {
      data.attachments.forEach((file) => {
        formData.append("attachments", file);
      });
    }

    const response = await apiClient.post("api/complaints", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("민원 작성 중 에러 발생:", error);
    throw error;
  }
};

interface ModifyContentProps {
  title: string;
  contentProb: string;
  contentDir: string;
}

export const complaintModify = async (
  complaintId: number,
  data: ModifyContentProps
) => {
  try {
    const response = await apiClient.patch(
      `api/complaints/${complaintId}`,
      data
    );
    console.log(response); // 백엔드에서 전달된 데이터 확인
    return response.data;
  } catch (error) {
    console.error("민원 수정 중 에러 발생 :", error);
    throw error;
  }
};

export const addThumbUp = async (complaintId: number) => {
  try {
    const response = await apiClient.post(`api/complaints/${complaintId}/like`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("민원 좋아요 처리 중 에러 발생 :", error);
    throw error;
  }
};
export const deleteThumbUp = async (complaintId: number) => {
  try {
    const response = await apiClient.delete(
      `api/complaints/${complaintId}/like`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("민원 좋아요 삭제 처리 중 에러 발생 :", error);
    throw error;
  }
};

export const addScrap = async (complaintId: number) => {
  try {
    const response = await apiClient.post(`api/complaints/scrap`, {
      complaintId: complaintId,
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("민원 스크랩 중 에러 발생 :", error);
    throw error;
  }
};

export const deleteScrap = async (complaintId: number) => {
  try {
    const response = await apiClient.delete(`api/complaints/scrap`, {
      data: { complaintId },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("민원 스크랩 중 에러 발생 :", error);
    throw error;
  }
};

export const complaintDetail = async (complaintId: number) => {
  try {
    const response = await apiClient.get(
      `api/complaints/detail/${complaintId}`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("민원 내용 상세 조회 중 에러 발생 :", error);
    throw error;
  }
};

export const complaintSearch = async (keyword: string) => {
  try {
    const response = await apiClient.get(
      `api/complaints/search?keyword=${keyword}`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("민원 검색 에러 발생 :", error);
    throw error;
  }
};

interface categoryProps {
  categoryName: string | null | undefined;
}

export const complaintAll = async () => {
  try {
    const response = await apiClient.get(`api/complaints/all`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("전체 조회 중 에러 발생 :", error);
    throw error;
  }
};

export const complaintCategory = async (categoryOption: categoryProps) => {
  try {
    const response = await apiClient.post(
      `api/complaints/category`,
      categoryOption
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("전체 조회 중 에러 발생 (카테고리 선택) :", error);
    throw error;
  }
};

export const complaintHome = async () => {
  try {
    const response = await apiClient.get("api/complaints/all");
    return response.data;
  } catch (error) {
    console.error("홈화면 complaint 조회 중 에러 발생 :", error);
    throw error;
  }
};

export const complaintComments = async (complaintId: number) => {
  try {
    const response = await apiClient.get(
      `api/complaints/${complaintId}/comments`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("민원 댓글 조회 중 에러 발생 :", error);
    throw error;
  }
};

export const complaintCommentsWrite = async (
  complaintId: number,
  content: string
) => {
  try {
    const response = await apiClient.post(
      `api/complaints/${complaintId}/comments`,
      {
        content: content,
      }
    );
    console.log(response); // 백엔드에서 전달된 데이터 확인
    return response.data;
  } catch (error) {
    console.error("민원 댓글 작성 중 에러 발생 :", error);
    throw error;
  }
};

export const addCommentLike = async (
  complaintId: number,
  commentId: number
) => {
  try {
    const response = await apiClient.post(
      `api/complaints/${complaintId}/comments/${commentId}/like`
    );
    console.log(response); // 백엔드에서 전달된 데이터 확인
    return response.data;
  } catch (error) {
    console.error("민원 댓글 좋아요 처리 중 에러 발생 :", error);
    throw error;
  }
};

export const deleteCommentLike = async (
  complaintId: number,
  commentId: number
) => {
  try {
    const response = await apiClient.delete(
      `api/complaints/${complaintId}/comments/${commentId}/like`
    );
    console.log(response); // 백엔드에서 전달된 데이터 확인
    return response.data;
  } catch (error) {
    console.error("민원 댓글 좋아요 처리 중 에러 발생 :", error);
    throw error;
  }
};
