'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Image with bottom overlay text, cropped from top */}
      <div className="relative w-full bg-black" style={{ height: '160vh', overflow: 'hidden' }}>
        <img
          src="/about-photo.jpg"
          alt="Bruwer Bornman in London"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-full flex flex-col items-center justify-end text-white px-4 pb-8 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.0) 100%)', paddingTop: '3rem' }}
        >
          <div className="max-w-3xl w-full mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-widest mb-4 drop-shadow-lg">
              BRUWER BORNMAN
            </h1>
            <h2 className="text-lg md:text-2xl font-semibold mb-6 drop-shadow-lg">
              Photographer | Videographer | Visual Storyteller<br />
              Based in South Africa
            </h2>
            <p className="max-w-2xl mx-auto text-base md:text-lg mb-8 drop-shadow-lg">
              I'm Bruwer, a passionate young photographer and videographer based in South Africa. I specialize in capturing authentic moments, whether it's portraits, local events, or the vibrant energy of everyday life. My approach combines creativity, technical skill, and a keen eye for detail to deliver compelling visual stories. I am dedicated to producing high-quality content that resonates with audiences and brings fresh perspectives to every project. If you're looking for professional photography or video work, or want to collaborate on something creative, I'd love to connect with you.
            </p>
            <p className="font-bold text-lg md:text-xl mb-8 drop-shadow-lg">
              Capturing the bigger picture in every frame.<br />
              <span className="italic font-normal">"Let's Bring Your Vision To Life"</span>
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/portfolio" className="inline-block px-8 py-3 border-2 border-white rounded hover:bg-white hover:text-black transition-colors text-center font-semibold">
                LEARN MORE
              </Link>
              <Link href="/contact" className="inline-block px-8 py-3 border-2 border-white rounded hover:bg-white hover:text-black transition-colors text-center font-semibold">
                LET'S CONNECT
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}