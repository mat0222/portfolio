import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Award, Briefcase, GraduationCap, Code, Languages as LanguagesIcon, X, Eye, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const CV = () => {
  const { toast } = useToast();
  const profileImage = 'https://i.imgur.com/sH51j3u.jpg'; 
  const [selectedCert, setSelectedCert] = useState(null);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const cvRef = useRef(null);

  const cvData = {
    personalInfo: {
      name: 'Mateo Liendo',
      title: 'Desarrollador Web Junior',
      email: 'mateoliendo022@gmail.com',
      phone: '+54 9 3573 414204',
      location: 'Cordoba, Argentina'
    },
    skills: [
      'JavaScript', 'React.js', 'Node.js', 'Html',
			'SQL', 'Visual Code', 'Git', 'TailwindCSS', 'XAMPP',
			'PHP',
    ],
    experience: [
      {
        title: 'Desarrollo Web Administrativa',
        company: 'FobiBike.',
        period: '2025 - Presente',
        description: 'Desarrollo de aplicacion web sobre la administración y gestión de la bicicleteria FobiBike.'
      }

    ],
    education: [
      {
				degree: 'Desarrollador de Software',
				institution: 'Instituto Superior Villa Del Rosario',
				year: '2023 - 2025'
      },
      {
				degree: 'Técnico en la Industrialización de la Madera y el Mueble',
				institution: 'IPET N°55',
				year: '2015 - 2022'
      }
    ],
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'Intermedio (A2)' }
    ],
    certifications: [
      {
        name: 'Cambridge English Entry Level Certificate in ESOL International (Entry 2) (Key)',
        issuer: 'Cambridge Assessment English',
        date: '2020',
        image: 'https://i.imgur.com/v6ZMdQm.png' // Placeholder
      },
      {
        name: 'Certificado Profesional en Programación',
        issuer: 'Instituto Superior Villa Del Rosario',
        date: '2024',
        image: 'https://i.imgur.com/eqZaoGB.png' // Placeholder
      },
      {
        name: 'Certificado Técnico en Industrialización de la Madera y el Mueble',
        issuer: 'IPET N°55',
        date: '2022',
        image: 'https://i.imgur.com/pe231KR.png' // Placeholder
      }
    ]
  };

  const handleDownloadCV = async () => {
    if (!cvRef.current) return;

    setIsGeneratingPdf(true);
    toast({
      title: "⏳ Generando PDF...",
      description: "Por favor espera mientras preparamos tu CV.",
    });

    try {
      const element = cvRef.current;
      
      // Create canvas from the element
      const canvas = await html2canvas(element, {
        scale: 2, // Higher scale for better quality
        useCORS: true, // Enable CORS for images
        backgroundColor: '#000000', // Ensure black background
        logging: false,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      // Add image to PDF
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      
      // If content is longer than one page, add more pages
      let heightLeft = imgHeight;
      let position = 0;
      const pageHeight = 297; // A4 height in mm

      if (heightLeft > pageHeight) {
        while (heightLeft > 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }
      }

      pdf.save('Mateo_Liendo_CV.pdf');

      toast({
        title: "✅ PDF Descargado",
        description: "Tu CV se ha descargado correctamente.",
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast({
        title: "❌ Error",
        description: "Hubo un problema al generar el PDF. Inténtalo de nuevo.",
        variant: "destructive"
      });
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return (
    <section id="cv" className="py-20 bg-gradient-to-b from-black to-purple-900/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Curriculum Vitae
            </h2>
            <Button
              onClick={handleDownloadCV}
              disabled={isGeneratingPdf}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-xl shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-105"
            >
              {isGeneratingPdf ? (
                <>
                  <Loader2 size={20} className="mr-2 animate-spin" />
                  Generando PDF...
                </>
              ) : (
                <>
                  <Download size={20} className="mr-2" />
                  Descargar PDF
                </>
              )}
            </Button>
          </div>

          {/* CV Container that will be converted to PDF */}
          <div ref={cvRef} className="max-w-5xl mx-auto bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 rounded-2xl p-8 md:p-12">
            {/* Header with Photo */}
            <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
              <div className="relative">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg shadow-purple-500/50">
                  <img src={profileImage} alt="Mateo Liendo" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold text-white mb-2">{cvData.personalInfo.name}</h3>
                <p className="text-xl text-purple-400 mb-4">{cvData.personalInfo.title}</p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start text-gray-400">
                  <span>{cvData.personalInfo.email}</span>
                  <span>•</span>
                  <span>{cvData.personalInfo.phone}</span>
                  <span>•</span>
                  <span>{cvData.personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-purple-400" size={24} />
                <h4 className="text-2xl font-bold text-white">Habilidades Técnicas</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {cvData.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-purple-900/30 text-purple-300 rounded-lg border border-purple-500/30 hover:border-purple-500/60 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-purple-400" size={24} />
                <h4 className="text-2xl font-bold text-white">Experiencia Profesional</h4>
              </div>
              <div className="space-y-6">
                {cvData.experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-purple-500 pl-6">
                    <h5 className="text-xl font-semibold text-white">{exp.title}</h5>
                    <p className="text-purple-400 mb-2">{exp.company} • {exp.period}</p>
                    <p className="text-gray-400">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-purple-400" size={24} />
                <h4 className="text-2xl font-bold text-white">Educación</h4>
              </div>
              <div className="space-y-4">
                {cvData.education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-purple-500 pl-6">
                    <h5 className="text-xl font-semibold text-white">{edu.degree}</h5>
                    <p className="text-purple-400">{edu.institution} • {edu.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <LanguagesIcon className="text-purple-400" size={24} />
                <h4 className="text-2xl font-bold text-white">Idiomas</h4>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {cvData.languages.map((lang) => (
                  <div key={lang.name} className="bg-purple-900/20 border border-purple-500/20 rounded-lg p-4">
                    <p className="text-white font-semibold">{lang.name}</p>
                    <p className="text-purple-400">{lang.level}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-purple-400" size={24} />
                <h4 className="text-2xl font-bold text-white">Certificaciones</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {cvData.certifications.map((cert, index) => (
                  <div 
                    key={index} 
                    className="group relative flex items-center gap-3 bg-purple-900/20 border border-purple-500/20 rounded-lg p-4 hover:border-purple-500/50 transition-all cursor-pointer overflow-hidden"
                    onClick={() => setSelectedCert(cert)}
                  >
                    <div className="bg-purple-900/40 p-2 rounded-full">
                      <Award size={20} className="text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h5 className="text-white font-medium">{cert.name}</h5>
                      <p className="text-sm text-gray-400">{cert.issuer} • {cert.date}</p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity data-[html2canvas-ignore]:hidden">
                      <Eye size={18} className="text-purple-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
            data-html2canvas-ignore="true"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-3xl w-full bg-gray-900 border border-purple-500/30 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b border-purple-500/20 bg-black/40">
                <h3 className="text-xl font-bold text-white">{selectedCert.name}</h3>
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-1 bg-black">
                {/* Using img-replace for the certificate preview */}
                <img 
                  src={selectedCert.image} 
                  alt={`Certificate for ${selectedCert.name}`} 
                  className="w-full h-auto max-h-[70vh] object-contain mx-auto"
                />
              </div>
              <div className="p-4 bg-black/40 border-t border-purple-500/20 flex justify-between items-center">
                <p className="text-gray-400 text-sm">Emitido por: <span className="text-purple-400">{selectedCert.issuer}</span></p>
                <p className="text-gray-400 text-sm">Fecha: <span className="text-white">{selectedCert.date}</span></p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CV;