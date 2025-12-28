import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function TechSimplifiedPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Header with jagged style */}
      <div className="bg-ees-900 text-white pt-40 pb-32 text-center relative overflow-hidden" 
           style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)" }}>
         <h1 className="text-5xl md:text-7xl font-extrabold font-serif italic mb-6">Tech Simplified</h1>
         <div className="bg-white/10 backdrop-blur-md max-w-3xl mx-auto p-6 rounded-lg">
           <p className="text-lg">
             "Keen on exploring the magnetic world of fluxes and farads? EES brings you Tech Simplified, a technical series to feed your electrical drives!"
           </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 -mt-20 relative z-10">
         <h2 className="text-4xl font-serif italic text-ees-900 mb-10 border-b-2 border-ees-900 inline-block pb-2">Up Coming...</h2>

         <div className="grid md:grid-cols-2 gap-12">
            {/* Student Card 1 */}
            <StudentCard 
              name="Samit Das"
              year="4th Year || IT"
              topic="How to prepare for SDE Roles"
              desc="Discover key skills for securing high-paying roles at leading MNCs."
              image="/images/events/speaker1.jpg" // Put image here
            />
            {/* Student Card 2 */}
            <StudentCard 
              name="Shreyas Kumar"
              year="4th Year || Mechanical"
              topic="How to make Research Based Profile"
              desc="Take a step closer to your dream research. Master building a profile suited for research."
              image="/images/events/speaker2.jpg"
            />
         </div>
      </div>
      <Footer />
    </div>
  )
}

function StudentCard({ name, year, topic, desc, image }) {
  return (
    <div className="bg-black text-white p-6 rounded-none relative shadow-2xl group overflow-hidden">
      <div className="flex gap-6">
        <div className="flex-1 z-10">
          <h3 className="text-xl font-bold uppercase underline decoration-ees-500 underline-offset-4 mb-1">{name}</h3>
          <p className="text-gray-400 text-sm mb-6">{year}</p>
          <h4 className="text-2xl font-extrabold uppercase leading-none mb-4">{topic}</h4>
          <p className="text-sm text-gray-300 leading-relaxed">{desc}</p>
        </div>
        <div className="w-1/3 relative h-64 z-10 border-2 border-white/20">
           <Image src={image} alt={name} fill className="object-cover" />
        </div>
      </div>
      {/* Decorative Red Splatter effect via css gradient */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-red-600 to-transparent opacity-80"></div>
    </div>
  )
}