import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, href: "https://github.com/aarav-26", label: "GitHub" },
    { icon: <Linkedin className="w-6 h-6" />, href: "https://linkedin.com/in/aarav26", label: "LinkedIn" },
    { icon: <Twitter className="w-6 h-6" />, href: "https://twitter.com/johndoe", label: "Twitter" },
    { icon: <Mail className="w-6 h-6" />, href: "mailto:aravid.a0501@gmail.com", label: "Email" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-background border-t border-border py-12"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Aravind. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Crafted with <span role="img" aria-label="heart">❤️</span> using React & Tailwind CSS.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;