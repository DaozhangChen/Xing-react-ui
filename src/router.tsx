import {createHashRouter} from "react-router-dom";
import React from "react";
import HomePage from "./homepage/homePage";

const router = createHashRouter([
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