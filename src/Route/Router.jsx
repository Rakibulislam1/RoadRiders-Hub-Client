import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import AddProduct from "../Component/AddProduct/AddProduct";
import MyCart from "../Component/MyCart/MyCart";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import AllProduct from "../Component/AllProduct/AllProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allProduct/:brand_name",
        element: <AllProduct></AllProduct>,
        loader: () => fetch('http://localhost:5000/product')
      }
    ]
  }
  
]);


export default router;