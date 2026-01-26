'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ChevronRight, User, Calendar, Briefcase, FileText, Building, GraduationCap, Users, Trophy } from 'lucide-react';
import Link from 'next/link';
import { getSearchIndex } from '@/lib/searchIndex';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [mounted, setMounted] = useState(false);
  const [dataIndex, setDataIndex] = useState([]);

  // Load index on mount
  useEffect(() => {
    setMounted(true);
    setDataIndex(getSearchIndex());
  }, []);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Filter Logic
  const results = useMemo(() => {
    if (!query.trim()) return [];
    
    // Normalize query
    const lowerQuery = query.toLowerCase().trim();
    
    return dataIndex.filter(item => {
      // Basic match
      return item.keywords.includes(lowerQuery) || item.title.toLowerCase().includes(lowerQuery);
    });
  }, [query, dataIndex]);

  // Group by Category
  const groupedResults = useMemo(() => {
    const groups = {};
    results.forEach(item => {
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
    });
    return groups;
  }, [results]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[9999] transition-all"
          />
          
          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed inset-0 z-[10000] flex items-start justify-center pt-20 px-4 pointer-events-none"
          >
            <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden pointer-events-auto border border-slate-200">
              
              {/* Search Header */}
              <div className="relative border-b border-slate-100 flex items-center p-4">
                <Search className="text-slate-400 w-6 h-6 ml-2" />
                <input
                  autoFocus
                  type="text"
                  placeholder="Search faculty, events, placements..."
                  className="w-full text-lg px-4 py-2 outline-none text-slate-800 placeholder:text-slate-400 font-medium"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Results Area */}
              <div className="max-h-[60vh] overflow-y-auto bg-slate-50/50 p-4 scrollbar-thin scrollbar-thumb-slate-200">
                
                {results.length === 0 && query.trim() !== '' && (
                  <div className="text-center py-12 text-slate-500">
                    <p>No results found for "<span className="font-semibold text-slate-700">{query}</span>"</p>
                    <p className="text-sm mt-2 opacity-60">Try searching for a professor's name or an event.</p>
                  </div>
                )}

                {results.length === 0 && query.trim() === '' && (
                  <div className="text-center py-12 text-slate-400">
                    <p>Type to start searching...</p>
                  </div>
                )}

                {Object.keys(groupedResults).map((category) => (
                  <div key={category} className="mb-6 last:mb-0">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 px-2 flex items-center gap-2">
                       {getCategoryIcon(category)} {category}
                    </h3>
                    <div className="space-y-2">
                      {groupedResults[category].map((item) => (
                        <Link 
                          href={item.url} 
                          key={item.id}
                          onClick={onClose} 
                          target={item.isExternal ? "_blank" : "_self"}
                          className="flex items-center justify-between p-3 bg-white hover:bg-ees-50 border border-slate-100 hover:border-ees-100 rounded-lg group transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                        >
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-slate-800 group-hover:text-ees-700 truncate">
                              {item.title}
                            </h4>
                            <p className="text-xs text-slate-500 truncate mt-0.5">
                              {item.description}
                            </p>
                          </div>
                          <ChevronRight size={16} className="text-slate-300 group-hover:text-ees-500 transform group-hover:translate-x-1 transition-all ml-4" />
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

              </div>
              
              {/* Footer */}
              <div className="bg-slate-50 border-t border-slate-100 px-4 py-2 flex justify-between items-center text-xs text-slate-400 font-medium">
                 <span>{results.length} results found</span>
                 <div className="flex gap-2">
                   <span className="bg-white border px-1.5 rounded shadow-sm">Esc</span> to close
                 </div>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function getCategoryIcon(category) {
  switch(category) {
    case 'Faculty': return <GraduationCap size={12} />;
    case 'People': return <User size={12} />;
    case 'Student Team': return <Users size={12} />;
    case 'Achievements': return <Trophy size={12} />;
    case 'Events': return <Calendar size={12} />;
    case 'Recruiters': return <Building size={12} />;
    case 'Placements': return <Briefcase size={12} />;
    default: return <FileText size={12} />;
  }
}
