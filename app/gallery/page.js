'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { X, ZoomIn } from 'lucide-react';

export default function GalleryPage() {
  const [selectedId, setSelectedId] = useState(null);

  // --- AUTOMATED IMAGE LIST ---
  // Based on your scraped folder, images seem to range from img_2 to img_26
  // We generate this array automatically so you don't have to type them all.
  const galleryImages = Array.from({ length: 25 }, (_, i) => ({
    id: i + 2,
    src: `/images/gallery/img_${i + 2}.jpg`, // assumes most are .jpg
    alt: `Event Memory ${i + 1}`
  }));

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-ees-200">
      <Navbar />

      {/* --- HEADER --- */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-ees-900">
        {/* Decorative Background Patterns (Red Triangles from screenshot) */}
        <div className="absolute top-0 left-0 w-32 h-64 bg-ees-700 opacity-20 transform -skew-x-12 translate-x-10" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 opacity-20 rounded-full blur-3xl" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 font-serif italic"
          >
            A Glimpse of the Past
          </motion.h1>
          <p className="text-xl text-ees-100 font-light">
            "Capturing the moments that define our journey."
          </p>
        </div>
      </section>

      {/* --- MASONRY GRID --- */}
      <section className="py-20 px-4">
        {/* Tailwind's columns utility creates the Pinterest Layout automatically */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 max-w-7xl mx-auto">
          
          {galleryImages.map((img) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              layoutId={`image-${img.id}`} // Helper for smooth expand animation
              onClick={() => setSelectedId(img.id)}
              className="relative group cursor-zoom-in rounded-xl overflow-hidden shadow-md break-inside-avoid hover:shadow-2xl transition-all duration-300 border-2 border-white bg-slate-200"
            >
              {/* Image Container */}
              <div className="relative w-full">
                {/* 
                  Using a simple img tag here instead of Next.js Image for simpler 
                  Masonry height handling with unknown aspect ratios, 
                  or use Next Image with specific settings 
                */}
                <img 
                  src={img.src} 
                  alt={img.alt}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700"
                  loading="lazy"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-80" size={32} />
              </div>
            </motion.div>
          ))}
          
        </div>
      </section>

      {/* --- FULLSCREEN LIGHTBOX --- */}
      <AnimatePresence>
        {selectedId && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedId(null)} // Close on background click
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-red-500 transition"
              onClick={() => setSelectedId(null)}
            >
              <X size={40} />
            </button>

            {/* The Active Image */}
            <motion.div 
              layoutId={`image-${selectedId}`} 
              className="relative w-full max-w-5xl max-h-[90vh] rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()} // Don't close if clicking image
            >
               <img 
                  src={galleryImages.find(img => img.id === selectedId)?.src}
                  className="w-full h-full object-contain mx-auto max-h-[85vh]"
                  alt="Full view"
               />
               <p className="text-white/60 text-center mt-4">
                 Image {selectedId - 1} / {galleryImages.length}
               </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}