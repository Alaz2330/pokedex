import Image from "next/image";
import Search from "../components/search";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full flex-col justify-between py-12 px-12 md:py-16 md:px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="max-w-xs text-3xl font-bold tracking-tight text-black dark:text-zinc-50">
          Pokedex
        </h1>
          <Search/>  
      </main>
    </div>
  );
}
