import React, { ReactNode } from 'react'
import s from './test.module.scss'

type Prop = {
    name: string
}
type SvgImport = {
    [path: string]: { default: React.ComponentType }
}
const Test = (props: Prop) => {
    const modules: SvgImport = import.meta.glob('../assets/icons/*.svg', { eager: true })
    const path: string = `../assets/icons/${props.name}.svg`
    const All = modules[path].default
    return (
        <div className={s.icon}>
            <All />
            <div>test</div>
        </div>
    )
}

export default Test