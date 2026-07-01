import { useScroll, useTransform, motion } from 'framer-motion';
export const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } } };
export const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } };
export const Section = ({ children, className = '', dark = false }) => (
  <section className={`section-pad ${dark ? 'bg-ink text-white' : 'bg-white text-ink'} ${className}`}>{children}</section>
);
export const Container = ({ children, className = '' }) => <div className={`max-w-5xl mx-auto px-6 md:px-10 ${className}`}>{children}</div>;
export const Label = ({ children }) => <span className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-ink-50 mb-4 block">{children}</span>;
export const Headline = ({ children, className = '' }) => <h2 className={`font-display text-display leading-[1.05] ${className}`}>{children}</h2>;
