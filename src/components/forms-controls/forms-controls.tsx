export const Textarea = (props: any) => {
    const {input, meta, ...restProps} = props

    const hasError = meta.touched && meta.error
    return (
        <div>
            <textarea
                style={hasError ? {
                    border: '3px double red'
                } : {}}
                {...input}{...restProps}></textarea>
            {hasError && <div><span style={{
                color: "red"
            }}>{meta.error}</span></div>}
        </div>
    )
}