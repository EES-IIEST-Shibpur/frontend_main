import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Clock, CalendarCheck } from 'lucide-react';

export default function ApticrackPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-32 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Info */}
        <div>
           <h1 className="text-6xl font-extrabold uppercase tracking-widest text-slate-900 mb-8">Apti<span className="text-ees-600">Crack</span></h1>
           <p className="text-lg text-slate-600 mb-8 leading-relaxed">
             Apticrack is the quiz event conducted by EES to develop the ability of students to crack the Aptitude tests for recruitment. Frequent quizzes are conducted and many practice questions are provided.
           </p>
           
           <div className="bg-ees-700 text-white p-6 rounded-lg shadow-lg mb-8 inline-block">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                 <CalendarCheck size={28}/> Takes Place Every Saturday
              </h3>
              <p className="flex items-center gap-2 mt-2 opacity-90">
                 <Clock size={18}/> 7:00 PM Onwards
              </p>
           </div>

           <div>
              <a 
                href="https://apticrack.eesiiests.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center border-2 border-slate-900 text-slate-900 font-bold py-3 px-6 hover:bg-slate-900 hover:text-white transition uppercase"
              >
                Visit Apticrack Portal
              </a>
           </div>
        </div>

        {/* Right Poster */}
        <div className="relative h-[600px] w-full rounded-xl shadow-2xl overflow-hidden bg-slate-100">
           <Image 
             src="/images/events/apticrack-poster.jpg" // Place your poster image here
             alt="Apticrack Poster"
             fill
             className="object-contain"
           />
        </div>
      </div>

      <Footer />
    </div>
  )
}