'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Services from './components/Services'
import HeroShowcase from './components/HeroShowcase'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Showcase Section */}
      <HeroShowcase />

      {/* Services Section */}
      <Services />

      {/* Featured Work */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80'
          ].map((src, i) => (
            <motion.div
              key={i}
              className="relative aspect-[3/4] overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={src}
                alt={`Featured work ${i + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="/portfolio"
            className="inline-block px-8 py-3 border-2 border-black hover:bg-black hover:text-white transition-colors"
          >
            View Portfolio
          </a>
        </div>
      </section>
    </div>
  )
}