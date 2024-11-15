import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

const router = createBrowserRouter(routes);

createRoot(document.createElement("div")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
