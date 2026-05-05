import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "CyT Servicios & Instrumentación | Alquiler y Venta de Equipos Industriales",
  description:
    "Líderes en alquiler, venta y servicio técnico de instrumentación industrial en Venezuela. Equipos Rosemount, Fluke 744, Fluke 754, HART 375. Entrega en 24 horas.",
  keywords:
    "alquiler calibradores Venezuela, Fluke 744, Fluke 754, HART 375, transmisores Rosemount, instrumentación industrial, calibración certificada",
  openGraph: {
    title: "CyT Servicios & Instrumentación",
    description:
      "Alquiler y venta de equipos de instrumentación industrial. Entrega en 24 horas con calibración certificada.",
    type: "website",
    locale: "es_VE",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@400;500;600;700;800;900&family=Geist+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  )
}
