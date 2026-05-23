/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Benefits from "./components/Benefits";
import About from "./components/About";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-gray-100 selection:bg-accent-blue/30 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <About />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
