import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Mail } from 'lucide-react';
import { staffData } from '@/lib/peopleData';

export default function StaffPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-slate-900">Staff Members</h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Our technical and non-technical staff are the backbone of the department, ensuring seamless operations for academic and research excellence.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {staffData.map((staff, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden hover:-translate-y-1 transition duration-300">
              <div className="relative h-64 bg-slate-200">
                 {/* Images are in public/images/people/staff/ */}
                 <Image 
                   src={`/images/people/staff/${staff.image}`} 
                   alt={staff.name} 
                   fill 
                   className="object-cover"
                 />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold text-lg text-slate-900 mb-1">{staff.name}</h3>
                <span className="inline-block bg-ees-100 text-ees-800 text-xs px-3 py-1 rounded-full font-semibold mb-3">
                  {staff.role}
                </span>
                
                {staff.email ? (
                  <a href={`mailto:${staff.email}`} className="flex items-center justify-center gap-2 text-sm text-slate-500 hover:text-ees-700 transition break-all">
                    <Mail size={14}/> {staff.email}
                  </a>
                ) : (
                  <span className="block text-sm text-slate-400 italic">No Contact Info</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}