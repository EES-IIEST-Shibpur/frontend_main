// 'use client';
// import { motion } from 'framer-motion';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import { placementStats, recruiters } from '@/lib/placementData';
// import { TrendingUp, Users, Briefcase } from 'lucide-react';

// export default function PlacementsPage() {
//   return (
//     <div className="min-h-screen bg-slate-50 font-sans">
//       <Navbar />

//       {/* --- HERO SECTION --- */}
//       <section className="relative bg-ees-900 py-32 text-center text-white overflow-hidden">
//          {/* Background pattern */}
//          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
         
//          <motion.h1 
//            initial={{ y: 20, opacity: 0 }}
//            animate={{ y: 0, opacity: 1 }}
//            className="text-4xl md:text-6xl font-extrabold mb-6 relative z-10"
//          >
//            Placements @ EE
//          </motion.h1>
//          <p className="text-xl text-ees-100 max-w-2xl mx-auto px-4 font-light relative z-10">
//            "Connecting Students with Career Building Opportunities"
//          </p>
//       </section>

//       {/* --- STATS COUNTER --- */}
//       <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <StatCard 
//             icon={<TrendingUp size={32} />} 
//             value="56 LPA" 
//             label="Highest Package (2024)" 
//             delay={0}
//           />
//           <StatCard 
//             icon={<Users size={32} />} 
//             value="89%" 
//             label="Placement Rate" 
//             delay={0.2}
//           />
//           <StatCard 
//             icon={<Briefcase size={32} />} 
//             value="130+" 
//             label="Recruiting Companies" 
//             delay={0.4}
//           />
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-24 grid lg:grid-cols-2 gap-16 items-start">
        
//         {/* --- LEFT: TEXT CONTENT (Scraped Text) --- */}
//         <div className="prose prose-lg text-slate-600">
//           <h2 className="text-3xl font-bold text-slate-800 mb-6 border-l-4 border-ees-500 pl-4">
//             Unlocking Potential
//           </h2>
//           <p>
//             With excellent education research facilities, and world-class teachers we help students excel in their inherent potential. 
//             Students are involved in different research projects, innovations, entrepreneurship activities and short term courses to gather knowledge.
//           </p>
//           <p>
//             Apart from education, research and social activities, we arrange programmes to improve soft skills, professional communication 
//             and personality through career counselling by professional agencies/experts.
//           </p>
//           <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mt-8">
//              <h3 className="text-blue-900 font-bold text-lg mb-2">Support We Provide:</h3>
//              <ul className="list-disc pl-5 space-y-2 text-sm text-blue-800">
//                <li>Professional resume writing workshops</li>
//                <li>Management development programs by experts</li>
//                <li>Direct interaction with industry leaders</li>
//              </ul>
//           </div>
//         </div>

//         {/* --- RIGHT: INTERACTIVE CHART (The 2024 Upgrade) --- */}
//         <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
//           <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Year-wise Highest Package (LPA)</h3>
          
//           <div className="h-80 w-full">
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={placementStats}>
//                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
//                 <XAxis 
//                    dataKey="year" 
//                    tick={{fill: '#64748b'}} 
//                    axisLine={false}
//                    tickLine={false}
//                 />
//                 <YAxis 
//                    tick={{fill: '#64748b'}} 
//                    axisLine={false}
//                    tickLine={false}
//                    unit=" LPA"
//                 />
//                 <Tooltip 
//                    cursor={{fill: '#f1f5f9'}}
//                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
//                 />
//                 <Bar 
//                    dataKey="highest" 
//                    fill="#be123c"  // The EES Red
//                    radius={[4, 4, 0, 0]}
//                    barSize={50}
//                    animationDuration={2000}
//                 />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//           <p className="text-center text-xs text-slate-400 mt-4">
//              Source: IIEST Placement Cell Records
//           </p>
//         </div>

//       </div>

//       {/* --- TOP RECRUITERS SCROLLER --- */}
//       <section className="bg-slate-100 py-16 overflow-hidden">
//          <h3 className="text-center text-2xl font-bold text-slate-800 mb-10">Our Past Recruiters</h3>
         
//          {/* Infinite Marquee Animation */}
//          <div className="flex gap-16 whitespace-nowrap animate-marquee">
//             {[...recruiters, ...recruiters].map((rec, i) => (
//                <div key={i} className="inline-flex items-center space-x-2 text-2xl font-bold text-slate-400 grayscale opacity-70">
//                  {/* 
//                      For now, I'm rendering text.
//                      If you downloaded logos, uncomment the image line: 
//                      <img src={rec.logo} alt={rec.name} className="h-12 w-auto" />
//                  */}
//                  <span>{rec.name}</span>
//                </div>
//             ))}
//          </div>
//       </section>
      
