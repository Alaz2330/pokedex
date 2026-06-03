export default async function PokemonDetails({params}) {
    const { name } = await params;

    return( 
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
              <main className="flex flex-1 w-full flex-col justify-between py-12 px-12 md:py-16 md:px-16 bg-neutral-950 dark:bg-black sm:items-start">
                <p className="text-white">Pokemon name: {name} </p>
              </main>
        </div>
    )
}