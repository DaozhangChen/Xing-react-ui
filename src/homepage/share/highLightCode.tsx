import {Light as HighLine} from "react-syntax-highlighter";
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-light'
import ts from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript'
import s from './highLightCode.module.scss'
type Prop={
    code:string
}
const highLightCode=(props:Prop)=>{
    HighLine.registerLanguage('typescript',ts)
    return <>
        <div className={s.wrapper}>
    <HighLine style={style} wrapLines={true} language='typescript' wrapLongLines={true}>
        {props.code}
    </HighLine>
        </div>
    </>
}
export default highLightCode