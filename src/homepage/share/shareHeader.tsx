import s from "./shareHeader.module.scss";
import mainLogo from "@assets/mainLogo.png";
import Icon from "../../lib/icon/icon";
import Header from "../../lib/layout/header";
import React, {Dispatch, SetStateAction} from "react";
import {Link, useMatch} from "react-router-dom";



interface Prop{
    controlMenu?:Dispatch<SetStateAction<boolean>>
    visible?:boolean
}
const shareHeader=(props:Prop)=>{
    const onClose = ()=>{
        props.controlMenu?.(!props.visible)
    }
    const match= useMatch('/')
    const windowWidth = window.innerWidth
    console.log(match)
    return <>
    <Header className={s.layoutHeader}>
        {match ? null : <Icon name="more" className={s.menuIcon} onClick={onClose}/>}
        <Link to='/'>
        <div className={s.iconAndTitle}>
            <img src={mainLogo} className={s.mainLogo}/>
            {match && windowWidth< 700 ? <h2>XING UI</h2>:null}
        </div>
        </Link>
        <div className={s.headerRight}>
            <ul>
                <li>Vue版</li>
            </ul>
            <Icon className={s.icon} name="github" />
        </div>
    </Header>
    </>
}

export default shareHeader