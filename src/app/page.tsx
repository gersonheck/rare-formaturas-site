import { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { PortfolioGrid } from '@/components/sections/PortfolioGrid'
import { Button } from '@/components/ui/Button'
import { MessageCircle, Star, Camera, Clock, Shield } from 'lucide-react'
import { getWhatsAppUrl } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title: 'Rare Formaturas — Sua formatura merece ser inesquecível',
  description:
    'Desde 2015, a Rare transforma o dia mais esperado da sua vida em uma celebração que você nunca vai esquecer. Formaturas e colações em Navegantes e região.',
}

const FEATURES = [
  {
    Icon: Camera,
    title: 'Fotografia & Vídeo',
    description: 'Cobertura completa do evento com equipe profissional e álbuns personalizados.',
  },
  {
    Icon: Clock,
    title: 'Planejamento completo',
    description: 'Do convite ao baile, cuidamos de cada detalhe para que você aproveite seu dia.',
  },
  {
    Icon: Star,
    title: 'Experiência premiada',
    description: 'Mais de 9 anos realizando formaturas com excelência e reconhecimento do mercado.',
  },
  {
    Icon: Shield,
    title: 'Segurança e confiança',
    description: 'Contratos claros, equipe própria e total transparência em todos os processos.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 bg-primary text-secondary px-4 py-2 rounded-lg font-semibold"
      >
        Ir para o conteúdo principal
      </a>

      {/* Hero */}
      <Hero
        headline="Sua formatura merece ser inesquecível"
        subheadline="Desde 2015, a Rare transforma o dia mais esperado da sua vida em uma celebração que você nunca vai esquecer."
        ctaText="Falar com a Rare no WhatsApp"
        ctaContext="formaturas"
      />

      {/* Stats */}
      <Stats />

      {/* Quem Somos */}
      <section
        className="py-20 bg-secondary"
        aria-labelledby="quem-somos-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                Quem somos
              </span>
              <h2
                id="quem-somos-heading"
                className="font-display text-3xl sm:text-4xl font-bold text-accent mt-3 mb-6 leading-tight"
              >
                A história da Rare começa com um compromisso
              </h2>
              <p className="text-neutral-300 text-lg leading-relaxed mb-4">
                Fundada em 2015 em Navegantes, a Rare nasceu com um propósito claro: transformar formaturas em experiências que as famílias guardam para sempre.
              </p>
              <p className="text-neutral-500 leading-relaxed mb-8">
                Nossa equipe é apaixonada por celebrações e especializada em cada etapa — do planejamento à execução. Atendemos Navegantes, Itajaí, Balneário Camboriú, Blumenau e toda a região do Vale do Itajaí.
              </p>
              <Button as="a" href="/sobre" variant="outline" size="md">
                Conhecer nossa história
              </Button>
            </div>

            {/* Feature cards */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              aria-label="Diferenciais da Rare"
            >
              {FEATURES.map(({ Icon, title, description }) => (
                <div
                  key={title}
                  className="bg-secondary-mid border border-white/5 rounded-2xl p-5 hover:border-primary/20 transition-colors duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-accent mb-1">{title}</h3>
                  <p className="text-sm text-neutral-500 leading-snug">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <PortfolioGrid />

      {/* CTA Final */}
      <section
        className="py-24 bg-secondary-mid relative overflow-hidden"
        aria-labelledby="cta-final-heading"
      >
        <div
          className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent"
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="cta-final-heading"
            className="font-display text-3xl sm:text-5xl font-bold text-accent mb-6 leading-tight"
          >
            Pronto para tornar sua formatura{' '}
            <span className="text-gradient-gold">inesquecível?</span>
          </h2>
          <p className="text-neutral-300 text-xl mb-10 leading-relaxed">
            Entre em contato agora e descubra como a Rare pode transformar o dia mais especial da sua vida.
          </p>
          <Button
            as="a"
            href={getWhatsAppUrl('orcamento')}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
            size="lg"
            aria-label="Solicitar orçamento no WhatsApp"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            Solicitar orçamento
          </Button>
        </div>
      </section>
    </>
  )
}
