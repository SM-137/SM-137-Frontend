import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import Scrap from "./pages/scrap/Scrap";

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
        path: "mypage/my-scrap",
        element: <Scrap />,
      },
    ],
  },
]);
