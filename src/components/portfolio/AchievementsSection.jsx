import React from 'react';
import { motion } from 'framer-motion';
import { Star, Trophy, Users, Zap, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AchievementsSection = ({ achievements }) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const iconMap = {
    Star: <Star className="w-8 h-8 text-accent" />,
    Trophy: <Trophy className="w-8 h-8 text-yellow-500" />,
    Users: <Users className="w-8 h-8 text-blue-500" />,
    Zap: <Zap className="w-8 h-8 text-green-500" />,
  };

  return (
    <motion.section
      id="achievements"
      className="py-20 lg:py-32 bg-secondary/50"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title">Key Achievements</h2>
        <p className="section-subtitle">
          Highlighting some of my significant accomplishments and contributions throughout my career.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className="glassmorphism-card p-6 hover-lift flex flex-col justify-between"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-full">
                    {iconMap[achievement.icon] || <Star className="w-8 h-8 text-accent" />}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{achievement.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-1">
                  <span className="font-medium text-foreground/90">Organization:</span> {achievement.organization}
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  <span className="font-medium text-foreground/90">Date:</span> {achievement.date}
                </p>
                <p className="text-foreground/80 text-justify text-sm mb-4 line-clamp-3">{achievement.shortDescription || achievement.description}</p>
              </div>
              <Button asChild variant="outline" className="text-primary border-primary hover:bg-primary/10 w-full mt-auto">
                <Link to={`/achievement/${achievement.id}`}>
                  View Details <Eye className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AchievementsSection;
