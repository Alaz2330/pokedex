'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


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
                    <img src={pokemon.sprites.front_default} className="w-full h-auto"/>
                    <div>
                        <h2 className="uppercase font-medium text-white">{pokemon.name}</h2>
                        <ul>
                            <div className="grid grid-cols-2">
                                {pokemon.types.map(({type}) => (
                                    <li key={type.name}>
                                        <div className="flex flex-row gap-2">                                
                                            <img src={`/type_icons/${type.name}.svg`} className="w-1/4"/>
                                            <p className="text-neutral-400 capitalize"> {type.name}</p>
                                        </div>
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