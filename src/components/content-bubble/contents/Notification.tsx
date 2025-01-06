import styled from "@emotion/styled";
import InfoMessage from "../../info-message/InfoMessage";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { alarmData } from "../../../mockData";
import { useNavigate } from "react-router-dom";
import { MYPAGE_URL } from "../../../utils/URL";

const NotificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 1rem;
`;
const InfoMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const ViewMoreButton = styled.button`
  display: flex;
  justify-content: right;
  align-items: center;
  &:hover {
    color: var(--light-primary);
  }
`;
const ViewMoreIcon = styled(SvgIcon)<SvgIconProps>`
  width: 12px;
  height: 12px;
`;
const ViewMoreText = styled.p``;

const Notification = () => {
  //임시 데이터
  const data = alarmData.slice(0, 3);
  const navigate = useNavigate();
  return (
    <NotificationContainer>
      <InfoMessageContainer>
        {data.map((content, index) => (
          <InfoMessage
            key={index}
            sizeType="small"
            messageType={content.type}
            content={content.title}
          />
        ))}
      </InfoMessageContainer>
      {/*더보기 버튼*/}
      <ViewMoreButton>
        <ViewMoreIcon component={AddRoundedIcon} />
        <ViewMoreText onClick={() => navigate(MYPAGE_URL)}>더보기</ViewMoreText>
      </ViewMoreButton>
    </NotificationContainer>
  );
};

export default Notification;
