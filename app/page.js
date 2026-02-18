'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaFacebook, FaLinkedin, FaExternalLinkAlt, FaCalendarAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 'ees', component: <EESHeroSlide /> },
    { id: 'sphuran', component: <SphuranHeroSlide /> },
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Change slide every 6 seconds

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
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'
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
    <div className="relative h-full w-full flex items-center justify-center">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ees-900 via-ees-800 to-red-900">
        {/* Animated Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" 
               style={{
                 backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                 backgroundSize: '50px 50px'
               }}
          />
        </div>
      </div>

      {/* SPHURAN Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="w-48 h-48 relative">
            <Image 
              src="https://res.cloudinary.com/dwr8472qb/image/upload/v1770536102/sphuran-logo_a6mzzi.png"
              alt="SPHURAN Logo" 
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-8xl font-black text-white tracking-wider mb-4 drop-shadow-lg">
          SPHURAN <span className="text-6xl md:text-9xl">2026</span>
        </h1>
        
        {/* Badge */}
        <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
          <p className="text-white font-bold text-sm md:text-base tracking-widest">4TH EDITION</p>
        </div>

        {/* Tagline */}
        <p className="text-2xl md:text-4xl text-yellow-300 font-bold mb-6 drop-shadow-lg">
          WHERE INNOVATION MEETS EXCELLENCE
        </p>

        {/* Organized By */}
        <p className="text-lg md:text-xl text-gray-200 mb-4">
          Organized by <span className="font-bold text-white">Electrical Engineers' Society</span>
        </p>
        <p className="text-base md:text-lg text-gray-300 mb-8">
          Department of Electrical Engineering, IIEST Shibpur
        </p>

        {/* Date */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <FaCalendarAlt className="text-yellow-300" size={24} />
          <span className="text-xl md:text-2xl text-white font-semibold">Coming Soon</span>
        </div>

        {/* Social and Website */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
          {/* Social Icons */}
          <div className="flex gap-4">
            <a 
              href="https://instagram.com/_sphuran.ees" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white hover:text-ees-900 text-white transition-all duration-300"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a 
              href="https://facebook.com/sphuran.ees" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white hover:text-ees-900 text-white transition-all duration-300"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a 
              href="https://linkedin.com/company/sphuran-iiest" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white hover:text-ees-900 text-white transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          {/* Website Button */}
          <a 
            href="https://sphuran.eesiiests.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-ees-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-all shadow-lg hover:shadow-yellow-300/50"
          >
            Visit Website
            <FaExternalLinkAlt size={20} />
          </a>
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