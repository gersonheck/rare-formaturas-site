'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { clsx } from 'clsx'

interface PortfolioItem {
  id: string
  year: number
  title: string
  institution: string
  imageUrl: string
  imageAlt: string
}

// Placeholder portfolio items — replace with real data / CMS fetch
const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: '1', year: 2024, title: 'Formatura de Direito', institution: 'Univali Itajaí', imageUrl: '/images/portfolio/2024-direito.jpg', imageAlt: 'Formandos de Direito da Univali em 2024' },
  { id: '2', year: 2024, title: 'Formatura de Medicina', institution: 'Univali Itajaí', imageUrl: '/images/portfolio/2024-medicina.jpg', imageAlt: 'Formandos de Medicina da Univali em 2024' },
  { id: '3', year: 2023, title: 'Formatura de Engenharia Civil', institution: 'IESC Itajaí', imageUrl: '/images/portfolio/2023-civil.jpg', imageAlt: 'Formandos de Engenharia Civil em 2023' },
  { id: '4', year: 2023, title: 'Colação de Grau', institution: 'SENAI Navegantes', imageUrl: '/images/portfolio/2023-senai.jpg', imageAlt: 'Colação de grau SENAI Navegantes 2023' },
  { id: '5', year: 2022, title: 'Formatura de Administração', institution: 'FURB Blumenau', imageUrl: '/images/portfolio/2022-adm.jpg', imageAlt: 'Formandos de Administração da FURB em 2022' },
  { id: '6', year: 2022, title: 'Formatura de Psicologia', institution: 'Univali Itajaí', imageUrl: '/images/portfolio/2022-psicologia.jpg', imageAlt: 'Formandos de Psicologia da Univali em 2022' },
  { id: '7', year: 2021, title: 'Formatura de Contábeis', institution: 'FURB Blumenau', imageUrl: '/images/portfolio/2021-contabeis.jpg', imageAlt: 'Formandos de Ciências Contábeis 2021' },
  { id: '8', year: 2021, title: 'Colação de Grau', institution: 'Univali Balneário', imageUrl: '/images/portfolio/2021-colacao.jpg', imageAlt: 'Colação de grau Univali 2021' },
]

const ALL_YEARS = [...new Set(PORTFOLIO_ITEMS.map((i) => i.year))].sort((a, b) => b - a)

export function PortfolioGrid() {
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all')

  const filtered = useMemo(
    () =>
      selectedYear === 'all'
        ? PORTFOLIO_ITEMS
        : PORTFOLIO_ITEMS.filter((item) => item.year === selectedYear),
    [selectedYear]
  )

  return (
    <section className="py-20 bg-secondary" aria-label="Portfólio de eventos realizados">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-accent mb-3">
            Eventos realizados pela Rare
          </h2>
          <p className="text-neutral-500 text-lg max-w-xl mx-auto">
            Cada evento conta uma história única. Veja alguns dos nossos trabalhos.
          </p>
        </motion.div>

        {/* Year filter */}
        <div
          className="flex flex-wrap gap-2 justify-center mb-10"
          role="group"
          aria-label="Filtrar por ano"
        >
          <button
            onClick={() => setSelectedYear('all')}
            className={clsx(
              'px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
              selectedYear === 'all'
                ? 'bg-primary text-secondary shadow-lg shadow-primary/20'
                : 'border border-primary/30 text-neutral-300 hover:border-primary hover:text-primary'
            )}
            aria-pressed={selectedYear === 'all'}
          >
            Todos
          </button>
          {ALL_YEARS.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={clsx(
                'px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                selectedYear === year
                  ? 'bg-primary text-secondary shadow-lg shadow-primary/20'
                  : 'border border-primary/30 text-neutral-300 hover:border-primary hover:text-primary'
              )}
              aria-pressed={selectedYear === year}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.ul
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          role="list"
          aria-live="polite"
          aria-label={`Exibindo ${filtered.length} eventos${selectedYear !== 'all' ? ` de ${selectedYear}` : ''}`}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.li
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary-mid cursor-pointer"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-deep/90 via-secondary-deep/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-accent font-semibold text-sm leading-tight">{item.title}</p>
                  <p className="text-neutral-300 text-xs mt-0.5">{item.institution} • {item.year}</p>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  )
}
