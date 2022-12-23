import './layout.scss'
import {ForwardedRef, forwardRef, Ref} from "react";

interface Prop extends React.HTMLAttributes<HTMLElement>{
   ref:Ref<any>
}
const Content=forwardRef((props:Prop,ref:ForwardedRef<HTMLDivElement>)=>{
    const {className,...rest} = props
    return <div className={['xing_ui_layout_content',className].join(' ') } {...rest} ref={ref}>{props.children}</div>
})


export default Content