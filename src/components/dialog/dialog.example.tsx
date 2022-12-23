import s from './dialog.example.module.scss'
import {Dialog, dialog} from "./dialog";
import { useState} from "react";
import HighLightCode from "../../homepage/share/highLightCode";
const dialogExample = () =>{
    const [firstDialog,setFirstDialog] = useState(false)
    const [customAttr,setCustomAttr] = useState(false)
    const [customFooter,setCustomFooter] = useState(false)
    const openDialog=()=>{
        dialog.info({titleText:'这是使用函数调用'})
    }
    const addInfo=()=>{
        dialog.info({
            titleText:'一个info',
            okText:'OK',
            cancelText:'Cancel',
            okClick:()=>{console.log('info OK')},
            cancelClick:()=>{console.log('info Cancel')},
            maskOnClick:()=>{console.log('info mask')},
            onClose:()=>{console.log('info closed')},
            children:<>
                <div>111</div>
                <div>222</div>
            </>
        })
    }
    const addAlert=()=>{
        dialog.alert({
            titleText:'Alert',
            message:'这是一个警告',
            onClose:()=>{console.log('alert Closed')},
            maskOnClick:()=>{console.log('alert mask')}
        })
    }
    const baseUsageCode =` const myComponent=()=>{
    const [firstDialog,setFirstDialog] = useState(false)
    const openDialog=()=>{
        dialog.info({titleText:'这是使用函数调用'})
    }
    return (
        <>
            <div>
                <button onClick={()=>setFirstDialog(!firstDialog)}>使用DOM方式调用</button>
                <button onClick={openDialog}>使用函数调用</button>
                <Dialog visible={firstDialog}
                        onClose={()=>setFirstDialog(false)}
                        maskOnClick={()=>setFirstDialog(false)}
                        okClick={()=>setFirstDialog(false)}
                        cancelClick={()=>setFirstDialog(false)}
                >
                    <p>这是使用DOM调用</p>
                </Dialog>
            </div>
        </>
    )
}`
    const domUsageCode=`const myComponent=()=>{
    const [customAttr,setCustomAttr] = useState(false)
    const [customFooter,setCustomFooter] = useState(false)
    return <>
    <button onClick={()=>setCustomAttr(true)} >自定义Dialog标签</button>
    <button onClick={()=>setCustomFooter(true)} >自定义Footer</button>
    <Dialog visible={customAttr}
            titleText="这是一个自定义标题"
            okText="这是确认按钮"
            cancelText="这是取消按钮"
            okClick={()=>{setCustomAttr(false);console.log('确认了')}}
            cancelClick={()=>{setCustomAttr(false);console.log('取消了')}}
            maskOnClick={()=>{setCustomAttr(false);console.log('点击了mask')}}
            onClose={()=>{setCustomAttr(false);console.log('点击了close图标')}}
    >
        <div>这是自定义内容1</div>
        <div>这是自定义内容2</div>
    </Dialog>
    <Dialog visible={customFooter}
            okClick={()=>setCustomFooter(false)}
            cancelClick={()=>setCustomFooter(false)}
            maskOnClick={()=>setCustomFooter(false)}
            onClose={()=>setCustomFooter(false)}
            customFooter={[<button key='1'>button1</button>,<button key='2'>button2</button>, <button key='3'>button3</button>]}
    >
        <div>下面是自定义的Footer</div>
        <div>自定义按钮的点击事件也需要自己添加</div>
    </Dialog>
    </>
}`
    const funcUsageCode = `const myComponent=()=>{
    const addInfo=()=>{
        dialog.info({
            titleText:'一个info',
            okText:'OK',
            cancelText:'Cancel',
            okClick:()=>{console.log('info OK')},
            cancelClick:()=>{console.log('info Cancel')},
            maskOnClick:()=>{console.log('info mask')},
            onClose:()=>{console.log('info closed')},
            children:<>
                <div>111</div>
                <div>222</div>
            </>
        })
    }
    const addAlert=()=>{
        dialog.alert({
            titleText:'Alert',
            message:'这是一个警告',
            onClose:()=>{console.log('alert Closed')},
            maskOnClick:()=>{console.log('alert mask')}
        })
    }
    return <>
        <button onClick={addInfo} >info</button>
        <button onClick={addAlert} >alert</button>
    </>
}`
    return (
        <>
            <div className={s.wrapper}>
            <h1>Dialog 对话框</h1>
            <p>当开发者想要在当前页面，提醒用户进行某些操作，或是用作提醒，就可以使用Dialog对话框，该组件会在当前页面正中打开一个浮层，承担响应的操作</p>
            <h2>代码演示</h2>
            <h3>基本使用</h3>
            <p>本组件有两种使用方式，一种是放在HTML中当作标签使用，一种是通过一个函数执行，下面会分别使用这两种模式</p>
            <div >
                <button className={s.button} onClick={()=>setFirstDialog(!firstDialog)}>使用DOM方式调用</button>
                <button className={s.button} onClick={openDialog}>使用函数调用</button>
                <Dialog visible={firstDialog}
                        onClose={()=>setFirstDialog(false)}
                        maskOnClick={()=>setFirstDialog(false)}
                        okClick={()=>setFirstDialog(false)}
                        cancelClick={()=>setFirstDialog(false)}
                >
                    <p>这是使用DOM调用</p>
                </Dialog>
            </div>
             <div>
                 <HighLightCode code={baseUsageCode} />
             </div>
            <h3>使用DOM方式</h3>
            <p>从上面的例子中可以看到Dialog是可以被自定义的，包括这个组件的方方面面，下面是Dialog的自定义属性</p>
            <ul>
                <li><strong>visible</strong>：这个属性是Dialog的必填属性，接受一个boolean值，当它为false时，Dialog消失，反之Dialog出现</li>
                <li><strong>titleText</strong>：这个属性用于设置Dialog的标题，如果不设置，默认值为‘提醒’</li>
                <li><strong>maskOnClick</strong>：这个属性用于控制Dialog周围的黑色浮层，给黑色浮层添加点击事件</li>
                <li><strong>okClick</strong>：用于给确认按钮添加点击事件</li>
                <li><strong>cancelClick</strong>：用于给取消按钮添加点击事件。</li>
                <li><strong>onClose</strong>：用于给Dialog右上角的关闭图标添加点击事件</li>
                <li><strong>okText</strong>：用于自定义确认按钮的文本</li>
                <li><strong>cancelText</strong>：用于自定义取消按钮的文本</li>
                <li><strong>customFooter</strong>：这个属性用于自定义按钮，期待一个button的数组，默认样式为确认按钮样式，记得给每个按钮加一个key</li>
                <li><strong>children</strong>：用于自定义Dialog的内容，可以通过Dialog中的子元素进行自定义</li>
            </ul>
            <div>
                <p>以下是button的演示</p>
                <button onClick={()=>setCustomAttr(true)} className={s.button}>自定义Dialog标签</button>
                <button onClick={()=>setCustomFooter(true)} className={s.button}>自定义Footer</button>
                <Dialog visible={customAttr}
                        titleText="这是一个自定义标题"
                        okText="这是确认按钮"
                        cancelText="这是取消按钮"
                        okClick={()=>{setCustomAttr(false);console.log('确认了')}}
                        cancelClick={()=>{setCustomAttr(false);console.log('取消了')}}
                        maskOnClick={()=>{setCustomAttr(false);console.log('点击了mask')}}
                        onClose={()=>{setCustomAttr(false);console.log('点击了close图标')}}
                >
                    <div>这是自定义内容1</div>
                    <div>这是自定义内容2</div>
                </Dialog>
                <Dialog visible={customFooter}
                        okClick={()=>setCustomFooter(false)}
                        cancelClick={()=>setCustomFooter(false)}
                        maskOnClick={()=>setCustomFooter(false)}
                        onClose={()=>setCustomFooter(false)}
                        customFooter={[<button key='1'>button1</button>,<button key='2'>button2</button>, <button key='3'>button3</button>]}
                >
                    <div>下面是自定义的Footer</div>
                    <div>自定义按钮的点击事件也需要自己添加</div>
                </Dialog>
            </div>
            <div>
                <HighLightCode code={domUsageCode} />
            </div>
            <h3>使用函数调用方式</h3>
            <p>
                函数调用方式与DOM调用方式相比更简单也更为常用，只是通过函数调用方式形成的Dialog不需要自己添加关闭事件，
                但是你仍然可以自定义点击事件（在Dialog组件关闭前执行），下面也将说明可以使用的选项
            </p>
            <p>有两种函数调用的对话框供你选择，分别是dialog.info()与dialog.alert()，其实二者没有太多的区别，只是alert做了些许简化。</p>
            <h4>info</h4>
            <ul>
                <li><strong>titleText</strong>：这个选项用于修改标题内容</li>
                <li><strong>onClose</strong>：这个选项用于添加Dialog右上角图标的点击事件</li>
                <li><strong>cancelClick</strong>：这个选项用于添加取消按钮的点击事件</li>
                <li><strong>okClick</strong>：这个选项用于添加确认按钮的点击事件</li>
                <li><strong>cancelText</strong>：用于自定义取消按钮文字内容</li>
                <li><strong>okText</strong>：用于自定义确认按钮文字内容</li>
                <li><strong>children</strong>：用于自定义Dialog中的提醒内容，期待一个HTML内容，并且只能有一个根节点</li>
                <li><strong>maskOnClick</strong>：用于添加点击黑色浮层的点击事件</li>
            </ul>
            <h4>alert</h4>
            <p>
                alert用于警告提醒，因此只有四个可用选项，分别为titleText，message，onClose，maskOnClick。
                message与上面的children作用类似，但是只能传递字符串进行内容的自定义
            </p>
            <div>
                <h3>使用演示</h3>
                <button onClick={addInfo} className={s.button}>info</button>
                <button onClick={addAlert} className={s.button}>alert</button>
            </div>
            <div>
               <HighLightCode code={funcUsageCode} />
            </div>
            </div>
        </>
    )
}

export default dialogExample