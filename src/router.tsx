import { createBrowserRouter, redirect } from "react-router-dom";
import MainLayout from "@/components/MainLayout";
import GenshinGachaInsight from "@/components/GenshinGachaInsight";
import HonkaiStarRailGachaInsight from "./components/HonkaiStarRailGachaInsight";
import ZenLessZeroGachaInsight from "./components/ZenLessZeroGachaInsight";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "genshinimpact",
        element: <GenshinGachaInsight />,
      },
      {
        path: "honkaistarrail",
        element: <HonkaiStarRailGachaInsight />,
      },
      {
        path: "zzz",
        element: <ZenLessZeroGachaInsight />,
      },
    ],
  },
]);

export default router;
