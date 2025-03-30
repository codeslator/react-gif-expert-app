import { createBrowserRouter, Navigate } from "react-router-dom";
import { PATHS, ROUTES } from "../global";
import { AppLayout } from "../views/layouts";
import { GifListPage, HomePage } from "../views";

export const router = createBrowserRouter([
  {
    path: PATHS.ROOT,
    element: <AppLayout />,
    children: [
      {
        path: PATHS.ROOT,
        element: <HomePage />,
      },
      {
        path: PATHS.HOME,
        element: <Navigate to={ROUTES.ROOT} />,
      },
      {
        path: PATHS.GIFS,
        element: <GifListPage />,
      },
    ]
  },
]);