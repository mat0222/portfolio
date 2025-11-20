import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Rocket, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code2 size={32} />,
      title: 'Código Limpio',
      description: 'Desarrollo con las mejores prácticas y estándares de la industria'
    },
    {
      icon: <Rocket size={32} />,
      title: 'Innovación',
      description: 'Soluciones creativas utilizando las últimas tecnologías'
    },
    {
      icon: <Users size={32} />,
      title: 'Colaboración',
      description: 'Trabajo en equipo y comunicación efectiva en cada proyecto'
    }
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-gradient-to-b from-black to-purple-900/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Sobre Mí
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img alt="Mateo Liendo - Desarrollador Web" className="rounded-2xl shadow-2xl shadow-purple-500/20 w-full" src="https://i.imgur.com/sH51j3u.jpg" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                Soy un desarrollador web junior con una fuerte pasión por el front end y por crear interfaces claras, modernas y orientadas a una gran experiencia de usuario. Me entusiasma aprender nuevas herramientas y enfoques que me permitan mejorar la calidad de mi código y de mis proyectos.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Estoy en constante crecimiento profesional: realizo cursos, practico nuevas tecnologías y participo en proyectos personales para seguir ampliando mis conocimientos. Disfruto escuchar ideas, recibir feedback y trabajar en equipo para encontrar soluciones más completas.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Mi objetivo es seguir formándome, ganar experiencia real en el desarrollo web y aportar valor en cada proyecto mientras continúo construyendo una carrera sólida en el mundo del front end.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-purple-900/30 to-black border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-purple-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;