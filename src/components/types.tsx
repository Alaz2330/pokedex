export default function Types({name}) {

 return(
    <div className="flex flex-row gap-2 items-center justify-center">                                
        <img src={`/type_icons/${name}.svg`} alt="type" className="w-6"/>
        <p className="text-neutral-400 capitalize grow-0">{name}</p>
    </div>
 )
}