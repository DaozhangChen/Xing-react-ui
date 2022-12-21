import {createBrowserRouter} from "react-router-dom";
import React from "react";
import HomePage from "./homepage/homePage";

const router = createBrowserRouter([
    {
        path:'/',
        element:<HomePage/>
    },
    {
        path:'/hello',
        element:<div>？？？</div>
    }
])


export default router