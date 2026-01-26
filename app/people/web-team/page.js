'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Code, Terminal, Linkedin } from 'lucide-react';
import { webTeamData } from '@/lib/peopleData';

export default function WebTeamPage() {
  
  const [activeYear, setActiveYear] = useState("2025-26");

  return (
    <div className="min-h-screen bg-[#FAFAF9] font-sans text-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 text-center bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract decoration */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-ees-700 opacity-20 blur-3xl rounded-full"></div>
        
        <div className="relative z-10 px-4">
           <Code size={48} className="mx-auto text-ees-400 mb-6" />
           <h1 className="text-4xl md:text-6xl font-bold mb-4">Web Development Team</h1>
           <p className="text-xl text-slate-300">
             The minds and fingers behind the code.
           </p>
        </div>
      </section>

      {/* Controls & Grid */}
      <section className="max-w-6xl mx-auto px-6 py-20 min-h-[500px]">
        
        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-16">
          {Object.keys(webTeamData).reverse().map((year) => (
             <button
               key={year}
               onClick={() => setActiveYear(year)}
               className={`px-6 py-2 rounded-full font-bold border-2 transition-all ${
                 activeYear === year 
                  ? 'bg-ees-900 text-white border-ees-900 shadow-lg scale-105' 
                  : 'bg-transparent text-slate-500 border-slate-300 hover:border-ees-700 hover:text-ees-700'
               }`}
             >
               Team {year}
             </button>
          ))}
        </div>

        {/* Dynamic Grid with Animation */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeYear}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
          >
             {webTeamData[activeYear].map((member, idx) => (
               <DevCard key={idx} member={member} />
             ))}
          </motion.div>
        </AnimatePresence>

      </section>

      <Footer />
    </div>
  )
}

function DevCard({ member }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition duration-300 group">
      <div className="w-28 h-28 rounded-full bg-slate-100 flex items-center justify-center mb-6 overflow-hidden border-4 border-white shadow-sm relative">
         {!imageError && member.image ? (
            <Image 
              src={member.image} 
              alt={member.name}
              fill
              className="object-cover"
              onError={() => setImageError(true)}
            />
         ) : (
            <Terminal size={40} className="text-slate-400 group-hover:text-ees-600 transition" />
         )}
      </div>
      
      <h3 className="text-xl font-bold text-slate-800">{member.name}</h3>
      <p className="text-ees-700 text-sm font-semibold uppercase tracking-wide mt-1 mb-2">
        {member.role}
      </p>
      <div className="w-10 h-1 bg-slate-200 rounded-full mb-3 group-hover:bg-ees-300 transition"></div>
      <p className="text-slate-500 text-sm mb-4">{member.batch}</p>
      
      {/* Social Links */}
      <div className="flex gap-4 mt-auto opacity-80 hover:opacity-100 transition-opacity">
        {member.linkedin && (
          <a 
            href={member.linkedin.startsWith('http') ? member.linkedin : `https://www.linkedin.com/in/${member.linkedin}`}
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-400 hover:text-[#0077b5] transition-colors"
          >
            <Linkedin size={20} />
          </a>
        )}
        {member.github && (
          <a 
            href={member.github.startsWith('http') ? member.github : `https://github.com/${member.github}`}
            target="_blank" 
            rel="noopener noreferrer" 
            className="group/github transition-transform hover:scale-110"
          >
           <div className="bg-black text-white rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
             <svg
               viewBox="0 0 24 24"
               fill="currentColor"
               className="w-[105%] h-[105%]" // Slight scale to ensure no black rim
               xmlns="http://www.w3.org/2000/svg"
             >
               <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
             </svg>
           </div>
          </a>
        )}
      </div>
    </div>
  )
}