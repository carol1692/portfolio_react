interface IconesTootipProps {
    urlIcon: string
    name: string
   
}

export default function IconesTootip({urlIcon, name}: IconesTootipProps) {
  return (
    <div className="group relative w-20 sm-4 p-2">
        <img 
            src={urlIcon}
            alt={name}
        />

        <div
            className="
                absolute inset-0
                flex items-center justify-center
                text-(--color-desert-sand-800) text-xs font-semibold
                opacity-0 scale-95
                group-hover:opacity-100 group-hover:scale-100
                transition-all duration-200
                bg-white/80 rounded
            "
        >
            {name}
        </div>
    </div>
  )
}
