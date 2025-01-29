import axios from "axios";

export const getHashtags = async (contentInput: string) => {
  console.log(contentInput);
  try {
    const response = await axios.post(
      "https://hashtagrecommendation-5i7jnunela-uc.a.run.app",
      {
        content: contentInput,
      }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("에러 발생:", error);
  }
};
