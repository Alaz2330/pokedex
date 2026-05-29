'use client'

import List from "../components/list";
import SearchBar from "../components/searchbar"; 
import { useState } from "react";

export default function Search() {
    const [searchResult, setSearchResult] = useState();
    return(
        <div className="w-full">
            <SearchBar onSearchResult={setSearchResult}/>            
            <List result={searchResult}/>             
        </div>
    )
}
