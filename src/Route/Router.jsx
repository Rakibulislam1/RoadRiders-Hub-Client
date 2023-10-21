import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import AddProduct from "../Component/AddProduct/AddProduct";
import MyCart from "../Component/MyCart/MyCart";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import AllProduct from "../Component/AllProduct/AllProduct";
import UpdateProducts from "../Component/UpdateProducts/UpdateProducts";
import Error from "../Component/Error/Error";
import ProductDetails from "../Component/ProductDetails/ProductDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <AllProduct></AllProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch("https://automotive-i0oyj7dpn-rakibulislam1.vercel.app/allProduct/" + params.brand_name),
      },
      {
        path: "/updateProduct/:id",
        element: (
          <PrivateRoute>
            <UpdateProducts></UpdateProducts>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://automotive-i0oyj7dpn-rakibulislam1.vercel.app/product/${params.id}`),
      },
      {
        path: "/productDetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://automotive-i0oyj7dpn-rakibulislam1.vercel.app/product/${params.id}`),
      },
    ],
  },
]);

export default router;
