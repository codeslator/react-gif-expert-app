import { createBrowserRouter, Navigate } from "react-router-dom";
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
      },
      {
        path: PATHS.HOME,
        element: <Navigate to="/" />,
      },
      {
        path: PATHS.GIFS,
        element: <h1>GifExpert ListApp</h1>,
      },
    ]
  },
]);