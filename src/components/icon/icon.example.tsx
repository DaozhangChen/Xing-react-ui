import {Light as HighLight} from 'react-syntax-highlighter'
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-light'
import tsx from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript'
import Icon from "./icon";
import s from './icon.example.module.scss'
const iconExample = ()=>{
    let list = []
    const modules = import.meta.glob('@assets/icons/*.svg')
    for (const path in modules){
        const regex:RegExp =/.*\/(.+)\./
        const match = regex.exec(path)
        list.push(match?.[1])
    }
    HighLight.registerLanguage('tsx',tsx)
    return (
        <>
        <h1>Icon 组件</h1>
            {list.map(iconName=><Icon key={iconName} name={iconName||''} className={s.icon}/>)}
            <HighLight style={style}>
                {`<div>321<div>
console.log('1')
`}
            </HighLight>
        </>
    )
}

export default iconExample