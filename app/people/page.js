'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Users, BookOpen, PenTool, Award, Shield } from 'lucide-react';

// Data for the sections to keep code clean
const sections = [
  {
    title: "Faculty",
    desc: "The faculty of the Department of Electrical Engineering is some of the best in the country. Their works have been published in peer-reviewed journals and prestigious international conferences.",
    link: "/people/faculty",
    image: "/images/people/faculty-group.jpg",
    icon: <BookOpen className="w-6 h-6"/>,
    btn: "View All Faculty"
  },
  {
    title: "Research Scholars",
    desc: "Research Scholars are the work horse of the research in the department, hailing from all-over India with varied cultures, united with a will to achieve better.",
    link: "/people/research-scholars",
    image: "/images/people/scholars.jpg",
    icon: <PenTool className="w-6 h-6"/>,
    btn: "Meet Scholars"
  },
  {
    title: "Staff",
    desc: "Our team of staff provide us with many technical and non-technical services. They are the reason behind the seamless academic and research experience of the department.",
    link: "/people/staff",
    image: "/images/people/students.jpg", // Using a placeholder if specific staff photo unavailable
    icon: <Users className="w-6 h-6"/>,
    btn: "View Staff"
  },
  {
    title: "Students",
    desc: "Some of the brightest young minds from across the country. All students admitted to the Department of Electrical Engineering are members of EES.",
    link: "/people/achievements",
    image: "/images/people/students.jpg",
    icon: <Award className="w-6 h-6"/>,
    btn: "Student Achievements"
  },
  {
    title: "Web Team",
    desc: "Meet the students of the society who helped in developing and maintaining this website :)",
    link: "/people/web-team",
    image: "/images/home/ees-logo.png", // Using Logo for now
    icon: <Users className="w-6 h-6"/>,
    btn: "Meet the Devs"
  },
  {
    title: "Electrical Engineers' Society",
    desc: "Meet the postholders of Electrical Engineers' Society! Driving events, workshops, and innovation forward.",
    link: "/people/society",
    image: "/images/people/ees-poster.jpg",
    icon: <Shield className="w-6 h-6"/>,
    btn: "The Committee"
  }
];

export default function PeoplePage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-slate-900">
      <Navbar />

      {/* --- HERO SECTION WITH SKETCH BACKGROUND --- */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        {/* The Sketch Background Image - Lower opacity to blend */}
        <div className="absolute inset-0 z-0 opacity-10">
           <Image 
             src="/images/people/sketch-hero.jpg" 
             alt="Sketch Background" 
             fill 
             className="object-cover object-top"
           />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
           <div>
             <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-6xl md:text-8xl font-bold tracking-tight text-slate-800"
             >
               We are a <br/>
               community of <br/>
               <span className="text-ees-700 underline decoration-4 underline-offset-8">Achievers.</span>
             </motion.h1>
           </div>
           
           {/* Decorative Quote Block */}
           <motion.div 
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.2 }}
             className="bg-white p-8 shadow-xl border-l-8 border-ees-500 rounded-r-xl hidden md:block"
           >
             <p className="text-xl italic text-slate-600 font-serif">
               "Makers, Thinkers, Innovators. Together we build the future of Electrical Engineering."
             </p>
           </motion.div>
        </div>
      </section>

      {/* --- SECTIONS LOOP --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto space-y-32">
        {sections.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Image Side */}
            <div className="flex-1 w-full relative">
               <div className="relative h-[350px] w-full rounded-xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition duration-500">
                 <Image 
                   src={item.image} 
                   alt={item.title} 
                   fill 
                   className="object-cover"
                 />
                 {/* Stylized Corner Box */}
                 <div className="absolute top-0 left-0 bg-ees-900 text-white p-4 rounded-br-2xl">
                    {item.icon}
                 </div>
               </div>
               {/* Decorative background element */}
               <div className={`absolute top-10 -z-10 w-full h-full rounded-xl bg-ees-100 ${index % 2 === 0 ? '-right-6' : '-left-6'}`}></div>
            </div>

            {/* Text Side */}
            <div className="flex-1 space-y-6">
               <h2 className="text-4xl font-bold text-ees-900 border-b-2 border-ees-200 inline-block pb-2">
                 {item.title}
               </h2>
               <p className="text-lg text-slate-600 leading-relaxed">
                 {item.desc}
               </p>
               
               <Link href={item.link}>
                 <button className="group flex items-center gap-2 text-ees-800 font-bold uppercase tracking-wider hover:text-ees-600 transition mt-4">
                   {item.btn} 
                   <ArrowRight size={20} className="transform group-hover:translate-x-2 transition"/>
                 </button>
               </Link>
            </div>
          </motion.div>
        ))}
      </section>

      <Footer />
    </div>
  );
}