export function IndianOilLogo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Authentic IndianOil circular emblem */}
      <svg
        viewBox="0 0 100 100"
        className="w-9 h-9 shrink-0 drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="IndianOil Logo"
      >
        {/* Outer saffron orange disc */}
        <circle cx="50" cy="50" r="48" fill="#F37021" stroke="#D95305" strokeWidth="2" />
        
        {/* Inner subtle saffron ring detail */}
        <circle cx="50" cy="50" r="41" stroke="#FFE7D6" strokeWidth="1.5" strokeOpacity="0.5" />
        
        {/* Central navy blue horizontal banner */}
        <rect x="2" y="36" width="96" height="28" rx="3" fill="#002855" />
        
        {/* IndianOil typography inside banner */}
        <text
          x="50"
          y="54"
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontWeight="800"
          fontSize="11.5"
          letterSpacing="0.4"
        >
          IndianOil
        </text>
      </svg>

      {/* Branded typography lockup */}
      <div className="flex flex-col leading-tight">
        <span className="text-xs font-extrabold uppercase tracking-wider text-[#F37021]">
          IndianOil
        </span>
        <span className="text-sm md:text-base font-black tracking-tight text-[#002855]">
          Desai Petroleums
        </span>
      </div>
    </div>
  );
}
