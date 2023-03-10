interface Options {
    extra: string | undefined
}

interface ClassToggles {
    [K: string]: boolean
}
const EasyUseClassName=(prefix:string)=>
    (name: string | ClassToggles, options?: Options) =>
        Object
            .entries(name instanceof Object ? name : {[name]: name})
            .filter(kv => kv[1] !== false)
            .map(kv => kv[0])
            .map(name => [prefix, name]
                .filter(Boolean)
                .join('_'))
            .concat(options && options.extra || [])
            .join(' ');


export default EasyUseClassName