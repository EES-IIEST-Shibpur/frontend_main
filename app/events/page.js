'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Calendar, MapPin, Star } from 'lucide-react';

export default function EventsPage() {
  
  // SCROLL FUNCTION
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* --- 1. HERO SECTION --- */}
      <section className="relative bg-ees-50 pt-40 pb-20 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-8xl font-extrabold text-ees-900 tracking-tight mb-6"
          >
            EVENTS
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            "The society is made up of a varied collection of individuals working together to organize various cultural and technical events throughout the year."
          </motion.p>
          
          <motion.div 
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="flex flex-wrap justify-center gap-4"
          >
            <button onClick={() => scrollTo('ongoing')} className="bg-ees-900 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition transform">
              Browse Ongoing
            </button>
            <button onClick={() => scrollTo('past')} className="bg-white text-ees-900 border-2 border-ees-900 px-8 py-4 rounded-full font-bold shadow-sm hover:bg-ees-50 transition transform">
              Browse Past Events
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- 2. BENTO GRID (Experience EES) --- */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-slate-800 border-l-8 border-ees-500 pl-6">Experience EES</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[1200px] md:h-[600px]">
          
          {/* Card 1: Blue - Main */}
          <motion.div whileHover={{ scale: 1.01 }} className="md:col-span-2 md:row-span-2 bg-blue-600 rounded-3xl p-8 relative overflow-hidden group">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                 <h3 className="text-4xl font-bold text-white mb-4">Experience<br/>EES</h3>
                 <p className="text-blue-100">Take a look at our major happenings.</p>
              </div>
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-xl inline-block w-max cursor-pointer hover:bg-white/20 transition">
                 <ArrowRight className="text-white" size={32} />
              </div>
            </div>
            {/* Optional BG Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-900"></div>
          </motion.div>

          {/* Card 2: Image - Sphuran */}
          <motion.div whileHover={{ scale: 1.02 }} className="bg-slate-200 rounded-3xl relative overflow-hidden group">
            <Image src="/images/events/sphuran.jpg" alt="Sphuran" fill className="object-cover transition duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition"></div>
          </motion.div>

          {/* Card 3: Pink - Apticrack */}
          <motion.div whileHover={{ scale: 1.02 }} className="bg-pink-500 rounded-3xl p-6 text-white flex flex-col justify-center relative overflow-hidden">
             <h3 className="text-2xl font-bold mb-2 z-10">AptiCrack</h3>
             <p className="text-pink-100 text-sm z-10">Weekly aptitude test series for placements.</p>
             <div className="absolute -right-5 -bottom-5 text-pink-600/50">
               <Star size={120} />
             </div>
          </motion.div>

          {/* Card 4: Dark - Preps */}
          <motion.div whileHover={{ scale: 1.02 }} className="bg-slate-800 rounded-3xl p-6 text-white flex flex-col justify-center relative">
             <h3 className="text-2xl font-bold mb-2">Preps<br/>Simplified</h3>
             <p className="text-slate-300 text-sm">A gateway to all your exam needs.</p>
          </motion.div>

          {/* Card 5: Image - Freshers */}
          <motion.div whileHover={{ scale: 1.02 }} className="bg-slate-200 rounded-3xl relative overflow-hidden group">
             <Image src="/images/events/freshers-group.jpg" alt="Freshers" fill className="object-cover transition duration-500 group-hover:scale-110" />
          </motion.div>

        </div>
      </section>

      {/* --- 3. ONGOING EVENTS --- */}
      <section id="ongoing" className="py-20 bg-slate-50">
         <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-16 uppercase tracking-widest">Ongoing Events</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {[
                 { title: "Preps Simplified", color: "bg-blue-700" },
                 { title: "Internship Simplified", color: "bg-blue-600" },
                 { title: "Cultural Series", color: "bg-teal-600" },
                 { title: "AptiCrack", color: "bg-rose-600" },
                 { title: "Tech Simplified", color: "bg-blue-800" },
                 { title: "Seminars", color: "bg-indigo-600" },
               ].map((evt, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`${evt.color} h-40 rounded-xl p-8 flex flex-col justify-between text-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer`}
                  >
                     <h3 className="text-xl font-bold">{evt.title}</h3>
                     <div className="flex items-center text-sm font-semibold opacity-80">
                        Learn More <ArrowRight size={14} className="ml-2"/>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* --- 4. DETAILED EVENTS (Text Content) --- */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
         <h2 className="text-5xl font-extrabold text-slate-900 mb-20 text-center">Everything We Do</h2>

         <div className="space-y-24">
           <EventDetailsBlock 
             title="Wired In" 
             desc="Wired In is an event in the INSTRUO Techno-Management fest of IIEST, Shibpur conducted by the Department of Electrical Engineering in collaboration with INSTRUO. It has several enthusiastic and exciting rounds related to the vast domain of Electrical Engineering."
             side="left"
           />
           <EventDetailsBlock 
             title="Circuit Club" 
             desc="The Circuit Club is organized by the Department of Electrical Engineering and the Electrical Engineers' Society. This club enhances the practical skills and knowledge of the students in the domain of Electronics Engineering by conducting different sessions and quizzes."
             side="right"
           />
           <EventDetailsBlock 
             title="Apticrack" 
             desc="Apticrack is the quiz event conducted by EES to develop the ability of students to crack the Aptitude tests. Frequent quizzes are conducted and many practice questions are provided."
             side="left"
           />
           <EventDetailsBlock 
             title="Internships Simplified" 
             desc="An initiative where we collect the experiences of seniors who have cracked internships in prestigious companies and post it on our social media pages. Essential guide for juniors."
             side="right"
           />
           <EventDetailsBlock 
             title="Freshers' Welcome" 
             desc="The Grand Welcome into the department. Conducted by the Electrical Engineers' Society, this evening is filled with complete thrill and fun. The freshmen entertain everyone with their performances in music, dance, and drama."
             side="left"
           />
           <EventDetailsBlock 
             title="Farewell" 
             desc="The dear goodbye and celebration of 4 years of togetherness. The sophomores entertain the attendees with their performances in music, dance, and drama to bid adieu to the seniors."
             side="right"
           />
         </div>
      </section>

      <Footer />
    </div>
  );
}

// Sub-component for the Detail Text Blocks
function EventDetailsBlock({ title, desc, side }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-col md:flex-row gap-8 items-center ${side === 'right' ? 'md:flex-row-reverse' : ''}`}
    >
       <div className="flex-1">
          {/* Decorative Number/Icon Area (Could include image here later) */}
          <div className="h-64 w-full bg-slate-100 rounded-2xl border-2 border-slate-200 flex items-center justify-center">
             <h3 className="text-3xl font-bold text-slate-300 uppercase">{title.charAt(0)}</h3>
          </div>
       </div>
       <div className="flex-1 space-y-4">
          <h3 className="text-3xl font-bold text-ees-900">{title}</h3>
          <div className="w-20 h-2 bg-ees-500"></div>
          <p className="text-slate-600 text-lg leading-relaxed">{desc}</p>
       </div>
    </motion.div>
  )
}