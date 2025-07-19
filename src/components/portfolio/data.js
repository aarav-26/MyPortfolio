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
    level: 'B.E CSE CYBERSECURITY',
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
  "id": "01",
  "name": "MySQL 8.0 Database Developer - Oracle Certified Professional",
  "issuer": "Oracle",
  "date": "July 16, 2025",
  "score": "Passed",
  "imageAlt": "Official Oracle MySQL Developer Certificate",
  "description": "Professional certification awarded by Oracle to Aravind A for demonstrating expertise in MySQL 8.0 development, including advanced SQL programming, stored routines, transactions, data modeling, and performance optimization.",
  "certificateImageUrl": "/images/Certificates/Oracle/MySQL_Developer_Certificate.png"
  },
  {
    id: "02",
    name: "Ethical Hacking",
    issuer: "NPTEL",
    date: "July - October 2024",
    score: "55%",
    imageAlt: "Official NPTEL Certificate",
    description: "A comprehensive certification in ethical hacking and network security. Covers penetration testing, vulnerability assessment, and countermeasures.",
    verifyLink: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS94S25240084803840081",
    certificateImageUrl: "/images/Certificates/NPTEL/Ethical_Hacking.png"
  },
  {
    id: "03",
    name: "Introduction to Internet of Things",
    issuer: "NPTEL",
    date: "Jan - Apr 2024",
    score: "87%",
    imageAlt: "Official NPTEL Certificate",
    description: "An introductory certification covering the fundamentals of Internet of Things (IoT) systems and applications. The course explores the architecture, communication protocols, sensors, microcontrollers, cloud integration, and security challenges associated with IoT devices. It also includes practical use cases across smart cities, healthcare, agriculture, and industrial automation.",
    verifyLink: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS35S65380552730346596",
    certificateImageUrl: "/images/Certificates/NPTEL/IOT.png"
  },
  {
    id: "04",
    name: "IBM Cybersecurity Analyst",
    issuer: "IBM",
    date: "Feb 2023",
    score: "Passed",
    imageAlt: "Official Cybersecurity Analyst",
    description: "A global certification that validates the baseline skills necessary to perform core security functions and pursue an IT security career.",
    verifyLink: "https://www.coursera.org/account/accomplishments/specialization/TLEV48X4R3U3",
    certificateImageUrl: "/images/Certificates/Coursera/IBM_CS_Analyst.png"
  },
  {
  id: "05",
  name: "AWS Cloud Technical Essentials",
  issuer: "AWS",
  date: "Jan 2024",
  score: "94.96",
  imageAlt: "Cloud Technical Essentials",
  description: "An introductory certification that provides foundational knowledge of AWS cloud concepts, core services, security, pricing, and support models. The course covers essential AWS services such as EC2, S3, RDS, and VPC, along with practical guidance on how to build and manage cloud-based solutions securely and efficiently.",
  verifyLink: "https://www.coursera.org/account/accomplishments/verify/7JS29X7TW2T2",
  certificateImageUrl: "/images/Certificates/Coursera/AWS_CTE.png"
},
{
  id: "06",
  name: "AWS Fundamentals",
  issuer: "AWS",
  date: "Aug 2023",
  imageAlt: "AWS Fundamentals",
  description: "A foundational certification that introduces learners to the core concepts, services, and infrastructure of Amazon Web Services (AWS). The course covers essential topics such as cloud computing models, AWS global infrastructure, compute, storage, networking services, and best practices for designing scalable, reliable, and secure cloud-based solutions.",
  verifyLink: "https://www.coursera.org/account/accomplishments/specialization/ST84TPYJ528J",
  certificateImageUrl: "/images/Certificates/Coursera/AWS_F.png"
},
{
  id: "07",
  name: "Cyber Security and Privacy",
  issuer: "NPTEL",
  date: "July - October 2023",
  score: "55%",
  imageAlt: "Official NPTEL Cyber Security Certificate",
  description: "A comprehensive certification course covering the principles, practices, and technologies used to secure digital systems and protect privacy. The course explores cryptography, access control, network security, web security, malware analysis, and privacy-enhancing technologies, preparing learners to identify and mitigate cyber threats effectively.",
  verifyLink: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS127S63380480920050463",
  certificateImageUrl: "/images/Certificates/NPTEL/CS_Privacy&Security.png"
},
];

