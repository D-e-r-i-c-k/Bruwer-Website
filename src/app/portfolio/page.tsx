'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// This would typically come from a CMS or API
const portfolioItems = [
  { id: 1, title: 'Nature', category: 'Landscape' },
  { id: 2, title: 'Urban Life', category: 'Street' },
  { id: 3, title: 'Portraits', category: 'People' },
  { id: 4, title: 'Architecture', category: 'Urban' },
  { id: 5, title: 'Wildlife', category: 'Nature' },
  { id: 6, title: 'Events', category: 'People' },
]

export default function Portfolio() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative aspect-square overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={`/portfolio-${item.id}.jpg`}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm opacity-80">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}