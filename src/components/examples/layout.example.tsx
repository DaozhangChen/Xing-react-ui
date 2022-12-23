import s from './layout.example.module.scss'
import Layout from "../../lib/layout/layout";
import Header from "../../lib/layout/header";
import Content from "../../lib/layout/content";
import Footer from "../../lib/layout/footer";
import Aside from "../../lib/layout/aside";
import HighLightCode from "../../homepage/share/highLightCode";
import Highlight from "react-highlight";
const layoutExample = ()=>{
    return (
        <>
        <div className={s.wrapper}>
            <h1>Layout 布局</h1>
            <p>Layout组件能帮助开发者快速的进行页面的布局工作</p>
            <h2>组件概述</h2>
            <ul>
                <li><strong>Layout</strong>：布局的容器，其他所有的容器必须放在Layout中才可以使用</li>
                <li><strong>Header</strong>：用于放置顶部布局，只能放在Layout中</li>
                <li><strong>Aside</strong>：用于放置侧边栏元素，只能放在Layout中</li>
                <li><strong>Content</strong>：用与放置页面的主体内容的容器，只能放在Layout中</li>
                <li><strong>Footer</strong>：用于放置底部的布局容器，只能放在Layout中</li>
            </ul>
            <h2>代码演示</h2>
            <h3>上中下布局</h3>
            <Layout className={s.layout} style={{height:500}}>
                <Header className={s.layout_header}>Header</Header>
                <Content className={s.layout_content}>Content</Content>
                <Footer className={s.layout_footer}>Footer</Footer>
            </Layout>
            <HighLightCode code={`
            <Layout>
                <Header>Header</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
            `} />
            <h3>顶部-侧边布局-边栏1</h3>
            <Layout className={s.layout} style={{height:500}}>
                <Header className={s.layout_header}>Header</Header>
                <Layout className={s.layout} style={{flexDirection:"row"}}>
                    <Aside className={s.layout_aside}>Aside</Aside>
                    <Content className={s.layout_content}>Content</Content>
                </Layout>
                <Footer className={s.layout_footer}>Footer</Footer>
            </Layout>
            <HighLightCode code={`
             <Layout>
                <Header>Header</Header>
                <Layout>
                    <Aside>Aside</Aside>
                    <Content>Content</Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
            `} />
            <h3>顶部-侧边布局-边栏2</h3>
            <Layout className={s.layout} style={{height:500}}>
                <Header className={s.layout_header}>Header</Header>
                <Layout className={s.layout} style={{flexDirection:"row"}}>
                    <Content className={s.layout_content}>Content</Content>
                    <Aside className={s.layout_aside}>Aside</Aside>
                </Layout>
                <Footer className={s.layout_footer}>Footer</Footer>
            </Layout>
            <HighLightCode code={`
            <Layout>
                <Header>Header</Header>
                <Layout>
                    <Content>Content</Content>
                    <Aside>Aside</Aside>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
            `} />
            <h3>侧边顶部布局</h3>
            <Layout className={s.layout} style={{height:500,flexDirection:"row"}}>
                <Aside className={s.layout_aside}>Aside</Aside>
                <Layout className={s.layout}>
                    <Header className={s.layout_header}>Header</Header>
                    <Content className={s.layout_content}>Content</Content>
                    <Footer className={s.layout_footer}>Footer</Footer>
                </Layout>
            </Layout>
            <HighLightCode code={`
            <Layout>
                <Aside>Aside</Aside>
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
            `} />
        </div>
        </>
    )
}

export default layoutExample