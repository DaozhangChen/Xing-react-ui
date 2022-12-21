import s from './introduction.module.scss'
import Layout from "../components/layout/layout";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Aside from "../components/layout/aside";
import Content from "../components/layout/content";
import mainLogo from "../assets/mainLogo.png";
import Icon from "../components/icon/icon";
import React from "react";
const introduction =()=>{
    return (
        <>
            <Layout>
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
                <Layout>
                    <Aside>Aside</Aside>
                    <Content>Content</Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        </>
    )
}

export default introduction