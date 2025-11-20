import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShoppingCart, Megaphone, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Services = () => {
  const { toast } = useToast();

  const services = [
    {
      icon: <ShoppingCart size={40} />,
      title: 'E-commerce',
      price: '$300.000',
      description: 'Tienda online completa con todas las funcionalidades',
      features: [
        'Diseño responsive y moderno',
        'Carrito de compras integrado',
        'Pasarela de pagos segura',
        'Panel de administración',
        'Gestión de inventario',
        'Sistema de envíos',
        'Optimización SEO',
        'Soporte técnico 3 meses'
      ]
    },
    {
      icon: <Megaphone size={40} />,
      title: 'Publicitarias',
      price: '$150.000',
      description: 'Sitios web enfocados en conversión y marketing',
      features: [
        'Landing page optimizada',
        'Diseño atractivo y persuasivo',
        'Formularios de contacto',
        'Integración con redes sociales',
        'Analytics y seguimiento',
        'Optimización de velocidad',
        'Responsive design',
        'Soporte técnico 2 meses'
      ],
      popular: true
    },
    {
      icon: <BarChart3 size={40} />,
      title: 'Administrativas',
      price: '$250.000',
      description: 'Sistemas de gestión empresarial personalizados',
      features: [
        'Dashboard personalizado',
        'Gestión de usuarios y roles',
        'Reportes y estadísticas',
        'Base de datos robusta',
        'API REST integrada',
        'Sistema de notificaciones',
        'Backup automático',
        'Soporte técnico 6 meses'
      ]
    }
  ];

  const handleContactClick = () => {
    const element = document.querySelector('#contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicios" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Servicios y Planes
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Soluciones profesionales adaptadas a tus necesidades
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative bg-gradient-to-br from-purple-900/20 to-black border rounded-2xl p-8 hover:scale-105 transition-all duration-300 ${
                  service.popular ? 'border-purple-500 shadow-2xl shadow-purple-500/30' : 'border-purple-500/20'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Más Popular
                    </span>
                  </div>
                )}

                <div className="text-purple-400 mb-4">{service.icon}</div>
                
                <h3 className="text-2xl font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{service.price}</span>
                  <span className="text-gray-400 ml-2">ARS</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check size={20} className="text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={handleContactClick}
                  className={`w-full ${
                    service.popular
                      ? 'bg-purple-600 hover:bg-purple-700'
                      : 'bg-purple-900/50 hover:bg-purple-900/70'
                  } text-white py-6 rounded-xl transition-all duration-300`}
                >
                  Solicitar Servicio
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;