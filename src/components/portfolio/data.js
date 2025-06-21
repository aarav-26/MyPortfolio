import React from 'react';
import { Code, Server, Cloud, Brain, ShieldCheck } from 'lucide-react';
import { GraduationCap, BookOpen, School } from 'lucide-react';

export const skillsData = [
  { name: "MySql", icon: React.createElement(Server, { className: "w-5 h-5 mr-2 text-green-500" }) },
  { name: "Node.js", icon: React.createElement(Server, { className: "w-5 h-5 mr-2 text-green-500" }) },
  { name: "React", icon: React.createElement(Code, { className: "w-5 h-5 mr-2 text-blue-500" }) },
  { name: "C++", icon: React.createElement(Code, { className: "w-5 h-5 mr-2 text-yellow-500" }) },
  { name: "Java", icon: React.createElement(Code, { className: "w-5 h-5 mr-2 text-yellow-500" }) },
  { name: "Python", icon: React.createElement(Code, { className: "w-5 h-5 mr-2 text-yellow-500" }) },
  { name: "Spring Boot", icon: React.createElement(Code, { className: "w-5 h-5 mr-2 text-yellow-500" }) },
  { name: "Cybersecurity", icon: React.createElement(ShieldCheck, { className: "w-5 h-5 mr-2 text-red-500" }) },
  { name: "Penetration Testing", icon: React.createElement(ShieldCheck, { className: "w-5 h-5 mr-2 text-red-600" }) },
  { name: "AWS", icon: React.createElement(Cloud, { className: "w-5 h-5 mr-2 text-orange-500" }) },
  { name: "Docker", icon: React.createElement(Server, { className: "w-5 h-5 mr-2 text-blue-400" }) },
  { name: "Machine Learning", icon: React.createElement(Brain, { className: "w-5 h-5 mr-2 text-purple-500" }) },
];
export const education = [
  {
    level: 'SSLC',
    institution: 'Thanthai Roever Higher Secondary School',
    percentage: '95.6',
    year: '2019-2020',
    icon: React.createElement(School, { size: 28 }),
  },
  {
    level: 'HSC',
    institution: 'Thanthai Roever Higher Secondary School',
    percentage: '90',
    year: '2020-2022',
    icon: React.createElement(BookOpen, { size: 28 }),
  },
  {
    level: 'B.Tech CSE',
    institution: 'Sri Krishna College of Technology',
    percentage: '87',
    year: '2026',
    icon: React.createElement(GraduationCap, { size: 28 }),
  },
];

export const experiencesData = [
  {
    "title": "DBT Analyst",
    "company": "AES Technologies Private Limited",
    "duration": "June 21 2024 - July 22 2024",
    "description": "Developed and maintained scalable data transformation models using DBT (Data Build Tool). Optimized data pipelines for performance and accuracy, integrated data from multiple sources, and conducted regular data quality checks. Collaborated with analytics and engineering teams to deliver actionable insights and enhance data-driven decision-making.",
    "logo": "images/aes_logo.jpeg"
  },  
  {
    title: "Cybersecurity Analyst",
    company: "SecureNet Corp.",
    duration: "Jun 2020 - Dec 2021",
    description: "Performed penetration testing, security audits, and incident response. Developed and implemented security policies and procedures. Monitored network traffic for suspicious activities.",
    logo: "images/aes_logo.png"
  },
  
];

export const certificationsData = [
  {
    id: "ceh",
    name: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    date: "Mar 2021",
    score: "92%",
    validity: "3 Years",
    imageAlt: "Official CEH certificate badge",
    description: "A comprehensive certification in ethical hacking and network security. Covers penetration testing, vulnerability assessment, and countermeasures.",
    verifyLink: "https://aspen.eccouncil.org/Verify",
    certificateImageUrl: "https://images.unsplash.com/photo-1568137225414-ca932d7b8ef6"
  },
  {
    id: "aws-csaa",
    name: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    date: "Aug 2020",
    score: "850/1000",
    validity: "3 Years",
    imageAlt: "Official AWS CSAA certificate badge",
    description: "Validates ability to design and deploy well-architected solutions on AWS. Focuses on cost and performance optimized solutions.",
    verifyLink: "https://aws.amazon.com/certification/verification/",
    certificateImageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe"
  },
  {
    id: "security-plus",
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: "Feb 2020",
    score: "Passed",
    validity: "3 Years",
    imageAlt: "Official CompTIA Security+ certificate badge",
    description: "A global certification that validates the baseline skills necessary to perform core security functions and pursue an IT security career.",
    verifyLink: "https://www.certmetrics.com/comptia/public/verification.aspx",
    certificateImageUrl: "https://images.unsplash.com/photo-1550645612-83f5d594b671"
  },
];

