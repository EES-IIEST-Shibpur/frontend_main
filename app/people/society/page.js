'use client'; // Needed for image fallback state

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { societyTeam } from '@/lib/peopleData';
import Image from 'next/image';
import { useState } from 'react';
import { User } from 'lucide-react';

export default function SocietyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="pt-32 pb-20 bg-gradient-to-r from-ees-900 to-ees-800 text-white text-center">
         <h1 className="text-4xl md:text-5xl font-bold mb-4">Electrical Engineers' Society</h1>
         <p className="text-ees-200">Meet the dedicated team and post-holders behind our initiatives.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
         {/* Patrons */}
         <h2 className="text-2xl font-bold text-center mb-10 text-ees-900 uppercase tracking-widest border-b pb-4">Patrons</h2>
         <div className="flex flex-wrap justify-center gap-10 mb-20">
            {societyTeam.slice(0, 2).map((member, idx) => (
               <TeamCard key={idx} member={member} isFaculty={true} />
            ))}
         </div>

         {/* Core Committee */}
         <h2 className="text-2xl font-bold text-center mb-10 text-ees-900 uppercase tracking-widest border-b pb-4">Core Member 2025-26</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20">
            {societyTeam.slice(2).filter(m => !m.role.includes('Representative')).map((member, idx) => (
               <TeamCard key={idx} member={member} />
            ))}
         </div>

         {/* Year Representatives */}
         <h2 className="text-2xl font-bold text-center mb-10 text-ees-900 uppercase tracking-widest border-b pb-4">Year Representatives</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
            {societyTeam.filter(m => m.role.includes('Representative')).map((member, idx) => (
               <TeamCard key={idx} member={member} />
            ))}
         </div>
      </div>
      
      <Footer />
    </div>
  );
}

// Reusable Card with Image Fallback
function TeamCard({ member, isFaculty }) {
  // Use specific image if defined in data, check if it is absolute path or relative filename
  const initialImage = member.image 
    ? (member.image.startsWith('/') ? member.image : `/images/people/${member.image}`)
    : null;
    
  const [imgSrc, setImgSrc] = useState(initialImage);
  const [error, setError] = useState(false);

  return (
    <div className={`bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100 flex flex-col items-center text-center group ${isFaculty ? 'w-80 shadow-2xl scale-110 border-ees-200' : 'hover:-translate-y-2 transition duration-300'}`}>
       
       {/* Image Container */}
       <div className={`relative w-full ${isFaculty ? 'h-72' : 'h-64'} bg-slate-200 flex items-center justify-center`}>
          {!error && imgSrc ? (
             <Image 
               src={imgSrc} 
               alt={member.name} 
               fill 
               className="object-cover"
               onError={() => setError(true)}
             />
          ) : (
             // Fallback Icon
             <User size={64} className="text-slate-400 opacity-50" />
          )}
          {/* Color Overlay */}
          <div className="absolute inset-0 bg-ees-900/0 group-hover:bg-ees-900/10 transition duration-300"/>
       </div>

       <div className="p-5 w-full bg-white relative z-10">
          <h3 className="font-bold text-lg text-slate-900 mb-1">{member.name}</h3>
          <p className="text-xs font-semibold text-ees-600 uppercase tracking-wide">
             {member.role}
          </p>
       </div>
    </div>
  )
}