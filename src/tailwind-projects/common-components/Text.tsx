interface Textprops {
    text:string
    type:"small" | "big"
    side: number
}

export const Text = (props:Textprops) =>{
    return(
        <div className={props.type === "small" ? 'text-xs' : 'text-lg'}>
            {
                props.text + ' ' + (props.side * props.side)
            }
        </div>
    )

}