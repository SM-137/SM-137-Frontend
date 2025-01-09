import { Outlet, useLocation } from "react-router-dom";
import styled from "@emotion/styled";

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

const AdminLayout = () => {
    const path = useLocation().pathname;
  
    // 홈과 민원세부페이지에만 배경색 적용
    const shouldApplyBackground = ["/admin/admhome", "/admin/detail"].includes(path);
    const backgroundColor = shouldApplyBackground ? "var(--primary)" : "none";
  
    return (
      <Wrap>
        <ColoredLayout bgc={backgroundColor}>
          <OutletLayout>
            <Outlet />
          </OutletLayout>
        </ColoredLayout>
      </Wrap>
    );
  };

export default AdminLayout;
