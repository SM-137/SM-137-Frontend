import { createContext, ReactNode, useContext, useRef, useState } from "react";

interface IsOpenProps {
  isSideNavOpen: boolean;
  isNotifyOpen: boolean;
  isMyPageOpen: boolean;
}
interface HeaderOpenProviderProps {
  children: ReactNode;
}
interface HeaderOpenContextProps {
  isOpen: IsOpenProps;
  isDark: boolean;
  refs: {
    myPageRef: React.RefObject<HTMLDivElement>;
    notifyRef: React.RefObject<HTMLDivElement>;
    sideNavRef: React.RefObject<HTMLDivElement>;
  };
  handleOpen: (menu: keyof IsOpenProps) => void;
  handleDark: () => void;
  handleLight: () => void;
  handleClose: (
    e: MouseEvent,
    ref: React.RefObject<HTMLDivElement | null>,
    key: keyof IsOpenProps
  ) => void;
}

const defaultProps = {
  isOpen: {
    isSideNavOpen: false,
    isNotifyOpen: false,
    isMyPageOpen: false,
  },
  isDark: false,
  refs: {
    myPageRef: { current: null },
    notifyRef: { current: null },
    sideNavRef: { current: null },
  },
  handleOpen: () => {},
  handleDark: () => {},
  handleLight: () => {},
  handleClose: () => {},
};

const HeaderOpenContext = createContext<HeaderOpenContextProps>(defaultProps);

const HeaderOpenProvider = ({ children }: HeaderOpenProviderProps) => {
  //색상 변경
  const [isDark, setIsDark] = useState(false);
  const handleDark = () => {
    setIsDark(true);
  };
  const handleLight = () => {
    setIsDark(false);
  };

  //네비게이터 / 말풍선 열기
  const [isOpen, setIsOpen] = useState<IsOpenProps>({
    isSideNavOpen: false,
    isNotifyOpen: false,
    isMyPageOpen: false,
  });
  const handleOpen = (menu: keyof IsOpenProps) => {
    setIsOpen((prev) => {
      const newPrev = { ...prev };
      newPrev[menu] = !newPrev[menu];
      return newPrev;
    });
  };

  //네비게이터 / 말풍선 닫기 (배경)
  const myPageRef = useRef<HTMLDivElement | null>(null);
  const notifyRef = useRef<HTMLDivElement | null>(null);
  const sideNavRef = useRef<HTMLDivElement | null>(null);

  const handleClose = (
    e: MouseEvent,
    ref: React.RefObject<HTMLDivElement | null>,
    key: keyof IsOpenProps
  ) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setIsOpen((prev) => {
        const newPrev = { ...prev };
        newPrev[key] = false;
        return newPrev;
      });
    }
  };
  const value = {
    isOpen,
    isDark,
    handleOpen,
    handleDark,
    handleLight,
    refs: {
      myPageRef,
      notifyRef,
      sideNavRef,
    },
    handleClose,
  };
  return (
    <HeaderOpenContext.Provider value={value}>
      {children}
    </HeaderOpenContext.Provider>
  );
};

export const useHeaderContext = () => useContext(HeaderOpenContext);
export default HeaderOpenProvider;
