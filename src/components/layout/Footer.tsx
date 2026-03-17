import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from 'lucide-react'
import { getWhatsAppUrl } from '@/lib/whatsapp'

interface FooterLink {
  href: string
  label: string
  external?: boolean
}

const COMPANY_LINKS: FooterLink[] = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'Sobre a Rare' },
  { href: '/formaturas', label: 'Formaturas' },
  { href: '/colacoes', label: 'Colações de Grau' },
  { href: '/portfolio', label: 'Portfólio' },
  { href: '/blog', label: 'Blog' },
  { href: '/contato', label: 'Contato' },
]

const SERVICE_LINKS: FooterLink[] = [
  { href: '/formaturas#o-que-inclui', label: 'O que está incluído' },
  { href: '/formaturas#processo', label: 'Como funciona' },
  { href: '/formaturas#depoimentos', label: 'Depoimentos' },
  { href: '/colacoes#diferenciais', label: 'Diferenciais' },
  { href: getWhatsAppUrl('orcamento'), label: 'Solicitar orçamento', external: true },
]

const SOCIAL_LINKS = [
  {
    href: 'https://instagram.com/rareformaturas',
    label: 'Instagram da Rare Formaturas',
    Icon: Instagram,
  },
  {
    href: 'https://facebook.com/rareformaturas',
    label: 'Facebook da Rare Formaturas',
    Icon: Facebook,
  },
  {
    href: 'https://youtube.com/@rareformaturas',
    label: 'YouTube da Rare Formaturas',
    Icon: Youtube,
  },
]

export function Footer() {
  return (
    <footer className="bg-secondary-deep border-t border-primary/10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded inline-block"
              aria-label="Rare Formaturas"
            >
              <Image
                src="/images/logo/logo-rare.png"
                alt="Rare Formaturas"
                width={120}
                height={33}
                className="h-9 w-auto"
              />
            </Link>
            <p className="mt-3 text-sm text-neutral-500 leading-relaxed">
              Desde 2015 transformando formaturas em celebrações inesquecíveis em Navegantes e região.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-secondary-mid border border-white/5 flex items-center justify-center text-neutral-500 hover:text-primary hover:border-primary/30 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">
              Empresa
            </h3>
            <ul className="space-y-2.5" role="list">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-500 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">
              Serviços
            </h3>
            <ul className="space-y-2.5" role="list">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-neutral-500 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-500 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">
              Contato
            </h3>
            <address className="not-italic space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-neutral-500 leading-snug">
                  Navegantes, Santa Catarina, Brasil
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                <a
                  href={getWhatsAppUrl('contato')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-500 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
                >
                  (47) 99230-7281
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:contato@rareformaturas.com.br"
                  className="text-sm text-neutral-500 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
                >
                  contato@rareformaturas.com.br
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-700">
            © {new Date().getFullYear()} Rare Formaturas. Todos os direitos reservados.
          </p>
          <p className="text-xs text-neutral-700">
            Navegantes • Itajaí • Balneário Camboriú • Blumenau
          </p>
        </div>
      </div>
    </footer>
  )
}
