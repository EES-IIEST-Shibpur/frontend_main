import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function IndustrialPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="pt-32 pb-16 text-center max-w-4xl mx-auto px-6">
         <h1 className="text-4xl md:text-5xl font-bold text-ees-900 mb-6 uppercase tracking-wider">Industrial Visit</h1>
         <p className="text-lg text-slate-700 leading-relaxed">
           "There are loads of Industrial Visits by the EES to electrical power plants and industries to make the students get better acquainted with the technical and Industrial aspects of Electrical Engineering in real-life world."
         </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-20">
         <div className="grid gap-6">
            {/* Big Feature Image */}
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
               <Image src="/images/initiatives/visit-group.jpg" alt="Main Visit" fill className="object-cover" />
            </div>
            {/* Grid of smaller snaps if you have more images in your scraped folder */}
            <div className="grid md:grid-cols-2 gap-6">
               <div className="relative h-64 bg-slate-200 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400">Additional Photo 1</div>
                  {/* Replace with <Image ... /> when you have more photos */}
               </div>
               <div className="relative h-64 bg-slate-200 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400">Additional Photo 2</div>
               </div>
            </div>
         </div>
      </div>
      <Footer />
    </div>
  )
}