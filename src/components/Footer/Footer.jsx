import { useLocation } from 'react-router-dom';
import C, { t } from '../../config/siteConfig';

export default function Footer() {
  const loc = useLocation();
  const lang = loc.pathname.startsWith('/en') ? 'en' : 'tr';
  const yr = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white/40 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">
          <div>
            <h3 className="font-display text-2xl text-white mb-2">{C.business.shortName}</h3>
            <p className="font-sans text-sm">{C.business.tagline}</p>
          </div>
          <div className="flex flex-wrap gap-8 font-sans text-sm">
            <a href={`/${lang}#menu`} className="hover:text-white transition-colors">{t({tr:'Menü',en:'Menu'},lang)}</a>
            <a href={`/${lang}#about`} className="hover:text-white transition-colors">{t({tr:'Hakkımızda',en:'About'},lang)}</a>
            <a href={`/${lang}#contact`} className="hover:text-white transition-colors">{t({tr:'Konum',en:'Location'},lang)}</a>
            {C.social.instagram && <a href={C.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>}
          </div>
        </div>
        <hr className="border-white/10 mb-6" />
        <p className="font-sans text-xs">© {yr} {C.business.name}. {t({tr:'Tüm hakları saklıdır.',en:'All rights reserved.'},lang)}</p>
      </div>
    </footer>
  );
}
