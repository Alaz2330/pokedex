export default async function list() {
  const data = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=10')
  const posts = await data.json()
  return (
    <ul className= "divide-y-2 divide-gray-50">
      {posts.results.map((pokemon) => (
        <li key={pokemon.id} className="flex justify-center gap-x-6 py-5">  
          <div>
            <div className="flex justify-items-center">
              <p>{pokemon.name}</p>
            </div>
          </div>        
        </li>
      ))}
    </ul>
  )
}