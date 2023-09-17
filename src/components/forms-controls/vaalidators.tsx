export const required = (value: string)=> {
    if(value) return undefined
    return 'Field is required'
}



export const maxLengthCreator = (max: number) => (value: string)=> {
    if(value.length > max) return `Max value is ${max} symbols`
    return undefined
}