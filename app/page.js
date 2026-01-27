import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/home/group-photo-hero.jpg" // CHANGE THIS to the main crowd photo from your scraped folder
            alt="IIEST EE Department Crowd" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ees-900/90 via-ees-900/60 to-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-7xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg">
            ELECTRICAL ENGINEERS' <span className="text-red-400">SOCIETY</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto mb-10 leading-relaxed">
            "We aim at providing all the required academic support through an online platform."
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
             <Link 
               href="/events"
               className="bg-ees-700 hover:bg-ees-600 text-white px-8 py-3 rounded-full font-bold transition shadow-lg hover:shadow-red-500/50"
             >
               Explore Events
             </Link>
             <Link 
               href="/people/faculty"
               className="bg-white hover:bg-gray-100 text-ees-900 px-8 py-3 rounded-full font-bold transition shadow-lg"
             >
               Meet Faculty
             </Link>
          </div>
        </div>
      </section>

      {/* --- MISSION STATEMENT STRIP (The content from original hero) --- */}
      <section className="bg-white py-16 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Mission</h2>
           <p className="text-xl text-slate-600 leading-8">
             "At EES, we seek to build a <span className="text-ees-700 font-bold">healthy interaction</span> of all its members so that they can flourish and develop."
           </p>
        </div>
      </section>

      {/* --- RECENT HIGHLIGHTS SECTION --- */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">
            Recent Highlights
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {/* Card 1 */}
             <HighlightCard 
               title="Freshers' Party Batch of '25" 
               desc="The Department Of Electrical Engineering welcomed the batch of 2025 with a Freshers Party on 18 Nov."
               image="/images/events/freshers25.jpg"
               color="bg-pink-600"
             />
             
             {/* Card 2 */}
             <HighlightCard 
               title="Farewell Ceremony | Batch of '22" 
               desc="The Department bid adieu to the Class of '22 on 23rd of May. Graced by Prof-in-Charge Prof. Bhaskaran Barman."
               image="/images/events/farewell22.jpg"
               color="bg-red-700"
             />

              {/* Card 3 */}
              <HighlightCard 
               title="Induction Ceremony SPHURAN 2019" 
               desc="Dr. Prasid Syam and distinguished alumni graced the occasion with their presence."
               image="/images/events/sphuran.jpg"
               color="bg-rose-800"
             />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Reusable Component for this page
function HighlightCard({ title, desc, image, color }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
      <div className="h-56 bg-gray-200 relative">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className={`${color} p-6 h-full text-white`}>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-white/90 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}