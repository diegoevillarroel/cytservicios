"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, WhatsappLogo, SealCheck, Wrench, Package, Clock, ShieldCheck } from "@phosphor-icons/react"
import { CONTACT } from "@/constants/contact"

const EXPO_OUT = [0.16, 1, 0.3, 1]

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

function RentalCard({ item }: { item: typeof RENTAL_ITEMS[0] }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.2, ease: EXPO_OUT }}
      className="group flex flex-col gap-6"
    >
      <div className="relative h-72 bg-white rounded-[2.5rem] border border-slate-200/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden flex items-center justify-center p-8">
        <motion.div className="relative w-full h-full" whileHover={{ scale: 1.05 }} transition={{ duration: 0.6, ease: EXPO_OUT }}>
          <Image src={item.img} alt={`${item.brand} ${item.model}`} fill className="object-contain" sizes="320px" />
        </motion.div>
        <div className="absolute top-6 left-6 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#f9fafb] border border-slate-200">
          <span className="w-2 h-2 rounded-full" style={{ background: item.brandColor }} />
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-700">{item.brand}</span>
        </div>
        <div className={`absolute top-6 right-6 px-3 py-1 rounded-xl text-[10px] font-bold uppercase tracking-wider border ${item.tagClass}`}>
          {item.tag}
        </div>
      </div>
      <div className="px-2 flex flex-col gap-3">
        <h3 className="text-2xl font-bold tracking-tight text-slate-900">{item.fullName}</h3>
        <p className="text-sm font-medium text-slate-500 leading-relaxed">{item.description}</p>
        <div className="pt-3 border-t border-slate-200/50 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-mono text-2xl font-bold text-slate-900">${item.priceDay}</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">por día</span>
          </div>
          <a href={`https://wa.me/${CONTACT.phone.whatsapp}`} className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-50 border border-slate-200 text-slate-600 hover:bg-[#2563eb] hover:text-white transition-all">
            <ArrowRight size={18} weight="bold" />
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export function RentalSection() {
  return (
    <section className="py-32 bg-[#f9fafb]">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="mb-20">
          <span className="label-mono text-slate-400 block mb-6">Catálogo de Alquiler</span>
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">Equipos para <span className="text-slate-400">Entrega Inmediata.</span></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {RENTAL_ITEMS.map((item) => <RentalCard key={item.id} item={item} />)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-24">
          {GUARANTEES.map((g, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-200/50 shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-50 text-[#2563eb] border border-slate-100 mb-6">{g.icon}</div>
              <h4 className="font-bold text-slate-900 mb-2">{g.title}</h4>
              <p className="text-sm text-slate-500 font-medium">{g.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
