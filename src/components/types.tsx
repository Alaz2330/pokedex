export default function Types({name}) {

 return(
    <div className="flex flex-row gap-2 items-center ">                                
        <img src={`/type_icons/${name}.svg`} className="w-1/4"/>
        <p className="text-neutral-400 capitalize"> {name}</p>
    </div>
 )
}