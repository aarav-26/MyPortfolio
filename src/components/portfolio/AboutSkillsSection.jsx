import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, School } from 'lucide-react';

const AboutSkillsSection = ({ skills, education }) => {
  // Motion variants for section animation
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: 'easeOut' } 
    },
  };

  return (
    <motion.section
      id="about"
      className="py-20 lg:py-32 bg-white"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">

        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-8">
          About Me & Skills
        </h2>

        {/* About Me Description */}
        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
          I'm a dedicated Software Developer with a strong focus on Cybersecurity.
          I thrive on solving complex problems and building secure, scalable applications.
          My expertise spans full-stack development, cloud technologies, and advanced security practices.
        </p>
        <br></br>
          <iframe
    src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=2609953"
            className="text-center"
    title="TryHackMe Badge"
  ></iframe>

        {/* Skills */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm transition-transform"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -3, boxShadow: "0 6px 12px rgba(0,0,0,0.1)" }}
              >
                {skill.icon}
                {skill.name}
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Education */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-6">
            Academic Achievements 📚
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.level}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="mb-4 p-4 rounded-full bg-blue-50 text-blue-700">
                  {edu.icon}
                </div>
                <h4 className="text-lg font-bold mb-2">{edu.level}</h4>
                <p className="text-sm text-gray-600">{edu.institution}</p>
                <p className="text-lg font-semibold mt-3 text-blue-700">{edu.percentage}%</p>
                <span className="text-sm text-gray-500 mt-1">Year: {edu.year}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default AboutSkillsSection;
