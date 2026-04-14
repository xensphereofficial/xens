import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { WhyChoose } from './components/WhyChoose';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { Faq } from './components/Faq';
import { MobileStickyCta } from './components/MobileStickyCta';

export default function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <About />
        <Products />
        <WhyChoose />
        <Faq />
        <CallToAction />
        <Footer />
      </main>
      <MobileStickyCta />
    </div>
  );
}
