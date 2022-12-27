import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider} from "react-router-dom";
import router from "./router";
import "./vars/reset.scss"




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      {/*// @ts-ignore*/}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
