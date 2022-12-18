export const Icon = async (name:string)=>{
   const a = await import(`../assets/icons/${name}.svg`)
    return a||undefined
}