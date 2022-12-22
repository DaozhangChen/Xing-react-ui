import {Light as HighLine} from "react-syntax-highlighter";
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-light'
import tsx from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript'
type Prop={
    code:string
}
const highLightCode=(props:Prop)=>{
    HighLine.registerLanguage('tsx',tsx)
    return <>
    <HighLine style={style}>
        {props.code}
    </HighLine>
    </>
}
export default highLightCode