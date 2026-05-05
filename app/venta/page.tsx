import { SalesSection } from "@/components/sections/sales-section"
import { Footer } from "@/components/sections/footer"
import { WhatsAppCTA } from "@/components/ui/whatsapp-cta"

export const metadata = {
  title: "Venta de Equipos | CyT Servicios",
  description: "Venta de transmisores Rosemount 3051 y repuestos industriales garantizados.",
}

export default function VentaPage() {
  return (
    <main>
      <SalesSection />
      <Footer />
      <WhatsAppCTA />
    </main>
  )
}
