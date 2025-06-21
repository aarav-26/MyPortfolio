
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Award, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const CertificationsSection = ({ certifications }) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.section
      id="certifications"
      className="py-20 lg:py-32 bg-background"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title">Credentials & Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {certifications.map((cert, index) => (
    <motion.div
      key={cert.id}
      className="group rounded-xl bg-card shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          alt={cert.name + ' certificate image'}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          src="https://images.unsplash.com/photo-1595872018818-97555653a011"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-primary-foreground">
          <Award className="w-8 h-8 mb-2 text-accent" />
          <h3 className="text-lg font-semibold">{cert.name}</h3>
        </div>
      </div>

      <div className="p-5 space-y-2">
        <p className="text-sm text-muted-foreground">Issued by: <span className="font-medium text-foreground">{cert.issuer}</span></p>
        <p className="text-sm text-muted-foreground">Date: <span className="font-medium text-foreground">{cert.date}</span></p>
        <Button
          asChild
          variant="outline"
          className="text-primary border-primary hover:bg-primary/10 w-full mt-3"
        >
          <Link to={`/certificate/${cert.id}`} className="flex items-center justify-center">
            View Details <Eye className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    </motion.div>
  ))}
</div>

      </div>
    </motion.section>
  );
};

export default CertificationsSection;
