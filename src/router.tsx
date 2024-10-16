import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/MainLayout";

const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <h1>genshin impact</h1>,
      },
      {
        path: "/starrail",
        element: <h1>star rail</h1>,
      },
      {
        path: "/zzz",
        element: <h1>zen less zero</h1>,
      },
    ],
  },
]);

export default router;
