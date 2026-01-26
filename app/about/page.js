'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookOpen, Users, Award, Calendar } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />

      {/* --- 1. HERO SECTION (Campus View) --- */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/about/campus-hero.jpg" // Ensure this image exists!
            alt="IIEST Campus" 
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white pt-16">
           <motion.h1 
             initial={{ y: 30, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             className="text-4xl md:text-6xl font-extrabold mb-6"
           >
             About The Department
           </motion.h1>
           <motion.div 
             initial={{ y: 30, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="bg-ees-900/80 backdrop-blur-sm p-6 md:p-10 rounded-xl border border-white/10"
           >
             <p className="text-xl md:text-2xl font-light leading-relaxed italic">
               "We provide an ever-flourishing platform to share ideas, exchange information, and contribute to the advancement of technology and research."
             </p>
           </motion.div>
        </div>
      </section>

      {/* --- 2. STATS STRIP (Facts & Figures) --- */}
      <section className="bg-ees-900 text-white py-12 border-b-4 border-ees-500 relative z-20 -mt-2">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
           <StatItem number="1912" label="Year Founded" icon={<Calendar size={24}/>} />
           <StatItem number="1936" label="First B.Tech Batch" icon={<BookOpen size={24}/>} />
           <StatItem number="54" label="NIRF Ranking 2025" icon={<Award size={24}/>} />
           <StatItem number="91%" label="Placement Rate" icon={<Users size={24}/>} />
        </div>
      </section>

      {/* --- 3. DEPARTMENT HISTORY --- */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
         <motion.div 
           initial={{ x: -50, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           viewport={{ once: true }}
           className="prose prose-lg text-slate-700 text-justify"
         >
            <h2 className="text-4xl font-bold text-ees-900 mb-6">A Legacy Since 1912</h2>
            <p>
              Since its conception in the year <strong>1912-13</strong>, the Department of Electrical Engineering at IIEST, Shibpur (erstwhile Bengal Engineering College) has always strived to nurture and enlighten young minds. The transformation of enthusiastic aspirants into diligent working professionals through learning is at the core of the department.
            </p>
            <p>
              The Department produced its first batch of graduate electrical engineers in <strong>1936</strong>. The postgraduate degree was first offered in 1955 and the first Ph.D. scholar emerged in 1959. 
            </p>
            <div className="bg-slate-50 border-l-4 border-ees-700 p-4 mt-6">
               <p className="font-semibold text-slate-800 m-0 text-sm">
                 Current Offerings: 8-semester B.Tech, 10-semester Dual Degree (B.Tech & M.Tech), and 4-semester M.Tech.
               </p>
            </div>
         </motion.div>
         
         <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition duration-500">
            <Image 
              src="/images/about/lab-machine.jpg" // Renamed img_5.jpg
              alt="Electrical Machine Lab" 
              fill 
              className="object-cover" 
            />
         </div>
      </section>

      {/* --- 4. MISSION & VISION --- */}
      <section className="bg-slate-100 py-24">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-xl overflow-hidden">
               {/* Vision Image */}
               <div className="md:w-1/3 relative min-h-[300px]">
                  <Image 
                    src="/images/about/hod-speaking.jpg" // Renamed img_3.jpg
                    alt="Vision"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-ees-900/40 mix-blend-multiply" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <h3 className="text-4xl font-bold text-white tracking-widest uppercase border-4 border-white px-6 py-4">Vision</h3>
                  </div>
               </div>

               {/* Vision Text */}
               <div className="md:w-2/3 p-10 md:p-16 flex flex-col justify-center">
                  <h4 className="text-2xl font-bold text-ees-800 mb-6">International Excellence</h4>
                  <p className="text-lg text-slate-600 leading-8 mb-6">
                    "To attain a position of international excellence and leadership in education and research activities related to Electrical Engineering. To provide a dynamic and scholarly environment wherein students learn independently and in collaboration with others."
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-semibold text-slate-500">
                     <li className="flex items-center gap-2"><div className="w-2 h-2 bg-ees-500 rounded-full"/> Innovative Approach</li>
                     <li className="flex items-center gap-2"><div className="w-2 h-2 bg-ees-500 rounded-full"/> Ethics & Equity</li>
                     <li className="flex items-center gap-2"><div className="w-2 h-2 bg-ees-500 rounded-full"/> Industry Ready</li>
                     <li className="flex items-center gap-2"><div className="w-2 h-2 bg-ees-500 rounded-full"/> Environmental Stewardship</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* --- 5. ELECTRICAL ENGINEERS SOCIETY (EES) --- */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
         
         <div className="order-2 lg:order-1 relative h-[400px] rounded-2xl overflow-hidden shadow-2xl -rotate-2 hover:rotate-0 transition duration-500 border-8 border-white">
            <Image 
              src="/images/about/society-group.jpg" // Renamed img_12.jpg
              alt="EES Group" 
              fill 
              className="object-cover" 
            />
         </div>

         <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 prose prose-lg text-slate-700"
         >
            <h2 className="text-4xl font-bold text-ees-900 mb-6">About the Society (EES)</h2>
            <p>
              The <strong>Electrical Engineers’ Society</strong> is a segment of the Department of Electrical Engineering of IIEST Shibpur. It is an independent organization of students, teachers, and several dilettantes in and around Kolkata.
            </p>
            <p>
              Along with encompassing regularly scheduled conferences and workshops, the society has succeeded in providing an ever-flourishing platform to share ideas. 
            </p>
            <p className="text-ees-800 font-medium italic">
               "We organize cultural events like Fresher's Welcome, Farewell, and Teacher's Day, promoting healthy socializing alongside heavy academics."
            </p>
         </motion.div>
      </section>

      <Footer />
    </div>
  );
}

function StatItem({ number, label, icon }) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-3 text-ees-300 opacity-80">{icon}</div>
      <div className="text-3xl md:text-5xl font-extrabold">{number}</div>
      <div className="text-sm uppercase tracking-wider opacity-80 mt-2">{label}</div>
    </div>
  )
}