"use client"

import { motion } from "framer-motion"
import { Wrench, CheckCircle, ShieldCheck, Clock } from "lucide-react"
import { Footer } from "@/components/sections/footer"
import { WhatsAppCTA } from "@/components/ui/whatsapp-cta"

export default function ServicioTecnicoPage() {
  return (
    <main className="bg-[#f9fafb] min-h-screen">
      <section className="py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20 text-center">
            <span className="label-mono text-[#2563eb] block mb-4">Servicio Especializado</span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
              Soporte Técnico <br />
              <span className="text-slate-400">en Campo y Taller.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
              Diagnóstico, mantenimiento y configuración de instrumentación industrial con estándares internacionales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Calibración",
                desc: "Verificación de lazos y calibración de instrumentos con trazabilidad NIST.",
                icon: <CheckCircle className="w-8 h-8 text-[#2563eb]" />,
              },
              {
                title: "Mantenimiento",
                desc: "Servicio preventivo y correctivo para transmisores y comunicadores.",
                icon: <Wrench className="w-8 h-8 text-[#2563eb]" />,
              },
              {
                title: "Configuración",
                desc: "Parametrización de protocolos HART, Foundation Fieldbus y Profibus.",
                icon: <ShieldCheck className="w-8 h-8 text-[#2563eb]" />,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] border border-slate-200/50 shadow-sm"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppCTA />
    </main>
  )
}
