'use client'

import { useState, type FormEvent } from 'react'
import { MessageCircle, Send, CheckCircle, MapPin, Phone, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { getWhatsAppUrl } from '@/lib/whatsapp'

interface FormData {
  name: string
  email: string
  phone: string
  eventType: string
  institution: string
  message: string
}

const INITIAL_FORM: FormData = {
  name: '',
  email: '',
  phone: '',
  eventType: '',
  institution: '',
  message: '',
}

const EVENT_TYPES = [
  { value: '', label: 'Selecione o tipo de evento' },
  { value: 'formatura', label: 'Formatura' },
  { value: 'colacao', label: 'Colação de Grau' },
  { value: 'outro', label: 'Outro evento' },
]

const CONTACT_INFO = [
  {
    Icon: MapPin,
    label: 'Localização',
    value: 'Navegantes, Santa Catarina',
    sub: 'Atendemos toda a região do Vale do Itajaí',
  },
  {
    Icon: Phone,
    label: 'WhatsApp',
    value: '(47) 99230-7281',
    sub: 'Respondemos em minutos',
    href: getWhatsAppUrl('contato'),
  },
  {
    Icon: Clock,
    label: 'Horário de atendimento',
    value: 'Segunda a Sexta: 9h às 18h',
    sub: 'Sábados: 9h às 13h',
  },
]

export function ContatoForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function formatPhone(value: string) {
    const digits = value.replace(/\D/g, '').slice(0, 11)
    if (digits.length <= 10) {
      return digits.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3').trim()
    }
    return digits.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3').trim()
  }

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => ({ ...prev, phone: formatPhone(e.target.value) }))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  const inputClasses =
    'w-full bg-secondary-mid border border-white/10 rounded-xl px-4 py-3 text-accent placeholder-neutral-700 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-colors duration-150'

  return (
    <section className="py-20" aria-labelledby="form-section-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="form-section-heading" className="sr-only">
          Formulário de contato e informações
        </h2>
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <aside className="lg:col-span-2 space-y-6" aria-label="Informações de contato">
            <div>
              <h3 className="font-display text-2xl font-bold text-accent mb-2">
                Informações de contato
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Prefere uma conversa direta? Fale conosco pelo WhatsApp — respondemos rápido.
              </p>
            </div>
            <div className="space-y-4">
              {CONTACT_INFO.map(({ Icon, label, value, sub, href }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 p-4 bg-secondary-mid rounded-2xl border border-white/5"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wider mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer"
                        className="text-accent font-medium hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">
                        {value}
                      </a>
                    ) : (
                      <p className="text-accent font-medium">{value}</p>
                    )}
                    {sub && <p className="text-neutral-700 text-xs mt-0.5">{sub}</p>}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-whatsapp/10 border border-whatsapp/20 rounded-2xl p-5">
              <p className="text-accent font-semibold mb-2">Resposta rápida garantida</p>
              <p className="text-neutral-500 text-sm leading-relaxed mb-4">
                Pelo WhatsApp, respondemos em até 30 minutos durante o horário comercial.
              </p>
              <Button as="a" href={getWhatsAppUrl('contato')} target="_blank"
                rel="noopener noreferrer" variant="whatsapp" size="sm" className="w-full">
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                Abrir WhatsApp
              </Button>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="h-full flex flex-col items-center justify-center text-center py-16 bg-secondary-mid rounded-3xl border border-white/5 px-8"
                role="alert" aria-live="assertive">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl font-bold text-accent mb-3">Mensagem enviada!</h3>
                <p className="text-neutral-300 leading-relaxed mb-6">
                  Obrigado pelo contato! Nossa equipe responderá em breve. Para retorno mais rápido, fale diretamente pelo WhatsApp.
                </p>
                <Button as="a" href={getWhatsAppUrl('contato')} target="_blank"
                  rel="noopener noreferrer" variant="whatsapp" size="md">
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  Falar pelo WhatsApp
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}
                className="bg-secondary-mid rounded-3xl border border-white/5 p-6 sm:p-8 space-y-5"
                noValidate aria-label="Formulário de contato">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-1.5">
                      Nome completo <span className="text-primary" aria-hidden="true">*</span>
                    </label>
                    <input id="name" name="name" type="text" required autoComplete="name"
                      value={formData.name} onChange={handleChange} placeholder="Seu nome"
                      className={inputClasses} aria-required="true" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1.5">
                      E-mail <span className="text-primary" aria-hidden="true">*</span>
                    </label>
                    <input id="email" name="email" type="email" required autoComplete="email"
                      value={formData.email} onChange={handleChange} placeholder="seu@email.com"
                      className={inputClasses} aria-required="true" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-300 mb-1.5">
                      WhatsApp <span className="text-primary" aria-hidden="true">*</span>
                    </label>
                    <input id="phone" name="phone" type="tel" required autoComplete="tel"
                      value={formData.phone} onChange={handlePhoneChange}
                      placeholder="(47) 99999-9999" className={inputClasses} aria-required="true" />
                  </div>
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-medium text-neutral-300 mb-1.5">
                      Tipo de evento <span className="text-primary" aria-hidden="true">*</span>
                    </label>
                    <select id="eventType" name="eventType" required value={formData.eventType}
                      onChange={handleChange} className={inputClasses} aria-required="true">
                      {EVENT_TYPES.map(({ value, label }) => (
                        <option key={value} value={value} disabled={value === ''}>{label}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="institution" className="block text-sm font-medium text-neutral-300 mb-1.5">
                    Instituição de ensino
                  </label>
                  <input id="institution" name="institution" type="text" value={formData.institution}
                    onChange={handleChange} placeholder="Ex: Univali, FURB, SENAI..."
                    className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-1.5">
                    Mensagem <span className="text-primary" aria-hidden="true">*</span>
                  </label>
                  <textarea id="message" name="message" required rows={5} value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte um pouco sobre sua formatura, número de formandos, data prevista..."
                    className={`${inputClasses} resize-none`} aria-required="true" />
                </div>
                <Button type="submit" variant="primary" size="lg" className="w-full"
                  disabled={isSubmitting} aria-label="Enviar mensagem de contato">
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-secondary/30 border-t-secondary rounded-full animate-spin" aria-hidden="true" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" aria-hidden="true" />
                      Enviar mensagem
                    </>
                  )}
                </Button>
                <p className="text-xs text-neutral-700 text-center">
                  Seus dados são tratados com total privacidade e segurança.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
