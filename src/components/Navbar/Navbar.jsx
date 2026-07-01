import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import C, { t } from '../../config/siteConfig';

const LINKS = (lang) => [
  { l: t({tr:'Menü',en:'Menu'},lang), h: '#menu' },
  { l: t({tr:'Hakkımızda',en:'About'},lang), h: '#about' },
  { l: t({tr:'Galeri',en:'Gallery'},lang), h: '#gallery' },
  { l: t({tr:'Konum',en:'Location'},lang), h: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();
  const lang = loc.pathname.startsWith('/en') ? 'en' : 'tr';
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);

  return (
    <motion.header initial={{ y: -60 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${scrolled ? 'bg-white/95 backdrop-blur-sm border-b border-ink/5' : 'bg-transparent'}`}>
      <nav className="max-w-5xl mx-auto flex h-16 items-center justify-between px-6">
        <a href={`/${lang}`} className="font-display text-xl text-ink hover:text-accent transition-colors">{C.business.shortName}</a>
        <div className="hidden md:flex items-center gap-6">
          {LINKS(lang).map(lk => (
            <a key={lk.h} href={`/${lang}${lk.h}`} className="font-sans text-sm font-medium text-ink-50 hover:text-ink transition-colors">{lk.l}</a>
          ))}
          <span className="w-px h-4 bg-ink/10" />
          <a href="/tr" className={`font-sans text-xs font-semibold px-2.5 py-1 border transition-all ${lang==='tr'?'bg-ink text-white border-ink':'text-ink-50 border-ink/20 hover:border-ink'}`}>TR</a>
          <a href="/en" className={`font-sans text-xs font-semibold px-2.5 py-1 border transition-all ${lang==='en'?'bg-ink text-white border-ink':'text-ink-50 border-ink/20 hover:border-ink'}`}>EN</a>
        </div>
      </nav>
    </motion.header>
  );
}
