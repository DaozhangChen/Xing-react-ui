import s from './dialog.module.scss'
import React, {
    MouseEventHandler,
    ReactNode
} from "react";
import {createPortal} from "react-dom";
import Icon from "../icon/icon";
import ReactDOM from "react-dom/client";
interface Prop{
    visible:boolean
    maskOnClick?:MouseEventHandler
    titleText?:string
    children?:ReactNode
    cancelClick?:MouseEventHandler
    okClick?:MouseEventHandler
    cancelText?:string
    okText?:string
    customFooter?:ReactNode[]
    onClose?:MouseEventHandler
}
interface infoProp{
    titleText?:string
    onClose?:()=>void
    cancelClick?:()=>void
    okClick?:()=>void
    cancelText?:string
    okText?:string
    children?:ReactNode
    maskOnClick?:()=>void
}
interface alertProp{
    titleText?:string,
    message?:string
    onClose?:()=>void
    maskOnClick?:()=>void

}


const Dialog=(props:Prop)=>{
    return createPortal((
        <>{props.visible?
            <div className={s.xing_ui_dialog_wrapper}>
                <div className={s.xing_ui_dialog_mask} onClick={props.maskOnClick}/>
                <div className={s.xing_ui_dialog_main}>
                    <Icon name='close' className={s.xing_ui_dialog_icon} onClick={props.onClose}/>
                    <header className={s.xing_ui_dialog_title}>{props.titleText?props.titleText:'提醒'}</header>
                    {props.children}
                    <footer className={props.customFooter? undefined :s.xing_ui_dialog_button}>{
                        props.customFooter?props.customFooter.map((node:ReactNode)=> node)
                            :
                            <>
                                <button className={s.xing_ui_dialog_button_cancel} onClick={props.cancelClick}>{props.cancelText?props.cancelText:'取消'}</button>
                                <button className={s.xing_ui_dialog_button_ok} onClick={props.okClick}>{props.okText?props.okText:'确认'}</button>
                            </>
                    }
                    </footer>
                </div>
            </div>
            :
            null
        }
        </>
    ),document.body)
}

const dialog={
    info:(arg:infoProp)=>{
        const container=<Dialog visible={true}
                                titleText={arg.titleText}
                                onClose={()=>{arg.onClose?.();reactDiv.unmount()}}
                                okClick={()=>{arg.okClick?.();reactDiv.unmount()}}
                                cancelClick={()=>{arg.cancelClick?.();reactDiv.unmount()}}
                                okText={arg.okText}
                                cancelText={arg.cancelText}
                                maskOnClick={()=>{arg.maskOnClick?.();reactDiv.unmount()}}
        >
            {arg.children}
        </Dialog>
        const div = document.createElement('div')
        const reactDiv = ReactDOM.createRoot(div)
        reactDiv.render(container)
    },
    alert:(arg:alertProp)=>{
        const container=<Dialog visible={true}
                                children={<>{arg.message}</>}
                                customFooter={[]}
                                onClose={()=>{arg.onClose?.();reactDiv.unmount()}}
                                maskOnClick={()=>{arg.maskOnClick?.();reactDiv.unmount()}}
        />
        const div = document.createElement('div')
        const reactDiv = ReactDOM.createRoot(div)
        reactDiv.render(container)
    }
}
export {Dialog,dialog}