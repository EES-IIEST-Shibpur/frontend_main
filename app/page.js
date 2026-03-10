'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaFacebook, FaLinkedin, FaExternalLinkAlt, FaCalendarAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slides = [
    { id: 'ees', component: <EESHeroSlide /> },
    { id: 'sphuran', component: <SphuranHeroSlide /> },
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  // Manual navigation handlers
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <main className="min-h-screen flex flex-col font-sans">
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Electrical Engineers' Society",
            "alternateName": ["EES IIEST", "Electrical Engineers' Society, IIEST Shibpur"],
            "url": "https://www.eesiiests.org"
          })
        }}
      />
      <Navbar />

      {/* --- HERO CAROUSEL --- */}
      <section className="relative h-[90vh] overflow-hidden mt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {slides[currentSlide].component}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/10 backdrop-blur-sm hover:bg-white/30 text-white rounded-full transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <FaChevronLeft size={24} className="group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/10 backdrop-blur-sm hover:bg-white/30 text-white rounded-full transition-all duration-300 group"
          aria-label="Next slide"
        >
          <FaChevronRight size={24} className="group-hover:scale-110 transition-transform" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* --- MISSION STATEMENT STRIP (The content from original hero) --- */}
      <section className="bg-white py-16 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Mission</h2>
          <p className="text-xl text-slate-600 leading-8">
            "At EES, we seek to build a <span className="text-ees-700 font-bold">healthy interaction</span> of all its members so that they can flourish and develop."
          </p>
        </div>
      </section>

      {/* --- RECENT HIGHLIGHTS SECTION --- */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">
            Recent Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 - SPHURAN 2026 */}
            <HighlightCard
              title="SPHURAN 2026 - 4th Edition"
              desc="Where Innovation Meets Excellence. Our annual tech fest bringing together students, industry leaders, and researchers to showcase technical brilliance. Date: Coming Soon"
              image="https://res.cloudinary.com/dwr8472qb/image/upload/v1770536102/sphuran-logo_a6mzzi.png"
              color="bg-gradient-to-br from-ees-700 to-ees-900"
              link="https://sphuran.eesiiests.org"
            />

            {/* Card 2 */}
            <HighlightCard
              title="Freshers' Party Batch of '25"
              desc="The Department Of Electrical Engineering welcomed the batch of 2025 with a Freshers Party on 18 Nov."
              image="/images/events/freshers25.jpg"
              color="bg-pink-600"
            />

            {/* Card 3 */}
            <HighlightCard
              title="Farewell Ceremony | Batch of '22"
              desc="The Department bid adieu to the Class of '22 on 23rd of May. Graced by Prof-in-Charge Prof. Bhaskaran Barman."
              image="/images/events/farewell22.jpg"
              color="bg-red-700"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Hero Slide Components
function EESHeroSlide() {
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home/group-photo-hero.jpg"
          alt="IIEST EE Department Crowd"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ees-900/90 via-ees-900/60 to-black/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-7xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg">
          ELECTRICAL ENGINEERS' <span className="text-red-400">SOCIETY</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto mb-10 leading-relaxed">
          "We aim at providing all the required academic support through an online platform."
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            href="/events"
            className="bg-ees-700 hover:bg-ees-600 text-white px-8 py-3 rounded-full font-bold transition shadow-lg hover:shadow-red-500/50"
          >
            Explore Events
          </Link>
          <Link
            href="/people/faculty"
            className="bg-white hover:bg-gray-100 text-ees-900 px-8 py-3 rounded-full font-bold transition shadow-lg"
          >
            Meet Faculty
          </Link>
        </div>
      </div>
    </div>
  );
}

