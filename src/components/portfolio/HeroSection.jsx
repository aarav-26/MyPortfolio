import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import {
  Mail, Download, Linkedin, Github, Twitter, Code, ShieldCheck, Server,
} from 'lucide-react';

const HeroSection = () => {
  const { toast } = useToast();

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Aarav-cv.pdf';
    link.download = 'Aravind_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast({
      title: 'CV Downloaded',
      description: 'Aravind_CV.pdf has been downloaded.',
    });
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.section
      id="hero"
      className="relative w-full h-screen overflow-hidden text-gray-800"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-animated-gradient bg-[length:400%_400%] animate-gradientShift"></div>
      <div className="absolute inset-0 bg-white/30"></div>

      {/* Content */}
      <div className="relative z-10 w-[90%] mx-auto h-full flex items-center justify-center px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-8 items-center w-full">

          {/* Left Content */}
          <div className="flex flex-col items-center lg:items-center text-center space-y-6">
            <motion.h1
              className="italic text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Hi, I'm <span className="italic text-blue-700">Aravind</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-2xl font-light text-gray-700 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              A passionate Software Developer & Cybersecurity Specialist transforming ideas into secure, scalable solutions.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Button
                onClick={handleDownloadCV}
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 rounded-full shadow-xl px-8 py-3 text-lg font-semibold transition-transform hover:scale-105"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-gray-800 text-gray-800 hover:bg-gray-200 rounded-full shadow-xl px-8 py-3 text-lg font-semibold transition-transform hover:scale-105"
              >
                <a href="#contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Get in Touch
                </a>
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <a href="https://linkedin.com/in/aarav26" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                <Linkedin size={28} />
              </a>
              <a href="https://github.com/aarav-26" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                <Github size={28} />
              </a>
              <a href="https://twitter.com/aarav26" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                <Twitter size={28} />
              </a>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            className="w-full h-[30rem] md:h-[34rem] rounded-3xl border-4 border-white shadow-2xl overflow-hidden"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              alt="Aravind - Professional Portrait"
              className="w-full h-full object-cover"
              src="/images/Aarav_blazer.jpeg"
            />
          </motion.div>

        </div>
      </div>

      {/* Floating icons */}
      <motion.div className="absolute top-1/4 left-1/4 opacity-20"
        animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
        <Code size={48} className="text-gray-600" />
      </motion.div>

      <motion.div className="absolute top-1/2 right-1/4 opacity-20"
        animate={{ y: [0, 10, 0], rotate: [0, -5, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
        <ShieldCheck size={52} className="text-gray-600" />
      </motion.div>

      <motion.div className="absolute bottom-1/4 left-1/3 opacity-20"
        animate={{ y: [0, -15, 0], rotate: [0, 8, -3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}>
        <Server size={40} className="text-gray-600" />
      </motion.div>

    </motion.section>
  );
};

export default HeroSection;
