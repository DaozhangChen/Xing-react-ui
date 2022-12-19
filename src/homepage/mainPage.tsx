import Icon from "../components/icon/icon";
import Shop from "@assets/icons/shop.svg";
import s from './mainPage.module.scss'
import Dialog from "../components/dialog/dialog";
import {useState} from "react";

const mainPage = ()=>{
    const [visible,setVisible]=useState<boolean>(false)
    const onClick=()=>{
        setVisible(!visible)
    }
    return (
        <>
            <div>Icon组件</div>
            <div>
                <Icon name='play' className={s.icon}/>
                <Icon name='menu' className={s.icon} component={Shop}/>
            </div>
            <div>Dialog组件</div>
            <div>
                <Dialog disable={visible}></Dialog>
            </div>
            <button onClick={onClick}>控制开关</button>
        </>
    )
}

export default mainPage