import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage.jsx";
import Careers from "./Careers.jsx";
import BrandGuardian from "./BrandGuardian.jsx";
import CXO from "./CXO.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tomus",
    element: <ErrorPage />,
  },
  {
    path: "/openings/",
    element: <Careers />,
    children: [
      {
        path: "/openings/brandguardian",
        element: <BrandGuardian />,
      },
      {
        path: "/openings/cxo",
        element: <CXO />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
