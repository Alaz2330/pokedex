'use client'
import { useEffect, useState } from "react";
import StatsBar from "./statsbar";
import Types from "./types";

export default function Detail({data}) {
    const [pokemon, setPokemon] = useState()
    const [description, setDescription] = useState<string>("")
    useEffect(()=> {        
        fetch(`https://pokeapi.co/api/v2/pokemon/${data}/`)
        .then(response => response.json())
        .then(newData => setPokemon(newData));
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${data}/`)
        .then(response => response.json())
        .then(speciesData => {
            const englishVersion = speciesData.flavor_text_entries.find(
                (entry: any) => entry.language.name === "en"
            );
            setDescription(englishVersion.flavor_text);
        });
    },[])

    return(
        <div className="w-full">
            {!pokemon 
                ?<p> Loading</p>      
                :<div className="grid grid-cols-2 w-full "> 
                    <div className="flex flex-col justify-center">
                        <h2 className="text-center font-bold"> #{pokemon.id}</h2> 
                        <img src={pokemon.sprites.other['official-artwork'].front_default} className="w-1/3"/>
                        <h2 className="text-center font-bold capitalize">{pokemon.name}</h2>
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
                    <ul className="w-full">
                    {pokemon.stats.map((singular)=>(
                        <li key={singular.stat.name} className="flex justify-start">
                            <StatsBar label = {singular.stat.name} value = {singular.base_stat} max = {150}/>
                        </li>
                    ))}
                    </ul>  
                    <p className="text-neutral-400">{description}</p>
                </div>              
            }            
        </div>
    )
}