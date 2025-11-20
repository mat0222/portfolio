import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contacto');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }}>
            <motion.h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400 bg-clip-text text-transparent" initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }}>Desarrollador Web Junior</motion.h1>
            
            <motion.p className="text-xl md:text-2xl text-gray-300 mb-8" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.8,
            delay: 0.4
          }}>
              Transformando ideas en experiencias digitales excepcionales
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.6
          }}>
              <Button onClick={scrollToContact} className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/50">
                Contáctame
              </Button>
              <Button onClick={() => {
              const element = document.querySelector('#proyectos');
              if (element) element.scrollIntoView({
                behavior: 'smooth'
              });
            }} variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-900/30 px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105">
                Ver Proyectos
              </Button>
            </motion.div>
          </motion.div>

          <motion.div className="mt-16" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 1,
          delay: 1
        }}>
            <ArrowDown className="mx-auto text-purple-400 animate-bounce" size={32} />
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Hero;