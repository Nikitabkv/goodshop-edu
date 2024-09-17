import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Header from "../widgets/Header"
import MainPage from "../pages/MainPage"
import Footer from "../widgets/Footer"
import Cart from "../pages/Cart"
import Product from "../pages/Product"
import NotFoundPage from "../pages/NotFoundPage"
import {useEffect} from "react"
import {getCartByUser} from "../pages/Cart/model/cartAsyncThunk.ts"
import {useAppDispatch} from "./store/hooks.ts"

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
    path: "*",
    element: <><Header /><NotFoundPage /><Footer/></>,
  }
])

export const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCartByUser(
      // 14: Корзина пустая
      // 15: Корзина с 6 товарами
      // 14
      15
    ))
  }, [])

  return (
    <RouterProvider router={router} />
  )
}
