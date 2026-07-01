import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import C, { t } from '../../config/siteConfig';
import { Section, Container, Label, Headline, fadeUp } from '../../lib/animations';

const CATS = ['coffee','food','drinks'];
const ICONS = { coffee: '01', food: '02', drinks: '03' };

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

        <div className="space-y-20">
          {CATS.map((cat, ci) => {
            const items = C.menuItems[cat] || [];
            return (
              <motion.div key={cat} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="flex items-baseline gap-4 mb-8">
                  <span className="font-display text-4xl text-ink/10 tabular-nums">{ICONS[cat]}</span>
                  <h3 className="font-display text-2xl text-ink">{t({tr:{coffee:'Kahve',food:'Yiyecek',drinks:'İçecek'}[cat],en:{coffee:'Coffee',food:'Food',drinks:'Drinks'}[cat]},lang)}</h3>
                  <span className="flex-1 h-px bg-ink/10 mt-3" />
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1">
                  {items.map(item => (
                    <div key={item.id} className="group flex justify-between items-start p-4 hover:bg-ink/[0.02] transition-colors">
                      <div>
                        <h4 className="font-display text-lg text-ink group-hover:text-accent transition-colors">{t(item.name,lang)}</h4>
                        <p className="font-sans text-sm text-ink-50 mt-0.5">{t(item.desc,lang)}</p>
                      </div>
                      <span className="font-sans text-sm font-semibold text-ink-80 shrink-0 ml-3 mt-1">{item.price}</span>
                    </div>
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
