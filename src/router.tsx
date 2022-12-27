import {createHashRouter,  redirect,  RouterProviderProps} from "react-router-dom";
import React, {lazy} from "react";
// import HomePage from "./homepage/homePage";
// import Introduction from "./homepage/introduction";
// import IconExample from "./components/examples/icon.example";
// import DialogExample from "./components/examples/dialog.example";
// import LayoutExample from "./components/examples/layout.example";
import Example from "./homepage/example";
// import Usage from "./components/commons/usage";

const HomePage = React.lazy(()=>import("./homepage/homePage"))
const Introduction = React.lazy(()=>import("./homepage/introduction"))
const IconExample = React.lazy(()=>import("./components/examples/icon.example"))
const DialogExample = React.lazy(()=>import("./components/examples/dialog.example"))
const LayoutExample = React.lazy(()=>import("./components/examples/layout.example"))
const Usage = React.lazy(()=>import("./components/commons/usage"))

// @ts-ignore
const router:RouterProviderProps = createHashRouter([
    {
        path:'/',
        element:<HomePage />
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
                element:<Usage/>
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