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
    path: "*",
    element: <NotFoundPage />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
