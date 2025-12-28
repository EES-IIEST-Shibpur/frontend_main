'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function MiscellaneousPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* --- HERO HEADER --- */}
      <section className="pt-32 pb-16 bg-ees-50 border-b border-ees-100">
         <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-extrabold text-ees-900 tracking-tight mb-4">Miscellaneous</h1>
            <p className="text-xl text-slate-500 font-light">"Other feathers in our cap."</p>
         </div>
      </section>

      {/* --- SECTION 1: TALENT X --- */}
      <section className="relative py-24">
         {/* Background Decorative Red Shape (CSS Triangle) */}
         <div 
           className="absolute top-0 left-0 w-[80vw] h-full bg-ees-700 opacity-90 -z-10"
           style={{ clipPath: "polygon(0 0, 40% 0, 60% 100%, 0% 100%)" }}
         ></div>

         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Box */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-sky-100 p-8 md:p-12 rounded-lg shadow-lg relative"
            >
               {/* Tiny decorative triangle for the text box */}
               <div className="absolute top-6 left-0 -translate-x-full w-0 h-0 border-t-[20px] border-t-transparent border-r-[30px] border-r-sky-100 border-b-[20px] border-b-transparent"></div>
               
               <h2 className="text-4xl font-bold text-slate-900 mb-6">Talent-X</h2>
               <p className="text-slate-700 text-lg leading-relaxed text-justify">
                 TalentX is a competition hosted by Electrical Engineers' Society for the 1st years from all departments. They provide the stage for people to stand out from the masses by letting them showcasing their unique skills be it at dancing, singing, skateboard skills or even exceptional gaming.
               </p>
               <a href="https://www.youtube.com/@ElectricalEngineersSociety" target="_blank" className="inline-block mt-6 font-bold text-ees-700 underline decoration-2 underline-offset-4 hover:text-ees-900">
                 Watch on YouTube &rarr;
               </a>
            </motion.div>

            {/* Poster Image */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex justify-center"
            >
               <div className="relative w-full max-w-md aspect-square bg-white p-2 shadow-2xl rotate-3 hover:rotate-0 transition duration-500">
                  <Image 
                    src="/images/initiatives/talent-x.jpg" 
                    alt="Talent X Poster" 
                    fill 
                    className="object-contain" 
                  />
               </div>
            </motion.div>
         </div>
      </section>

      {/* --- SECTION 2: FRESHERS INDUCTION --- */}
      <section className="relative py-24 bg-white">
         {/* Background Decorative Red Shape (Right Side) */}
         <div 
           className="absolute bottom-0 right-0 w-[90vw] h-full bg-ees-700 opacity-90 -z-10"
           style={{ clipPath: "polygon(40% 0, 100% 0, 100% 100%, 20% 100%)" }}
         ></div>

         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            {/* Poster Image (Left Side now) */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex justify-center order-2 lg:order-1"
            >
               <div className="relative w-full max-w-sm aspect-[3/4] bg-white p-2 shadow-2xl -rotate-3 hover:rotate-0 transition duration-500">
                  <Image 
                    src="/images/initiatives/freshers-induction.jpg" 
                    alt="Induction Poster" 
                    fill 
                    className="object-contain" 
                  />
               </div>
            </motion.div>

            {/* Text Box */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-sky-100 p-8 md:p-12 rounded-lg shadow-lg relative order-1 lg:order-2"
            >
               <h2 className="text-4xl font-bold text-slate-900 mb-6">Freshers' Induction</h2>
               <p className="text-slate-700 text-lg leading-relaxed">
                 The Electrical Engineers' Society welcomes the 1st year students, with a week long Technical and Cultural events!
               </p>
            </motion.div>
         </div>
      </section>

      <Footer />
    </div>
  )
}