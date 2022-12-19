import s from './dialog.module.scss'
type Prop={
    disable?:boolean
}
const Dialog=(props:Prop)=>{
    return (
        <>
        <div className={s.xing_ui_dialog_wrapper}>
            <div className={s.xing_ui_dialog_mask}></div>
            <div className={s.xing_ui_dialog_main}>
            <header className={s.xing_ui_dialog_title}>title</header>
            <main>main</main>
            <footer className={s.xing_ui_dialog_button}>

                <button className={s.xing_ui_dialog_button_cancel}>Cancel</button>
                <button className={s.xing_ui_dialog_button_ok}>OK</button>
            </footer>
            </div>
        </div>
        </>
    )
}
export default Dialog