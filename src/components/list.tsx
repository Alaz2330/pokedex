import Card from "./card"

export default async function List() {  
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
  const posts = await data.json();

  return (
    <ul className= "divide-y-2 divide-gray-50">
      {posts.results.map((post) => (
        <li key={post.name} className="flex justify-center gap-x-6 py-5">  
          <div>
            <div className="flex justify-items-center">
              <Card pokemon={post}/>
            </div>
          </div>        
        </li>
      ))}
    </ul>
  )
}