export const projectsData = [
  {
  title: "Apartment Management",
  description: "ApartmentCare is a full-stack apartment management platform designed to streamline resident services, complaint handling, visitor logs, and contact inquiries. Built using React.js, Express.js, and MySQL, it enables real-time tracking of service requests, encrypted document storage, resident authentication, and admin dashboards — making society management seamless and efficient.",
  image: "/images/Projects/Apartment_1.jpeg",
  imageAlt:"Apartment Management",
  tags: ["React.js", "Express.js", "MySQL"],
  liveLink: "#",
  repoLink: "#"
  },
  {
    title: "Secure E-commerce Platform",
    description: "Developed a full-shttpstack e-commerce website with a focus on security best practices, including secure payment integration and data encryption.",
    image: "/images/Projects/Apartment_2.jpeg",
    imageAlt:"Apartment Management1",
    tags: ["React", "Node.js", "Stripe", "Security"],
    liveLink: "#",
    repoLink: "#"
  },
  {
    title: "Cloud Infrastructure Automation",
    description: "Automated deployment and management of cloud resources on AWS using Terraform and Ansible.",
    image: "/images/Projects/Apartment_1.jpeg",
    imageAlt:"Apartment Management2",
    tags: ["AWS", "Terraform", "Ansible", "DevOps"],
    liveLink: "#",
    repoLink: "#"
  },
];

export const achievementsData = [
  {
    id: "01",
    title: "Crack the Query",
    organization: "Sri Eshwar College of Engineering",
    eventName: "Technovista",
    date: "8th - 9th September 2023",
    shortDescription: "Secured top position in an intense SQL query optimization and problem-solving challenge, outperforming peers in query structuring and database management tasks.",
    fullDescription: "This award celebrates excellence in advanced SQL query writing and database optimization. The competition tested participants on complex data retrieval, subqueries, stored procedures, and performance tuning techniques under strict time constraints. Demonstrating strong problem-solving skills and an in-depth understanding of relational database systems, the participant completed all queries with optimal performance and accuracy, earning the championship title at Technovista 2023.",
    icon: "Trophy",
    prizeAmount: "500 Bonus",
    provider: "Sri Eshwar College of Engineering",
    certificatePhotoUrl: "/images/Prize/crack_the_query.jpg",
    awardingPhotoUrl: "/images/Prize/crack_the_query2.jpg",
    imageAlt: "certificate or trophy"
  }
  ,
  {
    id: "02",
    title: "De-cipher",
    organization: "Sri Eshwar College of Engineering",
    eventName: "Technovista",
    date: "8th - 9th September 2023",
    shortDescription: "Achieved first place in an intense decoding and cryptography challenge by cracking complex encrypted messages under tight time constraints.",
    fullDescription: "This award recognizes exceptional analytical thinking and cryptography skills demonstrated during the 'De-cipher' event at Technovista 2023. The competition involved solving multi-layered encryption puzzles, pattern-based decoding, and cipher text analysis. Participants were tested on classic and modern encryption schemes, including substitution, transposition, and custom cipher algorithms. The winner showcased remarkable speed, accuracy, and strategic problem-solving abilities, successfully decrypting all given challenges within record time and securing the top spot.",
    icon: "Trophy",
    prizeAmount: "1,000 Bonus",
    provider: "Sri Eshwar College of Engineering",
    certificatePhotoUrl: "/images/Prize/de_cipher2.jpg",
    awardingPhotoUrl: "/images/Prize/de_cipher1.jpg",
    imageAlt: "certificate or trophy"
  }
  ,
  {
    id: "03",
    title: "SNAPCODE (CTF)",
    organization: "Sri Krishna College of Engineering and Technology",
    eventName: "KRIZEN'23",
    date: "15th September 2023",
    shortDescription: "Secured 2nd place in a national-level cybersecurity CTF event, excelling in real-time penetration testing and vulnerability exploitation challenges.",
    fullDescription: "Clinched the championship title in the highly competitive 'Capture The Flag (SNAPCODE)' event during KRIZEN'23, organized by the Department of Mechatronics at Sri Krishna College of Engineering and Technology. The competition featured a series of cybersecurity challenges covering domains such as web application exploitation, reverse engineering, cryptography, steganography, and network vulnerability analysis. Demonstrating exceptional analytical and offensive security skills, the participant successfully identified vulnerabilities, captured all security flags, and resolved complex security puzzles ahead of all other participants. The performance highlighted proficiency in ethical hacking, incident response, and secure coding principles under high-pressure, time-bound conditions.",
    icon: "Zap",
    prizeAmount: "₹1,000",
    provider: "Department of Mechatronics",
    certificatePhotoUrl: "/images/Prize/snapcode.jpg",
    awardingPhotoUrl: null,
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
