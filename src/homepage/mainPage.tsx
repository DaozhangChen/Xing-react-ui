import Icon from "../components/icon/icon";
import Shop from "@assets/icons/shop.svg";
import s from './mainPage.module.scss'

const mainPage = ()=>{
    return (
        <>
            <div>Icon组件</div>
            <div>
                <Icon name='play' className={s.icon}/>
                <Icon name='menu' className={s.icon} component={Shop}/>
            </div>
        </>
    )
}

export default mainPage