import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Calendar } from 'lucide-react';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const projects = [
    {
      title: 'Matchear',
      subtitle: 'Gestión de turnos para canchas sintéticas',
      description: 'Plataforma integral para administrar reservas, horarios y cobros de complejos deportivos con canchas sintéticas.',
      images: [
        '/projects/matchear/m1.png',
        '/projects/matchear/m2.png',
        '/projects/matchear/m3.png',
      ],
      year: '2024',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind', 'JavaScript'],
      problem: 'Los turnos se registraban en WhatsApp o cuadernos, lo que generaba dobles reservas, confusión de horarios y falta de control de ingresos.',
      solution: 'Un panel web centralizado que permite gestionar reservas, disponibilidad de canchas, pagos y reportes en un mismo lugar.',
      contributions: [
        'Diseño completo del frontend y backend.',
        'Arquitectura de componentes reutilizables.',
        'Autenticación con JWT y roles para dueños y empleados.',
        'Gestión dinámica de horarios y disponibilidad.',
        'Dashboard con métricas semanales de ingresos.'
      ],
      result: 'Redujo errores, agilizó la atención y los dueños ahora visualizan ingresos diarios y mensuales.',
    },
    {
      title: 'Dashboard Deportivo',
      subtitle: 'Simulador interactivo de ligas',
      description: 'Aplicación tipo "Football Manager Lite" para crear equipos, simular torneos y analizar estadísticas en tiempo real.',
      images: [
        '/projects/dashboard-deportivo/f1.png',
        '/projects/dashboard-deportivo/f2.png',
        '/projects/dashboard-deportivo/f3.png',
      ],
      year: '2023',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Node.js'],
      problem: 'Los usuarios necesitaban una herramienta divertida para gestionar equipos y sentir la experiencia de ser directores técnicos.',
      solution: 'Simulador que permite crear equipos, cargar jugadores, generar torneos automáticos y administrar alineaciones y tácticas.',
      contributions: [
        'Motor de simulación de partidos y ligas.',
        'Cálculo de estadísticas, tabla de posiciones y rendimiento.',
        'Gestión de planteles y formaciones.',
        'Animaciones y visualizaciones interactivas con Chart.js.'
      ],
      result: 'Ofrece una experiencia atractiva y educativa para fanáticos de la estadística deportiva.',
    },
    {
      title: 'Fobibike',
      subtitle: 'Sistema de administración de stock',
      description: 'Suite web para controlar inventario, proveedores y reportes automáticos de una tienda de bicicletas.',
      images: [
        '/projects/fobibike/b1.png',
        '/projects/fobibike/b2.png',
        '/projects/fobibike/b3.png',
      ],
      year: '2023',
      technologies: ['HTML', 'Node.js', 'CSS', 'MySQL', 'JavaScript', 'PHP'],
      problem: 'El stock se manejaba en Excel, dificultando el seguimiento de entradas, salidas, precios y alertas de productos críticos.',
      solution: 'Sistema centralizado para gestionar inventario, categorías, niveles de stock y reportes con alertas de productos críticos.',
      contributions: [
        'Diseño de CRUD completo para productos y proveedores.',
        'Control de stock mínimo con alertas inteligentes.',
        'Integración de base de datos y endpoints optimizados.',
        'Panel con historial de movimientos y reportes.'
      ],
      result: 'Facilitó el control del inventario y redujo pérdidas por falta de seguimiento.',
    }
  ];

  const toggleExpand = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  const goToNextImage = (projectIndex, totalImages) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) + 1) % totalImages
    }));
  };

  const goToPrevImage = (projectIndex, totalImages) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const goToImage = (projectIndex, imageIndex) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: imageIndex
    }));
  };


  return (
    <section id="proyectos" className="py-32 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 via-transparent to-black pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Proyectos
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Selección de proyectos donde he aplicado soluciones innovadoras y tecnologías modernas.
          </motion.p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className="group lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                {/* Image Carousel Section */}
                <motion.div
                  className="relative overflow-hidden lg:order-2"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="relative aspect-video bg-gradient-to-br from-purple-900/20 to-black rounded-2xl overflow-hidden border border-purple-500/10">
                    {project.images && project.images.length > 0 ? (
                      <>
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={currentImageIndex[index] || 0}
                            src={project.images[currentImageIndex[index] || 0]}
                            alt={`${project.title} - Imagen ${(currentImageIndex[index] || 0) + 1}`}
                            className="w-full h-full object-cover"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            onError={(e) => {
                              e.target.src = 'https://via.placeholder.com/1280x720/9333ea/ffffff?text=Imagen+no+disponible';
                            }}
                          />
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        {project.images.length > 1 && (
                          <>
                            <button
                              onClick={() => goToPrevImage(index, project.images.length)}
                              className="absolute left-4 top-1/2 -translate-y-1/2 bg-purple-600/80 hover:bg-purple-600 backdrop-blur-sm rounded-full p-2 border border-purple-400/50 transition-all duration-300 hover:scale-110 z-10"
                              aria-label="Imagen anterior"
                            >
                              <ChevronLeft size={24} className="text-white" />
                            </button>
                            <button
                              onClick={() => goToNextImage(index, project.images.length)}
                              className="absolute right-4 top-1/2 -translate-y-1/2 bg-purple-600/80 hover:bg-purple-600 backdrop-blur-sm rounded-full p-2 border border-purple-400/50 transition-all duration-300 hover:scale-110 z-10"
                              aria-label="Siguiente imagen"
                            >
                              <ChevronRight size={24} className="text-white" />
                            </button>
                          </>
                        )}

                        {/* Dots Indicator */}
                        {project.images.length > 1 && (
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                            {project.images.map((_, imgIndex) => (
                              <button
                                key={imgIndex}
                                onClick={() => goToImage(index, imgIndex)}
                                className={`transition-all duration-300 rounded-full ${
                                  (currentImageIndex[index] || 0) === imgIndex
                                    ? 'w-8 h-2 bg-purple-400'
                                    : 'w-2 h-2 bg-purple-400/40 hover:bg-purple-400/60'
                                }`}
                                aria-label={`Ir a imagen ${imgIndex + 1}`}
                              />
                            ))}
                          </div>
                        )}

                        {/* Image Counter */}
                        {project.images.length > 1 && (
                          <div className="absolute top-4 right-4 bg-purple-600/80 backdrop-blur-sm rounded-full px-3 py-1 border border-purple-400/50 z-10">
                            <span className="text-white text-sm font-medium">
                              {(currentImageIndex[index] || 0) + 1} / {project.images.length}
                            </span>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <p className="text-gray-400">No hay imágenes disponibles</p>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                  className="mt-8 lg:order-1 lg:mt-0"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <motion.span
                      className="text-sm text-purple-400 font-medium flex items-center gap-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <Calendar size={14} />
                      {project.year}
                    </motion.span>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-purple-900/20 text-purple-300 text-xs rounded-full border border-purple-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-purple-900/20 text-purple-300 text-xs rounded-full border border-purple-500/20">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <motion.h3
                    className="text-4xl md:text-5xl font-bold mb-2 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p
                    className="text-xl text-purple-300 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    {project.subtitle}
                  </motion.p>

                  <motion.p
                    className="text-gray-400 mb-6 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Expandable Details */}
                  <motion.button
                    onClick={() => toggleExpand(index)}
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-6"
                    whileHover={{ x: 5 }}
                  >
                    <span className="font-medium">
                      {expandedProject === index ? 'Ocultar detalles' : 'Ver detalles'}
                    </span>
                    <motion.div
                      animate={{ rotate: expandedProject === index ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronRight size={20} />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {expandedProject === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-6 pt-4 border-t border-purple-500/20">
                          <div>
                            <h4 className="text-sm font-semibold text-purple-300 mb-2 uppercase tracking-wider">Problema</h4>
                            <p className="text-gray-300 leading-relaxed">{project.problem}</p>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-purple-300 mb-2 uppercase tracking-wider">Solución</h4>
                            <p className="text-gray-300 leading-relaxed">{project.solution}</p>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-purple-300 mb-3 uppercase tracking-wider">Aportes Clave</h4>
                            <ul className="space-y-2">
                              {project.contributions.map((item, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                  className="flex items-start gap-3 text-gray-300"
                                >
                                  <span className="text-purple-400 mt-1">•</span>
                                  <span>{item}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-purple-300 mb-2 uppercase tracking-wider">Resultado</h4>
                            <p className="text-gray-300 leading-relaxed">{project.result}</p>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-purple-300 mb-3 uppercase tracking-wider">Tecnologías</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-4 py-2 bg-purple-900/30 text-purple-300 text-sm rounded-lg border border-purple-500/30"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;