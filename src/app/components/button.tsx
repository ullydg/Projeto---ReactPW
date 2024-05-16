import Link from "next/link"


interface ButtonProps{

    icon?: React.ReactNode,
    label: string,
    href: string
}

export function Button(props: ButtonProps){
    return(

        <Link href= {props.href} className="flex gap-2 intem-center justify-center bg-cyan-300 px-8 py-2 rounded hover:bg-blue-950 transition-colors">
            {props.icon}
            {props.label}
        </Link>

    )
}