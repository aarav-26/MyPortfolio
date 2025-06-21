import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Github } from 'lucide-react';

const ProjectsSection = ({ projects }) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  return (
    <motion.section
      id="projects"
      className="py-20 lg:py-32 bg-secondary"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.15)" }}
            >
              <div className="relative">
                <img  alt={project.image} className="project-image" src="https://images.unsplash.com/photo-1571677246347-5040036b95cc" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <div className="flex space-x-2 mb-2">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="p-2 bg-primary/80 hover:bg-primary text-primary-foreground rounded-full transition-colors" aria-label="View Live Project"><Eye size={18}/></a>
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="p-2 bg-primary/80 hover:bg-primary text-primary-foreground rounded-full transition-colors" aria-label="View GitHub Repository"><Github size={18}/></a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 h-16 overflow-hidden">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;