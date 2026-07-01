import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import C, { t } from '../../config/siteConfig';
import { Section, Container, Label, Headline, fadeUp } from '../../lib/animations';

export default function Gallery() {
  const loc = useLocation();
  const lang = loc.pathname.startsWith('/en') ? 'en' : 'tr';
  const G = C.gallery;
  if (!G.images?.length) return null;

  return (
    <Section id="gallery">
      <Container>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12">
          <Label>{t({tr:'Galeri',en:'Gallery'},lang)}</Label>
          <Headline>{t(G.heading, lang)}</Headline>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {G.images.map((img, i) => (
            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className={`overflow-hidden ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''} aspect-square`}>
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" loading="lazy" />
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
