"use client"

import React, { useEffect } from 'react'
import Link from 'next/link'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { ArrowLeft, WarningCircle } from '@phosphor-icons/react'

export default function NotFound() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const bg = useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.06), transparent 80%)`

  return (
    <div className="relative min-h-[100dvh] flex items-center justify-center bg-[#0a0a0b] overflow-hidden text-zinc-100 selection:bg-zinc-800 font-sans">
      <motion.div className="pointer-events-none absolute inset-0 z-0" style={{ background: bg }} />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none mix-blend-overlay" />
      
      <div className="relative z-10 flex flex-col items-center text-center p-6 w-full max-w-2xl">
        <motion.div 
          initial={{ opacity: 0, y: 12, filter: "blur(8px)" }} 
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} 
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-8"
        >
          <div className="relative flex items-center justify-center w-24 h-24 rounded-full border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] bg-white/5 backdrop-blur-xl">
            <WarningCircle size={40} weight="fill" className="text-zinc-400" />
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-1px] rounded-full border border-dashed border-zinc-600/30" 
            />
            <motion.div 
              animate={{ rotate: -360 }} 
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-6px] rounded-full border border-zinc-800" 
            />
          </div>
          
          <div className="space-y-3">
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white">
              404
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 font-medium tracking-tight max-w-[40ch] mx-auto">
              La coordenada solicitada no existe o el equipo fue reubicado temporalmente.
            </p>
          </div>

          <motion.div whileHover={{ scale: 0.98 }} whileTap={{ scale: 0.95 }} className="mt-4">
            <Link 
              href="/" 
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-zinc-100 text-zinc-950 rounded-full font-semibold overflow-hidden transition-colors hover:bg-white shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)]"
            >
              <ArrowLeft size={18} weight="bold" className="group-hover:-translate-x-1 transition-transform" />
              <span>Restaurar Conexión</span>
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-full pointer-events-none" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
