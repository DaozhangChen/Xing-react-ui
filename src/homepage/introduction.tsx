import s from './introduction.module.scss'
import Layout from "../components/layout/layout";
import Footer from "../components/layout/footer";
import Aside from "../components/layout/aside";
import Content from "../components/layout/content";
import React from "react";
import ShareHeader from "./share/shareHeader";
import {Link, Outlet, Route, Routes} from "react-router-dom";
const introduction =()=>{
    return (
        <>
            <Layout>
                <ShareHeader />
                <Layout className={s.mainLayout}>
                    <Aside className={s.mainAside}>
                        <ul>
                            <li><Link to="/introduction/icon"><span>Icon</span> <span>图标</span></Link></li>
                            <li><Link to="/introduction/dialog"><span>Dialog</span> <span>对话框</span></Link></li>
                            <li><Link to="/introduction/layout"><span>Layout</span> <span>布局</span></Link></li>
                        </ul>
                    </Aside>
                    <Content className={s.mainContent}>
                        <Outlet/>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}

export default introduction