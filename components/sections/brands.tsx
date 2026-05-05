"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, SealCheck } from "@phosphor-icons/react"
import { CONTACT } from "@/constants/contact"

const BRAND_CARDS = [
  {
    id: "fluke",
    name: "Fluke",
    accentColor: "#E31E24",
    tagline: "Calibración de procesos",
    description: "Líderes mundiales en calibradores de proceso industriales. Los modelos 744 y 754 con comunicación HART son el estándar de la industria petrolera y gasífera.",
    products: ["Fluke 754 – Documentador HART", "Fluke 744 – Calibrador de proceso", "Fluke 725 – Multímetro de proceso"],
    img: "/products/fluke-754.png",
    logoText: "FLUKE",
  },
  {
    id: "rosemount",
    name: "Rosemount",
    accentColor: "#005EB8",
    tagline: "Transmisores de presión",
    description: "La marca de referencia en medición de presión diferencial, manométrica y absoluta. Exactitud ±0.025% con protocolos HART y FOUNDATION Fieldbus.",
    products: ["Rosemount 3051C – Diferencial", "Rosemount 3051T – Manométrico", "Rosemount 3051S – Absoluto"],
    img: "/products/rosemount-3051.png",
    logoText: "ROSEMOUNT",
  },
  {
    id: "hart",
    name: "HART",
    accentColor: "#1a56db",
    tagline: "Comunicación de campo",
    description: "Protocolo estándar para comunicación con instrumentos inteligentes. El HART 375 permite configuración, diagnóstico y recalibración en campo sin interrumpir el proceso.",
    products: ["HART 375 – Comunicador universal", "HART 475 – Versión avanzada", "Interface HART multi-drop"],
    img: "/products/hart-375.png",
    logoText: "HART",
  },
]

export function BrandsSection() {
  return (
    <section id="marcas" className="py-32 bg-[#f9fafb] relative overflow-hidden">
      {/* Background dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #0f172a 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />
      {/* Ambient glow - Soft blue for light theme */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full opacity-[0.04] blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #2563eb 0%, transparent 70%)" }} />

      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div className="max-w-xl">
            <span className="label-mono text-slate-400 block mb-5">Marcas que trabajamos</span>
            <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-extrabold tracking-tight leading-[1] text-slate-900 mb-6">
              Tecnología de<br />
              <span className="text-slate-400">primer nivel.</span>
            </h2>
            <p className="text-lg font-medium text-slate-500 leading-relaxed max-w-[46ch]">
              Trabajamos exclusivamente con marcas líderes de la industria. Inventario auditado, equipos verificados y soporte directo con documentación original.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-700">Stock verificado</span>
            </div>
          </div>
        </div>

        {/* Brand cards — zigzag layout */}
        <div className="flex flex-col gap-8">
          {BRAND_CARDS.map((brand, i) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-[2.5rem] bg-white border border-slate-200/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)]`}>
                {/* Content side */}
                <div className={`lg:col-span-7 p-10 lg:p-14 flex flex-col justify-center gap-7 bg-white ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                  {/* Logo text treatment */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl border"
                      style={{ borderColor: brand.accentColor + "20", background: brand.accentColor + "08" }}>
                      <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: brand.accentColor }} />
                      <span className="font-black text-sm tracking-widest uppercase" style={{ color: brand.accentColor }}>
                        {brand.logoText}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{brand.tagline}</span>
                  </div>

                  <p className="text-base font-medium text-slate-500 leading-relaxed max-w-[52ch]">
                    {brand.description}
                  </p>

                  <ul className="flex flex-col gap-3">
                    {brand.products.map((p) => (
                      <li key={p} className="flex items-center gap-3.5 text-sm font-semibold text-slate-700">
                        <SealCheck size={16} weight="fill" style={{ color: brand.accentColor, flexShrink: 0 }} />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2">
                    <a
                      href={`https://wa.me/${CONTACT.phone.whatsapp}?text=Quiero información sobre equipos ${brand.name}`}
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold hover:gap-3 transition-all group"
                      style={{ color: brand.accentColor }}
                    >
                      Consultar disponibilidad
                      <ArrowRight size={15} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Image side */}
                <div className={`lg:col-span-5 relative min-h-[260px] lg:min-h-[360px] flex items-center justify-center p-10 border-t lg:border-t-0 ${i % 2 !== 0 ? "lg:order-1 lg:border-r" : "lg:border-l"} border-slate-100`}
                  style={{ background: `linear-gradient(135deg, ${brand.accentColor}05 0%, transparent 70%)` }}>
                  <motion.div
                    animate={{ y: [-8, 8, -8] }}
                    transition={{ duration: 7 + i, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-full max-w-[240px] aspect-square"
                  >
                    <Image src={brand.img} alt={`${brand.name} producto`} fill
                      className="object-contain drop-shadow-lg" sizes="240px" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other brands strip */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 p-8 lg:p-10 rounded-[2.5rem] border border-slate-200/50 bg-white shadow-sm"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">También trabajamos con</p>
          <div className="flex flex-wrap gap-4">
            {["Yokogawa", "ABB", "Siemens", "Druck", "Omega", "Wika", "Endress+Hauser"].map((b) => (
              <div key={b} className="px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-bold text-slate-600 tracking-tight hover:text-slate-900 hover:bg-slate-100 hover:border-slate-300 transition-colors cursor-default shadow-sm">
                {b}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
