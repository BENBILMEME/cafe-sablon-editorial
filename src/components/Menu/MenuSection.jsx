import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import C, { t } from '../../config/siteConfig';
import { Section, Container, Label, Headline, fadeUp } from '../../lib/animations';

const CATS = ['coffee','food','drinks'];
const CAT_LABELS = { coffee: {tr:'Kahve',en:'Coffee'}, food: {tr:'Yiyecek',en:'Food'}, drinks: {tr:'İçecek',en:'Drinks'} };

export default function MenuSection() {
  const loc = useLocation();
  const lang = loc.pathname.startsWith('/en') ? 'en' : 'tr';

  return (
    <Section id="menu">
      <Container>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Label>{t({tr:'Menü',en:'Menu'},lang)}</Label>
          <Headline className="mb-16">{t({tr:'Ne İçilir, Ne Yenir',en:'What to Drink & Eat'},lang)}</Headline>
        </motion.div>

        <div className="space-y-24">
          {CATS.map((cat, ci) => {
            const items = C.menuItems[cat] || [];
            return (
              <motion.div key={cat} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {/* Kategori başlığı */}
                <div className="flex items-baseline gap-4 mb-10">
                  <span className="font-display text-5xl text-ink/10 tabular-nums">{`0${ci+1}`}</span>
                  <h3 className="font-display text-3xl text-ink">{t(CAT_LABELS[cat], lang)}</h3>
                  <span className="flex-1 h-px bg-ink/10 mt-4" />
                </div>

                {/* Ürün grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {items.map((item, i) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="group card-lift border border-ink/5 rounded-none p-5"
                    >
                      {/* Üst: isim + fiyat */}
                      <div className="flex justify-between items-start gap-3 mb-2">
                        <h4 className="font-display text-lg text-ink group-hover:text-accent transition-colors duration-200">
                          {t(item.name, lang)}
                        </h4>
                        <span className="font-sans text-sm font-semibold text-accent shrink-0 mt-0.5 tabular-nums">
                          {item.price}
                        </span>
                      </div>

                      {/* Alt: açıklama + noktalı çizgi */}
                      <div className="flex items-end gap-2">
                        <p className="font-sans text-sm text-ink-50 leading-relaxed line-clamp-2">
                          {t(item.desc, lang)}
                        </p>
                      </div>

                      {/* Hover çizgisi */}
                      <div className="mt-4 h-px bg-ink/5 group-hover:bg-accent/30 transition-colors duration-300" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
