export const RESUME_DATA = {
  name: "Arjun Tapriya",
  initials: "AT",
  location: "Ahmedabad, Gujarat",
  locationLink: "https://maps.app.goo.gl/ahmedabad",
  about:
    "Computer Science Engineering student with a minor in Marketing at Nirma University. Skilled in C/C++, Java, JavaScript, React, Node.js, and data analysis. Passionate about developing impactful software solutions and leveraging technical skills to solve business problems.",
  summary:
    "I am a passionate software developer aiming to build ultra-premium, high-performance web experiences. Combining a strong foundation in Computer Science with insights from Marketing, I strive to create products that are both technically sound and highly engaging for users.",
  avatarUrl: "", // Add if you have an avatar image
  contact: {
    email: "arjuntap1109@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Arjun1109",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/arjun-tapriya", // Assuming this from typical patterns
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "Nirma University, Ahmedabad",
      degree: "B.Tech in Computer Science Engineering (Minor: Marketing)",
      start: "2023",
      end: "2027",
      grade: "CGPA: 7.99 / 10",
    },
    {
      school: "Modi Higher Secondary School, Rajkot",
      degree: "12th Board",
      start: "2021",
      end: "2023",
      grade: "88.81% — JEE: 97.54%ile",
    },
    {
      school: "Shree A.J.S. High School, Kutch",
      degree: "10th Board",
      start: "2019",
      end: "2021",
      grade: "99.37%ile",
    },
  ],
  experience: [
    {
      company: "Biznovare Solutions",
      link: "https://biznovare.com", // Assuming website, can be adjusted
      badges: ["Internship"],
      title: "Associate Software Engineer Intern",
      start: "May 2026",
      end: "July 2026",
      description:
        "Developed production-level mobile applications using React Native following industry-standard development practices.",
    },
  ],
  skills: {
    programmingLanguages: ["C", "C++", "Java", "JavaScript", "Python", "HTML", "CSS", "SQL",],
    webTechnologies: ["React", "Tailwind CSS", "Node.js", "Next.js", "React-Native", "Expo",],
    coreStrengths: ["AI/ML", "Software Development", "Data Analysis", "App Development", "Problem Solving"],
    coursework: ["Machine Learning", "Data Structures", "DBMS", "Cloud Computing", "Service Marketing", "International Marketing", "B2B Marketing"],
  },
  projects: [
    {
      title: "AI-Powered Interview Prep Platform",
      techStack: ["React", "TypeScript", "Node.js", "AI"],
      description:
        "An AI platform for software engineers to ace technical interviews. Features real-time voice simulations, a built-in code editor for Data Structures, and automated feedback for coding and System Design.",
      link: {
        label: "GitHub",
        href: "https://github.com/ArjunTapriya/AI-Powered-Interview-Preparation-Platform",
      },
      date: "2024",
    },
    {
      title: "AutoPilot",
      techStack: ["React", "JavaScript", "Node.js", "AI"],
      description:
        "AI-powered application generator that transforms Figma designs into functional web applications with built-in automated testing. Supports local tests and GitHub Actions.",
      link: {
        label: "GitHub",
        href: "https://github.com/ArjunTapriya/Autopilot",
      },
      date: "2024",
    },
    {
      title: "QuestionMe",
      techStack: ["React", "JavaScript", "Node.js"],
      description:
        "A responsive Q&A platform with modern UI/UX, secure authentication with JWT, bcrypt-based password hashing, and role-based access control.",
      link: {
        label: "GitHub",
        href: "https://github.com/ArjunTapriya/QuestionMe",
      },
      date: "2024",
    },
    {
      title: "AI Manuscript Formatter",
      techStack: ["Python", "Jupyter Notebook", "AI", "NLP"],
      description:
        "AI-powered system that formats manuscripts into APA, MLA, and Chicago styles using a multi-agent pipeline. Performs citation validation and generates publication-ready documents.",
      link: {
        label: "GitHub",
        href: "https://github.com/ArjunTapriya/manuscript-formatter-main",
      },
      date: "2023",
    },
    {
      title: "Cravit",
      techStack: ["React", "TypeScript", "Tailwind CSS"],
      description:
        "A modern web application built with TypeScript for enhanced type safety and scalable state management.",
      link: {
        label: "GitHub",
        href: "https://github.com/ArjunTapriya/Cravit",
      },
      date: "2023",
    },
    {
      title: "IPL Win Predictor",
      techStack: ["Python", "Jupyter Notebook", "Machine Learning"],
      description:
        "A machine learning model predicting the outcome of Indian Premier League (IPL) matches using historical data, trained in Jupyter Notebooks.",
      link: {
        label: "GitHub",
        href: "https://github.com/ArjunTapriya/IPL-win-predictor",
      },
      date: "2023",
    },
    {
      title: "Weather App",
      techStack: ["HTML", "CSS", "JavaScript"],
      description:
        "A responsive weather dashboard fetching real-time forecasting data with a highly styled CSS-based UI.",
      link: {
        label: "GitHub",
        href: "https://github.com/ArjunTapriya/Weather",
      },
      date: "2023",
    }
  ],
  codingProfiles: [
    {
      platform: "Codeforces",
      username: "arjuntapriya9754",
      rating: "1019",
      problemsSolved: "170+",
      link: "https://codeforces.com/profile/arjuntapriya9754",
    },
    {
      platform: "LeetCode",
      username: "Arjun1109",
      rating: "N/A",
      problemsSolved: "170+",
      link: "https://leetcode.com/u/Arjun1109/",
    },
    {
      platform: "GeeksforGeeks",
      username: "arjun1109",
      rating: "N/A",
      problemsSolved: "52+",
      link: "https://auth.geeksforgeeks.org/user/arjun1109/",
    },
  ],
  leadership: [
    {
      role: "Executive Member",
      organization: "CSI - Nirma University Chapter",
      start: "2024",
      end: "Present",
      description: "Actively contributing to organizing tech events, workshops, and coding competitions for the student community. Assisting in managing chapter operations and promoting technological learning and innovation on campus.",
    }
  ]
} as const;
