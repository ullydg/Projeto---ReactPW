interface TitleProps{

    children: string
}

export function Title(props: TitleProps){
    const text = props.children

    return(
        <h2 className="font-semibold border-amber-500 border-l-4 pl-2 m-4">
            {text}
        </h2>
    )
}