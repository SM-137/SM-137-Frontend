import styled from "@emotion/styled";
import { SvgIcon, SvgIconProps } from "@mui/material";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import { alarmData } from "../../mockData";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import TextsmsRoundedIcon from "@mui/icons-material/TextsmsRounded";

interface ContentProps {
  color: string;
}
const Container = styled.div`
  width: 100%;
  background-color: var(--white);
  border-radius: 8px;
  padding: 1.5rem 3rem;
  display: flex;
  gap: 3rem;
  overflow: hidden;
`;
const AlarmContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  width: 100%;
`;
const Alarm = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: start;
  border-bottom: 1px solid var(--gray3-border);
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;
`;
const BellIcon = styled(SvgIcon)<SvgIconProps>`
  width: 35px;
  height: 35px;
  fill: var(--light-primary);
`;
const Icon = styled(SvgIcon)<SvgIconProps>`
  width: 20px;
  height: 20px;
`;
const Title = styled.div<ContentProps>`
  color: ${(props) => props.color};
`;
const Content = styled.div`
  color: var(--gray4-placeholder-low);
`;
const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const MyPageAlarm = () => {
  const style = {
    info: {
      icon: InfoRoundedIcon,
      fill: "var(--light-primary)",
      color: "var(--light-primary)",
    },
    message: {
      icon: TextsmsRoundedIcon,
      fill: "var(--gray5-lowText)",
      color: "var(--gray5-lowText)",
    },
  };
  return (
    <Container>
      <BellIcon component={NotificationsNoneRoundedIcon} />

      <AlarmContentContainer>
        {alarmData.map((i, index) => (
          <Alarm key={index}>
            <Icon
              component={style[i.type].icon}
              sx={{ fill: style[i.type].fill }}
            />
            <TitleContent>
              <Title color={style[i.type].color}>{i.title}</Title>
              {i.content && <Content>{i.content}</Content>}
            </TitleContent>
          </Alarm>
        ))}
      </AlarmContentContainer>
    </Container>
  );
};

export default MyPageAlarm;
