import './layout.scss'

interface Prop extends React.HTMLAttributes<HTMLElement>{

}
const Footer=(props:Prop)=>{
    const {className,...rest} = props

    return <div className={['xing_ui_layout_footer',className].join(' ')} {...rest}>{props.children}</div>
}


export default Footer