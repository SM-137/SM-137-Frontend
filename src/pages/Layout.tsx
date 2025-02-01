import { Outlet, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import HeaderProvider from "../components/header/HeaderProvider";
import { useEffect } from "react";
import useComplaintStore from "../store/useComplaintStore";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const OutletLayout = styled.div`
  width: 80%;
  max-width: 1116px;
  padding-bottom: 3rem;
`;
const ColoredLayout = styled.div<{ bgc: string }>`
  width: 100%;
  height: 466px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.bgc};
`;

const Layout = () => {
  const path = useLocation().pathname;
  const backgroundColor = path === "/" ? "var(--primary)" : "none";

  const {
    setTitle,
    setContentDir,
    setContentProb,
    setContentExpect,
    setCategoryName,
    setAttachments,
  } = useComplaintStore((state) => state);

  useEffect(() => {
    if (!path.includes("complaint-request")) {
      sessionStorage.removeItem("category");
      sessionStorage.removeItem("title");
      sessionStorage.removeItem("contentProb");
      sessionStorage.removeItem("contentDir");
      sessionStorage.removeItem("contentExpect");
      sessionStorage.removeItem("files");
      sessionStorage.removeItem("isChecked");
      setTitle("");
      setContentDir("");
      setContentProb("");
      setContentExpect("");
      setAttachments(() => []);
      setCategoryName("");
    }
  }, [path]);

  //document.title 설정
  useEffect(() => {
    if (!path.includes("complaint-detail")) {
      document.title = "숙명137";
    }
  }, [path]);

  return (
    <Wrap>
      <ColoredLayout bgc={backgroundColor}>
        <HeaderProvider />
        <OutletLayout>
          <Outlet />
        </OutletLayout>
      </ColoredLayout>
    </Wrap>
  );
};

export default Layout;
