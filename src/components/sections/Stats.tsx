'use client'

import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'

interface Stat {
  value: number
  suffix: string
  label: string
  description: string
}

const STATS: Stat[] = [
  {
    value: 9,
    suffix: '+',
    label: 'Anos de experiência',
    description: 'Desde 2015 realizando formaturas inesquecíveis',
  },
  {
    value: 500,
    suffix: '+',
    label: 'Eventos realizados',
    description: 'Centenas de turmas que confiaram na Rare',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Satisfação dos clientes',
    description: 'Avaliações positivas de formandos e famílias',
  },
  {
    value: 15,
    suffix: '+',
    label: 'Cidades atendidas',
    description: 'Cobertura em toda a região do Vale do Itajaí',
  },
]

function StatCard({ stat, inView }: { stat: Stat; inView: boolean }) {
  return (
    <div className="text-center px-4">
      <div className="font-display text-5xl sm:text-6xl font-bold text-gradient-gold mb-2" aria-label={`${stat.value}${stat.suffix} ${stat.label}`}>
        {inView ? (
          <CountUp
            end={stat.value}
            duration={2.5}
            suffix={stat.suffix}
            useEasing
          />
        ) : (
          <span>0{stat.suffix}</span>
        )}
      </div>
      <div className="text-accent font-semibold text-lg mb-1">{stat.label}</div>
      <div className="text-neutral-500 text-sm leading-snug max-w-[180px] mx-auto">
        {stat.description}
      </div>
    </div>
  )
}

export function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section
      ref={ref}
      className="py-20 bg-secondary-mid relative overflow-hidden"
      aria-label="Números da Rare Formaturas"
    >
      {/* Decorative gold line */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-accent mb-3">
            Números que falam por si
          </h2>
          <p className="text-neutral-500 text-lg max-w-xl mx-auto">
            Anos de dedicação transformados em histórias que ficam para sempre.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 divide-y-2 lg:divide-y-0 lg:divide-x divide-primary/10">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <StatCard stat={stat} inView={inView} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
