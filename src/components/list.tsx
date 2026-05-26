'use client'

import { useEffect, useState } from "react";
import Card from "./card"

export default function List() {  
  const [pokemones,setPokemones] = useState()
  useEffect(() =>{
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
    .then(response => response.json())
    .then(data => setPokemones(data));
  },[]);

  if (!pokemones) {
   return <p> Loading</p> 
  }

  return (
    <ul className= "divide-y-2 divide-gray-50">      
      {pokemones.results.map((singular) => (
        <li key={singular.name} className="flex justify-center gap-x-6 py-5">  
          <div>
            <div className="flex justify-items-center">
              <Card pokemon={singular}/>
            </div>
          </div>        
        </li>
      ))}
    </ul>
  )
}