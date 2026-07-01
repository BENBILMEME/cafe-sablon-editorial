import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import MenuS from './components/Menu/MenuSection';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function HomePage() {
  return (
    <main>
      <Hero />
      <MenuS />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/:lang" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/tr" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
