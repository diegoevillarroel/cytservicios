"use client"

import React, { useState, useEffect } from "react"
import { WhatsappLogo, X } from "@phosphor-icons/react"
import { CONTACT } from "@/constants/contact"

export function WhatsAppCTA() {
  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)", transition: "all 0.5s cubic-bezier(0.34,1.56,0.64,1)" }}
    >
      {/* Tooltip card */}
      {expanded && (
        <div className="rounded-[2rem] bg-white border border-slate-200/50 p-6 w-80 flex flex-col gap-4 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]">
          <div className="flex items-start justify-between">
            <div>
              <p className="font-bold text-slate-900 text-sm">CyT Instrumentación</p>
              <p className="text-xs text-[#059669] font-semibold tracking-tight mt-0.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse" />
                Respuesta en minutos
              </p>
            </div>
            <button onClick={() => setExpanded(false)} className="text-slate-400 hover:text-slate-900 transition-colors bg-slate-50 w-8 h-8 rounded-full flex items-center justify-center">
              <X size={16} weight="bold" />
            </button>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed font-medium">
            Consulte disponibilidad de equipos o solicite cotización directamente por WhatsApp.
          </p>
          <a
            href={`https://wa.me/${CONTACT.phone.whatsapp}?text=Hola, quiero consultar sobre equipos de instrumentación`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#25D366] text-white rounded-[1.5rem] text-sm font-bold hover:bg-[#22c55e] transition-colors shadow-sm"
          >
            <WhatsappLogo size={18} weight="fill" />
            Iniciar conversación
          </a>
        </div>
      )}

      {/* FAB button */}
      <button
        onClick={() => setExpanded((e) => !e)}
        aria-label="Abrir chat de WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_32px_rgba(37,211,102,0.3)] hover:bg-[#22c55e] hover:scale-105 transition-all duration-200 active:scale-95"
      >
        <WhatsappLogo size={28} weight="fill" />
      </button>
    </div>
  )
}
