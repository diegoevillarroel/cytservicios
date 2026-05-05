"use client"

import React, { useRef, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useMotionValue } from "framer-motion"
import { ArrowRight, WhatsappLogo, SealCheck, List, X } from "@phosphor-icons/react"
import { CONTACT } from "@/constants/contact"

// ─── Constants for Motion ──────────────────────────────────────────────────────
const EXPO_OUT = [0.16, 1, 0.3, 1]
const SPRING_INTERACTIVE = { type: "spring", stiffness: 100, damping: 20 }

// ─── Magnetic Button ──────────────────────────────────────────────────────────
function MagneticButton({ children, className, href }: { children: React.ReactNode; className?: string; href?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    x.set((e.clientX - (left + width / 2)) * 0.22)
    y.set((e.clientY - (top + height / 2)) * 0.22)
  }
  const onLeave = () => { x.set(0); y.set(0) }

  const el = (
    <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ x, y }} whileTap={{ scale: 0.98 }} transition={SPRING_INTERACTIVE}
      className={`relative inline-flex items-center justify-center ${className ?? ""}`}>
      {children}
    </motion.div>
  )
  if (!href) return el
  if (href.startsWith("http")) return <a href={href} target="_blank" rel="noopener noreferrer" className="block w-max">{el}</a>
  return <Link href={href} className="block w-max">{el}</Link>
}

// ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EXPO_OUT }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-7xl"
      >
        <div
          className={`flex items-center justify-between px-6 py-3.5 rounded-[2rem] border transition-colors duration-500 ${
            scrolled
              ? "bg-white/80 backdrop-blur-2xl border-slate-200/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]"
              : "bg-transparent border-transparent"
          }`}
        >
          <Link href="/" className="flex items-center shrink-0">
            <Image src="/logo-cyt.svg" alt="CyT Servicios" width={180} height={40} priority className="w-auto h-7" />
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-500">
            {[["Alquiler", "#alquiler"], ["Venta", "#venta"], ["Marcas", "#marcas"], ["Contacto", "#contacto"]].map(([label, href]) => (
              <a key={label} href={href} className="hover:text-slate-900 transition-colors duration-300">{label}</a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <MagneticButton href={`https://wa.me/${CONTACT.phone.whatsapp}`}>
              <span className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-slate-900 text-white rounded-[2rem] text-sm font-bold tracking-tight hover:bg-slate-800 transition-colors">
                <WhatsappLogo size={15} weight="fill" />
                Cotizar ahora
              </span>
            </MagneticButton>
            <button
              onClick={() => setOpen(true)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-900"
              aria-label="Abrir menú"
            >
              <List size={20} weight="bold" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-[#f9fafb] flex flex-col p-8 md:hidden"
        >
          <div className="flex items-center justify-between mb-12">
            <Image src="/logo-cyt.svg" alt="CyT Servicios" width={160} height={36} className="w-auto h-7" />
            <button onClick={() => setOpen(false)} className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-900">
              <X size={20} weight="bold" />
            </button>
          </div>
          <nav className="flex flex-col gap-8">
            {[["Alquiler de equipos", "#alquiler"], ["Venta de transmisores", "#venta"], ["Marcas que trabajamos", "#marcas"], ["Contacto", "#contacto"]].map(([label, href]) => (
              <a key={label} href={href} onClick={() => setOpen(false)}
                className="text-4xl font-bold text-slate-400 hover:text-slate-900 tracking-tight transition-colors">
                {label}
              </a>
            ))}
          </nav>
          <div className="mt-auto">
            <a href={`https://wa.me/${CONTACT.phone.whatsapp}`} target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center gap-2 w-full py-4 bg-slate-900 text-white rounded-[2rem] font-bold text-lg">
              <WhatsappLogo size={22} weight="fill" />
              Cotizar por WhatsApp
            </a>
          </div>
        </motion.div>
      )}
    </>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
const containerV = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
}
const itemV = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: EXPO_OUT } }
}

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full flex items-center bg-[#f9fafb] overflow-hidden pt-32 pb-20">
      <Nav />

      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ── Left: Copy ── */}
          <motion.div variants={containerV} initial="hidden" animate="show"
            className="lg:col-span-6 flex flex-col gap-7">

            <motion.div variants={itemV}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-[2rem] bg-white border border-slate-200 w-max shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] animate-pulse" />
              <span className="label-mono text-slate-600">Equipos calibrados · Entrega en 24h</span>
            </motion.div>

            <motion.h1 variants={itemV}
              className="text-[clamp(3.5rem,7vw,7rem)] font-extrabold tracking-tighter leading-[0.9] text-slate-900"
              style={{ textWrap: "balance" }}>
              Precisión<br />
              <span className="text-slate-400">Industrial</span><br />
              Certificada.
            </motion.h1>

            <motion.p variants={itemV}
              className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-[44ch] font-medium">
              Alquiler, venta y servicio técnico de calibradores, transmisores y comunicadores HART.
              Despliegue inmediato con trazabilidad NIST.
            </motion.p>

            <motion.ul variants={itemV} className="flex flex-col gap-3.5">
              {[
                { text: "Fluke 744 & 754 + HART 375 en inventario", iconColor: "text-[#2563eb]" },
                { text: "Transmisores Rosemount 3051 nuevos", iconColor: "text-slate-400" },
                { text: "Soporte técnico certificado en campo", iconColor: "text-slate-400" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3.5 text-[0.9375rem] font-semibold text-slate-700">
                  <SealCheck size={18} weight="fill" className={item.iconColor} />
                  {item.text}
                </li>
              ))}
            </motion.ul>

            <motion.div variants={itemV} className="flex flex-wrap items-center gap-5 pt-4">
              <MagneticButton href={`https://wa.me/${CONTACT.phone.whatsapp}?text=Hola, necesito información sobre equipos de instrumentación`}>
                <span className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#2563eb] text-white font-bold rounded-[2.5rem] overflow-hidden transition-colors hover:bg-[#1d4ed8] shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)]">
                  <WhatsappLogo size={18} weight="fill" />
                  Consultar inventario
                </span>
              </MagneticButton>
              <a href="#alquiler" className="group flex items-center gap-2 px-2 py-4 text-slate-500 font-semibold hover:text-slate-900 transition-colors text-sm">
                Ver catálogo completo
                <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right: Product showcase (Asymmetric Gallery Style) ── */}
          <div className="lg:col-span-6 relative h-[580px] lg:h-[680px] hidden md:block">
            {/* Main card - Clean White Bento */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: EXPO_OUT, delay: 0.2 }}
              className="absolute inset-y-8 right-0 left-6 bg-white border border-slate-200/50 rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute inset-0 flex items-center justify-center p-16 pointer-events-none">
                <div className="relative w-full h-full max-w-[380px]">
                  <Image src="/products/fluke-754.png" alt="Fluke 754 Calibrador Documentador" fill
                    className="object-contain" sizes="(max-width:1280px) 50vw, 500px" priority />
                </div>
              </div>

              {/* Top Meta */}
              <div className="p-8 flex justify-between items-start z-10">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="w-2 h-2 rounded-full bg-[#E31E24] shrink-0" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-700">Fluke</span>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-[#d1fae5] border border-[#a7f3d0]">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#059669]">Disponible</span>
                </div>
              </div>

              {/* Bottom Data */}
              <div className="p-6 z-10">
                <div className="flex items-end justify-between gap-4 p-6 rounded-[2rem] bg-[#f9fafb] border border-slate-100">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Alquiler</span>
                    <span className="text-xl font-bold tracking-tight text-slate-900">Fluke 754</span>
                    <span className="text-sm text-slate-500 font-medium">Calibrador Documentador HART</span>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-mono text-2xl font-bold text-slate-900 block">$110</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">/ día</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Secondary Floating Asset */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: EXPO_OUT, delay: 0.4 }}
              className="absolute -left-4 top-28 w-[220px] p-5 rounded-[2rem] bg-white border border-slate-200/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] z-20"
            >
              <div className="relative h-24 w-full mb-4 bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 flex items-center justify-center p-3">
                <Image src="/products/rosemount-3051.png" alt="Rosemount 3051" fill
                  className="object-contain p-3" sizes="220px" />
              </div>
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#2563eb] block mb-1">Emerson · Rosemount</span>
              <span className="text-base font-bold tracking-tight text-slate-900 block">3051C</span>
              <span className="text-xs text-slate-500 font-medium">Transmisor de presión</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
