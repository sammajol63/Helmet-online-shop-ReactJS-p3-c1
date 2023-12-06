import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import BaseLayout from "../layouts/BaseLayout";
import Content from "../components/Content";
import Detail from "../components/Detail";
const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/catalog",
        element: <Content />,
      },
      {
        path: "/:slug",
        element: <Detail />,
      },
    ],
  },
]);

export default router;
