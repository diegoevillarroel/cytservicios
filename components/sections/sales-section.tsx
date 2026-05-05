"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { WhatsappLogo, SealCheck } from "@phosphor-icons/react"
import { CONTACT } from "@/constants/contact"

const EXPO_OUT = [0.16, 1, 0.3, 1]

export function SalesSection() {
  return (
    <section className="py-32 bg-white">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="bg-[#f9fafb] rounded-[3rem] overflow-hidden border border-slate-200/50 shadow-xl grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 lg:p-24 flex flex-col justify-center gap-8">
            <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white border border-slate-200 w-max">
              <span className="w-2 h-2 rounded-full bg-[#005EB8]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-700">Emerson · Rosemount</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[0.9]">Venta de <br /><span className="text-slate-400">Transmisores.</span></h2>
            <p className="text-xl font-medium text-slate-500 leading-relaxed max-w-[40ch]">Equipos Rosemount 3051 nuevos, configurados con protocolo HART, listos para integración inmediata.</p>
            <ul className="flex flex-col gap-4">
              {["Presión diferencial y absoluta", "Protocolos HART 5 / 7", "Certificados NIST incluidos"].map(item => (
                <li key={item} className="flex items-center gap-4 text-lg font-bold text-slate-700">
                  <SealCheck size={24} weight="fill" className="text-[#2563eb]" />
                  {item}
                </li>
              ))}
            </ul>
            <a href={`https://wa.me/${CONTACT.phone.whatsapp}`} target="_blank" className="inline-flex items-center gap-3 px-10 py-5 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-colors w-max shadow-lg">
              <WhatsappLogo size={24} weight="fill" />
              Cotizar ahora
            </a>
          </div>
          <div className="relative h-[500px] lg:h-auto bg-white flex items-center justify-center p-12">
            <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="relative w-full max-w-[400px] aspect-square">
              <Image src="/products/rosemount-3051.png" alt="Rosemount 3051" fill className="object-contain" sizes="400px" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
