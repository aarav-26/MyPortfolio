import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Users, Calendar, MapPin } from 'lucide-react';

const SeminarsSection = ({ seminars }) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.section
      id="seminars"
      className="py-20 lg:py-32 bg-secondary"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title">Seminars & Workshops</h2>
        <p className="section-subtitle">
          Engagements where I've shared knowledge, presented research, or participated in key industry events.
        </p>
        <div className="space-y-8">
          {seminars.map((seminar, index) => (
            <motion.div
              key={index}
              className="bg-card p-6 rounded-lg shadow-lg hover-lift flex flex-col sm:flex-row items-start gap-6"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex-shrink-0 w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                {seminar.type === "speaker" ? 
                  <Mic className="w-8 h-8 text-accent" /> : 
                  <Users className="w-8 h-8 text-primary" />
                }
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-1">{seminar.title}</h3>
                <p className="text-primary font-medium mb-2">{seminar.event}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center"><Calendar className="w-4 h-4 mr-1.5" /> {seminar.date}</span>
                  <span className="flex items-center"><MapPin className="w-4 h-4 mr-1.5" /> {seminar.location}</span>
                </div>
                <p className="text-foreground/80 text-sm">{seminar.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SeminarsSection;