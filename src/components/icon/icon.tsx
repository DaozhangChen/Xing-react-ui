import React from 'react'

type Prop = {
    name: string
    className?:string
    onClick?:Function
    component?:Function|string
}
type IconProp={
    className:string|undefined,
    onClick?:Function,

}
type SvgImport = {
    [path: string]: { default: React.ComponentType<IconProp> }
}
const Icon =(props:Prop)=>{
  const modules: SvgImport = import.meta.glob('@assets/icons/*.svg', { eager: true })
  const path: string = `/src/assets/icons/${props.name}.svg`
  const IconComponent = modules[path].default
  const CustomSVG = props.component
    return (<>
            {/*// @ts-ignore*/}
      {props.component? <CustomSVG className={props.className} onClick={props.onClick}/>
          : <IconComponent className={props.className} onClick={props.onClick} /> }
      </>
      )

}

export default Icon