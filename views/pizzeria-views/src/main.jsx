import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Home from './Components/Home.jsx'
import OrderPizza from './Components/OrderPizza.jsx'
import BuildPizza from './Components/BuildPizza.jsx'
import Error from './Components/Error.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/order-pizza",
        element: <OrderPizza />
      },
      {
        path: "/build-pizza",
        element: <BuildPizza />
      }
    ],
    errorElement: <Error />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
)
