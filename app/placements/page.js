'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { placementData } from '@/lib/placementData';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Users, Award, ExternalLink, Calendar } from 'lucide-react';

export default function PlacementsPage() {
  const [activeBatch, setActiveBatch] = useState(placementData[0].batch);
  const currentData = placementData.find(d => d.batch === activeBatch) || placementData[0];

  const getPassingYear = (batch) => {
    if(!batch) return '';
    const parts = batch.split('-');
    return parts.length === 2 ? '20' + parts[1] : batch;
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
             <Image 
               src="/images/placements/hero-group.jpg" 
               alt="Placements Group" 
               fill
               className="object-cover opacity-50"
               priority
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            className="text-center md:text-left"
          >
             <h1 className="text-4xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
               Build Your <span className="text-ees-400">Career</span><br/>
               With EES
             </h1>
             <p className="text-xl md:text-2xl text-slate-300 max-w-2xl font-light">
               Consistent excellence in placement records, bridging the gap between academic brilliance and industry demands.
             </p>
          </motion.div>
        </div>
      </section>

      {/* --- PLACEMENT STATS SELECTOR & CARD --- */}
      <section className="max-w-5xl mx-auto px-6 py-20 relative z-20">
        
        {/* Header & Verification Link */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
           <div className="text-red-900">
             <h2 className="text-3xl font-bold">Placement Statistics</h2>
             {/* <p className="text-sm opacity-80 mt-1">Select a batch to view details</p> */}
           </div>
           
           <a 
             href="https://www.iiests.ac.in/IIEST/Placement"
             target="_blank"
             rel="noopener noreferrer"
             className="flex items-center gap-2 text-sm font-semibold text-ees-900 hover:text-ees-600 transition-colors bg-white shadow-md px-4 py-2 rounded-full"
           >
             Verify with IIEST Placement Cell <ExternalLink size={14}/>
           </a>
        </div>

        {/* Year Toggle Buttons */}
        <div className="flex flex-wrap gap-2 mb-8 bg-white/50 p-2 rounded-xl backdrop-blur-sm border border-white/20 shadow-sm md:shadow-none md:border-none md:bg-transparent md:backdrop-blur-none">
          {placementData.map((data) => (
            <button
              key={data.batch}
              onClick={() => setActiveBatch(data.batch)}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                activeBatch === data.batch
                  ? 'bg-ees-900 text-white shadow-md scale-105'
                  : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 shadow-sm'
              }`}
            >
              <Calendar size={14} className={activeBatch === data.batch ? 'opacity-100' : 'opacity-40'} />
              {getPassingYear(data.batch)}
            </button>
          ))}
        </div>

        {/* Single Detailed Card Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeBatch}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
               
               {/* --- CARD HEADER --- */}
               <div className="bg-gradient-to-r from-slate-50 to-white px-8 py-6 flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-100 gap-4">
                  <div>
                    <span className="text-sm font-bold text-slate-600 uppercase tracking-widest block mb-1">Electrical Engineering</span>
                    <h3 className="text-3xl font-extrabold text-red-900">Batch of {getPassingYear(currentData.batch)}</h3>
                  </div>
                  <div className="flex items-center gap-3 bg-green-50 text-green-700 px-5 py-2 rounded-full border border-green-100 shadow-sm">
                    <TrendingUp size={20} />
                    <span className="text-xl font-bold">{currentData.placementRate}%</span>
                    <span className="text-xs font-bold uppercase tracking-wide opacity-80">Placed</span>
                  </div>
               </div>

               {/* --- MAIN METRICS --- */}
               <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Highest Package Block */}
                  <div className="bg-rose-50 rounded-2xl p-6 text-center border border-rose-100 relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        {/* <TrendingUp size={80} className="text-rose-600" /> */}
                     </div>
                     <div className="relative z-10">
                        <div className="text-rose-600 mb-2 font-medium flex items-center justify-center gap-2 text-sm">
                           <Award size={18}/> Highest Package
                        </div>
                        <div className="text-4xl font-extrabold text-slate-900 tracking-tight my-2">
                           {currentData.highestPackage} <span className="text-xl text-slate-500 font-medium">LPA</span>
                        </div>
                     </div>
                  </div>

                  {/* Average Package Block */}
                  <div className="bg-blue-50 rounded-2xl p-6 text-center border border-blue-100 relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        {/* <Users size={80} className="text-blue-600" /> */}
                     </div>
                     <div className="relative z-10">
                        <div className="text-blue-600 mb-2 font-medium flex items-center justify-center gap-2 text-sm">
                           <Users size={18}/> Average Package
                        </div>
                        <div className="text-4xl font-extrabold text-slate-900 tracking-tight my-2">
                           {currentData.averagePackage} <span className="text-xl text-slate-500 font-medium">LPA</span>
                        </div>
                     </div>
                  </div>

                  {/* Median Package Block */}
                  <div className="bg-emerald-50 rounded-2xl p-6 text-center border border-emerald-100 relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        {/* <TrendingUp size={80} className="text-emerald-600" /> */}
                     </div>
                     <div className="relative z-10">
                        <div className="text-emerald-600 mb-2 font-medium flex items-center justify-center gap-2 text-sm">
                           <TrendingUp size={18}/> Median Package
                        </div>
                        <div className="text-4xl font-extrabold text-slate-900 tracking-tight my-2">
                           {currentData.medianPackage} <span className="text-xl text-slate-500 font-medium">LPA</span>
                        </div>
                     </div>
                  </div>

               </div>

               {/* --- PROGRESS & RECRUITERS --- */}
               <div className="px-8 pb-8 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-50 pt-8 mt-4">
                  
                  {/* Progress Bar Section */}
                  <div className="md:col-span-1 flex flex-col justify-center gap-4">
                     <div className="space-y-3">
                        <div className="flex justify-between items-center text-sm font-bold text-slate-600">
                           <span className="text-slate-500">Eligible Students</span>
                           <span className="text-lg text-slate-800">{currentData.eligibleStudents}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm font-bold text-slate-600">
                           <span className="text-slate-500">Placed Students</span>
                           <span className="text-lg text-slate-800">{currentData.placedStudents}</span>
                        </div>
                     </div>
                     {/* <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-slate-900 h-2 rounded-full transition-all duration-1000 ease-out" 
                          style={{ width: `${(currentData.placedStudents / currentData.eligibleStudents) * 100}%` }}
                        ></div>
                     </div> */}
                  </div>

                  {/* Recruiters Section */}
                  <div className="md:col-span-2">
                     <p className="text-xs text-slate-400 font-bold uppercase mb-4 tracking-widest">Top Recruiters for this Batch</p>
                     <div className="flex flex-wrap gap-3">
                        {currentData.topRecruiters.map((company, i) => (
                           <span key={i} className="px-4 py-2 bg-slate-50 text-slate-700 text-sm font-bold border border-slate-200 rounded-lg hover:bg-white hover:shadow-md hover:border-ees-200 transition-all cursor-default">
                              {company}
                           </span>
                        ))}
                     </div>
                  </div>

               </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid lg:grid-cols-2 gap-16 items-center">
         <div className="prose prose-lg text-slate-600">
           <h3 className="text-2xl font-bold text-slate-800 mb-4 border-l-4 border-ees-500 pl-4">
             Unlocking Potential
           </h3>
           <p>
             With excellent education research facilities, and world-class teachers we help students excel in their inherent potential. 
             Students are involved in different research projects, innovations, entrepreneurship activities and short term courses to gather knowledge.
           </p>
           <p>
             Apart from education, research and social activities, we arrange programmes to improve soft skills, professional communication 
             and personality through career counselling by professional agencies/experts.
           </p>
         </div>
         
         <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden group hover:shadow-2xl transition">
            <div className="absolute top-0 right-0 w-32 h-32 bg-ees-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
            <h4 className="text-xl font-bold text-slate-800 mb-6 relative z-10">Why Recruit from EE?</h4>
            <ul className="space-y-4 relative z-10">
               <li className="flex items-start gap-3">
                  <div className="bg-green-100 text-green-700 p-1 rounded-full mt-1"><Award size={16}/></div>
                  <span className="text-slate-600">Top 5% rankers in JEE Mains/Advanced</span>
               </li>
               <li className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-700 p-1 rounded-full mt-1"><Award size={16}/></div>
                  <span className="text-slate-600">Rigorous Industry-oriented Curriculum</span>
               </li>
               <li className="flex items-start gap-3">
                  <div className="bg-purple-100 text-purple-700 p-1 rounded-full mt-1"><Award size={16}/></div>
                  <span className="text-slate-600">Strong Alumni Network in Core & IT Sectors</span>
               </li>
            </ul>
         </div>
      </section>

      <Footer />
    </div>
  );
}
