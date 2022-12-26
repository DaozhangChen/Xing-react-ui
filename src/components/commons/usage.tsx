import HighLightCode from "../../homepage/share/highLightCode";
import s from './usage.module.scss'

const usage=()=>{
const installCode=`
//通过npm安装
npm install xing-react-ui

//通过yarn安装
yarn add xing-react-ui

//通过pnpm安装
pnpm install xing-react-ui

`
    const usageCode=`
import { useState } from 'react'
import { Icon, Dialog } from 'xing-react-ui'
import 'xing-react-ui/dist/lib/style.css'

function App() {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <div>
        <button onClick={() => setVisible(!visible)}>Dialog</button>
        <Icon name='商店' />
        <Dialog visible={visible} 
                onClose={() => setVisible(false)} 
                okClick={() => { setVisible(false) }}
        >
          <p>这是Dialog组件</p>
        </Dialog>
      </div>
    </>
  )
}

export default App
    `
    return(
        <>
            <div className={s.wrapper}>
         <h1>介绍</h1>
            <p>本页面你可以了解到xing-ui的安装方法和基本使用姿势</p>
                <h2>安装</h2>
                <p>可以采用下列的任意方式安装</p>
                <HighLightCode code={installCode} />
                <h2>使用</h2>
                <p>下面以Icon组件和Dialog组件举例</p>
                <HighLightCode code={usageCode} />
            </div>
        </>
    )
}

export default usage