import React from "react";
import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/signupPage";

const { createBrowserRouter, RouterProvider } = require("react-router-dom");

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
