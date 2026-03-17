'use client'

import { motion } from 'framer-motion'
import { MessageCircle, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { getWhatsAppUrl } from '@/lib/whatsapp'

interface HeroProps {
  headline: string
  subheadline: string
  ctaText?: string
  ctaContext?: Parameters<typeof getWhatsAppUrl>[0]
  backgroundImage?: string
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export function Hero({
  headline,
  subheadline,
  ctaText = 'Falar com a Rare no WhatsApp',
  ctaContext = 'default',
  backgroundImage,
}: HeroProps) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Seção principal"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-secondary-deep"
        aria-hidden="true"
      >
        {backgroundImage && (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-deep via-secondary/80 to-secondary-deep" />
        {/* Gold accent radial */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
              Rare Formaturas • Desde 2015
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-gradient-gold">{headline}</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-neutral-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          >
            {subheadline}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              as="a"
              href={getWhatsAppUrl(ctaContext)}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="lg"
              aria-label={ctaText}
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              {ctaText}
            </Button>
            <Button
              as="a"
              href="/portfolio"
              variant="outline"
              size="lg"
            >
              Ver portfólio
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-6 h-6 text-neutral-500" />
        </motion.div>
      </motion.div>
    </section>
  )
}
