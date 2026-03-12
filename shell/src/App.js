import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Blog from "./components/Blog";
import Team from "./components/Team";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <Testimonials />
      <Gallery />
      <Stats />
      <CTA />
      <Blog />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;