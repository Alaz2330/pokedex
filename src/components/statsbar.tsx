interface StatsBarProps{
    label: string,
    value: number,
    max: number;
}

export default function StatsBar({label,value,max}: StatsBarProps){
    const percentage = (value / max) * 100;
    const textValue = value.toString()
    console.log(percentage)

    return(
        <div className="flex flex-row gap-6">
            <p className="text-neutral-400 w-70 capitalize">{label}</p>
            <p className="text-white">{textValue}</p>
            <div role="meter" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} className="w-full bg-gray-800 h-3 rounded-full overflow-hidden">
                <div className="bg-green-500 h-full rounded-full" style={{width: `${percentage}%`}}> </div>
            </div>
        </div>
    )
}