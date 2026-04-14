import { Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MobileStickyCta } from './components/MobileStickyCta';

const About = lazy(() => import('./components/About').then((module) => ({ default: module.About })));
const Products = lazy(() => import('./components/Products').then((module) => ({ default: module.Products })));
const HowItWorks = lazy(() => import('./components/HowItWorks').then((module) => ({ default: module.HowItWorks })));
const WhyChoose = lazy(() => import('./components/WhyChoose').then((module) => ({ default: module.WhyChoose })));
const Faq = lazy(() => import('./components/Faq').then((module) => ({ default: module.Faq })));
const CallToAction = lazy(() => import('./components/CallToAction').then((module) => ({ default: module.CallToAction })));
const Footer = lazy(() => import('./components/Footer').then((module) => ({ default: module.Footer })));

export default function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <Suspense fallback={<div className="h-24" />}>
          <About />
          <Products />
          <HowItWorks />
          <WhyChoose />
          <Faq />
          <CallToAction />
          <Footer />
        </Suspense>
      </main>
      <MobileStickyCta />
    </div>
  );
}
