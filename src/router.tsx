import {createHashRouter} from "react-router-dom";
import React from "react";
import HomePage from "./homepage/homePage";
import Introduction from "./homepage/introduction";
import IconExample from "./components/icon/icon.example";
import DialogExample from "./components/dialog/dialog.example";
import LayoutExample from "./components/layout/layout.example";
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
        path:'/example',
        element:<Example />
    }
])


export default router