import {createHashRouter} from "react-router-dom";
import React from "react";
import HomePage from "./homepage/homePage";
import Introduction from "./homepage/introduction";

const router = createHashRouter([
    {
        path:'/',
        element:<HomePage/>
    },
    {
        path:'/introduction',
        element:<Introduction />,
        children:[
            {
                path:'icon',
                element:<div>icon</div>
            },
            {
                path:'dialog',
                element:<div>dialog</div>
            },
            {
                path:'layout',
                element:<div>layout</div>
            }
        ]
    }
])


export default router