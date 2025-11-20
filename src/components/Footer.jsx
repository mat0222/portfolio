import React from 'react';
import { Github, Linkedin, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Github size={20} />, label: 'GitHub', href: 'https://github.com/mat0222' },
    { icon: <Linkedin size={20} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/mateo-liendo02' },
    { icon: <Youtube size={20} />, label: 'YouTube', href: 'https://www.youtube.com/@MateoLiendo02' },
    { icon: <Mail size={20} />, label: 'Email', href: 'mailto:mateoliendo022@gmail.com' }
  ];

  return (
    <footer className="bg-gradient-to-b from-black to-purple-900/20 border-t border-purple-500/20 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-900/30 hover:bg-purple-900/50 text-purple-400 hover:text-purple-300 p-3 rounded-full transition-all duration-300 hover:scale-110 border border-purple-500/30 hover:border-purple-500/60"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="text-center space-y-2">
            <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </p>
            <p className="text-gray-400">
              Desarrollador Web Junior
            </p>
          </div>

          <div className="text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
            <p className="mt-2">Diseñado y desarrollado con pasión</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;