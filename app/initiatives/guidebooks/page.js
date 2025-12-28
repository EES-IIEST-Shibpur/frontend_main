import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Book, Download } from 'lucide-react';

const categories = [
  "Core Elective-I",
  "Core Elective-II",
  "Open Elective",
  "Internship Guide",
  "Placement Guide",
  "Being Electrical (General Guide)"
];

export default function GuidebooksPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="relative h-80 bg-blue-900 flex items-center justify-center">
         {/* Background Hero Image */}
         {/* <Image src="/images/initiatives/guide-hero.jpg" fill className="object-cover opacity-20" /> */}
         <div className="z-10 text-center text-white p-4">
            <h1 className="text-6xl font-bold mb-4">GUIDEBOOKS</h1>
            <p className="text-xl opacity-90">Academic resources curated by seniors.</p>
         </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-20 space-y-6">
         {categories.map((cat, idx) => (
           <div key={idx} className="group bg-slate-800 text-white p-6 rounded-lg shadow-lg cursor-pointer hover:bg-ees-700 hover:scale-[1.02] transition-all duration-300 flex justify-between items-center">
              <div className="flex items-center gap-4">
                 <Book size={24} className="text-slate-300 group-hover:text-white"/>
                 <span className="text-xl font-bold uppercase tracking-wider">{cat}</span>
              </div>
              <Download className="opacity-0 group-hover:opacity-100 transition-opacity" />
           </div>
         ))}
      </div>
      
      <Footer />
    </div>
  )
}