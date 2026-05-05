import { InstrumentacionHero } from "@/components/sections/instrumentacion-hero"
import { InstrumentacionBento } from "@/components/sections/instrumentacion-bento"
import { InstrumentacionBrands } from "@/components/sections/instrumentacion-brands"
import { Footer } from "@/components/sections/footer"
import { WhatsAppCTA } from "@/components/ui/whatsapp-cta"

export const metadata = {
  title: "Instrumentación Industrial | CyT Servicios",
  description: "Equipamiento industrial de alto rendimiento. Transmisores, calibradores y más.",
}

export default function InstrumentacionPage() {
  return (
    <main className="bg-ink min-h-screen">
      <InstrumentacionHero />
      <InstrumentacionBento />
      <InstrumentacionBrands />
      <Footer />
      <WhatsAppCTA />
    </main>
  )
}
