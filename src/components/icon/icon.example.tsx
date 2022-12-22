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
            <p>Icon组件可以让你及其轻松的使用各种图标，你可以通过传入不同的图标名称来渲染对应的图标，也可以自定义图标的样式，例如颜色、大小等。</p>
            <h2>图标列表</h2>
            <h3>单色图标</h3>
            <div className={s.iconCardWrapper}>
            {oneColorList.map(iconName=>
                <div key={iconName} className={s.iconCard}>
                <Icon  name={iconName||''} className={s.icon}/>
                <div>{iconName}</div>
                </div>
            )}
            </div>
            <h3>多色图标</h3>
            <div className={s.iconCardWrapper}>
            {moreColorList.map(iconName=>
                <div key={iconName} className={s.iconCard}>
                <Icon key={iconName} name={iconName||''} className={s.icon}/>
                <div>{iconName}</div>
                </div>
            )}
            </div>
            <h2>代码演示</h2>
            <h3>基本用法</h3>
            <p>使用Icon组件的name属性,传入字符串，即可使用，以下的两个标签，就是通过Icon引入的</p>
            <div>
                <Icon name='add' className={s.icon}/>
                <Icon name='商店' className={s.icon}/>
            </div>
            <div className={s.changeSize}>
            <HighLight style={style}>
                {`
const myComponent=()=>{
    return (
        <>
        <Icon name='add' />
        <Icon name='商店' />
        </>
    )
}
export default myComponent
                `}
            </HighLight>
            </div>
            <h3>修改Icon</h3>
            <p>将自己的CSS属性，通过Icon的className进行属性覆盖，即可修改原有的属性，下面我将使用fill属性来修改Icon原有的颜色</p>
            <div>
                <Icon name='add' style={{fill:"red",height:36,width:36}}/>
                <Icon name='close' style={{fill:"blue",height:36,width:36}} />
            </div>
            <div className={s.changeSize}>
                <HighLight style={style}>
                    {`
import './style.css'

//   style.css
//
// .iconRed{
//     fill: red;
// }
// .iconBlue{
//     fill: blue;
// }
const myComponent=()=>{
    return (
        <>
        <Icon name='add' className='iconRed'/>
        <Icon name='close' className='iconBlue' />
        </>
    )
}
                    `}
                </HighLight>
            </div>
            <h3>自定义Icon</h3>
            <p>可以通过Icon的component标签，自定义个性化Icon</p>
            <div className={s.changeSize}>
                <HighLight style={style}>
                    {`
import mySvg from "svg的路径"

const myComponent=()=>{
    return (
        <>
        <Icon component={mySvg}/>
        </>
    )
}
                    `}
                </HighLight>
            </div>
        </>
    )
}

export default iconExample