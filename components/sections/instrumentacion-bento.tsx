"use client"

import { motion } from "framer-motion"
import { Activity, Thermometer, Waves, Cpu, ShieldCheck } from "lucide-react"

const BENTO_ITEMS = [
  {
    title: "Transmisores de Presión",
    description: "Equipos Rosemount y WIKA de alta precisión para control de procesos críticos.",
    icon: <Activity className="w-6 h-6 text-accent" />,
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1",
    delay: 0.1,
  },
  {
    title: "Medición de Temperatura",
    description: "Sensores RTD, termopares y transmisores con diagnóstico avanzado.",
    icon: <Thermometer className="w-6 h-6 text-gold" />,
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-2",
    delay: 0.2,
  },
  {
    title: "Calibradores de Procesos",
    description: "Documentadores Fluke 754 y 744, comunicadores HART 375/475.",
    icon: <Cpu className="w-6 h-6 text-green" />,
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
    delay: 0.3,
  },
  {
    title: "Control de Nivel y Flujo",
    description: "Tecnología radar, ultrasónica y másicos coriolis para aplicaciones industriales complejas.",
    icon: <Waves className="w-6 h-6 text-accent-light" />,
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
    delay: 0.4,
  },
  {
    title: "Certificación y Trazabilidad",
    description: "Equipos con certificados de calibración trazables a patrones internacionales.",
    icon: <ShieldCheck className="w-6 h-6 text-white/50" />,
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1",
    delay: 0.5,
  },
]

export function InstrumentacionBento() {
  return (
    <section id="catalogo" className="py-24 px-6 relative z-10 bg-ink">
      <div className="container-site">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="heading-1 text-white mb-4"
          >
            Portafolio de Instrumentación
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="body-lg text-white/50 max-w-2xl"
          >
            Sistemas de medición y calibración para mantener sus variables de proceso dentro de los límites más estrictos.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[240px] gap-4">
          {BENTO_ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: item.delay }}
              className={`group relative flex flex-col justify-between p-8 rounded-3xl bg-[#11141A] border border-white/5 overflow-hidden transition-colors hover:bg-[#161A22] ${item.colSpan} ${item.rowSpan}`}
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="p-3 bg-white/5 w-fit rounded-2xl mb-6 ring-1 ring-white/10">
                {item.icon}
              </div>
              
              <div className="relative z-10 mt-auto">
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-[90%]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
