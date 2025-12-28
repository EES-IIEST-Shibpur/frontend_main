'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Code, Terminal } from 'lucide-react';
import { webTeamData } from '@/lib/peopleData';

export default function WebTeamPage() {
  const [activeYear, setActiveYear] = useState("2022-23");

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
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition duration-300 group">
      <div className="w-28 h-28 rounded-full bg-slate-100 flex items-center justify-center mb-6 group-hover:bg-ees-50 transition border-4 border-white shadow-sm">
         <Terminal size={40} className="text-slate-400 group-hover:text-ees-600 transition" />
      </div>
      
      <h3 className="text-xl font-bold text-slate-800">{member.name}</h3>
      <p className="text-ees-700 text-sm font-semibold uppercase tracking-wide mt-1 mb-2">
        {member.role}
      </p>
      <div className="w-10 h-1 bg-slate-200 rounded-full mb-3 group-hover:bg-ees-300 transition"></div>
      <p className="text-slate-500 text-sm">{member.batch}</p>
    </div>
  )
}