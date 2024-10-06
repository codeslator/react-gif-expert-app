import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function GifExpertApp() {
  return (
    <RouterProvider router={router} />
  )
}

export default GifExpertApp;