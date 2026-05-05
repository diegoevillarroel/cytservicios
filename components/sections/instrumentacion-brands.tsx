"use client"

// If BRAND_LOGOS is not available or doesn't have enough dark-mode logos, we use a custom list of text or SVGs.
// Since we want to ensure it works, we'll map an array of brand names for an industrial marquee.

const BRANDS = [
  "ROSEMOUNT",
  "FLUKE",
  "WIKA",
  "ENDRESS+HAUSER",
  "YOKOGAWA",
  "EMERSON",
  "SIEMENS",
  "HONEYWELL",
  "VEGA",
  "KROHNE"
]

export function InstrumentacionBrands() {
  return (
    <section className="py-16 bg-ink border-y border-white/5 overflow-hidden">
      <div className="container-site mb-8 text-center">
        <p className="label-mono text-white/40">Confiamos en los líderes mundiales</p>
      </div>
      
      <div className="relative w-full flex overflow-hidden">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-ink to-transparent z-10 pointer-events-none" />
        
        <div className="flex gap-16 items-center min-w-full marquee-track pr-16">
          {BRANDS.map((brand, i) => (
            <span key={`b1-${i}`} className="display-3 text-white/10 font-bold whitespace-nowrap select-none hover:text-white/30 transition-colors duration-300">
              {brand}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {BRANDS.map((brand, i) => (
            <span key={`b2-${i}`} className="display-3 text-white/10 font-bold whitespace-nowrap select-none hover:text-white/30 transition-colors duration-300">
              {brand}
            </span>
          ))}
        </div>
        
        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-ink to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  )
}
