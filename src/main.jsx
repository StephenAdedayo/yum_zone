import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from '../router.jsx'
import { store } from './redux/store/store.js'
import { Provider } from 'react-redux'



createRoot(document.getElementById('root')).render(
  <StrictMode>
     
     <Provider store={store} >
    <RouterProvider router={router} />
     </Provider>

  </StrictMode>,
)
