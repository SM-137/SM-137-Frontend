import apiClient from "./apiClient";

export const getProcessedComplaints = async () => {
  try {
    const response = await apiClient.get("api/manager/list");
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("처리 민원 리스트 조회 중 에러 발생:", error);
    throw error;
  }
};

export const getComplaintDetail = async (complaintId: any)=> {
  try {
    const response = await apiClient.get(`api/manager/${complaintId}`);
    console.log(response); 
    return response.data;
  } catch (error) {
    console.error("민원 상세 조회 중 에러 발생:", error);
    throw error;
  }
};

export const registerComplaintAnswer = async (complaintId: any, data: any) => {
  try {
    const response = await apiClient.post(`api/manager/${complaintId}`, data);
    console.log(response); 
    return response.data;
  } catch (error) {
    console.error("민원 답변 등록 중 에러 발생:", error);
    throw error;
  }
};
