'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, MapPin, Sparkles, Music, Code } from 'lucide-react';
import Link from 'next/link';

export default function SphuranPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
             <Image 
               src="/images/events/sphuran.jpg" 
               alt="Sphuran - EES Departmental Fest" 
               fill
               className="object-cover opacity-60"
               priority
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
             <h1 className="text-5xl md:text-8xl font-black text-white tracking-tight mb-4 drop-shadow-2xl">
               SPHURAN
             </h1>
             <p className="text-xl md:text-3xl text-ees-200 font-light mb-10 tracking-wide">
               The Annual Departmental Fest of Electrical Engineering
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="http://sphuran.eesiiests.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-ees-600 hover:bg-ees-700 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-ees-500/30 flex items-center gap-2"
                >
                  Visit Official Website <ExternalLink size={20}/>
                </a>
             </div>
          </motion.div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
         >
           <h2 className="text-3xl font-bold text-slate-800 mb-8 flex items-center justify-center gap-3">
             <Sparkles className="text-yellow-500"/> About The Fest
           </h2>
           <p className="text-lg text-slate-600 leading-relaxed mb-6">
             Sphuran is the vibrance of the Electrical Engineering Department—a celebration of technology, culture, and camaraderie. 
             It is more than just a fest; it's a platform where innovation meets creativity. From electrifying technical competitions 
             to mesmerizing cultural performances, Sphuran brings together the brightest minds and the most spirited hearts of IIEST Shibpur.
           </p>
           <p className="text-lg text-slate-600 leading-relaxed">
             Join us as we explore new horizons, showcase our talents, and create memories that last a lifetime.
           </p>
         </motion.div>
      </section>

      {/* --- HIGHLIGHTS GRID --- */}
      <section className="bg-white py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
           <h3 className="text-2xl font-bold text-slate-800 mb-12 text-center uppercase tracking-widest">Event Highlights</h3>
           
           <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow text-center">
                 <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Code size={32} />
                 </div>
                 <h4 className="text-xl font-bold text-slate-800 mb-3">Technical Events</h4>
                 <p className="text-slate-600">
                    Coding challenges, circuit design competitions, and robotics showcases that test your engineering mettle.
                 </p>
              </div>

              {/* Card 2 */}
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow text-center">
                 <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Music size={32} />
                 </div>
                 <h4 className="text-xl font-bold text-slate-800 mb-3">Cultural Nights</h4>
                 <p className="text-slate-600">
                    Evenings filled with music, dance, and drama, featuring talent from the department and guest performers.
                 </p>
              </div>

               {/* Card 3 */}
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow text-center">
                 <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calendar size={32} />
                 </div>
                 <h4 className="text-xl font-bold text-slate-800 mb-3">Workshops & Talks</h4>
                 <p className="text-slate-600">
                    Interactive sessions with industry experts and alumni, bridging the gap between academia and the professional world.
                 </p>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
