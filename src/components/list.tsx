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
  };

  return (
    <ul className= "w-full divide-y-2 divide-gray-50">      
      <div className="grid grid-cols-3 gap-6">
        {pokemones.results.map((singular) => (
          <li key={singular.name} className="flex justify-center">  
              <div className="flex">
                <Card name={singular.name}/>
              </div>
          </li>
        ))}
      </div>
    </ul>
  )
}