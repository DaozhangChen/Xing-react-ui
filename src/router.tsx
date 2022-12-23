import {createHashRouter} from "react-router-dom";
import React from "react";
import HomePage from "./homepage/homePage";
import Introduction from "./homepage/introduction";
import IconExample from "./components/examples/icon.example";
import DialogExample from "./components/examples/dialog.example";
import LayoutExample from "./components/examples/layout.example";
import Example from "./homepage/example";

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
                element:<IconExample />
            },
            {
                path:'dialog',
                element:<DialogExample />
            },
            {
                path:'layout',
                element:<LayoutExample />
            }
        ]
    },
    {
        path:'/examples',
        element:<Example />
    }
])


export default router