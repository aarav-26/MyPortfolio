import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Download, Briefcase, Award, Code, Mail, Home, Star, Users, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#hero', label: 'Home', icon: <Home className="w-4 h-4 mr-2" /> },
    { href: '#about', label: 'About & Skills', icon: <Coffee className="w-4 h-4 mr-2" /> },
    { href: '#experience', label: 'Experience', icon: <Briefcase className="w-4 h-4 mr-2" /> },
    { href: '#certifications', label: 'Certifications', icon: <Award className="w-4 h-4 mr-2" /> },
    { href: '#projects', label: 'Projects', icon: <Code className="w-4 h-4 mr-2" /> },
    { href: '#achievements', label: 'Achievements', icon: <Star className="w-4 h-4 mr-2" /> },
    { href: '#seminars', label: 'Seminars', icon: <Users className="w-4 h-4 mr-2" /> },
    { href: '#contact', label: 'Contact', icon: <Mail className="w-4 h-4 mr-2" /> },
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/dummy-cv.pdf';
    link.download = 'Aravind_developer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-lg shadow-md"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.img
              whileHover={{ scale: 1.08, rotate: 3 }}
              transition={{ type: "spring", stiffness: 300 }}
              src="/images/name_logo.png"
              alt="Logo"
              className="w-48 h-48 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
              >
                {link.label}
              </motion.a>
            ))}
            <Button
              onClick={handleDownloadCV}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground rounded-full shadow-lg"
              size="sm"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-md shadow-xl pb-4"
        >
          <nav className="flex flex-col space-y-2 px-4 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center px-3 py-3 text-base font-medium text-foreground hover:bg-secondary hover:text-primary rounded-md transition-colors"
              >
                {link.icon}
                {link.label}
              </a>
            ))}
            <Button
              onClick={() => {
                handleDownloadCV();
                setIsMobileMenuOpen(false);
              }}
              className="w-full mt-4 bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground rounded-full shadow-lg"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
