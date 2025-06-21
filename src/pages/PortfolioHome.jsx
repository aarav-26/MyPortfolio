import React from 'react';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSkillsSection from '@/components/portfolio/AboutSkillsSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import CertificationsSection from '@/components/portfolio/CertificationsSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import AchievementsSection from '@/components/portfolio/AchievementsSection';
import SeminarsSection from '@/components/portfolio/SeminarsSection';
import ContactSection from '@/components/portfolio/ContactSection';

import {
  skillsData,
  experiencesData,
  certificationsData,
  projectsData,
  achievementsData,
  seminarsData,
  education,
} from '@/components/portfolio/data';

const PortfolioHome = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <AboutSkillsSection skills={skillsData} education={education} />
      <ExperienceSection experiences={experiencesData} />
      <CertificationsSection certifications={certificationsData} />
      <ProjectsSection projects={projectsData} />
      <AchievementsSection achievements={achievementsData} />
      <SeminarsSection seminars={seminarsData} />
      <ContactSection />
    </div>
  );
};

export default PortfolioHome;
