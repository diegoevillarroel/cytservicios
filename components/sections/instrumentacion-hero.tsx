"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Gauge, Crosshair } from "lucide-react"

export function InstrumentacionHero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-12 px-6">
      {/* Background Glow Effects (Godly style) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-accent/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-blue-500/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute inset-0 bg-ink/40 backdrop-blur-[2px]" />
      </div>

      <div className="container-site relative z-10 w-full flex flex-col items-center text-center">
        {/* Minimalist Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="label-mono text-white/80">División Instrumentación</span>
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="display-2 text-white max-w-[14ch] mx-auto mb-6 tracking-tight"
        >
          Precisión que <br />
          <span className="text-white/40">define el control.</span>
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="body-lg text-white/60 max-w-2xl mx-auto mb-12"
        >
          Equipamiento industrial de alto rendimiento. Desde transmisores de presión y temperatura hasta calibradores de procesos de las marcas más exigentes del sector.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="https://wa.me/584241234567"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-ink font-semibold rounded-full overflow-hidden transition-transform hover:scale-[1.02]"
          >
            <span className="relative z-10">Cotizar Equipos</span>
            <ArrowUpRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#catalogo"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-full border border-white/20 transition-colors hover:bg-white/5"
          >
            <span>Ver Catálogo</span>
          </a>
        </motion.div>
      </div>

      {/* Decorative Grid Floor */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[30vh] pointer-events-none z-0"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          maskImage: "linear-gradient(to top, rgba(0,0,0,1), transparent)",
          WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1), transparent)",
        }}
      />
    </section>
  )
}
