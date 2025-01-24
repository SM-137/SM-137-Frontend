import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import Scrap from "./pages/scrap/Scrap";
import Complaint from "./pages/my-complaint/Complaint";
import Detail from "./pages/detail/Detail";
import View from "./pages/view/View";
import MyPage from "./pages/my-page/MyPage";
import Search from "./pages/search/Search";
import AcademicInfoStep from "./pages/application-step/AcademicInfoStep";
import CategorySelectionStep from "./pages/application-step/CategorySelectionStep";
import CompletedStep from "./pages/application-step/CompletedStep";
import ComplaintsWrittingStep from "./pages/application-step/CompaintsWrittingStep";
import Login from "./pages/login/Login";
import Redirect from "./pages/login/Redirect";
import PrivateRoute from "./components/PrivateRoute";

export const router = createBrowserRouter(
  [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/auth/callback",
      element: <Redirect />,
    },
    {
      path: "/",
      element: (
        <PrivateRoute>
          <Layout />
        </PrivateRoute>
      ),
      children: [
        {
          path: "",
          element: <Home />,
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
        {
          path: "mypage/my-complaint",
          element: <Complaint />,
        },
        {
          path: "mypage/my-scrap",
          element: <Scrap />,
        },
        {
          path: "complaint-request",
          children: [
            {
              path: "1",
              element: <AcademicInfoStep />,
            },
            {
              path: "2",
              element: <CategorySelectionStep />,
            },
            {
              path: "3",
              element: <ComplaintsWrittingStep />,
            },
            {
              path: "4",
              element: <CompletedStep />,
            },
          ],
        },
      ],
    },
  ],
  { basename: "/SM-137-Frontend/" }
);
