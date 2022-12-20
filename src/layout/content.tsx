import './layout.scss'

interface Prop extends React.HTMLAttributes<HTMLElement>{

}
const Content=(props:Prop)=>{
    const {className,...rest} = props

    return <div className={['xing_ui_layout_content',className].join(' ') } {...rest}>{props.children}</div>
}


export default Content