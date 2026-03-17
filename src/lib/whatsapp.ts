const BASE_PHONE = '5547992307281'

type WhatsAppContext =
  | 'default'
  | 'formaturas'
  | 'colacoes'
  | 'portfolio'
  | 'orcamento'
  | 'contato'

const MESSAGES: Record<WhatsAppContext, string> = {
  default: 'Olá! Quero saber mais sobre formaturas',
  formaturas: 'Olá! Quero saber mais sobre formaturas',
  colacoes: 'Olá! Quero saber mais sobre colações de grau',
  portfolio: 'Olá! Vi o portfólio e gostaria de saber mais',
  orcamento: 'Olá! Gostaria de solicitar um orçamento',
  contato: 'Olá! Entrei em contato pelo site',
}

export function getWhatsAppUrl(context: WhatsAppContext = 'default'): string {
  const message = encodeURIComponent(MESSAGES[context])
  return `https://wa.me/${BASE_PHONE}?text=${message}`
}

export const WHATSAPP_DEFAULT_URL = getWhatsAppUrl('default')
