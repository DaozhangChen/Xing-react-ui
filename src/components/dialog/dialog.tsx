import s from './dialog.module.scss'
import React, {
    MouseEventHandler,
    ReactNode
} from "react";
import {createPortal} from "react-dom";
type Prop={
    visible?:boolean
    maskOnClick?:MouseEventHandler<HTMLDivElement>
    titleText?:string
    children?:ReactNode
    cancelClick?:MouseEventHandler
    okClick?:MouseEventHandler
    cancelText?:string
    okText?:string
    customFooter?:ReactNode[]
}
const Dialog=(props:Prop)=>{
    const x = (
        <>{props.visible?
            <div className={s.xing_ui_dialog_wrapper}>
                <div className={s.xing_ui_dialog_mask} onClick={props.maskOnClick}/>
                <div className={s.xing_ui_dialog_main}>
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
    )
    return createPortal(x,document.body)
}
export default Dialog