import s from './dialog.module.scss'
import easyUseClassName from "../../helper/easyUseClassName";
type Prop={
    disable?:boolean
}
const Dialog=(props:Prop)=>{
    const a = easyUseClassName('xing-ui-dialog')
    return (
        <>
        <div className={props.disable? s.disable : ''}>
            <div className={s.mask}></div>
            <header>title</header>
            <main>main</main>
            <footer>
                <button>OK</button>
                <button>Cancel</button>
            </footer>
        </div>
        </>
    )
}
export default Dialog