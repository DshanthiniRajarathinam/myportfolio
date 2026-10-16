import gShopImage from '../assets/images/Grocery_shopping.avif';
import loanCheckerImage from '../assets/images/loan-vector.webp';

export const projectsData = [
  {
    id: "g-shop",
    title: "G-Shop",
    badge: "MERN Stack E-Commerce",
    shortDescription: "A modern grocery shopping web application featuring voice-based product search, user authentication, dynamic cart management, and Razorpay test payment integration.",
    fullDescription: "A full-stack grocery shopping platform that allows users to browse, search, and order products easily. It features AssemblyAI-powered voice search, Clerk authentication, and Razorpay payment integration in test mode for a smooth shopping experience.",
    image: gShopImage,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Voice Search API", "Razorpay (Test)", "CSS3"],
    githubUrl: "https://github.com/DshanthiniRajarathinam/G-shop",
    liveUrl: null, // User did not specify a production URL
    demoStatus: "Available on GitHub",
    featuredBadge: "Featured Project",
    accentColor: "#00f2fe",
    problem: "Finding grocery products from a large list can take time, especially when users want to search quickly using their voice.",
    solution: "Developed a grocery shopping website using the MERN stack with voice search, product filtering, secure user login, and an easy checkout process.",
    keyFeatures: [
      {
        title: "Voice-Based Product Search",
        desc: "Integrated voice recognition allowing users to speak item names for instantaneous search results."
      },
      {
        title: "JWT User Authentication",
        desc: "Secure login, token verification, and role-based session management across the platform."
      },
      {
        title: "Dynamic Cart & Checkout Flow",
        desc: "Real-time cart quantity adjustments, price calculations, and multi-step delivery address checkout."
      },
      {
        title: "MongoDB Schema Design",
        desc: "Optimized collections for products, user profiles, and categories."
      },
      {
        title: "Razorpay Test Payment Gateway",
        desc: "Integrated Razorpay in test mode to simulate realistic transaction processing and order confirmation."
      }
    ],
    architecture: {
      client: "React.js, Component State, CSS3 Glassmorphism, Web Speech API",
      server: "Node.js & Express.js REST API with CORS and JWT middleware",
      database: "MongoDB with Mongoose schemas for data integrity and rapid indexing"
    },
    paymentDisclaimer: "Payment integration is strictly implemented in test mode for academic and developmental demonstration."
  },
  {
    id: "loan-checker",
    title: "Loan Eligibility Checker",
    badge: "Java & Relational Database",
    shortDescription: "A Java-based application that evaluates loan eligibility using salary and credit score metrics, calculating maximum loan amounts and monthly EMI amortization.",
    fullDescription: "This project checks a person's loan eligibility by collecting details such as name, salary, and credit score. It uses conditional statements to determine eligibility and displays the loan eligibility result to the user. It also stores applicant details in a MySQL database using JDBC.",
    image: loanCheckerImage,
    technologies: ["Java", "MySQL", "JDBC", "OOP Principles","Console & SQL"],
    githubUrl: "https://github.com/DshanthiniRajarathinam/Javaconsoleproject",
    liveUrl: null,
    demoStatus: "Available on GitHub",
    featuredBadge: "Core Engineering",
    accentColor: "#f89820",
    problem: "Manual financial calculations and eligibility checks are prone to human error, delays, and inconsistent risk thresholds when vetting loan applicants.",
    solution: "Built a structured Java application implementing strict banking business logic, debt-to-income algorithms, and JDBC persistence to evaluate eligibility and compute EMI instantly.",
    keyFeatures: [
      {
        title: "Credit Score & Income Analysis",
        desc: "Multi-tiered evaluation of credit risk scores and gross monthly income to determine eligibility."
      },
      {
        title: "Automated Loan Amount Ceiling",
        desc: "Dynamically suggests the maximum safe borrowing limit based on debt-to-income ratios."
      },
      {
        title: "EMI Amortization Formula",
        desc: "Calculates precise monthly installments using standard financial compound interest algorithms: E = P * r * (1 + r)^n / ((1 + r)^n - 1)."
      },
      {
        title: "JDBC & MySQL Integration",
        desc: "Connects securely to relational tables to persist applicant profiles, loan queries, and calculation logs."
      },
      {
        title: "Object-Oriented Design (OOP)",
        desc: "Clean modular classes utilizing encapsulation, inheritance, and structured error handling."
      }
    ],
    architecture: {
      client: "Modular Console Interface with input validation and clear formatted reporting",
      logic: "Core Java engine with mathematical financial models and eligibility rule sets",
      database: "MySQL relational database communicating via standard Java Database Connectivity (JDBC)"
    }
  }
];
