import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import C, { t, PLACEHOLDER } from '../../config/siteConfig';
import { Section, Container, Label, Headline, fadeUp } from '../../lib/animations';

export default function About() {
  const loc = useLocation();
  const lang = loc.pathname.startsWith('/en') ? 'en' : 'tr';
  const A = C.about;

  return (
    <Section id="about" dark>
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Sol */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Label className="!text-white/40">{t({tr:'Hakkımızda',en:'About'},lang)}</Label>
            <Headline className="text-white mb-8">{t(A.heading, lang)}</Headline>
            <p className="font-sans text-lg text-white/50 leading-relaxed font-light mb-10">{t(A.body, lang)}</p>

            <div className="flex gap-12">
              {A.stats.map(s => (
                <div key={s.n}>
                  <p className="font-display text-4xl text-accent">{s.n}</p>
                  <p className="font-sans text-xs text-white/30 mt-1">{t(s.label, lang)}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Sağ */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-2 gap-3">
            <div className="aspect-square bg-ink-80 overflow-hidden"><img src={PLACEHOLDER} alt="About 1" className="w-full h-full object-cover opacity-70 grayscale" /></div>
            <div className="aspect-square bg-ink-80 overflow-hidden mt-8"><img src={PLACEHOLDER} alt="About 2" className="w-full h-full object-cover opacity-70 grayscale" /></div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
