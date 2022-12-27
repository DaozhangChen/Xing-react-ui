import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider} from "react-router-dom";
import router from "./router";
import "./vars/reset.scss"




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <Suspense fallback={<></>}>
      {/*// @ts-ignore*/}
    <RouterProvider router={router} />
      </Suspense>
  </React.StrictMode>,
)
