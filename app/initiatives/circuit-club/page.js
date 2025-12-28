import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function CircuitClubPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
         <h1 className="text-5xl md:text-7xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
           CIRCUIT CLUB
         </h1>
         
         <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg prose-invert">
               <p className="text-xl leading-relaxed text-gray-300">
                 "Legacies may become dormant but they are never forgotten."
               </p>
               <p>
                 Electrical Engineers' Society feels proud to announce that <strong>The Circuit Club</strong> is back in action. 
               </p>
               <div className="p-6 bg-slate-800 rounded-lg border-l-4 border-green-500 my-8">
                 <h3 className="text-xl font-bold text-white mb-2">Upcoming Session</h3>
                 <p className="m-0 text-gray-400">Join us as we begin our journey through the wonderful world of circuitry.</p>
               </div>
            </div>
            
            <div className="relative h-[600px] w-full bg-black rounded-xl overflow-hidden border border-slate-700 shadow-2xl shadow-green-500/20">
               <Image 
                 src="/images/initiatives/circuit-poster.jpg" 
                 alt="Circuit Poster" 
                 fill 
                 className="object-contain" 
               />
            </div>
         </div>
      </div>
      <Footer />
    </div>
  )
}