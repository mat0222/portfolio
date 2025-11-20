import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    name: 'Inicio',
    href: '#inicio'
  }, {
    name: 'Sobre mí',
    href: '#sobre-mi'
  }, {
    name: 'Lenguajes',
    href: '#lenguajes'
  }, {
    name: 'Proyectos',
    href: '#proyectos'
  }, {
    name: 'Servicios',
    href: '#servicios'
  }, {
    name: 'Contacto',
    href: '#contacto'
  }];
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };
  return <motion.nav initial={{
    y: -100
  }} animate={{
    y: 0
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-purple-500/10' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.a href="#inicio" onClick={e => scrollToSection(e, '#inicio')} className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent" whileHover={{
          scale: 1.05
        }}>Portfolio</motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => <motion.a key={item.name} href={item.href} onClick={e => scrollToSection(e, item.href)} className="text-gray-300 hover:text-purple-400 transition-colors duration-300 relative group" initial={{
            opacity: 0,
            y: -20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1
          }}>
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
              </motion.a>)}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white hover:text-purple-400 transition-colors">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden pb-4">
            {navItems.map(item => <a key={item.name} href={item.href} onClick={e => scrollToSection(e, item.href)} className="block py-3 text-gray-300 hover:text-purple-400 hover:bg-purple-900/20 px-4 rounded transition-all duration-300">
                {item.name}
              </a>)}
          </motion.div>}
      </div>
    </motion.nav>;
};
export default Navbar;