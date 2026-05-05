"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, WhatsappLogo, SealCheck, Wrench, Package, Clock, ShieldCheck } from "@phosphor-icons/react"
import { CONTACT } from "@/constants/contact"

const EXPO_OUT = [0.16, 1, 0.3, 1]

// ─── Brand data ────────────────────────────────────────
const BRANDS = [
  { name: "Fluke", color: "#E31E24", desc: "Calibradores de proceso" },
  { name: "Rosemount", color: "#005EB8", desc: "Transmisores de presión" },
  { name: "Emerson", color: "#007AC2", desc: "Soluciones de proceso" },
  { name: "HART", color: "#1a56db", desc: "Comunicadores de campo" },
  { name: "Yokogawa", color: "#005BAA", desc: "Instrumentación inteligente" },
  { name: "ABB", color: "#FF000F", desc: "Automatización industrial" },
  { name: "Siemens", color: "#009999", desc: "Sistemas de control" },
  { name: "Druck", color: "#333333", desc: "Bombas de presión" },
]

const RENTAL_ITEMS = [
  {
    id: "fluke-754",
    brand: "Fluke",
    brandColor: "#E31E24",
    model: "754",
    fullName: "Fluke 754",
    description: "Calibrador documentador con comunicación HART. Medición de loop 4–20 mA.",
    img: "/products/fluke-754.png",
    priceDay: 110,
    priceWeek: 715,
    tag: "El más solicitado",
    tagClass: "bg-[#2563eb]/10 text-[#2563eb] border-[#2563eb]/20",
  },
  {
    id: "fluke-744",
    brand: "Fluke",
    brandColor: "#E31E24",
    model: "744",
    fullName: "Fluke 744",
    description: "Calibrador de procesos con HART y linearización de termopar. Verificación de lazos.",
    img: "/products/fluke-744.png",
    priceDay: 85,
    priceWeek: 550,
    tag: "Disponible",
    tagClass: "bg-[#059669]/10 text-[#059669] border-[#059669]/20",
  },
  {
    id: "hart-375",
    brand: "Emerson",
    brandColor: "#007AC2",
    model: "HART 375",
    fullName: "HART 375",
    description: "Comunicador de campo universal. Configuración para +1,000 transmisores inteligentes.",
    img: "/products/hart-375.png",
    priceDay: 95,
    priceWeek: 610,
    tag: "Disponible",
    tagClass: "bg-[#059669]/10 text-[#059669] border-[#059669]/20",
  },
  {
    id: "bomba-presion",
    brand: "Druck",
    brandColor: "#333333",
    model: "Bomba Manual",
    fullName: "Druck DPI 610",
    description: "Kit de bomba manual de presión con módulo de referencia certificado hasta 600 bar.",
    img: "/products/bomba-presion.png",
    priceDay: 55,
    priceWeek: 340,
    tag: "Kit completo",
    tagClass: "bg-[#d97706]/10 text-[#d97706] border-[#d97706]/20",
  },
]

const GUARANTEES = [
  { icon: <Clock size={22} weight="fill" />, title: "Entrega en 24h", desc: "Despacho prioritario con seguimiento en tiempo real a todo el país." },
  { icon: <ShieldCheck size={22} weight="fill" />, title: "NIST Trazable", desc: "Certificados de calibración con trazabilidad internacional incluidos." },
  { icon: <Wrench size={22} weight="fill" />, title: "Soporte técnico", desc: "Asistencia remota por WhatsApp en menos de 2 horas hábiles." },
  { icon: <Package size={22} weight="fill" />, title: "Kits completos", desc: "Accesorios, cables, estuche rígido y batería de respaldo incluidos." },
]

// ─── Infinite Marquee Brands ──────────────────────────────────────────────────
const BrandMarquee = React.memo(function BrandMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-12 border-y border-slate-200/50 bg-[#f9fafb]">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f9fafb] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f9fafb] to-transparent z-10 pointer-events-none" />
      <div className="marquee-track flex gap-14 w-max">
        {[...BRANDS, ...BRANDS].map((b, i) => (
          <div key={i} className="flex items-center gap-3 shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default group">
            <span
              className="w-3 h-3 rounded-full shrink-0 transition-transform duration-300 group-hover:scale-125"
              style={{ background: b.color }}
            />
            <span className="font-sans font-black text-2xl tracking-tighter text-slate-900 whitespace-nowrap">{b.name}</span>
            <span className="text-xs text-slate-500 font-medium hidden group-hover:inline transition-all">{b.desc}</span>
          </div>
        ))}
      </div>
    </div>
  )
})

// ─── Rental Product Card ──────────────────────────────────────────────────────
function RentalCard({ item }: { item: typeof RENTAL_ITEMS[0] }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.2, ease: EXPO_OUT }}
      className="group flex flex-col gap-6"
    >
      {/* Container Image - Bento 2.0 specs: pure white, 1px border, large shadow */}
      <div className="relative h-72 bg-white rounded-[2.5rem] border border-slate-200/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden flex items-center justify-center p-8">
        <motion.div
          className="relative w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: EXPO_OUT }}
        >
          <Image src={item.img} alt={`${item.brand} ${item.model}`} fill
            className="object-contain drop-shadow-sm" sizes="(max-width:768px) 100vw, 320px" />
        </motion.div>
        
        {/* Brand badge */}
        <div className="absolute top-6 left-6 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#f9fafb] border border-slate-200">
          <span className="w-2 h-2 rounded-full shrink-0" style={{ background: item.brandColor }} />
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-700">{item.brand}</span>
        </div>
        {/* Status tag */}
        <div className={`absolute top-6 right-6 px-3 py-1 rounded-xl text-[10px] font-bold uppercase tracking-wider border ${item.tagClass}`}>
          {item.tag}
        </div>
      </div>

      {/* Content Outside Card */}
      <div className="px-2 flex flex-col gap-3">
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-1">{item.fullName}</h3>
          <p className="text-sm font-medium text-slate-500 leading-relaxed">{item.description}</p>
        </div>
        
        <div className="pt-3 border-t border-slate-200/50 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-mono text-2xl font-bold tracking-tighter text-slate-900">${item.priceDay}</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">por día</span>
          </div>
          <a
            href={`https://wa.me/${CONTACT.phone.whatsapp}?text=Quiero consultar disponibilidad del ${item.brand} ${item.model}`}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-50 border border-slate-200 text-slate-600 hover:bg-[#2563eb] hover:text-white hover:border-[#2563eb] hover:scale-105 shadow-sm transition-all duration-300"
          >
            <ArrowRight size={18} weight="bold" />
          </a>
        </div>
      </div>
    </motion.article>
  )
}

