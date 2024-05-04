import React from "react";
import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/signupPage";
import CartPage from "./pages/cartPage";
import CheckOut from "./pages/checkOut";
import ProductDetaildPage from "./pages/productDetaildPage";

const { createBrowserRouter, RouterProvider } = require("react-router-dom");

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },
  { path: "/cart", element: <CartPage /> },
  { path: "/checkout", element: <CheckOut /> },
  { path: "/productdetails", element: <ProductDetaildPage /> },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
