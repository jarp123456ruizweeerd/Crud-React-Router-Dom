import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout'
import Index, {loader as loaderPersonas} from './Pages/Index'
import Registro, {action as  actionPersona} from './Pages/Registro'
import ErrorPage from './Components/ErrorPage'
import { EditarPersona, loader as ediatarPersonaLoader, action as actualizarPersonaAction } from './Components/EditarPersona'
const router = createBrowserRouter([
  { 
    path : '/',
    element : <Layout/>,
    children:[
      {
        index : true,
        element: <Index/>,
        loader: loaderPersonas,
        errorElement : <ErrorPage/>
      },
      {
        path : '/filavirtual/registro',
        element : <Registro/>,
        action : actionPersona
      },
      {
        path : '/filavirtual/:personaid/editar',
        element : <EditarPersona/>,
        loader : ediatarPersonaLoader,
        action : actualizarPersonaAction,
        errorElement: <ErrorPage/> 
      }
    ]
  }])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
