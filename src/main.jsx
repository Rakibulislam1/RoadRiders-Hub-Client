import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./Route/Router";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Hook/AuthProvider";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
