'use client'
import { useEffect, useState } from "react";
import StatsBar from "./statsbar";

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
                :<div className="grid grid-cols-2 w-full"> 
                    <img src={pokemon.sprites.other['official-artwork'].front_default}/>
                    <p className="text-neutral-400">{description}</p>
                    <ul className="w-full">
                    {pokemon.stats.map((singular)=>(
                        <li key={singular.stat.name} className="flex justify-start">
                            <StatsBar label = {singular.stat.name} value = {singular.base_stat} max = {150}/>
                        </li>
                    ))}
                    </ul>  
                </div>              
            }            
        </div>
    )
}