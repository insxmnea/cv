import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createHashRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./components/HomePage";

const router = createHashRouter([
  {
    path: "/*",
    element: <Navigate to={"/home"} />,
  },
  {
    path: "home",
    element: <HomePage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <HomePage />
  </React.StrictMode>
);

reportWebVitals();
