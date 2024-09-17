import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import {Provider} from "react-redux"
import {store} from "./App/store"
import {App} from "./App/App.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
