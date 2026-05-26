'use client'

import Card from "../components/card";
import List from "../components/list";
import SearchBar from "../components/searchbar"; 
import { useState } from "react";

export default function Search() {
    const [searchResult, setSearchResult] = useState();
    console.log(searchResult);
    return(
        <div>
        <div>
            <SearchBar onSearchResult={setSearchResult}/>
        </div>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            {!searchResult 
            ? <List/> 
            : <Card pokemon={searchResult} />
            }
        </div>
        </div>
    )
}
