import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Header from "../widgets/Header"
import MainPage from "../pages/MainPage"
import Footer from "../widgets/Footer"
import Cart from "../pages/Cart"
import Product from "../pages/Product"
import NotFoundPage from "../pages/NotFoundPage"
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import {LoginPage} from "../pages/LoginPage/ui/LoginPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Header /><MainPage /><Footer/></>,
  },
  {
    path: "/cart",
    element: <><Header /><Cart /><Footer/></>,
  },
  {
    path: "product/:id",
    element: <><Header /><Product /><Footer/></>,
  },
  {
    path: "/login",
    element: <><Header/><LoginPage /></>,
  },
  {
    path: "*",
    element: <><Header /><NotFoundPage /><Footer/></>,
  }
])

export const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
      <ToastContainer autoClose={10000} />
    </>
  )
}
