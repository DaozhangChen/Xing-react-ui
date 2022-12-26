import {createHashRouter, HashRouterProps, redirect} from "react-router-dom";
import React from "react";
import HomePage from "./homepage/homePage";
import Introduction from "./homepage/introduction";
import IconExample from "./components/examples/icon.example";
import DialogExample from "./components/examples/dialog.example";
import LayoutExample from "./components/examples/layout.example";
import Example from "./homepage/example";
import Usage from "./components/commons/usage";

const router:HashRouterProps = createHashRouter([
    {
        path:'/',
        element:<HomePage/>
    },
    {
        path:'/introduction',
        element:<Introduction />,
        children:[
            {
                path:'',
                loader:()=>{return redirect("/introduction/usage")}
            },
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
            },
            {
                path:'usage',
                element:<Usage />
            },
            {
                path:'*',
                loader:()=>{return redirect("/introduction/usage")}
            }
        ]
    },
    {
        path:'/examples',
        element:<Example />
    }
])


export default router