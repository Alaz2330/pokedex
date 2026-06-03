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
    <div className="flex justify-end mt-8">
        <form onSubmit={handleSearch} className="flex flex-row gap-2 bg-neutral-800 rounded-2xl hover:bg-neutral-600">
          <label htmlFor="search-input" className="sr-only text-neutral-400">Search by id or name</label>          
          <input 
          type="search"
          id="search-input"
          placeholder="Catch 'em all"
          name="query"     
          className="text-neutral-400 py-3 px-5 rounded-2xl  focus:outline-none"     
          />
          <button type="submit" className="text-neutral-400">Search</button>
        </form>        
    </div>
  )
}
