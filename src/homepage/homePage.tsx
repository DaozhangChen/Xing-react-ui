import Layout from "../components/layout/layout";
import Header from "../components/layout/header";
import Content from "../components/layout/content";
import Footer from "../components/layout/footer";
import Icon from "../components/icon/icon";

const homePage =()=>{
    return (
        <>
        <Layout>
            <Header>
                <Icon name="star" />


            </Header>
            <Content></Content>
            <Footer></Footer>
        </Layout>
        </>
    )
}


export default homePage