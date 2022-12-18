import React, {useEffect, useState} from "react";
import s from './test.module.scss'

type Prop={
    name:string
}

const Test = (props:Prop)=>{
    const modules = import.meta.glob('../assets/icons/*.svg', { eager: true })
    const path = `../assets/icons/${props.name}.svg`
    const All = modules[path].default
    return (
        <div className={s.icon}>
        <All />
        <div>test</div>
        </div>
    )
}

export default Test