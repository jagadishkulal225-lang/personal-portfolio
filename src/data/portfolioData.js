export const portfolioData = {
  personal: {
    fullName: "Jagadish kulal",
    displayName: "Jaggu",
    headline: "MCA Student | Aspiring Software Developer | Passionate About Problem Solving, Logic Building & Technology",
    location: "Udupi, Karnataka",
    email: "jagadishkulal225@gmail.com",
    phone: "6362011861",
    linkedin: "https://www.linkedin.com/in/jagadish-kulal-a0a44a402?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    github: "https://github.com/jagadishkulal225-lang",
    bio: "I am currently pursuing my first year of MCA, with a strong interest in software development, problem-solving, and logical thinking. I enjoy exploring new technologies, improving my programming skills, and building solutions through code. I am passionate about continuous learning and growing as a software developer."
  },
  
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Poornaprajna Institute of Management (PIM)",
      location: "Udupi, Karnataka",
      duration: "2026 – 2028",
      status: "Pursuing",
      statusBadge: "Currently Pursuing (1st Year)",
      specialization: "Computer Applications & Software Development",
      description: "Focusing on advanced computing paradigms, software architecture, algorithm design, and building scalable full-stack applications with high academic rigor."
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Milagres College, Kallianpur",
      location: "Karnataka",
      duration: "2023 – 2026",
      status: "Completed",
      statusBadge: "Completed",
      specialization: "Computer Applications",
      score: "8.55 CGPA",
      description: "Graduated with distinction (8.55 CGPA). Developed a strong foundation in computer science fundamentals, programming logic, database systems, and web technologies."
    }
  ],

  // Exact verified ratings evaluated by the student
  coreLanguages: [
    {
      name: "Python",
      level: "Intermediate",
      ratingNumber: 3, // out of 5
      percentage: 65,
      description: "Object-oriented scripting, algorithmic logic, data processing with NumPy & Pandas, and automation.",
      highlight: true
    },
    {
      name: "C",
      level: "Basic",
      ratingNumber: 2, // out of 5
      percentage: 45,
      description: "Foundational procedural programming, pointers, memory management concepts, and basic data structures.",
      highlight: false
    },
    {
      name: "Java",
      level: "Basic",
      ratingNumber: 2, // out of 5
      percentage: 45,
      description: "Core OOP concepts, classes, inheritance, polymorphism, and basic application structure.",
      highlight: false
    }
  ],

  skillsCategorized: {
    frontend: [
      { name: "HTML", badge: "Web Markup", icon: "Code2" },
      { name: "CSS", badge: "Styling & Layout", icon: "Palette" },
      { name: "JavaScript", badge: "Interactive Logic", icon: "FileCode2" }
    ],
    backend: [
      { name: "Node.js", badge: "Server-side Runtime", icon: "Server" }
    ],
    databases: [
      { name: "MySQL", badge: "Relational RDBMS", icon: "Database" },
      { name: "SQLite", badge: "Embedded SQL", icon: "HardDrive" }
    ],
    tools: [
      { name: "Git", badge: "Version Control", icon: "GitBranch" },
      { name: "GitHub", badge: "Code Collaboration", icon: "Github" },
      { name: "Visual Studio Code", badge: "Development IDE", icon: "Laptop" },
      { name: "Google Antigravity", badge: "Agentic Engineering", icon: "Cpu" }
    ],
    dataScienceAI: [
      { name: "NumPy", badge: "Numerical Computing", icon: "Binary" },
      { name: "Pandas", badge: "Data Analysis", icon: "Table2" }
    ],
    deployment: [
      { name: "Vercel", badge: "Cloud Platform", icon: "Cloud" },
      { name: "GitHub Pages", badge: "Static Hosting", icon: "Globe" }
    ],
    engineeringConcepts: [
      { name: "Data Structures & Algorithms", badge: "Core CS", icon: "Network" },
      { name: "Object-Oriented Programming", badge: "Architecture", icon: "Boxes" },
      { name: "Problem Solving & Logic Building", badge: "Critical Thinking", icon: "Lightbulb" },
      { name: "Testing & Debugging", badge: "Quality Assurance", icon: "CheckCircle2" }
    ]
  },

  projects: [
    {
      id: "mediqueue-smart-clinic",
      title: "mediqueue-smart-clinic",
      category: "Web Development",
      filterCategory: "web",
      status: "Completed",
      statusVariant: "completed",
      featured: true,
      overview: "A full-stack healthcare web application that digitizes clinic operations with real-time queue tracking, intelligent slot optimization, emergency prioritization, and predictive analytics.",
      problemSolved: "Reduces patient waiting times, eliminates chaotic clinic reception bottlenecks, organizes appointments systematically, and empowers doctors to manage live patient queues with transparency.",
      contributions: "Frontend Development: Spearheaded the user interface architecture using HTML, CSS, and JavaScript. Designed intuitive layouts, styled modular responsive components, and implemented interactive clinic dashboard features to ensure an accessible, stress-free user experience for patients and clinic staff.",
      techStack: ["HTML5", "CSS3", "JavaScript", "Clinic Queue System", "UI/UX Design", "Responsive Layout"],
      repoUrl: "https://github.com/jagadishkulal225-lang/mediqueue-smart-clinic",
      liveDemoUrl: null // No fake live URL, authentic adherence
    }
  ],

  careerObjectives: {
    primaryInterests: ["Web Development", "Full-Stack Development", "Logic Building & Problem Solving"],
    targetRoles: ["Software Developer", "Web Developer", "Frontend Developer Intern"],
    spokenLanguages: [
      { name: "Kannada", proficiency: "Native / Fluent" },
      { name: "English", proficiency: "Professional Working Proficiency" }
    ],
    hobbies: [
      "Practicing coding and solving logical challenges",
      "Exploring new software developer tools and frameworks",
      "Improving technical problem-solving capabilities"
    ]
  }
};
