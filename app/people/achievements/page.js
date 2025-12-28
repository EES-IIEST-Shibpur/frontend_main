import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, Star } from 'lucide-react';
import { achievements } from '@/lib/peopleData';

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#F0F8FF] border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <Award className="w-16 h-16 text-ees-500 mx-auto mb-6" />
           <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Student Achievements</h1>
           <p className="text-xl text-slate-600 leading-relaxed">
             "The students of the Department have bagged achievements from all around the country. Here are a few of those moments of glory."
           </p>
        </div>
      </section>

      {/* Achievements List */}
      <section className="max-w-5xl mx-auto px-6 py-20">
         <div className="space-y-8">
           {achievements.map((item, index) => (
             <div key={index} className="bg-white rounded-xl shadow-md border-l-8 border-ees-500 overflow-hidden hover:shadow-xl transition-all p-8 flex gap-6">
                <div className="hidden md:flex flex-col items-center justify-start pt-2">
                   <div className="bg-yellow-100 text-yellow-700 font-bold text-2xl w-12 h-12 rounded-full flex items-center justify-center">
                     {index + 1}
                   </div>
                </div>
                <div>
                   <h2 className="text-2xl font-bold text-ees-900 mb-2">{item.title}</h2>
                   <div className="flex items-center gap-2 text-sm font-semibold text-ees-600 mb-4 bg-ees-50 w-max px-3 py-1 rounded-full">
                      <Star size={14}/> {item.winners}
                   </div>
                   <p className="text-slate-600 text-lg">{item.desc}</p>
                </div>
             </div>
           ))}
         </div>
      </section>
      
      <Footer />
    </div>
  )
}