import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitContact = async (e) => {
    e.preventDefault();

    const contactData = new FormData();
    contactData.append("name", formData.name);
    contactData.append("email", formData.email);
    contactData.append("message", formData.message);
    contactData.append("access_key", "915fed79-aa4b-4348-818f-7d97cd19b869");  // Use your key

    const json = JSON.stringify(Object.fromEntries(contactData));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: json,
      });

      const result = await response.json();
      toast({
        title: result.message,
        description: "Thanks for reaching out — we'll get back to you soon.",
      });

      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast({
          title: "Error",
          description: "There was a problem submitting your message. Please try again.",
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred while submitting the form.",
      });
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-20 lg:py-32 bg-background"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind, a question, or just want to connect? Feel free to reach out. I'm always open to discussing new opportunities and collaborations.
        </p>
        <motion.form
          onSubmit={handleSubmitContact}
          className="max-w-xl mx-auto space-y-6 glassmorphism-card p-8 md:p-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Full Name</label>
            <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} required className="contact-form input" placeholder="Your Name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email Address</label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} required className="contact-form input" placeholder="your.email@example.com" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
            <textarea name="message" id="message" rows="5" value={formData.message} onChange={handleInputChange} required className="contact-form textarea" placeholder="Your message..."></textarea>
          </div>
          <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground rounded-full shadow-xl py-3 text-lg font-semibold transition-transform hover:scale-105">
            Send Message
          </Button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default ContactSection;
