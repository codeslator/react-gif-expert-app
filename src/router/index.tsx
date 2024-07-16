import { createBrowserRouter } from "react-router-dom";
import { PATHS } from "../global";
import { MainLayout } from "../views/layouts";

export const router = createBrowserRouter([
  {
    path: PATHS.ROOT,
    element: <MainLayout />,
    children: [
      {
        path: PATHS.ROOT,
        element: <h1>GifExpertApp</h1>,
      }
    ]
  },
]);