'use client'

import Card from "../components/card";
import List from "../components/list";
import SearchBar from "../components/searchbar"; 
import { useState } from "react";

export default function Search() {
    const [searchResult, setSearchResult] = useState();
    return(
        <div className="w-full">
            <SearchBar onSearchResult={setSearchResult}/>
        <div className="flex flex-col justify-center items-center gap-6 text-center sm:items-start sm:text-left">
            {!searchResult 
            ? <List/> 
            : <Card name={searchResult} />
            }
        </div>
        </div>
    )
}
