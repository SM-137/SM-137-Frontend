import { jwtDecode } from "jwt-decode";

export const getJwtTokenFromCookie = () => {
  const cookies = document.cookie.split("; ");
  const jwtCookie = cookies.find((cookie) => cookie.startsWith("jwtToken="));
  if (!jwtCookie) {
    console.error("JWT 토큰이 쿠키에 없습니다.");
    return;
  }
  const value = decodeURIComponent(jwtCookie.split("=")[1]);
  return value;
};

export const getEmailDomain = () => {
  const token = getJwtTokenFromCookie();
  const decodeToken = jwtDecode(token as string);
  let emailDomain;
  if (decodeToken.sub && typeof decodeToken.sub === "string") {
    emailDomain = decodeToken.sub.split("@")[1];
  }
  return emailDomain;
};

export const handleValidDomain = () => {
  const emailDomain = getEmailDomain();
  if (emailDomain !== "sookmyung.ac.kr") {
    return false;
  }
  return true;
};

export const deleteJWTToken = () => {
  const cookies = document.cookie.split(";");
  cookies.forEach((cookie) => {
    const cookieName = cookie.trim().split("=")[0];
    if (cookieName === "jwtToken") {
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    }
  });
};
