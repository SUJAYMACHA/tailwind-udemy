interface Textprops {
    text:string
    type:"small" | "medium" | "large"
    side: number
}

export const Text = (props:Textprops) =>{
    return(
        <div className={props.type === "small" ? 'text-xs' : 'medium' ? 'text-lg' : 'text-2xl'}>
            {
                props.text + ' ' + (props.side * props.side)
            }
        </div>
    )

}