function SphuranHeroSlide() {
  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#1a2028' }}>
      {/* Subtle radial glow behind the bulb */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30"
        style={{ 
          background: 'radial-gradient(circle, rgba(255,140,50,0.4) 0%, rgba(255,100,30,0.1) 40%, transparent 70%)'
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 max-w-6xl mx-auto px-6">
        
        {/* Neon Lightbulb SVG */}
        <div className="relative flex-shrink-0">
          <svg 
            width="200" 
            height="320" 
            viewBox="0 0 200 320" 
            className="drop-shadow-2xl"
            style={{ filter: 'drop-shadow(0 0 20px rgba(255,140,50,0.6))' }}
          >
            {/* Wire/Cord */}
            <line 
              x1="100" 
              y1="0" 
              x2="100" 
              y2="80" 
              stroke="#ff8c32" 
              strokeWidth="3"
              style={{ filter: 'drop-shadow(0 0 8px rgba(255,140,50,0.8))' }}
            />
            
            {/* Socket */}
            <rect x="85" y="80" width="30" height="40" rx="3" fill="#2a3240" stroke="#3a4250" strokeWidth="2"/>
            <rect x="88" y="85" width="24" height="8" rx="2" fill="#1a2028"/>
            <rect x="88" y="97" width="24" height="8" rx="2" fill="#1a2028"/>
            
            {/* Bulb Glass Outline - Glowing Orange */}
            <path 
              d="M100 120 
                 C65 120 45 160 45 200 
                 C45 250 70 280 85 290 
                 L85 300 L115 300 L115 290 
                 C130 280 155 250 155 200 
                 C155 160 135 120 100 120Z"
              fill="none"
              stroke="#ff8c32"
              strokeWidth="4"
              style={{ filter: 'drop-shadow(0 0 15px rgba(255,140,50,0.9))' }}
            />
            
            {/* Filament inside */}
            <path 
              d="M92 290 L92 240 L100 230 L108 240 L108 290"
              fill="none"
              stroke="#ff8c32"
              strokeWidth="2"
              style={{ filter: 'drop-shadow(0 0 8px rgba(255,140,50,0.8))' }}
            />
          </svg>
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-2" style={{ color: '#ff8c32', textShadow: '0 0 30px rgba(255,140,50,0.5)' }}>
            SPHURAN
          </h1>
          <p className="text-6xl md:text-8xl font-black text-white mb-4" style={{ textShadow: '0 0 20px rgba(255,255,255,0.2)' }}>
            2026
          </p>

          {/* Badge */}
          <div className="inline-block border-2 px-6 py-2 rounded-full mb-6" style={{ borderColor: '#ff8c32' }}>
            <p className="font-bold text-sm tracking-widest" style={{ color: '#ff8c32' }}>4TH EDITION</p>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-gray-400 mb-6 max-w-md">
            Where <span className="font-semibold" style={{ color: '#ff8c32' }}>Innovation</span> Meets <span className="font-semibold" style={{ color: '#ff8c32' }}>Excellence</span>
          </p>

          {/* Date */}
          <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
            <FaCalendarAlt style={{ color: '#ff8c32' }} size={20} />
            <span className="text-lg md:text-xl text-white font-semibold">13 - 15 March, 2026</span>
          </div>

          {/* Social and Website */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com/_sphuran.ees"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg transition-all duration-300"
                style={{ backgroundColor: 'rgba(255,140,50,0.1)', color: '#ff8c32' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#ff8c32'; e.currentTarget.style.color = '#1a2028'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,140,50,0.1)'; e.currentTarget.style.color = '#ff8c32'; }}
                aria-label="Instagram"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href="https://facebook.com/sphuran.ees"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg transition-all duration-300"
                style={{ backgroundColor: 'rgba(255,140,50,0.1)', color: '#ff8c32' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#ff8c32'; e.currentTarget.style.color = '#1a2028'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,140,50,0.1)'; e.currentTarget.style.color = '#ff8c32'; }}
                aria-label="Facebook"
              >
                <FaFacebook size={22} />
              </a>
              <a
                href="https://linkedin.com/company/sphuran-iiest"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg transition-all duration-300"
                style={{ backgroundColor: 'rgba(255,140,50,0.1)', color: '#ff8c32' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#ff8c32'; e.currentTarget.style.color = '#1a2028'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,140,50,0.1)'; e.currentTarget.style.color = '#ff8c32'; }}
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} />
              </a>
            </div>

            {/* Website Button */}
            <a
              href="https://sphuran.eesiiests.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all duration-300"
              style={{ 
                backgroundColor: '#ff8c32', 
                color: '#1a2028',
                boxShadow: '0 0 20px rgba(255,140,50,0.4)'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 30px rgba(255,140,50,0.7)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 20px rgba(255,140,50,0.4)'; }}
            >
              Visit Website
              <FaExternalLinkAlt size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Component for this page
function HighlightCard({ title, desc, image, color, link }) {
  const CardContent = () => (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
      <div className="h-56 bg-slate-800 relative">
        <Image src={image} alt={title} fill className="object-contain" />
      </div>
      <div className={`${color} p-6 h-full text-white`}>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-white/90 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );

  if (!link) return <CardContent />;

  // Check if link is external
  const isExternal = link.startsWith('http');

  return isExternal ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <CardContent />
    </a>
  ) : (
    <Link href={link}>
      <CardContent />
    </Link>
  );
}