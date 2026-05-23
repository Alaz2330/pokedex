export  default async function searchbar() {
  const data = await fetch('https://pokeapi.co/api/v2/pokemon/{id or name}/')
  const posts = await data.json() 
  return (
    <div>
      <label htmlFor="" className=""></label>
    </div>
  )
}