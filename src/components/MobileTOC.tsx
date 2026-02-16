'use client';

import { useState, useEffect } from 'react';

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

export default function MobileTOC({ items }: { items: TOCItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>('');

  // Close TOC when clicking a link
  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  // Active section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0% -80% 0%' }
    );

    items.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-cardinal-red text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center hover:bg-red-700 transition-all active:scale-95 border-2 border-white/20"
        aria-label="Mở mục lục"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 17.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
      </button>

      {/* Overlay Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-parchment/95 backdrop-blur-md animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-300 bg-white/50">
            <h2 className="text-xl font-display font-bold text-cardinal-red flex items-center gap-2">
              <span className="text-2xl">📖</span> Mục Lục Nghiên Cứu
            </h2>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 text-charcoal hover:bg-gray-200 rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* List Content */}
          <div className="flex-1 overflow-y-auto p-4 toc-scrollbar">
            <nav className="space-y-1">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`w-full text-left py-3 px-4 rounded-lg text-base transition-all ${
                    activeId === item.id
                      ? 'bg-cardinal-red text-white font-semibold shadow-md'
                      : 'text-charcoal hover:bg-gray-200/50'
                  }`}
                  style={{ 
                    paddingLeft: `${item.level === 1 ? '1rem' : '2.5rem'}`,
                    fontSize: item.level === 1 ? '1.1rem' : '1rem'
                  }}
                >
                  {item.title}
                </button>
              ))}
            </nav>
          </div>

          {/* Footer Hint */}
          <div className="p-4 border-t border-gray-300 text-center text-sm text-text-secondary italic bg-white/30">
            Chạm vào mục để chuyển đến nội dung
          </div>
        </div>
      )}
    </div>
  );
}