//       {/* Quick Add css for marquee in styles block below if tailwind plugin not present */}
//       <style jsx>{`
//         @keyframes scroll {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-marquee {
//           animation: scroll 20s linear infinite;
//         }
//       `}</style>

//       <Footer />
//     </div>
//   );
// }

// // Stats Card Component
// function StatCard({ icon, value, label, delay }) {
//   return (
//     <motion.div 
//       initial={{ y: 20, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ delay }}
//       className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-ees-500 text-center"
//     >
//       <div className="bg-rose-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-ees-600 mb-4">
//         {icon}
//       </div>
//       <h3 className="text-3xl font-extrabold text-slate-800">{value}</h3>
//       <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mt-2">{label}</p>
//     </motion.div>
//   )
// }

'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { placementYears } from '@/lib/placementData'; // Ensure you made this file
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function PlacementsPage() {
  const [activeYear, setActiveYear] = useState('2022'); // Defaulting to the one I saw in screenshot

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* --- HERO SECTION WITH GROUP IMAGE --- */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
             {/* Make sure 'hero-group.jpg' is in public/images/placements/ */}
             <Image 
               src="/images/placements/hero-group.jpg" 
               alt="Placements Group" 
               fill
               className="object-cover opacity-60"
               priority
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-white pt-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }}
            className="border-l-8 border-ees-500 pl-6 md:pl-10"
          >
             <h1 className="text-4xl md:text-7xl font-extrabold uppercase leading-tight tracking-tight">
               Connecting Students<br/>
               <span className="text-ees-300">With Career Building</span><br/>
               Opportunities
             </h1>
          </motion.div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <div className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Placements@EE Text */}
        <div className="prose prose-lg text-slate-600">
           <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 flex items-center">
             Placements<span className="text-ees-700">@EE</span>
           </h2>
           <p className="lead text-lg">
             With excellent education research facilities, and world-class teachers we help students excel in their inherent potential. Students are involved in different research projects, innovations, entrepreneurship activities and short term courses to gather knowledge.
           </p>
           <p>
             Apart from education, research and social activities, we arrange programmes to improve soft skills, professional communication and personality through career counselling by professional agencies/experts.
           </p>
           <div className="mt-8 p-6 bg-slate-50 border-l-4 border-ees-500 rounded-r-xl">
             <p className="font-semibold text-slate-800 m-0">
               "Students are also assisted in preparing professional resumes by conducting resume writing workshops. Management development programs are conducted by experts."
             </p>
           </div>
        </div>

        {/* Right Side: Quick Links or Decorative Panel */}
        <div className="hidden lg:flex justify-end relative h-full">
           <div className="absolute top-0 right-0 w-64 h-64 bg-ees-50 rounded-full blur-3xl -z-10" />
           {/* You can add a simplified stat graphic here if desired, or keep clean text layout */}
        </div>
      </div>

      {/* --- THE YEAR-WISE RECORDS (TAB SYSTEM) --- */}
      <section className="bg-slate-50 py-20 border-t border-slate-200" id="records">
         <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-slate-900 mb-12 underline decoration-ees-500 decoration-4 underline-offset-8">
               Our Placement Record
            </h2>

            {/* TABS HEADER */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
               {placementYears.map((item) => (
                 <button
                   key={item.year}
                   onClick={() => setActiveYear(item.year)}
                   className={`px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 shadow-md ${
                     activeYear === item.year
                       ? 'bg-ees-700 text-white scale-110 shadow-ees-500/30'
                       : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-ees-700'
                   }`}
                 >
                   {item.year}
                 </button>
               ))}
            </div>

            {/* TAB CONTENT (IMAGE DISPLAY) */}
            <div className="bg-white p-4 md:p-8 rounded-2xl shadow-2xl border border-slate-200 min-h-[500px] flex items-center justify-center relative overflow-hidden">
               <AnimatePresence mode="wait">
                 <motion.div
                    key={activeYear}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full relative"
                 >
                    {/* Retrieve the specific image path from our data */}
                    {placementYears.find(p => p.year === activeYear) ? (
                        <div className="relative w-full h-[600px]"> {/* Height fixed to keep layout stable */}
                           <Image 
                              src={placementYears.find(p => p.year === activeYear).image}
                              alt={`Placement Statistics ${activeYear}`}
                              fill
                              className="object-contain" // Keeps entire table visible without cropping
                           />
                        </div>
                    ) : (
                        <div className="text-center py-20 text-slate-400">
                           <p>Data visualization for {activeYear} loading...</p>
                        </div>
                    )}
                 </motion.div>
               </AnimatePresence>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
}