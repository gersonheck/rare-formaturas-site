'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { getWhatsAppUrl } from '@/lib/whatsapp'

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false)
  const [hasShownOnce, setHasShownOnce] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasShownOnce) {
        setShowTooltip(true)
        setHasShownOnce(true)
      }
    }, 3000)
    return () => clearTimeout(timer)
  }, [hasShownOnce])

  useEffect(() => {
    if (showTooltip) {
      const timer = setTimeout(() => setShowTooltip(false), 6000)
      return () => clearTimeout(timer)
    }
  }, [showTooltip])

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
      role="complementary"
      aria-label="Botão de contato via WhatsApp"
    >
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative bg-secondary-mid border border-primary/20 rounded-2xl px-4 py-3 shadow-2xl max-w-[220px]"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 w-5 h-5 bg-neutral-700 rounded-full flex items-center justify-center hover:bg-neutral-500 transition-colors"
              aria-label="Fechar mensagem"
            >
              <X className="w-3 h-3 text-accent" />
            </button>
            <p className="text-sm text-accent font-medium leading-snug">
              Fale com a Rare agora! 🎓
            </p>
            <p className="text-xs text-neutral-500 mt-0.5">
              Respondemos em minutos
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href={getWhatsAppUrl('default')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir conversa no WhatsApp com a Rare Formaturas"
        className="relative w-14 h-14 flex items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
        onClick={() => setShowTooltip(false)}
      >
        {/* Pulse rings */}
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-whatsapp opacity-30 animate-pulse_ring"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-whatsapp opacity-20 animate-pulse_ring [animation-delay:0.6s]"
        />

        <span className="relative w-14 h-14 bg-whatsapp hover:bg-whatsapp-dark transition-colors duration-200 rounded-full flex items-center justify-center shadow-xl shadow-whatsapp/40">
          <MessageCircle className="w-7 h-7 text-white fill-white" aria-hidden="true" />
        </span>
      </a>
    </div>
  )
}
