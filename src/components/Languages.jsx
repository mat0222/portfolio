import React from 'react';
import { motion } from 'framer-motion';

const Languages = () => {
  const languages = [
    { name: 'JavaScript', level: 95, color: 'from-yellow-400 to-yellow-600' },
    { name: 'React', level: 90, color: 'from-cyan-400 to-cyan-600' },
    { name: 'Node.js', level: 85, color: 'from-green-400 to-green-600' },
    { name: 'Pascal', level: 80, color: 'from-blue-400 to-blue-600' },
    { name: 'Php', level: 88, color: 'from-blue-500 to-blue-700' },
    { name: 'HTML/CSS', level: 95, color: 'from-orange-400 to-orange-600' },
    { name: 'SQL', level: 82, color: 'from-purple-400 to-purple-600' },
    { name: 'Lazarus', level: 80, color: 'from-red-400 to-red-600' },
    { name: 'Visual Code', level: 95, color: 'from-purple-400 to-purple-600' },
    { name: 'Xampp', level: 85, color: 'from-green-400 to-green-600' }
  ];

  return (
    <section id="lenguajes" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Lenguajes y Tecnologías
          </h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold text-white">{lang.name}</span>
                  <span className="text-purple-400 font-medium">{lang.level}%</span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    className={`h-full bg-gradient-to-r ${lang.color} rounded-full shadow-lg`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Languages;