'use client'

import { useEffect, useState } from "react";


export default function Card({name}) {
    const [pokemon, setPokemon] = useState(undefined);
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
        .then(response => response.json())
        .then(data => setPokemon(data));                   
    }, [name]);     

    return(                
        <div className="md:max-2xl border rounded-lg">            
            {!pokemon 
                ?<p> Loading</p> 
                :<div className="grid grid-cols-[50%_50%] gap-4">                    
                    <img src={pokemon.sprites.front_default} className="w=full h-auto"/>
                    <div>
                        <h2 className="uppercase">{pokemon.name}</h2>
                        <ul>
                            <div className="grid grid-cols-2">
                                {pokemon.types.map(({type}) => (
                                    <li key={type.name}>
                                            <img src={`/type_icons/${type.name}.svg`} className="w-1/9"/>
                                            <p> {type.name}</p>
                                    </li>
                                ))}
                            </div>
                        </ul>
                    </div>                    
                </div>}  
            </div>
    )
}