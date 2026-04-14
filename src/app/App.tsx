import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { WhyChoose } from './components/WhyChoose';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { Faq } from './components/Faq';
import { MobileStickyCta } from './components/MobileStickyCta';
import { HowItWorks } from './components/HowItWorks';

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
        <HowItWorks />
        <WhyChoose />
        <Faq />
        <CallToAction />
        <Footer />
      </main>
      <MobileStickyCta />
    </div>
  );
}
