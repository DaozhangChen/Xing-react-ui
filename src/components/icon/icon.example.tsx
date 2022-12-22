import SyntaxHighlighter from 'react-syntax-highlighter'
const iconExample = ()=>{
    return (
        <>
        <h1>Icon 组件</h1>
            <SyntaxHighlighter language="tsx">
                {`
<div>你好啊</div>
<Icon />
`}
            </SyntaxHighlighter>
        </>
    )
}

export default iconExample