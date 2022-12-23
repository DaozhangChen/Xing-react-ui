import s from './introduction.module.scss'
import Layout from "../components/layout/layout";
import Aside from "../components/layout/aside";
import Content from "../components/layout/content";
import React, { MouseEventHandler, useEffect, useRef, useState} from "react";
import ShareHeader from "./share/shareHeader";
import {Link, Outlet, useMatch} from "react-router-dom";
import {listObject} from "./share/listObject";
import toLowerName from "../helper/toLowerName";
const introduction =()=>{
    const [selected,setSelected]=useState('')
    const match =useMatch('/introduction/:componentName')
    useEffect(()=>{
        //让刷新页面后也能使Aside被选中部分高亮
        if (match?.params && match.params.componentName){
            setSelected(match.params.componentName)
        }
    },[match])
    const onSelect:MouseEventHandler=(e:React.MouseEvent)=>{
        setSelected(e.currentTarget.id)
    }
    const myRef=useRef<HTMLDivElement>(null)
    useEffect(()=>{
        if (myRef.current){
            myRef.current?.scrollTo(0,0)
        }
    })
    return (
        <>
            <Layout>
                <ShareHeader />
                <Layout className={s.mainLayout}>
                    <Aside className={s.mainAside}>
                        <div>所有组件</div>
                        <ul>
                            {listObject.map(li=><Link key={li.eName} to={`/introduction/${toLowerName(li.eName)}`}>
                                <li id={li.eName} onClick={onSelect} className={toLowerName(li.eName)===selected?s.selected:undefined}>
                                    <span>{li.eName + ' '}</span>
                                    <span className={s.text}>{li.text}</span>
                                </li>
                            </Link>)}
                        </ul>
                    </Aside>
                    <Content className={s.mainContent} ref={myRef}>
                        <Outlet/>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}

export default introduction