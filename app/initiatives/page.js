'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const initiatives = [
  {
    title: "Circuit Club",
    slug: "circuit-club",
    img: "/images/initiatives/circuit-poster.jpg", // Needs image
    desc: "Electrifying Innovations."
  },
  {
    title: "Industrial Visit",
    slug: "industrial-visit",
    img: "/images/initiatives/visit-group.jpg", 
    desc: "Bridging the gap between theory and industry."
  },
  {
    title: "T-Shirt & Hoodie",
    slug: "tshirt",
    img: "/images/initiatives/hoodie-design.jpg",
    desc: "Wear your pride. Official department merchandise."
  },
  {
    title: "Guidebooks",
    slug: "guidebooks",
    img: "/images/initiatives/guide-hero.jpg",
    desc: "Curated resources for every semester."
  },
  {
    title: "Miscellaneous",
    slug: "miscellaneous",
    img: "/images/initiatives/talent-x.jpg",
    desc: "TalentX and other creative endeavors."
  }
];

export default function InitiativesHub() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Header */}
      <div className="pt-32 pb-16 text-center bg-ees-900 text-white">
        <h1 className="text-5xl font-bold mb-4">Our Initiatives</h1>
        <p className="text-xl text-ees-100 max-w-2xl mx-auto px-4">
          Beyond the classroom: Fostering innovation, camaraderie, and style.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((item, idx) => (
            <Link href={`/initiatives/${item.slug}`} key={item.slug}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group cursor-pointer"
              >
                {/* Image Section */}
                <div className="relative h-64 bg-slate-200">
                   <Image 
                     src={item.img} 
                     alt={item.title} 
                     fill 
                     className="object-cover group-hover:scale-105 transition duration-500"
                   />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition"/>
                </div>
                
                {/* Content Section */}
                <div className="p-6">
                   <h2 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-ees-700 transition">
                     {item.title}
                   </h2>
                   <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                     {item.desc}
                   </p>
                   <span className="flex items-center text-sm font-bold text-ees-600 uppercase tracking-wider">
                     View More <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition" />
                   </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  )
}