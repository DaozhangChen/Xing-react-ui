import s from "./shareHeader.module.scss";
import mainLogo from "@assets/mainLogo.png";
import Icon from "../../lib/icon/icon";
import Header from "../../lib/layout/header";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Link, useMatch } from "react-router-dom";



interface Prop {
    controlMenu?: Dispatch<SetStateAction<boolean>>
    visible?: boolean
}
const shareHeader = (props: Prop) => {
    const [titleVisible, setTitleVisible] = useState(false)
    const onClose = () => {
        props.controlMenu?.(!props.visible)
    }
    const matchHomepage = useMatch('/')
    const matchIntroPage = useMatch('/introduction/:id')
    const windowWidth = window.innerWidth
    useEffect(() => {
        if (matchHomepage && windowWidth < 700) {
            setTitleVisible(true)
        } else if (windowWidth >= 700) {
            setTitleVisible(true)
        }
        if (matchIntroPage && windowWidth < 700) {
            setTitleVisible(false)
        }
    }, [windowWidth])
    return <>
        <Header className={s.layoutHeader}>
            {matchHomepage ? null : <Icon name="more" className={s.menuIcon} onClick={onClose} />}
            <Link to='/'>
                <div className={s.iconAndTitle}>
                    <img src={mainLogo} className={s.mainLogo} />
                    {titleVisible ? <h2>XING UI</h2> : null}
                </div>
            </Link>
            <div className={s.headerRight}>
                <ul>
                    <li><a target="_blank" href="https://xing-vue-ui-1314560368.cos-website.ap-guangzhou.myqcloud.com">Vue版</a></li>
                </ul>
                <a target="_blank" href="https://github.com/DaozhangChen/Xing-react-ui"><Icon className={s.icon} name="github" /></a>
            </div>
        </Header>
    </>
}

export default shareHeader