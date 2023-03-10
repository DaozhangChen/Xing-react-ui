import './layout.scss'
import {ReactElement} from "react";
import Aside from "./aside";
import easyUseClassName from "../../helper/easyUseClassName";
interface Prop extends React.HTMLAttributes<HTMLElement>{
children:ReactElement | Array<ReactElement>
}
const ezName = easyUseClassName('xing_ui_layout')
const Layout=(props:Prop)=>{
    const {className,...rest} = props
    const children = props.children as Array<ReactElement>
    const hasAside = 'length' in children &&
        children.reduce((result, node) => result || node.type === Aside, false);


    return <div className={ezName({'': true ,hasAside},{extra:className})} {...rest}>{props.children}</div>
}


export default Layout