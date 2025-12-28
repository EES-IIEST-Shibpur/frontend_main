'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { scholarsData } from '@/lib/peopleData';

export default function ScholarsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="pt-36 pb-20 bg-ees-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <h1 className="text-5xl font-extrabold mb-6">Research Scholars</h1>
           <p className="text-xl text-ees-100 max-w-3xl mx-auto">
             "The workhorse of research in the department. Hailing from all over India, united with a will to innovate."
           </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Responsive Grid: 2 cols on phone, up to 5 on large screens */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {scholarsData.map((name, idx) => (
             <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-ees-300 transition-all duration-300 flex flex-col items-center group">
                <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-slate-100 group-hover:border-ees-100">
                   {/* I'm mapping images by index: 0.jpg, 1.jpg, etc */}
                   {/* Create public/images/people/scholars/ folder for this to work */}
                   <Image 
                     src={`/images/people/scholars/img_${idx}.jpg`} 
                     alt={name} 
                     fill 
                     className="object-cover"
                     // Adding a fallback in case image doesn't exist for high index numbers
                     onError={(e) => { e.target.src = "/images/home/ees-logo.png" }} 
                   />
                </div>
                <h3 className="font-semibold text-center text-slate-800 text-sm md:text-base group-hover:text-ees-700">
                  {name}
                </h3>
             </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}