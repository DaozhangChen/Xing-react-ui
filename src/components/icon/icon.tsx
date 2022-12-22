import React from 'react'

interface Prop extends React.HTMLAttributes<HTMLElement>{
    name: string
    className?:string
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
  const moreColorList: SvgImport = import.meta.glob('@assets/icons/moreColorIcon/*.svg', { eager: true })
  const oneColorIconList:SvgImport = import.meta.glob('@assets/icons/oneColorIcon/*.svg',{eager:true})
  const one:string = `/src/assets/icons/oneColorIcon/${props.name}.svg`
  const more: string = `/src/assets/icons/moreColorIcon/${props.name}.svg`
  const IconComponent = moreColorList[more]?.default || oneColorIconList[one]?.default
  const CustomSVG = props.component

    return (<>
          {/*@ts-ignore*/}
      {props.component? <CustomSVG className={props.className} onClick={props.onClick} {...props}/>
          : <IconComponent className={props.className} onClick={props.onClick} {...props}/> }
      </>
      )

}

export default Icon