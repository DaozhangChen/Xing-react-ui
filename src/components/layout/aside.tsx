import './layout.scss'

interface Prop extends React.HTMLAttributes<HTMLElement>{

}
const Aside=(props:Prop)=>{
    const {className,...rest} = props
    return(
        <div className={['xing_ui_layout_aside',className].join(' ')} {...rest}>
            {props.children}
        </div>
    )
}


export default Aside