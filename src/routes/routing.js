import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/Home";
import OurDiary from "../pages/OurDiary";

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
        path: "ourdiary",
        element: <OurDiary />,
      },
    ],
  },
]);

export default router;
