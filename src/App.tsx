import s from './App.module.scss'
import Test from "./homepage/test";
const App = () => {
    return (<>
        <div className={s.title}>hello</div>
        <Test name='menu'/>
            <Test name='photo'/>
            <Test name='play'/>
        </>
    )
}

export default App
