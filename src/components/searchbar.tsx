'use client'

interface SearchBarProps{
  onSearchResult: Function
}

export default function SearchBar({onSearchResult}:SearchBarProps) {
  function handleSearch(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const nameOrId = formData.get('query');
    if (nameOrId){
      // const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}/`);
      // const pokemon = await data.json();
      onSearchResult(nameOrId);
    }else {
      onSearchResult();
    }
  }
  return (
    <div>
        <form onSubmit={handleSearch} className="flex flex-row gap-2">
          <label htmlFor="search-input" className="sr-only">Search by id or name</label>          
          <input 
          type="search"
          id="search-input"
          placeholder="Type a name or an id for search"
          name="query"
          className=""          
          />
          <button type="submit">Search</button>
        </form>        
    </div>
  )
}
