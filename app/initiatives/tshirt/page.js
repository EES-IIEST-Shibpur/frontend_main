import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function TshirtPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Strip */}
      <div className="bg-ees-900 text-white pt-40 pb-20 text-center relative overflow-hidden">
         {/* Diagonal Slice */}
         <div className="absolute top-0 right-0 w-1/2 h-full bg-ees-700 -skew-x-12 translate-x-20"></div>
         <div className="relative z-10">
            <h1 className="text-5xl font-bold mb-4">T-Shirt & Hoodie</h1>
            <p className="text-xl">Wear your identity. Be part of the legacy.</p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">
         
         {/* Item 1 */}
         <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden bg-slate-100 shadow-xl">
               <Image src="/images/initiatives/tshirt-design.jpg" alt="Polo" fill className="object-contain" />
            </div>
            <div>
               <h2 className="text-3xl font-bold text-slate-900 mb-4">Official EES Polo</h2>
               <p className="text-slate-600 text-lg">
                 Classic black with the departmental logo embroidered. A symbol of unity for the Electrical Engineering department.
               </p>
            </div>
         </div>

         {/* Item 2 */}
         <div className="grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
            <div className="order-2 md:order-1">
               <h2 className="text-3xl font-bold text-slate-900 mb-4">Winter Hoodie</h2>
               <p className="text-slate-600 text-lg">
                 "Powering the Future". Premium quality hoodie with custom graphics representing our core electives.
               </p>
            </div>
            <div className="order-1 md:order-2 relative h-[400px] w-full rounded-2xl overflow-hidden bg-slate-100 shadow-xl">
               <Image src="/images/initiatives/hoodie-design.jpg" alt="Hoodie" fill className="object-contain" />
            </div>
         </div>

      </div>
      <Footer />
    </div>
  )
}