import './layout.scss'
interface Prop extends React.HTMLAttributes<HTMLElement>{

}
const Header=(props:Prop)=>{
    const {className,...rest} = props

    return <div className={['xing_ui_layout_header',className].join(' ')} {...rest}>{props.children}</div>
}


export default Header