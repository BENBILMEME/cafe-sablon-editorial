import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import C, { t } from '../../config/siteConfig';
import { Section, Container, Label, Headline, fadeUp } from '../../lib/animations';

export default function Contact() {
  const loc = useLocation();
  const lang = loc.pathname.startsWith('/en') ? 'en' : 'tr';
  const B = C.business;

  return (
    <Section id="contact">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Label>{t({tr:'Konum',en:'Location'},lang)}</Label>
            <Headline className="mb-8">{t(C.contact.heading, lang)}</Headline>

            <div className="space-y-6 font-sans text-ink-80">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-ink-30 mb-1">{t({tr:'Adres',en:'Address'},lang)}</p>
                <p>{B.address}</p>
              </div>
              {B.phone && <div><p className="text-xs tracking-[0.2em] uppercase text-ink-30 mb-1">{t({tr:'Telefon',en:'Phone'},lang)}</p><a href={`tel:${B.phone}`} className="hover:text-accent transition-colors">{B.phone}</a></div>}
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-ink-30 mb-1">{t({tr:'Saatler',en:'Hours'},lang)}</p>
                <p>{t(C.hours.daysLabel,lang)}: {C.hours.openHour}:00–{C.hours.closeHour}:00</p>
              </div>
            </div>

            {C.contact.googleMapsUrl && (
              <a href={C.contact.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-8 font-sans text-sm font-semibold text-ink border-b-2 border-accent pb-1 hover:text-accent transition-colors">
                {t({tr:'Yol Tarifi Al →',en:'Get Directions →'},lang)}
              </a>
            )}
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="aspect-square bg-ink-10 flex items-center justify-center overflow-hidden">
            {C.contact.googleMapsEmbedUrl ? (
              <iframe src={C.contact.googleMapsEmbedUrl} width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            ) : (
              <span className="font-sans text-sm text-ink-30">Google Maps — site-content.json'dan güncelleyin</span>
            )}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
