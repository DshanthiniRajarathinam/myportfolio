export const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "programming", label: "Programming" },
  { id: "design", label: "UI/UX Design" }
];

export const skillsData = [
  // Frontend
  {
    name: "React.js",
    category: "frontend",
    icon: "Atom",
    accent: "#00f2fe",
    tagline: "Component Architecture & Hooks",
    description: "Building responsive, declarative user interfaces with reusable component state, hooks, and virtual DOM efficiency."
  },
  {
    name: "JavaScript",
    category: "frontend",
    icon: "FileCode",
    accent: "#f7df1e",
    tagline: "Modern ES6+ Syntax & Async Patterns",
    description: "Core logic, asynchronous promises, DOM manipulation, functional paradigms, and event-driven engineering."
  },
  {
    name: "HTML",
    category: "frontend",
    icon: "Layout",
    accent: "#e34f26",
    tagline: "Semantic Structure & Web Standards",
    description: "Crafting accessible, SEO-compliant markup with modern semantic tags and clean document structure."
  },
  {
    name: "CSS",
    category: "frontend",
    icon: "Palette",
    accent: "#264de4",
    tagline: "Flexbox, Grid & Modern Animations",
    description: "Responsive layouts, CSS variables, custom media queries, transitions, and glassmorphic visual treatments."
  },
  {
    name: "Bootstrap",
    category: "frontend",
    icon: "Boxes",
    accent: "#7952b3",
    tagline: "Utility Classes & Rapid Prototyping",
    description: "Fast wireframing, responsive grids, and clean interface scaffolding with standard design utilities."
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    icon: "Server",
    accent: "#68a063",
    tagline: "Event-Driven JavaScript Runtime",
    description: "Developing scalable server-side runtimes, asynchronous handlers, and REST API controllers."
  },
  {
    name: "Express.js",
    category: "backend",
    icon: "Cpu",
    accent: "#94a3b8",
    tagline: "RESTful Routing & Middleware Architecture",
    description: "Building modular API endpoints, authentication middleware, error pipelines, and request handling."
  },
  {
    name: "MongoDB",
    category: "backend",
    icon: "Database",
    accent: "#47a248",
    tagline: "NoSQL Schemas & Document Aggregation",
    description: "Document-oriented database modeling with Mongoose, indexing, CRUD pipelines, and query optimization."
  },

  // Programming
  {
    name: "Java",
    category: "programming",
    icon: "Coffee",
    accent: "#f89820",
    tagline: "Object-Oriented Programming & Logic",
    description: "Strong foundation in OOP principles, inheritance, encapsulation, collections framework, and algorithmic problem-solving."
  },
  {
    name: "SQL",
    category: "programming",
    icon: "Layers",
    accent: "#00758f",
    tagline: "Relational Queries & Database Normalization",
    description: "Writing optimized queries, joins, relational schema design, table constraints, and data integrity."
  },

  // Design
  {
    name: "Figma",
    category: "design",
    icon: "Figma",
    accent: "#f24e1e",
    tagline: "High-Fidelity Wireframes & Prototypes",
    description: "Designing end-to-end user journeys, auto-layout components, interactive prototypes, and design systems."
  },
  {
    name: "UI/UX Design",
    category: "design",
    icon: "Sparkles",
    accent: "#8b5cf6",
    tagline: "User-Centered Aesthetics & Usability",
    description: "Information architecture, typography hierarchy, accessibility contrast, micro-interactions, and visual harmony."
  }
];
