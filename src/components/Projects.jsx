import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Projects = () => {
  const { toast } = useToast();

  const projects = [
    {
      title: 'Funko Shop',
      description: 'E-commerce temático para venta de figuras coleccionables. Incluye catálogo filtrable, detalles de producto y carrito de compras funcional.',
      image: 'https://i.imgur.com/rbZEdDN.png',
      tags: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com', // Reemplaza con tu URL de GitHub
      demoUrl: null
    },
    {
      title: 'PlayStation Interface',
      description: 'Landing page promocional inspirada en la interfaz de PlayStation. Diseño inmersivo con animaciones fluidas y presentación de productos destacados.',
      image: 'https://i.imgur.com/ikPQmSf.png',
      tags: ['HTML', 'CSS', 'JavaScript', 'Python'],
      githubUrl: 'https://github.com', // Reemplaza con tu URL de GitHub
      demoUrl: null
    },
    {
      title: 'Dashboard Deportivo',
      description: 'Panel de control administrativo para gestión de datos deportivos. Visualización de estadísticas, tablas de posiciones y métricas de rendimiento.',
      image: 'https://i.imgur.com/D2ga04p.png',
      tags: ['HTML', 'CSS', 'JavaScript', 'Php', 'SQL'],
      githubUrl: 'https://github.com', // Reemplaza con tu URL de GitHub
      demoUrl: null
    },
    {
      title: 'San Lorenzo Fan Page',
      description: 'Sitio web informativo para el club San Lorenzo. Sección de noticias, historia del club y galería de imágenes optimizada para fans.',
      image: 'https://i.imgur.com/bqYOusw.png',
      tags: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com', // Reemplaza con tu URL de GitHub
      demoUrl: null
    },
    {
      title: 'FobiBike',
      description: 'Solución web para negocio de bicicletas. Catálogo de productos, gestión de servicios de taller y formulario de contacto para clientes.',
      image: 'https://i.imgur.com/98fStcG.png',
      tags: ['HTML', 'CSS', 'JavaScript', 'Php', 'SQL'],
      githubUrl: 'https://github.com', // Reemplaza con tu URL de GitHub
      demoUrl: null
    }
  ];

  const handleDemoClick = (demoUrl) => {
    if (demoUrl) {
      window.open(demoUrl, '_blank', 'noopener,noreferrer');
    } else {
      toast({
        title: "🚧 Demo no disponible",
        description: "La demo de este proyecto estará disponible próximamente.",
      });
    }
  };

  const handleCodeClick = (githubUrl) => {
    if (githubUrl && githubUrl !== 'https://github.com') {
      window.open(githubUrl, '_blank', 'noopener,noreferrer');
    } else {
      toast({
        title: "🔗 Ver código",
        description: "Abre el repositorio de GitHub para ver el código fuente.",
      });
      // Abre GitHub en una nueva pestaña si no hay URL específica
      window.open('https://github.com', '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="proyectos" className="py-20 bg-gradient-to-b from-purple-900/10 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Proyectos Destacados
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    src={project.image} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={() => handleDemoClick(project.demoUrl)}
                      variant="outline"
                      size="sm"
                      className="flex-1 border-purple-500/50 text-purple-400 hover:bg-purple-900/30"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </Button>
                    <Button
                      onClick={() => handleCodeClick(project.githubUrl)}
                      variant="outline"
                      size="sm"
                      className="flex-1 border-purple-500/50 text-purple-400 hover:bg-purple-900/30"
                    >
                      <Github size={16} className="mr-2" />
                      Código
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;