export const projectsData = [
  {
    title: "AI-Powered Threat Detection System",
    description: "A machine learning model to identify and classify cyber threats in real-time. Built with Python, Scikit-learn, and TensorFlow.",
    image: "Dashboard of AI Threat Detection System",
    tags: ["Python", "Machine Learning", "Cybersecurity"],
    liveLink: "#",
    repoLink: "#"
  },
  {
    title: "Secure E-commerce Platform",
    description: "Developed a full-stack e-commerce website with a focus on security best practices, including secure payment integration and data encryption.",
    image: "Homepage of Secure E-commerce Platform",
    tags: ["React", "Node.js", "Stripe", "Security"],
    liveLink: "#",
    repoLink: "#"
  },
  {
    title: "Cloud Infrastructure Automation",
    description: "Automated deployment and management of cloud resources on AWS using Terraform and Ansible.",
    image: "Diagram of Cloud Infrastructure Automation",
    tags: ["AWS", "Terraform", "Ansible", "DevOps"],
    liveLink: "#",
    repoLink: "#"
  },
];

export const achievementsData = [
  {
    id: "innovator-award-2023",
    title: "Innovator of the Year Award",
    organization: "Tech Solutions Inc.",
    eventName: "Annual Company Awards Gala",
    date: "Dec 2023",
    shortDescription: "Recognized for developing a novel security protocol that reduced system vulnerabilities by 30%.",
    fullDescription: "This award acknowledges outstanding innovation and contribution to the company's security posture. The developed protocol involved a multi-layered defense strategy, significantly enhancing protection against emerging cyber threats and improving overall system resilience. The project was completed ahead of schedule and under budget.",
    icon: "Trophy",
    prizeAmount: "$5,000 Bonus",
    provider: "Tech Solutions Inc. - R&D Department",
    certificatePhotoUrl: "https://images.unsplash.com/photo-1572021335469-31706a17aaef",
    awardingPhotoUrl: "https://images.unsplash.com/photo-1521790797524-3f2039e80dad",
    verifyLink: "#",
    imageAlt: "Innovator of the Year Award certificate or trophy"
  },
  {
    id: "top-performer-q3-2022",
    title: "Top Performer Q3 2022",
    organization: "Tech Solutions Inc.",
    eventName: "Quarterly Performance Review",
    date: "Sep 2022",
    shortDescription: "Exceeded performance targets by 150% through successful project delivery and team leadership.",
    fullDescription: "Achieved exceptional results in project management and team collaboration, leading to the successful launch of three critical software updates. Consistently demonstrated strong problem-solving skills and a commitment to excellence, inspiring team members and contributing to a positive work environment.",
    icon: "Star",
    prizeAmount: "Company Stock Options",
    provider: "Tech Solutions Inc. - Management",
    certificatePhotoUrl: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b",
    awardingPhotoUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
    verifyLink: "#",
    imageAlt: "Top Performer Q3 2022 recognition letter or award"
  },
  {
    id: "ctf-winner-2021",
    title: "Capture The Flag (CTF) Winner",
    organization: "CyberCon National Conference",
    eventName: "CyberCon CTF Competition",
    date: "Apr 2021",
    shortDescription: "Achieved 1st place in a national cybersecurity CTF competition.",
    fullDescription: "Secured first place among hundreds of participants in a challenging Capture The Flag competition, demonstrating advanced skills in penetration testing, reverse engineering, and cryptography. Successfully solved a series of complex security challenges under strict time constraints.",
    icon: "Zap",
    prizeAmount: "Gaming Laptop & Bragging Rights",
    provider: "CyberCon Organization Committee",
    certificatePhotoUrl: "https://images.unsplash.com/photo-1593113646773-028c64a8f1db",
    awardingPhotoUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    verifyLink: "#",
    imageAlt: "CTF Winner announcement or trophy photo"
  },
];

export const seminarsData = [
  {
    title: "Email Protocols",
    event: "Sri Krishna College of Technology",
    date: "Sep 13, 2024",
    location: "Coimbatore",
    description: "Delivered an in-depth workshop on modern email protocols, including SMTP, IMAP, and POP3. Focused on authentication mechanisms, secure email communication practices, and integrating these protocols within software applications to ensure reliable and protected messaging systems.",
    type: "speaker"
  },
  {
    title: "Compiler Design (Code Optimization)",
    event: "Sri Krishna College of Technology",
    date: "Sep 21, 2024",
    location: "Coimbatore",
    description: "Conducted a keynote session on compiler optimization techniques, covering intermediate code generation, control flow analysis, and strategies for improving runtime performance and memory efficiency in modern compilers.",
    type: "speaker"
  },
  {
    title: "Cloud Security Best Practices Panel",
    event: "AWS re:Invent",
    date: "Nov 28, 2022",
    location: "Las Vegas, NV",
    description: "Participated as a panelist discussing emerging trends and best practices in cloud security architecture and compliance.",
    type: "attendee",
  },
];
