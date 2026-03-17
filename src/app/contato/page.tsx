import type { Metadata } from 'next'
import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ContatoForm } from '@/components/sections/ContatoForm'
import { getWhatsAppUrl } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title: 'Fale com a Rare | Rare Formaturas',
  description: 'Entre em contato com a Rare Formaturas pelo WhatsApp ou formulário. Atendemos Navegantes e região do Vale do Itajaí. Resposta rápida garantida!',
}

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-secondary pt-16">
      {/* Hero */}
      <section
        className="relative py-20 bg-secondary-deep overflow-hidden"
        aria-labelledby="contato-heading"
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
            Fale com a Rare
          </span>
          <h1
            id="contato-heading"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient-gold mb-6"
          >
            Fale com a Rare agora
          </h1>
          <p className="text-neutral-300 text-xl leading-relaxed mb-8">
            Estamos prontos para transformar sua formatura em uma experiência inesquecível. Entre em contato pelo WhatsApp ou preencha o formulário.
          </p>
          <Button
            as="a"
            href={getWhatsAppUrl('contato')}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
            size="lg"
            aria-label="Falar com a Rare diretamente no WhatsApp"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            Falar no WhatsApp agora
          </Button>
        </div>
      </section>

      <ContatoForm />
    </div>
  )
}
