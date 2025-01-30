import { useEffect } from "react";
import { useBlocker } from "react-router-dom";

const CONFIRM_MESSAGE =
  "페이지를 이동하시겠습니까? 작성 내용은 저장되지 않습니다";

const usePrompt = () => {
  const blocker = useBlocker(({ currentLocation, nextLocation }) => {
    const condition =
      !nextLocation.pathname.includes("complaint-request") &&
      !currentLocation.pathname.includes("complaint-request/4");
    return condition && currentLocation.pathname !== nextLocation.pathname;
  });

  useEffect(() => {
    if (blocker.state !== "blocked") return;
    if (window.confirm(CONFIRM_MESSAGE)) {
      blocker.proceed();
    } else {
      blocker.reset();
    }
  }, [blocker.state]);
};

export default usePrompt;
