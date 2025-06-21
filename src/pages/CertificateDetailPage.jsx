
import React from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { certificationsData } from '@/components/portfolio/data';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, CalendarDays, CheckCircle, Award, Building } from 'lucide-react';

const CertificateDetailPage = () => {
  const { id } = useParams();
  const certificate = certificationsData.find(cert => cert.id === id);

  if (!certificate) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-destructive mb-4">Certificate Not Found</h1>
        <p className="text-muted-foreground mb-8">The certificate you are looking for does not exist or may have been moved.</p>
        <Button asChild>
          <RouterLink to="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </RouterLink>
        </Button>
      </div>
    );
  }

  const detailItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };
  
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut", delay: 0.2 } }
  };

  return (
    <div className="py-16 lg:py-24 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Button asChild variant="outline" className="mb-8 group">
            <RouterLink to="/#certifications">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Certifications
            </RouterLink>
          </Button>
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight gradient-text mb-3">{certificate.name}</h1>
          <p className="text-xl text-muted-foreground">Issued by {certificate.issuer}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <motion.div 
            className="lg:col-span-2 glassmorphism-card p-8 md:p-10"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 }}}}
          >
            <motion.h2 variants={detailItemVariants} custom={0} className="text-2xl font-semibold text-foreground mb-6">Certificate Details</motion.h2>
            
            <motion.div variants={detailItemVariants} custom={1} className="detail-item">
              <Building className="detail-icon text-sky-500" />
              <div>
                <span className="detail-label">Issuing Organization</span>
                <p className="detail-value">{certificate.issuer}</p>
              </div>
            </motion.div>

            <motion.div variants={detailItemVariants} custom={2} className="detail-item">
              <CalendarDays className="detail-icon text-green-500" />
              <div>
                <span className="detail-label">Date Issued</span>
                <p className="detail-value">{certificate.date}</p>
              </div>
            </motion.div>

            {certificate.score && (
              <motion.div variants={detailItemVariants} custom={3} className="detail-item">
                <CheckCircle className="detail-icon text-teal-500" />
                <div>
                  <span className="detail-label">Score/Grade</span>
                  <p className="detail-value">{certificate.score}</p>
                </div>
              </motion.div>
            )}

            {certificate.validity && (
              <motion.div variants={detailItemVariants} custom={4} className="detail-item">
                <Award className="detail-icon text-indigo-500" />
                <div>
                  <span className="detail-label">Validity Period</span>
                  <p className="detail-value">{certificate.validity}</p>
                </div>
              </motion.div>
            )}
            
            <motion.div variants={detailItemVariants} custom={5} className="mt-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Description</h3>
              <p className="text-foreground/80 leading-relaxed">{certificate.description}</p>
            </motion.div>

            {certificate.verifyLink && certificate.verifyLink !== "#" && (
              <motion.div variants={detailItemVariants} custom={6} className="mt-8">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground rounded-full shadow-lg transition-transform hover:scale-105">
                  <a href={certificate.verifyLink} target="_blank" rel="noopener noreferrer">
                    Verify Certificate <ExternalLink className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </motion.div>
            )}
          </motion.div>

          <motion.div 
            className="lg:col-span-1"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="sticky top-24">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border-4 border-primary/20 hover-lift">
                <img  
                  alt={certificate.imageAlt || `Image of ${certificate.name}`} 
                  className="w-full h-full object-cover"
                 src="https://images.unsplash.com/photo-1568137225414-ca932d7b8ef6" />
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Visual representation of the certificate.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CertificateDetailPage;
