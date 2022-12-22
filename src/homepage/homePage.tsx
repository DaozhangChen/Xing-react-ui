import Layout from "../components/layout/layout";
import Content from "../components/layout/content";
import Footer from "../components/layout/footer";
import Icon from "../components/icon/icon";
import s from './homePage.module.scss'
import background from '../assets/background.mp4'
import React from "react";
import {Link} from "react-router-dom";
import ShareHeader from "./share/shareHeader";
const homePage =()=>{
    return (
        <>
        <Layout>
            <ShareHeader />
            <Content className={s.layoutContent}>
                <video src={background} autoPlay={true} className={s.background} loop={true}/>
                <div className={s.outerMainText}>
                    <div className={s.mainSlogan}>
                    <h1>Xing UI</h1>
                    <p>&#12300; 一款基于React的UI组件，简化您的开发流程 &#12301;</p>
                        <Link to="/introduction">
                    <button>开始使用</button>
                        </Link>
                    </div>
                    <div className={s.cardItem}>
                        <div className={s.card}>
                            <span>
                            <Icon name='react' className={s.icon}/>
                            </span>
                            <h3>基于React开发</h3>
                            <p>使用了最新的React 18以及hooks进行内容编写，稳定好用</p>
                        </div>
                        <div className={s.card}>
                            <span>
                            <Icon name='组件' className={s.icon}/>
                            </span>
                            <h3>组件简单易用</h3>
                            <p>研究了多方UI组件与人的交互关系，做到了使任何人都能简单上手</p>
                        </div>
                        <div className={s.card}>
                            <span>
                            <Icon name='商店' className={s.icon}/>
                            </span>
                            <h3>自定义组件</h3>
                            <p>组件拥有多个设置接口，能够让你自定义任何想要的内容</p>
                        </div>
                    </div>
                </div>
            </Content>
            <Footer></Footer>
        </Layout>
        </>
    )
}


export default homePage