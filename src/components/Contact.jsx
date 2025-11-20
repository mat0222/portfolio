import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "✅ Mensaje enviado",
      description: "Gracias por contactarme. Te responderé pronto.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'mateoliendo022@gmail.com',
      link: 'mailto:mateoliendo022@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Teléfono',
      value: '+54 9 3573 414204',
      link: 'tel:+5493573414204'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Ubicación',
      value: 'Cordoba, Argentina',
      link: null
    }
  ];

  // Clean the number for the URL: remove spaces, plus signs, dashes
  const whatsappNumber = "5493573414204"; 
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <section id="contacto" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Contacto
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Información de Contacto</h3>
                <p className="text-gray-400 mb-8">
                  Estoy disponible para nuevos proyectos y colaboraciones. No dudes en contactarme para discutir cómo puedo ayudarte a alcanzar tus objetivos.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="bg-purple-900/30 p-3 rounded-lg text-purple-400 group-hover:bg-purple-900/50 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">{info.title}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-white hover:text-purple-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* WhatsApp Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="pt-4"
              >
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-green-500/20 hover:scale-105 hover:shadow-green-500/40 w-full sm:w-auto justify-center"
                >
                  <MessageCircle size={24} />
                  <span className="font-semibold text-lg">Enviar mensaje por WhatsApp</span>
                </a>
              </motion.div>

              <div className="pt-4">
                <img alt="Contact illustration" className="rounded-xl shadow-2xl shadow-purple-500/20 w-full h-48 object-cover" src="https://images.unsplash.com/photo-1700941019917-731dc64ce685" />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 rounded-2xl p-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2 font-medium">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white mb-2 font-medium">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="¿En qué puedo ayudarte?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2 font-medium">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-black/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/30"
                >
                  <Send size={20} className="mr-2" />
                  Enviar Mensaje
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;