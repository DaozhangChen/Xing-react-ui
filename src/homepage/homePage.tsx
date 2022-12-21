import Layout from "../components/layout/layout";
import Header from "../components/layout/header";
import Content from "../components/layout/content";
import Footer from "../components/layout/footer";
import Icon from "../components/icon/icon";
import s from './homePage.module.scss'
import background from '../assets/background.mp4'
import mainLogo from '../assets/mainLogo.png'
const homePage =()=>{
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
            <Content>
                <video src={background} autoPlay={true} className={s.background} loop={true}/>
            </Content>
            <Footer></Footer>
        </Layout>
        </>
    )
}


export default homePage