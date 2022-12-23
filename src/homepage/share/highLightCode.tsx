import {Light as HighLine} from "react-syntax-highlighter";
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/idea'
import ts from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript'
type Prop={
    code:string
}
const highLightCode=(props:Prop)=>{
    HighLine.registerLanguage('typescript',ts)
    return <>
    <HighLine style={style} wrapLines={true} language='typescript'>
        {props.code}
    </HighLine>
    </>
}
export default highLightCode