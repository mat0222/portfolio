import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Languages from '@/components/Languages';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import CV from '@/components/CV';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Helmet>
        <title>Portfolio - Desarrollador Web Profesional</title>
        <meta name="description" content="Portfolio profesional de desarrollo web con experiencia en múltiples lenguajes de programación y proyectos innovadores." />
      </Helmet>

      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loading"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LoadingScreen onComplete={() => setIsLoading(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-black text-white"
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <Languages />
            <Projects />
            <Services />
            <CV />
            <Contact />
          </main>
          <Footer />
          <Toaster />
        </motion.div>
      )}
    </>
  );
}

export default App;