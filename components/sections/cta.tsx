"use client"

import React from "react"
import { motion } from "framer-motion"
import { WhatsappLogo, Phone, ArrowRight, SealCheck } from "@phosphor-icons/react"
import { CONTACT } from "@/constants/contact"

export function CTASection() {
  return (
    <section id="contacto" className="py-32 bg-[#f9fafb] relative overflow-hidden">
      {/* Radial ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full opacity-[0.03] blur-[80px]"
          style={{ background: "radial-gradient(ellipse, #2563eb 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full opacity-[0.02] blur-[80px]"
          style={{ background: "radial-gradient(ellipse, #059669 0%, transparent 70%)" }} />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #0f172a 1px, transparent 1px)",
            backgroundSize: "30px 30px"
          }} />
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            {/* Live status */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white border border-slate-200 shadow-sm w-max">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#059669] opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#059669]" />
              </span>
              <span className="font-mono text-sm font-bold text-slate-600">Equipo disponible hoy</span>
            </div>

            <h2 className="text-[clamp(3rem,5vw,5rem)] font-extrabold tracking-tighter leading-[0.95] text-slate-900" style={{ textWrap: "balance" }}>
              Su proyecto no<br />
              <span className="text-slate-400">puede esperar.</span>
            </h2>

            <p className="text-lg font-medium text-slate-500 max-w-[46ch] leading-relaxed">
              Contáctenos y reciba cotización en menos de una hora. Entrega de equipos calibrados en 24 horas en todo Venezuela.
            </p>

            {/* Trust points */}
            <div className="flex flex-col gap-3">
              {[
                "Certificación trazable NIST incluida sin costo adicional",
                "Soporte técnico remoto por WhatsApp dentro de 2 horas",
                "Garantía de funcionamiento en todo el período de alquiler",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <SealCheck size={16} weight="fill" className="text-[#2563eb] shrink-0" />
                  <span className="text-sm font-semibold text-slate-600">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="p-8 lg:p-10 rounded-[2.5rem] bg-white border border-slate-200/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col gap-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-1.5">Solicite cotización</h3>
                <p className="text-sm text-slate-500 font-medium">Respuesta garantizada en menos de 60 minutos</p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={`https://wa.me/${CONTACT.phone.whatsapp}?text=Buenos días, necesito información sobre alquiler de equipos de instrumentación`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full px-6 py-4 bg-[#25D366] text-white rounded-[1.5rem] font-bold text-sm hover:bg-[#22c55e] transition-colors shadow-sm"
                >
                  <WhatsappLogo size={20} weight="fill" />
                  Chatear por WhatsApp
                  <ArrowRight size={16} weight="bold" className="ml-auto" />
                </a>

                <a
                  href={CONTACT.phone.link}
                  className="flex items-center gap-3 w-full px-6 py-4 bg-slate-50 text-slate-900 rounded-[1.5rem] font-bold text-sm hover:bg-slate-100 transition-colors border border-slate-200 shadow-sm"
                >
                  <Phone size={18} weight="fill" />
                  {CONTACT.phone.display}
                  <span className="ml-auto text-xs text-slate-400 font-bold uppercase tracking-wider">Lun–Vie 8–18h</span>
                </a>

                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-3 w-full px-6 py-4 bg-white text-slate-500 rounded-[1.5rem] font-medium text-sm hover:text-slate-900 hover:bg-slate-50 transition-colors border border-slate-200 shadow-sm"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  {CONTACT.email}
                </a>
              </div>

              <p className="text-xs text-slate-400 text-center font-bold uppercase tracking-widest border-t border-slate-100 pt-6">
                Más de 127 proyectos entregados
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
