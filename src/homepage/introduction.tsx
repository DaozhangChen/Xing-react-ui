import s from './introduction.module.scss'
import Layout from "../components/layout/layout";
import Footer from "../components/layout/footer";
import Aside from "../components/layout/aside";
import Content from "../components/layout/content";
import React, {MouseEventHandler, useState} from "react";
import ShareHeader from "./share/shareHeader";
import {Link, Outlet, useMatch, useParams} from "react-router-dom";
import {listObject} from "./share/listObject";
const introduction =()=>{
    const [selected,setSelected]=useState('')
    const parmas =useParams()
    const onSelect:MouseEventHandler=(e:React.MouseEvent)=>{
        console.log(e.currentTarget.id)
        console.log(parmas)

    }
    return (
        <>
            <Layout>
                <ShareHeader />
                <Layout className={s.mainLayout}>
                    <Aside className={s.mainAside}>
                        <div>所有组件</div>
                        <ul>
                            {listObject.map(li=><Link key={li.eName} to={`/introduction/${li.eName[0].toLowerCase() + li.eName.substring(1)}`}>
                                <li  id={li.eName} onClick={onSelect}>
                                    <span>{li.eName}</span>
                                    <span className={s.text}>{li.text}</span>
                                </li>
                            </Link>)}
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