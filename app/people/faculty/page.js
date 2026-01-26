'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { facultyData } from '@/lib/facultyData';

export default function FacultyPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      {/* --- HERO BANNER --- */}
      <div className="bg-gradient-to-r from-ees-900 to-ees-800 pt-36 pb-20 px-4 text-center text-white relative overflow-hidden">
        {/* Decorative Circle */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-12 translate-x-12"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl translate-y-12 -translate-x-12"></div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Faculty Directory</h1>
        <p className="text-ees-100 text-lg max-w-2xl mx-auto font-light leading-relaxed">
          "Meet the distinguished educators and researchers shaping the academic landscape of Electrical Engineering at IIEST Shibpur."
        </p>
      </div>

      {/* --- DIRECTORY GRID --- */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {facultyData.map((prof, index) => (
            <motion.div
              key={prof.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Image Area */}
              <div className="relative h-72 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={prof.image}
                  alt={prof.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                   {prof.profileUrl ? (
                     <a 
                       href={prof.profileUrl}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-white text-sm font-semibold tracking-wide uppercase px-4 py-1 border border-white/30 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
                     >
                       View Profile
                     </a>
                   ) : (
                     <span className="text-white text-sm font-semibold tracking-wide uppercase px-4 py-1 border border-white/30 rounded-full backdrop-blur-sm cursor-default">
                       {prof.name}
                     </span>
                   )}
                </div>
              </div>

              {/* Text Area */}
              <div className="p-5 flex-grow flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-slate-900 leading-snug mb-1">{prof.name}</h3>
                  <p className="text-ees-700 font-medium text-sm">{prof.designation}</p>
                  {prof.role && <p className="text-slate-500 text-xs mt-1 italic">{prof.role}</p>}
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-slate-100 my-2"></div>

                {/* Contact Info */}
                <div className="mt-auto space-y-2 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <Mail size={16} className="text-ees-500 mt-1 flex-shrink-0" />
                    <div className="flex flex-col">
                      <a href={`mailto:${prof.email}`} className="hover:text-ees-700 hover:underline break-all">
                        {prof.email}
                      </a>
                      {prof.altEmail && (
                        <a href={`mailto:${prof.altEmail}`} className="text-xs text-slate-400 hover:text-ees-700 break-all">
                          {prof.altEmail}
                        </a>
                      )}
                    </div>
                  </div>

                  {prof.phone && prof.phone !== 'N/A' && (
                    <div className="flex items-center gap-3">
                      <Phone size={16} className="text-ees-500 flex-shrink-0" />
                      <span>{prof.phone}</span>
                    </div>
                  )}

                  {prof.profileUrl && (
                    <div className="flex items-center gap-3 pt-2 text-ees-600">
                      <ExternalLink size={16} className="flex-shrink-0" />
                      <a 
                        href={prof.profileUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm font-semibold hover:underline"
                      >
                        IIEST Profile
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}