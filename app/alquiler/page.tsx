import { RentalSection } from "@/components/sections/rental-section"
import { Footer } from "@/components/sections/footer"
import { WhatsAppCTA } from "@/components/ui/whatsapp-cta"

export const metadata = {
  title: "Alquiler de Instrumentación | CyT Servicios",
  description: "Servicio de alquiler de calibradores documentadores, bombas de presión y comunicadores HART.",
}

export default function AlquilerPage() {
  return (
    <main>
      <RentalSection />
      <Footer />
      <WhatsAppCTA />
    </main>
  )
}
