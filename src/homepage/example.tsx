import Icon from "../components/icon/icon";
import Shop from "@assets/icons/shop.svg";
import s from './example.module.scss'
import {Dialog,dialog} from "../components/dialog/dialog";
import {useState} from "react";
import Layout from "../layout/layout";
import Header from "../layout/header";
import Content from "../layout/content";
import Footer from "../layout/footer";
import Aside from "../layout/aside";

const example = ()=>{
    const [visible,setVisible]=useState<boolean>(false)
    const onClick=()=>{
        console.log('321')
        setVisible(!visible)
    }
    return (
        <>
            <div>Icon组件</div>
            <div>
                <Icon name='play' className={s.icon}/>
                <Icon name='menu' className={s.icon} component={Shop}/>
            </div>
            <hr/>
            <div>Dialog组件</div>
            <h2>示例1</h2>
            <button onClick={onClick}>控制开关1</button>
            <div>
                <Dialog visible={visible}
                        maskOnClick={()=>setVisible(false)}
                        titleText="这是一个提醒"
                        cancelClick={onClick}
                        okClick={onClick}
                        okText="这是一个确认按钮"
                        cancelText="这是一个取消按钮"
                        customFooter={[<button className={s.button}>你好</button>,<button>hello</button>, <button>324</button>]}
                        onClose={onClick}
                >
                    <div>你好</div>
                    <div>你好2</div>
                    <Icon name="shop" className={s.icon}/>
                </Dialog>
            </div>
            <h2>示例2</h2>
            <button onClick={()=>dialog.info({
                titleText:'示例2',
                onClose:()=>{console.log('3211')},
                okClick:()=>{console.log('ok')},
                cancelText:'取个😳',
                children:[<div>你好啊</div>,<div>我很好</div>]
            })}>info</button>
            <button onClick={()=>dialog.alert({titleText:'alert',message:'这是一个message'})}>alert</button>
            <hr/>
            <div>Layout组件</div>
            <h2>上中下</h2>
            <Layout style={{height:500}}>
                <Header>Header</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
            <h2>顶部侧边布局边栏1</h2>
            <Layout style={{height:500}}>
                <Header>Header</Header>
                <Layout>
                    <Aside>Aside</Aside>
                    <Content>Content</Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
            <h2>顶部侧边布局边栏2</h2>
            <Layout style={{height:500}}>
                <Header>Header</Header>
                <Layout>
                    <Content>Content</Content>
                    <Aside>Aside</Aside>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
            <h2>侧边顶部布局</h2>
            <Layout style={{height:500}}>
                <Aside>Aside</Aside>
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>

        </>
    )
}

export default example