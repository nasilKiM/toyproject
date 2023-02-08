import DetailPage from "pages/Detail";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: ":nick_name",
        element: <DetailPage />,
      },
    ],
  },
]);

export default router;
