import s from './dialog.module.scss'
type Prop={
    disable?:boolean
}
const Dialog=(props:Prop)=>{
    return (
        <>
        <div className={props.disable? s.disable : ''}>
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