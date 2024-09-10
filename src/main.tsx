import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPage from "./pages/MainPage"
import Cart from "./pages/Cart"
import {NotFoundPage} from "./pages/NotFoundPage/ui/NotFoundPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/cart",
    element: <Cart />,
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
