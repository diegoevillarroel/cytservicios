"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Gauge, Wrench, Package, ShieldCheck, WhatsappLogo } from "@phosphor-icons/react"
import { Footer } from "@/components/sections/footer"
import { WhatsAppCTA } from "@/components/ui/whatsapp-cta"
import Image from "next/image"

const EXPO_OUT = [0.16, 1, 0.3, 1]

function HubCard({ 
  title, 
  subtitle, 
  href, 
  icon: Icon, 
  image, 
  className = "" 
}: { 
  title: string; 
  subtitle: string; 
  href: string; 
  icon: any; 
  image?: string;
  className?: string;
}) {
  return (
    <Link href={href} className={`group block relative overflow-hidden rounded-[2.5rem] border border-slate-200/50 bg-white p-8 md:p-12 transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] hover:-translate-y-1 ${className}`}>
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
          <div className="mb-8 flex items-center justify-between">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-900 ring-1 ring-slate-100 transition-colors group-hover:bg-slate-900 group-hover:text-white">
              <Icon size={28} weight="duotone" />
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-100 text-slate-400 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4">
              <ArrowRight size={20} weight="bold" />
            </div>
          </div>
          <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">{title}</h3>
          <p className="mt-4 text-lg font-medium leading-relaxed text-slate-500 max-w-[28ch]">{subtitle}</p>
        </div>
        
        <div className="mt-12 flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">
          Explorar sección
          <div className="h-[1px] w-8 bg-slate-200 group-hover:w-12 group-hover:bg-slate-900 transition-all duration-500" />
        </div>
      </div>

      {image && (
        <div className="absolute right-[-10%] bottom-[-10%] h-[60%] w-[60%] opacity-[0.03] transition-all duration-700 group-hover:opacity-[0.08] group-hover:scale-110 pointer-events-none">
           <Image src={image} alt="" fill className="object-contain" />
        </div>
      )}
    </Link>
  )
}

export default function LandingHub() {
  return (
    <main className="bg-[#f9fafb]">
      {/* Header / Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6">
        <div className="absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #0f172a 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }} />
          
        <div className="container-site relative z-10 mx-auto max-w-[1400px]">
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EXPO_OUT }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-[2rem] bg-white border border-slate-200 shadow-sm mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">Centro de Soluciones CyT</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EXPO_OUT, delay: 0.1 }}
              className="text-[clamp(3.5rem,8vw,8rem)] font-extrabold tracking-tighter leading-[0.85] text-slate-900"
            >
              Precisión <br />
              <span className="text-slate-400">Sin Límites.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EXPO_OUT, delay: 0.2 }}
              className="mt-10 text-xl md:text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed"
            >
              Navegue por nuestras divisiones especializadas. Todo el soporte que su industria necesita en un solo lugar.
            </motion.p>
          </div>

          {/* Hub Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:auto-rows-[420px]">
            <HubCard 
              title="Instrumentación" 
              subtitle="Equipos de medición, calibradores y comunicación de procesos."
              href="/instrumentacion"
              icon={Gauge}
              className="lg:col-span-8"
              image="/logo-cyt.svg"
            />
            <HubCard 
              title="Alquiler" 
              subtitle="Disponibilidad inmediata de equipos certificados Fluke y HART."
              href="/alquiler"
              icon={Package}
              className="lg:col-span-4"
            />
            <HubCard 
              title="Venta" 
              subtitle="Distribución de transmisores Rosemount 3051 nuevos y garantizados."
              href="/venta"
              icon={ShieldCheck}
              className="lg:col-span-5"
            />
            <HubCard 
              title="Soporte Técnico" 
              subtitle="Servicio especializado en campo para optimizar sus operaciones."
              href="/servicio-tecnico"
              icon={Wrench}
              className="lg:col-span-7"
            />
          </div>
          
          {/* Quick Contact Bar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: EXPO_OUT, delay: 0.4 }}
            className="mt-12 flex flex-col md:flex-row items-center justify-between p-8 rounded-[2.5rem] bg-slate-900 text-white overflow-hidden relative"
          >
             <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
               <div className="flex -space-x-3">
                 {[1,2,3].map(i => (
                   <div key={i} className="w-12 h-12 rounded-full border-2 border-slate-900 bg-slate-800 overflow-hidden relative">
                      <div className="absolute inset-0 bg-[#2563eb]/20" />
                   </div>
                 ))}
               </div>
               <div>
                 <h4 className="text-xl font-bold tracking-tight">Atención Prioritaria</h4>
                 <p className="text-slate-400 text-sm font-medium">Hable con un especialista ahora mismo.</p>
               </div>
             </div>
             
             <Link href="https://wa.me/584241234567" target="_blank" className="relative z-10 mt-6 md:mt-0 flex items-center gap-3 px-8 py-4 bg-[#2563eb] text-white rounded-full font-bold hover:bg-[#1d4ed8] transition-colors shadow-lg">
                <WhatsappLogo size={22} weight="fill" />
                WhatsApp Directo
             </Link>
             
             {/* Background glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[200%] bg-[#2563eb]/20 blur-[100px] pointer-events-none" />
          </motion.div>
        </div>
      </section>
      
      <Footer />
      <WhatsAppCTA />
    </main>
  )
}
