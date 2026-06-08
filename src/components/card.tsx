'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Types from "./types";


export default function Card({name}) {
    const [pokemon, setPokemon] = useState(undefined);
    const router = useRouter();

    function handleNavigation() {
        router.push(`/detail/${pokemon.name}`)
    }

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
        .then(response => response.json())
        .then(data => setPokemon(data));                   
    }, [name]);     

    return(                
        <div className="md:max-2xl bg-neutral-900 rounded-2xl">            
            {!pokemon 
                ?<p> Loading</p>                 
                :<div role="button" onClick={handleNavigation} className="grid grid-cols-[40%_50%] items-center-safe gap-4">                     
                    
                    <img src={pokemon.sprites.front_default} className="w-full"/>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row gap-8">                            
                            <h2 className="">#{pokemon.id}</h2>
                            <h2 className="font-medium text-white capitalize">{pokemon.name}</h2>
                        </div>
                        <ul className="w-full">
                            <div className="grid grid-cols-2">
                                {pokemon.types.map(({type}) => (
                                    <li key={type.name}>
                                        <Types name= {type.name}/>
                                    </li>
                                ))}
                            </div>
                        </ul>
                    </div>                    
                </div>
            }  
        </div>
    )
}