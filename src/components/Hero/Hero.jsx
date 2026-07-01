import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import C, { t, PLACEHOLDER } from '../../config/siteConfig';
import { fadeUp } from '../../lib/animations';

export default function Hero() {
  const loc = useLocation();
  const lang = loc.pathname.startsWith('/en') ? 'en' : 'tr';
  const H = C.hero;

  return (
    <section className="relative min-h-screen bg-ink text-white overflow-hidden">
      {/* Arka plan büyük numara */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[20vw] text-white/[0.02] select-none pointer-events-none leading-none">C</div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-16 grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center min-h-screen">
        {/* Sol — Büyük tipografi */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <div className="flex items-center gap-3 mb-10">
            <span className="w-8 h-px bg-accent" />
            <span className="font-sans text-xs font-medium tracking-[0.3em] uppercase text-white/40">{t(C.hours.displayText, lang)}</span>
          </div>

          <h1 className="font-display text-mega text-white mb-8">
            {t(H.tagline, lang)}<br />
            <span className="italic text-accent">{t(H.tagline2, lang)}</span>
          </h1>

          <p className="font-sans text-lg text-white/45 leading-relaxed max-w-md mb-10 font-light">{t(H.desc, lang)}</p>

          <div className="flex flex-wrap gap-5">
            <a href={`/${lang}#menu`} className="font-sans px-8 py-4 bg-white text-ink font-semibold text-sm tracking-wide hover:bg-accent hover:text-white transition-all duration-300">
              {t(H.cta, lang)}
            </a>
            <a href={`/${lang}#contact`} className="font-sans px-8 py-4 border border-white/20 text-white font-medium text-sm tracking-wide hover:border-white hover:bg-white/5 transition-all duration-300">
              {t(H.cta2, lang)} →
            </a>
          </div>

          <div className="mt-14 flex items-center gap-4 font-sans text-sm text-white/30">
            <span className="text-accent">★</span> {C.business.rating} · {C.business.ratingPlatform}
          </div>
        </motion.div>

        {/* Sağ — Dikey görsel */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.8 }}
          className="relative aspect-[3/4] overflow-hidden border border-white/10">
          <img src={PLACEHOLDER} alt={C.business.name} className="w-full h-full object-cover grayscale" />
          <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-ink to-transparent" />
          <div className="absolute bottom-6 left-6 font-sans text-xs text-white/60 tracking-widest uppercase">{C.business.tagline}</div>
        </motion.div>
      </div>

      {/* Scroll */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-white/20">{t({tr:'Aşağı',en:'Scroll'},lang)}</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-px h-8 bg-white/10" />
      </motion.div>
    </section>
  );
}
