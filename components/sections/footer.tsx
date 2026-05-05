"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { WhatsappLogo } from "@phosphor-icons/react"
import { CONTACT } from "@/constants/contact"

const FOOTER_LINKS = {
  Servicios: [
    { label: "Alquiler de equipos", href: "#alquiler" },
    { label: "Venta de transmisores", href: "#venta" },
    { label: "Calibración certificada", href: "#contacto" },
    { label: "Soporte técnico", href: "#contacto" },
  ],
  Equipos: [
    { label: "Fluke 744 & 754", href: "#alquiler" },
    { label: "HART 375", href: "#alquiler" },
    { label: "Rosemount 3051", href: "#venta" },
    { label: "Bombas de presión", href: "#alquiler" },
  ],
  Empresa: [
    { label: "División Instrumentación", href: "/instrumentacion" },
    { label: "Marcas y fabricantes", href: "#marcas" },
    { label: "Contacto directo", href: "#contacto" },
  ],
}

// Brand logos — inline SVG text treatment
const BRAND_LOGOS = [
  { name: "FLUKE", color: "#E31E24" },
  { name: "ROSEMOUNT", color: "#005EB8" },
  { name: "HART", color: "#1a56db" },
  { name: "EMERSON", color: "#007AC2" },
  { name: "YOKOGAWA", color: "#005BAA" },
  { name: "ABB", color: "#FF000F" },
]

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-20">

        {/* Brand strip */}
        <div className="mb-16 pb-14 border-b border-slate-100">
          <p className="font-mono text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Marcas en nuestro inventario</p>
          <div className="flex flex-wrap gap-3">
            {BRAND_LOGOS.map((b) => (
              <div key={b.name}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-black uppercase tracking-widest bg-slate-50"
                style={{ borderColor: b.color + "30", color: b.color }}>
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: b.color }} />
                {b.name}
              </div>
            ))}
          </div>
        </div>

        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand col */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/">
              <Image src="/logo-cyt.svg" alt="CyT Servicios" width={200} height={46}
                className="w-auto h-8" />
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed max-w-[38ch] font-medium">
              Soluciones integrales de instrumentación industrial para contratistas y empresas en Venezuela. Precisión certificada, entrega garantizada.
            </p>
            <div className="flex flex-col gap-1.5 text-sm">
              <a href={`mailto:${CONTACT.email}`}
                className="text-slate-900 hover:text-[#2563eb] transition-colors font-bold">
                {CONTACT.email}
              </a>
              <a href={CONTACT.phone.link}
                className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
                {CONTACT.phone.display}
              </a>
            </div>
            <a
              href={`https://wa.me/${CONTACT.phone.whatsapp}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-[2rem] font-bold text-sm w-max hover:bg-[#22c55e] transition-colors shadow-sm"
            >
              <WhatsappLogo size={18} weight="fill" />
              Contáctenos
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section} className="flex flex-col gap-4">
              <h4 className="font-mono text-sm font-bold text-slate-400 uppercase tracking-widest">{section}</h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}
                      className="text-sm text-slate-500 hover:text-slate-900 transition-colors font-medium">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 font-medium">
            © {new Date().getFullYear()} CyT Servicios &amp; Instrumentación C.A. — Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-slate-400 hover:text-slate-900 transition-colors font-medium">Política de privacidad</a>
            <a href="#" className="text-xs text-slate-400 hover:text-slate-900 transition-colors font-medium">Términos de servicio</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
