'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X, ChevronDown } from 'lucide-react'; // Icons
import { navLinks } from '@/lib/navigationData';
import SearchModal from '@/components/SearchModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
  const pathname = usePathname();

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const toggleMobileSubmenu = (name) => {
    setActiveMobileSubmenu(activeMobileSubmenu === name ? null : name);
  };

  const isActive = (href) => pathname === href;

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-md py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3">
             {/* Replace src with your actual logo path */}
             <div className="w-12 h-12 relative">
               {/* Use standard img tag if Image component fails setup initially */}
               <img src="/images/home/ees-logo.png" alt="EES Logo" className="object-contain" /> 
             </div>
             <span className="text-xl font-bold tracking-tight uppercase text-ees-900">
               Electrical Engineers' Society
             </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative group"
                onMouseEnter={() => setHoveredMenu(link.name)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Link 
                  href={link.href || '#'} 
                  className={`flex items-center text-sm font-semibold py-2 transition-colors ${
                    isActive(link.href) 
                      ? 'text-ees-700' 
                      : 'text-slate-700 hover:text-ees-700'
                  }`}
                >
                  {link.name}
                  {link.submenu && <ChevronDown size={14} className="ml-1" />}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {link.submenu && hoveredMenu === link.name && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-lg overflow-hidden border border-slate-100 py-2"
                    >
                      {link.submenu.map((subItem) => (
                        <Link 
                          key={subItem.name} 
                          href={subItem.href} 
                          className={`block px-4 py-2 text-sm transition-colors ${
                            isActive(subItem.href)
                              ? 'bg-ees-50 text-ees-700'
                              : 'text-slate-600 hover:bg-ees-50 hover:text-ees-700'
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Search & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
             <button 
                className="p-2 text-slate-600 hover:text-ees-700 transition-colors"
                onClick={() => setIsSearchOpen(true)}
             >
               <Search size={20} />
             </button>
             <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
               {isOpen ? <X /> : <Menu />}
             </button>
          </div>
        </div>
      </div>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white absolute top-full left-0 w-full border-t shadow-lg overflow-y-auto max-h-[calc(100vh-80px)]"
          >
            <div className="flex flex-col p-4 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-slate-100 last:border-none">
                  {link.submenu ? (
                    <div>
                      <div className="flex justify-between items-center w-full py-3">
                         <Link 
                           href={link.href}
                           onClick={() => setIsOpen(false)}
                           className="text-slate-800 font-medium flex-grow hover:text-ees-700"
                         >
                           {link.name}
                         </Link>
                         <button 
                           onClick={() => toggleMobileSubmenu(link.name)}
                           className="p-2 -mr-2 text-slate-500 hover:text-ees-700"
                         >
                           <ChevronDown 
                             size={20} 
                             className={`transition-transform duration-200 ${activeMobileSubmenu === link.name ? 'rotate-180' : ''}`}
                           />
                         </button>
                      </div>
                      <AnimatePresence>
                        {activeMobileSubmenu === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-slate-50 rounded-md"
                          >
                            {link.submenu.map((subItem) => (
                              <Link 
                                key={subItem.name} 
                                href={subItem.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-2 text-sm text-slate-600 hover:text-ees-700"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link 
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className="block py-3 text-slate-800 font-medium hover:text-ees-700"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}