// ─── Rosemount Feature Bento ──────────────────────────────────────────────────
function RosemountBento() {
  return (
    <div id="venta" className="w-full bg-white rounded-[2.5rem] overflow-hidden relative mt-24 border border-slate-200/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #0f172a 1px, transparent 1px)",
          backgroundSize: "28px 28px"
        }} />

      <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
        <div className="p-12 lg:p-20 flex flex-col justify-center gap-8">
          {/* Brand badge */}
          <div className="flex flex-wrap items-center gap-3 w-max">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200">
              <span className="w-2 h-2 rounded-full bg-[#005EB8]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-700">Emerson · Rosemount</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#2563eb]/10 border border-[#2563eb]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#2563eb]">Distribuidor autorizado</span>
            </div>
          </div>

          <h2 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[0.92] text-slate-900">
            Transmisores<br />
            <span className="text-slate-400">Rosemount 3051.</span>
          </h2>

          <p className="text-lg font-medium text-slate-500 leading-relaxed max-w-[40ch]">
            Precisión ±0.025% en medición de presión. Equipos nuevos, configurados con protocolo HART o FOUNDATION Fieldbus, listos para integración inmediata.
          </p>

          <ul className="flex flex-col gap-3.5">
            {[
              "Presión diferencial, manométrica y absoluta",
              "Protocolos HART 5 / HART 7 y FOUNDATION Fieldbus",
              "Certificados de garantía y calibración incluidos",
              "Entrega con documentación técnica completa",
            ].map((item) => (
              <li key={item} className="flex items-center gap-4 text-[0.9375rem] font-semibold text-slate-700">
                <SealCheck size={18} weight="fill" className="text-[#2563eb] shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="pt-2">
            <a href={`https://wa.me/${CONTACT.phone.whatsapp}?text=Quiero cotizar un Rosemount 3051`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-slate-900 text-white rounded-[2.5rem] font-bold text-sm hover:bg-slate-800 shadow-md transition-colors">
              <WhatsappLogo size={18} weight="fill" />
              Cotizar transmisor
            </a>
          </div>
        </div>

        <div className="relative h-[400px] lg:h-auto flex items-center justify-center p-12 lg:p-16 border-t lg:border-t-0 lg:border-l border-slate-100 bg-[#f9fafb]">
          <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent pointer-events-none" />
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-[340px] aspect-square"
          >
            <Image src="/products/rosemount-3051.png" alt="Rosemount 3051 Transmisor de Presión"
              fill className="object-contain drop-shadow-xl" sizes="340px" />
          </motion.div>
          {/* Spec chips */}
          <div className="absolute bottom-10 left-8 flex flex-col gap-2">
            {[["±0.025%", "Exactitud"], ["–40 a 85°C", "Temperatura"], ["250 bar", "Presión máx."]].map(([val, lbl]) => (
              <div key={lbl} className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/90 border border-slate-200/80 shadow-sm backdrop-blur-md">
                <span className="font-mono text-sm font-bold text-slate-900">{val}</span>
                <span className="text-xs text-slate-500 font-medium">{lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export function ServicesBento() {
  return (
    <>
      <BrandMarquee />

      {/* Rental Section */}
      <section id="alquiler" className="py-32 bg-[#f9fafb]">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">

          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
            <div className="max-w-xl">
              <span className="label-mono text-slate-400 block mb-6">Catálogo de Alquiler</span>
              <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-extrabold tracking-tight leading-[1] text-slate-900 mb-5">
                Instrumentación<br />
                <span className="text-slate-400">lista para campo.</span>
              </h2>
              <p className="text-lg font-medium text-slate-500 leading-relaxed max-w-[48ch]">
                Equipos de medición y calibración mantenidos bajo estrictos estándares metrológicos. Con certificación incluida.
              </p>
            </div>
            <a href={`https://wa.me/${CONTACT.phone.whatsapp}`} target="_blank" rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-[2.5rem] shadow-sm hover:bg-slate-50 hover:text-slate-900 transition-colors self-start md:self-auto">
              <WhatsappLogo size={16} weight="fill" className="text-[#25D366]" />
              Ver disponibilidad
            </a>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {RENTAL_ITEMS.map((item) => (
              <RentalCard key={item.id} item={item} />
            ))}
          </div>

          {/* Guarantees */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: EXPO_OUT, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-24"
          >
            {GUARANTEES.map((g, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-200/50 shadow-sm flex flex-col gap-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-50 text-[#2563eb] border border-slate-100">
                  {g.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 tracking-tight text-base mb-2">{g.title}</h4>
                  <p className="text-sm font-medium text-slate-500 leading-relaxed">{g.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Rosemount Bento */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: EXPO_OUT }}
          >
            <RosemountBento />
          </motion.div>
        </div>
      </section>
    </>
  )
}
