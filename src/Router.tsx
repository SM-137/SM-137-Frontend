import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import Scrap from "./pages/scrap/Scrap";
import Complaint from "./pages/my-complaint/Complaint";
import Detail from "./pages/detail/Detail";
import View from "./pages/view/View";
import MyPage from "./pages/my-page/MyPage";
import Search from "./pages/search/Search";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "my-scrap",
        element: <Scrap />,
      },
      {
        path: "mypage/my-complaint",
        element: <Complaint />,
      },
      {
        path: "complaint-detail",
        element: <Detail />,
      },
      {
        path: "complaint-search",
        element: <Search />,
      },
      {
        path: "complaint-view",
        element: <View />,
      },
      {
        path: "mypage",
        element: <MyPage />,
      },
    ],
  },
]);
