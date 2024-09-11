import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import MainPage from "./pages/MainPage"
import Cart from "./pages/Cart"
import NotFoundPage from "./pages/NotFoundPage"
import Header from "./widgets/Header"
import Footer from "./widgets/Footer"
import Product from "./pages/Product"

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
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
