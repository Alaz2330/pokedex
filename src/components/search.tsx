'use client'

import Card from "../components/card";
import List from "../components/list";
import SearchBar from "../components/searchbar"; 
import { useState } from "react";

export default function Search() {
    const [searchResult, setSearchResult] = useState();
    if (searchResult == undefined) {
        let content = <List/>
    } else {
        let content = <Card pokemon={searchResult} />
    }

    return(
        <div>
        <div>
            <SearchBar onSearchResult={setSearchResult}/>
        </div>
        <div>
            
        </div>
        </div>
    )
}
