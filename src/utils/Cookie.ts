export const getJwtTokenFromCookie = () => {
  const cookies = document.cookie.split("; ");
  const jwtCookie = cookies.find((cookie) => cookie.startsWith("jwtToken="));
  if (!jwtCookie) {
    console.error("JWT 토큰이 쿠키에 없습니다.");
    return null;
  }
  const value = jwtCookie.split("=")[1];
  return value;
};
