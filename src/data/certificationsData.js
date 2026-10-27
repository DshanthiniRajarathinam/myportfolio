import internshipCertSvg from '../assets/images/intern.png';
import nptelCertSvg from '../assets/images/nptel.png';

export const certificationsData = [
  {
    id: "mern-internship",
    type: "internship",
    category: "Internship Experience",
    badge: "MERN Stack",
    badgeType: "cyan",
    role: "MERN Stack Development Intern",
    company: "App Innovation Technologies",
    location: "Coimbatore, Tamil Nadu",
    period: "16 June 2025 – 30 June 2025",
    description: "Completed a MERN Stack Development Internship at App Innovation Technologies from 16 June 2025 to 30 June 2025, gaining hands-on experience in full-stack web development.",
    certificateImage: internshipCertSvg,
    certificateTitle: "MERN Stack Development Internship Certificate",
    downloadName: "App-Innovation-Technologies-MERN-Internship-Certificate.png"
  },
  {
    id: "nptel-java",
    type: "achievement",
    category: "Academic Certification",
    badge: "Elite Silver",
    badgeType: "silver",
    score: "75%",
    role: "Programming in Java",
    company: "NPTEL",
    issuerTag: "Elite Silver Certification",
    period: "12-Week Course",
    description: "Programming in Java – NPTEL: Scored 75% and earned Elite Silver certification for the 12-week course.",
    certificateImage: nptelCertSvg,
    certificateTitle: "Programming in Java – NPTEL Elite Silver Certificate",
    downloadName: "NPTEL-Programming-in-Java-Elite-Silver-Certificate.png"
  }
];
