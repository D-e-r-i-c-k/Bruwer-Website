import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const collageImages = [
  { src: '/hero-2.jpg', alt: 'Hero 2', style: { left: '0%', top: '120px', width: '15vw', height: '18vw', maxWidth: '220px', maxHeight: '260px', zIndex: 20 } },
  { src: '/hero-1.jpg', alt: 'Hero 1', style: { left: '12%', top: '40px', width: '20vw', height: '28vw', maxWidth: '320px', maxHeight: '400px', zIndex: 30 } },
  { src: '/hero-main.jpg', alt: 'Hero Main', style: { left: '32%', top: '0px', width: '24vw', height: '32vw', maxWidth: '400px', maxHeight: '480px', zIndex: 40 } },
  { src: '/hero-3.jpg', alt: 'Hero 3', style: { left: '58%', top: '80px', width: '18vw', height: '22vw', maxWidth: '260px', maxHeight: '320px', zIndex: 30 } },
  { src: '/hero-4.jpg', alt: 'Hero 4', style: { left: '75%', top: '40px', width: '16vw', height: '18vw', maxWidth: '220px', maxHeight: '260px', zIndex: 20 } },
];

const HeroShowcase = () => (
  <section className="relative min-h-[90vh] flex flex-col justify-center items-center pb-20">
    {/* Background */}
    <div className="absolute inset-0 -z-10">
      <Image
        src="/hero-bg.jpg"
        alt="Hero Background"
        fill
        className="object-cover object-center blur-sm"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
    </div>
    {/* Headline */}
    <div className="text-center mt-32 mb-20">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-widest text-white mb-6 drop-shadow-2xl uppercase">
        Crafting Visual Narratives
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-10 tracking-wider drop-shadow-xl">
        That Ignite Imagination and Emotions
      </h2>
      <Link href="#services" className="inline-block px-12 py-4 border-2 border-white text-white font-bold tracking-wider rounded-lg text-lg hover:bg-white hover:text-black transition-colors shadow-lg">
        Discover
      </Link>
    </div>
    {/* Collage */}
    <div className="relative w-full max-w-6xl h-[500px] md:h-[600px] mx-auto mt-8 mb-8 z-10">
      {collageImages.map((img, i) => (
        <div
          key={i}
          className="absolute bg-gray-200 shadow-xl transition-transform transition-shadow duration-300 hover:scale-110 hover:shadow-2xl hover:z-50"
          style={{ ...img.style, position: 'absolute', overflow: 'hidden', borderRadius: 0 }}
        >
          <Image src={img.src} alt={img.alt} fill className="object-cover" />
        </div>
      ))}
    </div>
  </section>
);

export default HeroShowcase;