import s from "./shareHeader.module.scss";
import mainLogo from "../../assets/mainLogo.png";
import Icon from "../../components/icon/icon";
import Header from "../../components/layout/header";
import React from "react";

const shareHeader=()=>{
    return <>
    <Header className={s.layoutHeader}>
        <div className={s.iconAndTitle}>
            <img src={mainLogo} className={s.mainLogo}/>
            <h2>XING UI</h2>
        </div>
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