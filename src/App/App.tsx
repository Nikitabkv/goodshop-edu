import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Header from "../widgets/Header"
import MainPage from "../pages/MainPage"
import Footer from "../widgets/Footer"
import Cart from "../pages/Cart"
import Product from "../pages/Product"
import NotFoundPage from "../pages/NotFoundPage"
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from "react-toastify"
import {LoginPage} from "../pages/LoginPage/ui/LoginPage.tsx"
import CheckTokenLoader from "../features/CheckTokenLoader"

const router = createBrowserRouter([
  {
    path: "/",
    element: <CheckTokenLoader><Header /><MainPage /><Footer/></CheckTokenLoader>,
  },
  {
    path: "/cart",
    element: <CheckTokenLoader><Header /><Cart /><Footer/></CheckTokenLoader>,
  },
  {
    path: "product/:id",
    element: <CheckTokenLoader><Header /><Product /><Footer/></CheckTokenLoader>,
  },
  {
    path: "/login",
    element: <CheckTokenLoader><Header hideNav={true}/><LoginPage /></CheckTokenLoader>,
  },
  {
    path: "*",
    element: <CheckTokenLoader><Header /><NotFoundPage /><Footer/></CheckTokenLoader>,
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
