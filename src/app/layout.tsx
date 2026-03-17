import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'Rare Formaturas — Navegantes e Região',
    template: '%s | Rare Formaturas',
  },
  description:
    'Desde 2015, a Rare transforma o dia mais esperado da sua vida em uma celebração que você nunca vai esquecer. Formaturas e colações em Navegantes e região.',
  keywords: ['formaturas', 'colações', 'Navegantes', 'Santa Catarina', 'eventos', 'Rare Formaturas'],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://rareformaturas.com.br',
    siteName: 'Rare Formaturas',
    title: 'Rare Formaturas — Navegantes e Região',
    description: 'Desde 2015, transformamos formaturas em celebrações inesquecíveis.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rare Formaturas',
    description: 'Formaturas e colações inesquecíveis em Navegantes e região.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-secondary text-accent font-sans antialiased">
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
