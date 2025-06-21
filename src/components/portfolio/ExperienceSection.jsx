import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const ExperienceSection = ({ experiences }) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.section
      id="experience"
      className="py-20 lg:py-32 bg-secondary"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Journey</h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border transform -translate-x-1/2 hidden md:block"></div>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`mb-12 flex md:items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="hidden md:block w-1/2"></div>
              <div className="md:w-1/2 md:pl-8 relative">
                <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 md:left-auto md:-right-[calc(50%+1.25rem)] md:transform-none md:top-1/2 md:-translate-y-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <Briefcase className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="glassmorphism-card p-6">
                  <div className="flex items-center mb-2">
                    <img  alt={exp.logo} className="w-12 h-12 rounded-full mr-3 border-2 border-primary" src={exp.logo} />
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{exp.duration}</p>
                  <p className="text-foreground/80 text-sm text-justify">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;