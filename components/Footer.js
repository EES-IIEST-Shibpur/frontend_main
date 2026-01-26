import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Heart, ChevronRight, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ees-900 text-white pt-20 pb-10 relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-ees-500 rounded-full mix-blend-overlay blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section: Logo & Description */}
        <div className="flex flex-col md:flex-row items-start justify-between border-b border-ees-800 pb-10 mb-10 gap-8">
           <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full p-2 flex items-center justify-center shadow-lg shadow-ees-950/20 flex-shrink-0">
                 <img src="/images/home/ees-logo.png" alt="EES Logo" className="w-full h-full object-contain" />
              </div>
              <div className="text-left">
                 <h2 className="text-2xl font-bold uppercase tracking-wider leading-tight">Electrical Engineers'<br className="block sm:hidden" /> Society</h2>
                 <p className="text-ees-300 text-sm mt-1">IIEST Shibpur | Est. 1981</p>
              </div>
           </div>
           
           <p className="text-base md:text-lg font-light text-ees-100 max-w-xl text-left md:text-right italic leading-relaxed">
            "A platform for students, teachers, and enthusiasts to innovate, collaborate, and contribute to the advancement of technology."
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          
          {/* Column 1: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-ees-300 uppercase tracking-widest border-l-2 border-ees-500 pl-3">Quick Links</h3>
            <ul className="space-y-3">
               {[
                 { name: 'Home', href: '/' },
                 { name: 'About Us', href: '/about' },
                 { name: 'Events', href: '/events' },
                 { name: 'Gallery', href: '/gallery' },
                 { name: 'Placements', href: '/placements' },
               ].map((item) => (
                 <li key={item.name}>
                   <Link href={item.href} className="group flex items-center text-ees-100 hover:text-white transition-colors">
                     <ChevronRight size={14} className="mr-2 text-ees-500 group-hover:translate-x-1 transition-transform" />
                     {item.name}
                   </Link>
                 </li>
               ))}
            </ul>
          </div>

          {/* Column 2: Leadership */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-ees-300 uppercase tracking-widest border-l-2 border-ees-500 pl-3">Leadership</h3>
            <div className="space-y-4 text-sm">
               <PersonCard 
                 role="Prof-in-charge" 
                 name="Prof. Bhaskaran Barman" 
                 email="bhaskaran.ee@faculty.iiests.ac.in" 
               />
               <PersonCard 
                 role="General Secretary" 
                 name="Ruman Paul" 
                 email="2022eeb002.ruman@students.iiests.ac.in" 
               />
               <PersonCard 
                 role="Vice President" 
                 name="Ambhrin Roy" 
                 email="2022eeb100.ambhrin@students.iiests.ac.in" 
               />
            </div>
          </div>

          {/* Column 3: Contact & Social */}
          <div className="space-y-6">
             <h3 className="text-sm font-bold text-ees-300 uppercase tracking-widest border-l-2 border-ees-500 pl-3">Get in Touch</h3>
             <div className="space-y-4">
                <div className="flex items-center gap-3 text-ees-100">
                   <Mail size={18} className="text-ees-400" />
                   <a href="mailto:contact@eesiiests.org" className="hover:text-white transition">contact@eesiiests.org</a>
                </div>
                
                {/* Social Icons Grid */}
                 <div className="flex gap-4 pt-2">
                   <SocialIcon Icon={Facebook} href="https://facebook.com/ees.iiest.shibpur" />
                   <SocialIcon Icon={Instagram} href="https://instagram.com/ees_iiests" />
                   <SocialIcon Icon={Linkedin} href="https://linkedin.com/in/ees_iiests" />
                   <SocialIcon Icon={Youtube} href="https://youtube.com/@electricalengineerssociety8968" />
                 </div>
             </div>
          </div>

          {/* Column 4: Location Map */}
          <div className="space-y-6">
             <h3 className="text-sm font-bold text-ees-300 uppercase tracking-widest border-l-2 border-ees-500 pl-3">Visit Us</h3>
             <div className="rounded-xl overflow-hidden border border-ees-700 h-40 shadow-lg">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1842.1469502901968!2d88.3072!3d22.5548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0279c91a8d2d49%3A0x815727e555027410!2sDepartment%20of%20Electrical%20Engineering%2C%20IIEST%20Shibpur!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen="" 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Department of Electrical Engineering Location"
                 className="grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100"
               />
             </div>
             <p className="text-xs text-ees-400 leading-relaxed">
               Department of Electrical Engineering,<br/>
               Indian Institute of Engineering Science and Technology,<br/>
               Shibpur, Howrah - 711103
             </p>
          </div>

        </div>

        {/* Footer Bottom */}
         <div className="font-body text-xs text-muted-foreground pt-4 border-t border-border w-full text-center">
            &copy; {new Date().getFullYear()} <a href="https://www.eesiiests.org" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Electrical Engineers' Society</a>. Designed by EES Web Team.
          </div>
        {/* <div className="mt-16 pt-8 border-t border-ees-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-ees-400">
           <p>&copy; {new Date().getFullYear()} Electrical Engineers' Society. Designed by EES Web Team</p> */}
           
           {/* <Link href="/people/web-team" className="flex items-center gap-2 px-4 py-2 bg-ees-800/50 rounded-full hover:bg-ees-800 transition-colors group">
             <span>Made with</span>
             <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
             <span>by <span className="text-white font-medium group-hover:text-ees-300 transition-colors">EES Web Team</span></span>
           </Link> */}
        {/* </div> */}
      </div>
    </footer>
  );
}

// Sub-components for cleaner code
function SocialIcon({ Icon, href }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-3 bg-ees-800 rounded-lg text-ees-300 hover:bg-white hover:text-ees-900 hover:scale-110 transition-all duration-300 shadow-md"
    >
      <Icon size={20} />
    </a>
  )
}

function PersonCard({ role, name, email }) {
  return (
    <div>
      <p className="text-xs text-ees-400 uppercase tracking-wide mb-1 opacity-70">{role}</p>
      <p className="font-semibold text-white">{name}</p>
      <a href={`mailto:${email}`} className="text-ees-300 hover:text-white text-xs truncate block max-w-[200px] transition-colors">
        {email}
      </a>
    </div>
  )
}