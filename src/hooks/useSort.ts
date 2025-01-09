import { useState } from "react";
import { SortType } from "../types/Type";

export const useSort = (
  setData: React.Dispatch<React.SetStateAction<any[]>>
) => {
  const [isClick, setIsClick] = useState({
    latest: true,
    scrap: false,
    likes: false,
  });

  const handleSort = (type: SortType) => {
    setIsClick(() => ({
      latest: false,
      scrap: false,
      likes: false,
      [type]: true,
    }));
    if (type === "scrap") {
      scrapSort();
      return;
    }
    if (type === "likes") {
      likeSort();
      return;
    }
    if (type === "latest") {
      latestSort();
      return;
    }
  };
  const scrapSort = () => {
    setData((prev) => {
      return [...prev].sort((a, b) => b.bookmarks - a.bookmarks);
    });
  };
  const likeSort = () => {
    setData((prev) => {
      return [...prev].sort((a, b) => b.likes - a.likes);
    });
  };
  const latestSort = () => {
    setData((prev) => {
      return [...prev].sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA;
      });
    });
  };

  return { handleSort, isClick, latestSort };
};
