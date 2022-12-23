import Icon from "../components/icon/icon";
import s from "../components/dialog/dialog.example.module.scss";
import {dialog, Dialog} from "../components/dialog/dialog";
import {useState} from "react";
// import mySvg from "svg的路径"

`const myComponent=()=>{
    const addInfo=()=>{
        dialog.info({
            titleText:'一个info',
            okText:'OK',
            cancelText:'Cancel',
            okClick:()=>{console.log('info OK')},
            cancelClick:()=>{console.log('info Cancel')},
            maskOnClick:()=>{console.log('info mask')},
            onClose:()=>{console.log('info closed')},
            children:<>
                <div>111</div>
                <div>222</div>
            </>
        })
    }
    const addAlert=()=>{
        dialog.alert({
            titleText:'Alert',
            message:'这是一个警告',
            onClose:()=>{console.log('alert Closed')},
            maskOnClick:()=>{console.log('alert mask')}
        })
    }
    return <>
        <button onClick={addInfo} >info</button>
        <button onClick={addAlert} >alert</button>
    </>
}`
export default myComponent