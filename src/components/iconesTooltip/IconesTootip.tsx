interface IconesTooltipProps {
  urlIcon: string
  name: string
}

export default function IconesTooltip({ urlIcon, name }: IconesTooltipProps) {
  return (
    <div className="group relative flex items-center justify-center">
      <img
        src={urlIcon}
        alt={name}
        className="transition-transform group-hover:scale-110"
      />

      <div
        className="
          pointer-events-none
          absolute left-1/2 -translate-x-1/2
          whitespace-nowrap
          rounded bg-white px-2 py-1
          text-xs font-semibold
          text-(--color-desert-sand-800)
          opacity-0 translate-y-1
          transition-all duration-200
          group-hover:opacity-100 group-hover:translate-y-0 
          shadow
          z-50
        "
      >
        {name}
      </div>
    </div>
  )
}
