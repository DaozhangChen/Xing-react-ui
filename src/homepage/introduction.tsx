import s from './introduction.module.scss'
import Layout from "../lib/layout/layout";
import Aside from "../lib/layout/aside";
import Content from "../lib/layout/content";
import React, { MouseEventHandler, useEffect, useLayoutEffect, useRef, useState } from "react";
import ShareHeader from "./share/shareHeader";
import { Link, Outlet, useMatch } from "react-router-dom";
import { listObject } from "./share/listObject";
import toLowerName from "../helper/toLowerName";
const introduction = () => {
    const [selected, setSelected] = useState('')
    const [visible, setVisible] = useState(true)
    const match = useMatch('/introduction/:componentName')
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    useEffect(() => {
        //让刷新页面后也能使Aside被选中部分高亮
        if (match?.params && match.params.componentName) {
            setSelected(match.params.componentName)
        }
    }, [match])
    useEffect(() => {
        window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
    }, [])
    const onSelect: MouseEventHandler = (e: React.MouseEvent) => {
        setSelected(e.currentTarget.id)
    }
    const refDiv = useRef<HTMLDivElement>(null)
    const onCloseMenu = () => {
        visible && windowWidth <= 700 ? setVisible(false) : undefined
    }
    useEffect(() => {
        if (refDiv.current) {
            refDiv.current?.scrollTo(0, 0)
        }
    })
    useLayoutEffect(() => {
        windowWidth <= 700 ? setVisible(false) : setVisible(true)
    }, [windowWidth])
    return (
        <>
            <Layout>
                <ShareHeader controlMenu={setVisible} visible={visible} />
                <Layout className={s.mainLayout} >
                    {
                        visible ? <Aside className={s.mainAside}>
                            <ul>
                                <Link to="/introduction/usage">
                                    <li className={'usage' === selected ? s.selected : undefined}>
                                        如何使用
                                    </li>
                                </Link>
                            </ul>
                            <div>所有组件</div>
                            <ul>
                                {listObject.map(li => <Link key={li.eName} to={`/introduction/${toLowerName(li.eName)}`}>
                                    <li id={li.eName} onClick={onSelect} className={toLowerName(li.eName) === selected || li.eName === selected ? s.selected : undefined}>
                                        <span>{li.eName + ' '}</span>
                                        <span className={s.text}>{li.text}</span>
                                    </li>
                                </Link>)}
                            </ul>
                        </Aside>
                            :
                            <Aside></Aside>
                    }

                    <Content className={s.mainContent}>
                        <div className={s.mainContent_in} ref={refDiv} onClick={onCloseMenu}>
                            <Outlet />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}

export default introduction