import {Light as HighLight} from 'react-syntax-highlighter'
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-light'
import tsx from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript'
import Icon from "./icon";
import s from './icon.example.module.scss'
const iconExample = ()=>{
    let oneColorList = []
    let moreColorList = []
    const oneColorFiles = import.meta.glob('@assets/icons/oneColorIcon/*.svg')
    for (const path in oneColorFiles){
        const regex:RegExp =/.*\/(.+)\./
        const match = regex.exec(path)
        oneColorList.push(match?.[1])
    }
    const moreColorFiles = import.meta.glob('@assets/icons/moreColorIcon/*.svg')
    for (const path in moreColorFiles){
        const regex:RegExp =/.*\/(.+)\./
        const match = regex.exec(path)
        moreColorList.push(match?.[1])
    }
    HighLight.registerLanguage('tsx',tsx)
    return (
        <>
        <h1>Icon 组件</h1>
            <h2>单色</h2>
            {oneColorList.map(iconName=><Icon key={iconName} name={iconName||''} className={s.icon}/>)}
            <h2>多色</h2>
            {moreColorList.map(iconName=><Icon key={iconName} name={iconName||''} className={s.icon}/>)}
            <HighLight style={style}>
                {`<div>321<div>
console.log('1')
`}
            </HighLight>
        </>
    )
}

export default iconExample