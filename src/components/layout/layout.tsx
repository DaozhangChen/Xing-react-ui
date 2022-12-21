import './layout.scss'
import {ReactElement} from "react";
import Aside from "./aside";
interface Prop extends React.HTMLAttributes<HTMLElement>{
children:ReactElement | Array<ReactElement>
}
const Layout=(props:Prop)=>{
    const {className,...rest} = props
    const children = props.children as Array<ReactElement>
    const hasAside = children.length &&
        children.reduce((result,node) => result || node.type === Aside,false)
    return <div className={['xing_ui_layout',className,hasAside && 'hasAside'].join(' ')} {...rest}>{props.children}</div>
}


export default Layout