import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Award, Eye, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CertificationsSection = ({ certifications }) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const itemsPerPage = 4;
  const totalCerts = certifications.length;

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    const newStart = startIndex + itemsPerPage;
    if (newStart < totalCerts) {
      setStartIndex(newStart);
    }
  };

  const handlePrev = () => {
    const newStart = startIndex - itemsPerPage;
    if (newStart >= 0) {
      setStartIndex(newStart);
    }
  };

  const visibleCertifications = certifications.slice(startIndex, startIndex + itemsPerPage);

  return (
    <motion.section
      id="certifications"
      className="w-[95%] md:w-[90%] h-auto md:h-[90vh] mx-auto flex flex-col justify-between bg-background py-8"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Heading */}
      <div className="flex justify-center items-center mb-6 md:mb-[3%]">
        <h2 className="section-title text-center text-3xl md:text-4xl font-bold">
          Credentials & Certifications
        </h2>
      </div>

      {/* Cards */}
      <div className="flex-1 flex items-center md:h-[60%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          <AnimatePresence>
            {visibleCertifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="group rounded-xl bg-card shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="relative h-48 md:h-[60%] overflow-hidden">
                  <img
                    alt={cert.name + ' certificate image'}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src={cert.certificateImageUrl}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-primary-foreground">
                    <Award className="w-7 h-7 mb-2 text-accent" />
                    <h3 className="text-base md:text-lg font-semibold">{cert.name}</h3>
                  </div>
                </div>

                <div className="p-4 space-y-2 flex flex-col justify-between flex-1">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Issued by: <span className="font-medium text-foreground">{cert.issuer}</span>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Date: <span className="font-medium text-foreground">{cert.date}</span>
                    </p>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="text-primary border-primary hover:bg-primary/10 w-full mt-2"
                  >
                    <Link to={`/certificate/${cert.id}`} className="flex items-center justify-center">
                      View Details <Eye className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center gap-6 mt-6 md:mt-[5%] mb-4 md:mb-[2%] flex-wrap">
        <Button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="rounded-full flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" /> Previous
        </Button>

        <Button
          onClick={handleNext}
          disabled={startIndex + itemsPerPage >= totalCerts}
          className="rounded-full flex items-center gap-2"
        >
          Next <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </motion.section>
  );
};

export default CertificationsSection;
