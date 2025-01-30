// 빈 칸인 경우 세선스토리지 비우기
export const removeBlankContent = (
  e:
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement>,
  formType: string
) => {
  if (e.target.value.length === 0) {
    sessionStorage.removeItem(`${formType}`);
  }
};
