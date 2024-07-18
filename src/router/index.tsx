import { createBrowserRouter } from "react-router-dom";
import { PATHS } from "../global";
import { AppLayout } from "../views/layouts";

export const router = createBrowserRouter([
  {
    path: PATHS.ROOT,
    element: <AppLayout />,
    children: [
      {
        path: PATHS.ROOT,
        element: <h1>GifExpertApp</h1>,
      }
    ]
  },
]);