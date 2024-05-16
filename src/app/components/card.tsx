"use client"
import { Heart, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "./button";
import { useState } from "react";

interface CardProps {

    curso:
    
    {
        id: number,
        title: string,
        poster_path: string,
        vote_average: number,
    }
    
}

export function Card({curso} : CardProps){
    const [favorito, setFavorito] = useState(false)

    function toggleFavorito(){

        setFavorito(!favorito)
    }



    return(
        <div className="flex flex-col items-center w-52 gap-2 relative ">

            { favorito ?
            <Heart onClick = {toggleFavorito} className="text-red-400 absolute right-2 top-2 cursor-pointer"/> :
            <Heart onClick = {toggleFavorito} className="absolute right-2 top-2 cursor-pointer"/>
            }
            <img className="w-full rounded" src={curso.poster_path} alt="" />   
            <h4 className="line-clamp-1">{curso.title}</h4>
            <div className="flex gap-2">
                <Star className="text-amber-400"/>
                <span className="opacity-50">{curso.vote_average} </span>
            </div>    

            <Button label="detalhes" href={"/curso/" + curso.id}/>
            
            </div>
    )
}