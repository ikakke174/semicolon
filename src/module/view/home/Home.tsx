import About from "./sections/About";
import Clients from "./sections/Clients";
import ContactForm from "./sections/ContactForm";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Insights from "./sections/Insights";
import Navbar from "./sections/Navbar";
import Newsletter from "./sections/Newsletter";
import Services from "./sections/Services";
import Statistics from "./sections/Statistics";

export default function Home() {
  return (
    <>
      <a href="#main" className="sc-skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <Statistics />
        <Insights />
        <About />
        <Clients />
        <Newsletter />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
