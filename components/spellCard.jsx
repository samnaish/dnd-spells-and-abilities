export default function SpellCard ({ spell }) {
    return (
        <div className="bg-cyan-600 border-orange-600">
            <li className="list-none max-w-64 p-4 grid grid-cols-1 border-orange-600">
        <hgroup className="mb-1 text-red-800">
            <h4 className="mb-1 text-red-800">{spell.name}</h4>
            <small>
            {spell.level > 0 && `Level ${spell.level} `}
            {spell.school.name}
            {spell.level === 0 && " cantrip"}
            </small>
        </hgroup>
        <div className="grid grid-cols-1">
            {/* <Point text="Casting Time" info={spell.casting_time}/> */}
            <p className="flex gap-4 flex-col p-8 text">
            <strong className="text-center pr-1">Casting Time:</strong>
            {spell.casting_time}
            </p>
            <p className="flex gap-4 flex-col p-8 text">
            <strong className="text-center pr-1">Range:</strong>
            {spell.range}
            </p>
            <p className="flex gap-4 flex-col p-8 text">
            <strong className="text-center pr-1">Components:</strong>
            {spell.components.join(", ")}
            </p>
            <p className="flex gap-4 flex-col p-8 text">
            <strong className="text-center pr-1">Duration:</strong>
            {spell.duration}
            </p>
        </div>
        </li>
        </div>
        
    )
}
