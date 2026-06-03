'use client'

import { useEffect, useState } from "react";
import Card from "./card"
import Pagination from "./pagination"

interface ListProps{
  result?: string; 
}

export default function List({result}:ListProps) {  
  const [pokemones,setPokemones] = useState()
  const [pagination, setPagination] = useState({
    offset: 0,
    pageLimit: 60,
    totalResults: 0
  });

  useEffect(() =>{
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${pagination.pageLimit}&offset=${pagination.offset}`)
    .then(response => response.json())
    .then(data => {
      setPokemones(data)
      setPagination((prev) => ({
            ...prev,
            totalResults: data.count
        }))
    })},[pagination.pageLimit, pagination.offset]);
  
  if (!pokemones) {
   return <p> Loading</p> 
  };

  return (
    <div className="flex flex-col justify-center items-center text-center sm:items-start sm:text-left">      
    {!result 
      ?<ul className= "w-full divide-y-2 divide-gray-50 mt-8">      
        <div className="grid md:grid-cols-3 gap-6">
          {pokemones.results.map((singular) => (
            <li key={singular.name} className="flex justify-center">  
                <div className="flex">
                  <Card name={singular.name}/>
                </div>
            </li>
          ))}
        </div>
      </ul>
      :<Card name={result}/>
    }
      <Pagination {...{pagination, setPagination}}/>
    </div>
  )
}