import React from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { achievementsData } from '@/components/portfolio/data';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, CalendarDays, Award, Building, Gift, Camera, DollarSign, ShieldCheck, Zap, Star, Trophy } from 'lucide-react';

const AchievementDetailPage = () => {
  const { id } = useParams();
  const achievement = achievementsData.find(ach => ach.id === id);

  if (!achievement) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-destructive mb-4">Achievement Not Found</h1>
        <p className="text-muted-foreground mb-8">The achievement you are looking for does not exist or may have been moved.</p>
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

  const iconMap = {
    Star: <Star className="w-10 h-10 text-accent" />,
    Trophy: <Trophy className="w-10 h-10 text-yellow-500" />,
    Zap: <Zap className="w-10 h-10 text-green-500" />,
    Default: <Award className="w-10 h-10 text-primary" />
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
            <RouterLink to="/#achievements">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Achievements
            </RouterLink>
          </Button>
          <div className="flex items-center mb-3 space-x-4">
            {iconMap[achievement.icon] || iconMap.Default}
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight gradient-text">{achievement.title}</h1>
          </div>
          <p className="text-xl text-muted-foreground">Awarded by {achievement.organization}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <motion.div 
            className="lg:col-span-2 glassmorphism-card p-8 md:p-10"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 }}}}
          >
            <motion.h2 variants={detailItemVariants} custom={0} className="text-2xl font-semibold text-foreground mb-6">Achievement Details</motion.h2>
            
            <motion.div variants={detailItemVariants} custom={1} className="detail-item">
              <Building className="detail-icon text-sky-500" />
              <div>
                <span className="detail-label">Awarding Organization</span>
                <p className="detail-value">{achievement.organization}</p>
              </div>
            </motion.div>

            {achievement.eventName && (
              <motion.div variants={detailItemVariants} custom={2} className="detail-item">
                <ShieldCheck className="detail-icon text-purple-500" />
                <div>
                  <span className="detail-label">Event Name</span>
                  <p className="detail-value">{achievement.eventName}</p>
                </div>
              </motion.div>
            )}
            
            <motion.div variants={detailItemVariants} custom={3} className="detail-item">
              <CalendarDays className="detail-icon text-green-500" />
              <div>
                <span className="detail-label">Date Awarded</span>
                <p className="detail-value">{achievement.date}</p>
              </div>
            </motion.div>

            {achievement.provider && (
              <motion.div variants={detailItemVariants} custom={4} className="detail-item">
                <Award className="detail-icon text-indigo-500" />
                <div>
                  <span className="detail-label">Provided By / Sponsor</span>
                  <p className="detail-value">{achievement.provider}</p>
                </div>
              </motion.div>
            )}

            {achievement.prizeAmount && (
               <motion.div variants={detailItemVariants} custom={5} className="detail-item">
                <DollarSign className="detail-icon text-yellow-600" />
                <div>
                  <span className="detail-label">Prize / Amount</span>
                  <p className="detail-value">{achievement.prizeAmount}</p>
                </div>
              </motion.div>
            )}
            
            <motion.div variants={detailItemVariants} custom={6} className="mt-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Description</h3>
              <p className="text-foreground/80 leading-relaxed whitespace-pre-line">{achievement.fullDescription || achievement.shortDescription}</p>
            </motion.div>

            {achievement.verifyLink && achievement.verifyLink !== "#" && (
              <motion.div variants={detailItemVariants} custom={7} className="mt-8">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground rounded-full shadow-lg transition-transform hover:scale-105">
                  <a href={achievement.verifyLink} target="_blank" rel="noopener noreferrer">
                    View Proof / More Info <ExternalLink className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </motion.div>
            )}
          </motion.div>

          <motion.div 
            className="lg:col-span-1 space-y-8"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 }}}}
          >
            {achievement.certificatePhotoUrl && (
              <motion.div variants={imageVariants}>
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                  <Gift className="w-5 h-5 mr-2 text-primary"/> Certificate / Award Photo
                </h3>
                <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-primary/20 hover-lift">
                  <img 
                    alt={achievement.imageAlt || `Certificate for ${achievement.title}`}
                    className="w-full h-full object-cover"
                   src="https://images.unsplash.com/photo-1550438655-400744b9fefc" />
                </div>
              </motion.div>
            )}
            
            {achievement.awardingPhotoUrl && (
               <motion.div variants={imageVariants}>
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                    <Camera className="w-5 h-5 mr-2 text-accent"/> Awarding Moment
                </h3>
                <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-accent/20 hover-lift">
                  <img 
                    alt={`Awarding moment for ${achievement.title}`}
                    className="w-full h-full object-cover"
                   src="https://images.unsplash.com/photo-1550438655-400744b9fefc" />
                </div>
              </motion.div>
            )}
             {!achievement.certificatePhotoUrl && !achievement.awardingPhotoUrl && (
                 <motion.div variants={imageVariants} className="sticky top-24">
                    <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-primary/20 hover-lift flex items-center justify-center bg-secondary">
                        <img 
                            alt={achievement.imageAlt || `Visual for ${achievement.title}`}
                            className="w-full h-full object-cover opacity-50"
                         src="https://images.unsplash.com/photo-1550438655-400744b9fefc" />
                        <p className="absolute text-muted-foreground p-4 text-center">Main visual for this achievement.</p>
                    </div>
                </motion.div>
             )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AchievementDetailPage;