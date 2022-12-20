import Icon from "../components/icon/icon";
import Shop from "@assets/icons/shop.svg";
import s from './mainPage.module.scss'
import {Dialog,dialog} from "../components/dialog/dialog";
import {useState} from "react";

const mainPage = ()=>{
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
            <button onClick={()=>dialog.info()}>info</button>
        </>
    )
}

export default mainPage