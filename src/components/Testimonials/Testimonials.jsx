import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import C, { t } from '../../config/siteConfig';
import { Section, Container, Label, Headline, fadeUp } from '../../lib/animations';

export default function Testimonials() {
  const loc = useLocation();
  const lang = loc.pathname.startsWith('/en') ? 'en' : 'tr';
  const T = C.testimonials;
  if (!T.reviews?.length) return null;

  return (
    <Section dark>
      <Container>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12">
          <Label className="!text-white/40">{t({tr:'Yorumlar',en:'Reviews'},lang)}</Label>
          <Headline className="text-white">{t(T.heading, lang)}</Headline>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-2">
          {T.reviews.map((r, i) => (
            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="border border-white/10 p-8 md:p-10">
              <p className="font-display text-xl md:text-2xl text-white italic leading-relaxed mb-6">"{r.text}"</p>
              <div className="flex items-center justify-between">
                <span className="font-sans text-sm text-white/60">{r.author}</span>
                <span className="text-accent text-sm">{'★'.repeat(r.rating)}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
