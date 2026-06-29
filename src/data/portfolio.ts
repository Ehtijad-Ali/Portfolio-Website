export const projects = [
  {
    id: 1,
    title: "Deep Fake Detection",
    category: "Generative AI",
    image: "https://i.ibb.co/RTJYrvCk/deepfake.jpg",
    description: "Developed a web-based AI tool for detecting deep fakes using advanced deep learning models. Hosted on Hugging Face spaces.",
    tech: ["Python", "PyTorch", "Gradio", "Hugging Face"],
    links: { demo: "https://huggingface.co/spaces/ehtyalee/deep-fake-detection", github: "https://huggingface.co/spaces/ehtyalee/deep-fake-detection" }
  },
  {
    id: 2,
    title: "AI Profile Optimizer",
    category: "NLP",
    image: "https://i.ibb.co/8gkBHFJ8/profile-optimizer.png",
    description: "Browser extension that analyzes and optimizes LinkedIn/Fiverr profiles using AI to improve visibility and keyword relevance.",
    tech: ["JavaScript", "NLP", "OpenAI API", "Chrome API"],
    links: { demo: "https://github.com/Ehtijad-Ali/ai-profile-optimizer", github: "https://github.com/Ehtijad-Ali/ai-profile-optimizer" }
  },
  {
    id: 3,
    title: "Face-Swapping Detection System",
    category: "Computer Vision",
    image: "https://i.ibb.co/S762Y3qm/faceswap.jpg",
    description: "AI-based interview platform that detects identity fraud during online interviews using real-time computer vision techniques.",
    tech: ["OpenCV", "Python", "TensorFlow", "MediaPipe"],
    links: { demo: "https://github.com/Ehtijad-Ali/Face-Swapping-Detection-System", github: "https://github.com/Ehtijad-Ali/Face-Swapping-Detection-System" }
  },
  {
    id: 4,
    title: "AI Interview System",
    category: "AI Systems",
    image: "https://i.ibb.co/tPxQC1BJ/ai-interviewer.jpg",
    description: "Interactive AI bot for candidate interviews. Records responses and securely stores data for evaluation.",
    tech: ["FastAPI", "WebSockets", "NLP", "PostgreSQL"],
    links: { demo: "https://github.com/Ehtijad-Ali/AI-Interview_System/tree/main/AI_Intervew", github: "https://github.com/Ehtijad-Ali/AI-Interview_System/tree/main/AI_Intervew" }
  },
  {
    id: 5,
    title: "FullStack Employee Management System",
    category: "Web Development",
    image: "https://i.ibb.co/tT4HQj5y/employee-management-system.png",
    description: "A Flask-based full-stack application for managing employee records, featuring a clean UI and robust backend.",
    tech: ["Flask", "Python", "SQLite", "Bootstrap"],
    links: { demo: "https://ehtijad-ali.github.io/Flask-based-FullStack-Employee-Management-System/", github: "https://github.com/Ehtijad-Ali/Flask-based-FullStack-Employee-Management-System" }
  },
  {
    id: 6,
    title: "AI-Powered City Intelligence and Geo-Time Assistant",
    category: "Generative AI",
    image: "https://i.ibb.co/BVZWQMFm/weather.png",
    description: "Built language translation and FAQ chatbot tools using BERT-based models and APIs to enhance user interactions.",
    tech: ["BERT", "Hugging Face", "Python", "FastAPI"],
    links: { demo: "https://github.com/Ehtijad-Ali/-City-Intelligence-Geo-Time-Assistant", github: "https://github.com/Ehtijad-Ali/-City-Intelligence-Geo-Time-Assistant" }
  }
];

export const skills = {
  categories: [
    {
      name: "Programming",
      items: ["Python", "SQL", "JavaScript", "HTML/CSS", "Bash", "PowerShell"]
    },
    {
      name: "AI / Machine Learning",
      items: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "OpenAI", "Azure OpenAI APIs", "LangChain", "RAG", "LLM Fine-Tuning", "Prompt Engineering", "MLflow"]
    },
    {
      name: "Frameworks & Technologies",
      items: ["Django", "Flask", "FastAPI", "WebSockets"]
    },
    {
      name: "Cloud & DevOps",
      items: ["Microsoft Azure", "AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "Azure Pipelines", "GitHub Actions"]
    },
    {
      name: "Databases & Storage",
      items: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB"]
    },
    {
      name: "Computer Vision",
      items: ["OpenCV", "MediaPipe", "YOLO", "DeepSORT"]
    },
    {
      name: "Data Visualization & Tools",
      items: ["Tableau", "Matplotlib", "Seaborn", "RapidMiner", "Cursor AI", "Windsurf AI Editor"]
    },
    {
      name: "Version Control",
      items: ["Git", "GitHub"]
    }
  ],
  marquee: [
    "Python", "PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "OpenAI", "LangChain", "RAG", "MLflow",
    "Django", "FastAPI", "Docker", "Kubernetes", "Azure", "AWS", "GCP", "GitHub Actions",
    "PostgreSQL", "MongoDB", "YOLO", "OpenCV", "Tableau", "Git"
  ]
};

export const experience = [
  {
    id: 1,
    role: "AI / ML Engineer",
    company: "IT Directorate",
    location: "Gilgit, Pakistan",
    period: "Jun 2024 – Present",
    description: "Leading machine learning model development for government data pipelines. Building NLP-based document classification systems and deploying computer vision solutions for automated inspection. Reduced manual processing time by 40% through intelligent automation.",
    highlights: ["ML Pipeline Development", "NLP Systems", "Government Data Solutions"]
  },
  {
    id: 2,
    role: "Machine Learning Intern",
    company: "CodeAlpha",
    location: "Remote",
    period: "Dec 2023 – Mar 2024",
    description: "Developed deep learning models for image classification and object detection. Collaborated on building an AI interview system using FastAPI and WebSockets. Gained hands-on experience with PyTorch, TensorFlow, and production ML deployment.",
    highlights: ["Deep Learning", "FastAPI", "PyTorch"]
  },
  {
    id: 3,
    role: "Data Science Researcher",
    company: "NUST",
    location: "Islamabad, Pakistan",
    period: "Sep 2023 – Nov 2023",
    description: "Conducted research on sentiment analysis using BERT and transformer models. Published findings on multi-lingual NLP techniques for Urdu-English code-mixed text. Worked with Hugging Face transformers and custom fine-tuning pipelines.",
    highlights: ["NLP Research", "BERT", "Hugging Face"]
  }
];

export const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Karakoram International University",
    location: "Gilgit, Pakistan",
    period: "2021 – 2025",
    description: "Focused on artificial intelligence, data science, and software engineering. Participated in hackathons and research projects in NLP and computer vision.",
    gpa: "3.7/4.0"
  },
  {
    degree: "Intermediate (Pre-Engineering)",
    institution: "Gilgit College",
    location: "Gilgit, Pakistan",
    period: "2019 – 2021",
    description: "Completed pre-engineering studies with a focus on mathematics and physics, building a strong analytical foundation for computer science."
  }
];

export const certifications = [
  {
    id: 1,
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    date: "2024",
    credentialId: "GDA-2024-XXXX",
    url: "https://coursera.org",
    description: "Comprehensive data analytics program covering data cleaning, analysis, visualization, and storytelling with data using spreadsheets, SQL, and R.",
    skills: ["Data Analysis", "SQL", "R", "Tableau", "Data Cleaning"]
  },
  {
    id: 2,
    title: "Google AI Essentials",
    issuer: "Google",
    date: "2024",
    credentialId: "GAI-2024-XXXX",
    url: "https://coursera.org",
    description: "Foundational AI concepts including machine learning, deep learning, neural networks, and responsible AI practices.",
    skills: ["AI Fundamentals", "Machine Learning", "Neural Networks", "Ethics"]
  },
  {
    id: 3,
    title: "Advanced Python Development",
    issuer: "NUST",
    date: "2023",
    credentialId: "NUST-PY-2023",
    url: "#",
    description: "Advanced Python programming covering OOP, decorators, generators, async programming, and framework development.",
    skills: ["Python", "OOP", "Async", "Decorators", "Frameworks"]
  },
  {
    id: 4,
    title: "Machine Learning with Python",
    issuer: "Pak Angels",
    date: "2023",
    credentialId: "PA-ML-2023",
    url: "#",
    description: "Hands-on machine learning course covering supervised and unsupervised learning, model evaluation, and deployment.",
    skills: ["Scikit-learn", "Model Evaluation", "Feature Engineering", "Deployment"]
  },
  {
    id: 5,
    title: "Full Stack Web Development",
    issuer: "W3Schools",
    date: "2022",
    credentialId: "W3-FS-2022",
    url: "#",
    description: "Complete web development program covering HTML, CSS, JavaScript, React, Node.js, and database integration.",
    skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "Databases"]
  },
  {
    id: 6,
    title: "Cloud Computing Fundamentals",
    issuer: "Google",
    date: "2024",
    credentialId: "GCC-2024-XXXX",
    url: "https://coursera.org",
    description: "Introduction to cloud computing with Google Cloud Platform, covering compute, storage, networking, and ML services.",
    skills: ["GCP", "Cloud Storage", "Compute Engine", "BigQuery"]
  }
];

export const languages = [
  { name: "English", proficiency: "Professional Working", level: 90 },
  { name: "Urdu", proficiency: "Native", level: 100 },
  { name: "Shina", proficiency: "Native", level: 100 },
  { name: "Hindi", proficiency: "Limited Working", level: 60 }
];

export const blogs = [
  {
    id: 1,
    title: "Building RAG Systems: A Practical Guide",
    excerpt: "Learn how to build production-ready Retrieval-Augmented Generation systems using LangChain, vector databases, and LLMs.",
    date: "2024-12-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
    url: "https://medium.com/@ehtyalee1919",
    tags: ["RAG", "LLM", "LangChain"]
  },
  {
    id: 2,
    title: "Fine-Tuning LLMs for Domain-Specific Tasks",
    excerpt: "A deep dive into fine-tuning large language models for specialized applications in healthcare and legal domains.",
    date: "2024-11-20",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80",
    url: "https://medium.com/@ehtyalee1919",
    tags: ["Fine-Tuning", "LLM", "NLP"]
  },
  {
    id: 3,
    title: "Deepfake Detection: From Research to Production",
    excerpt: "How we built a real-time deepfake detection system using deep learning and deployed it on Hugging Face Spaces.",
    date: "2024-10-05",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
    url: "https://medium.com/@ehtyalee1919",
    tags: ["Deep Learning", "Computer Vision", "Ethics"]
  },
  {
    id: 4,
    title: "The State of AI Agents in 2025",
    excerpt: "An analysis of autonomous AI agents, tool-use capabilities, and the future of agentic AI systems in enterprise workflows.",
    date: "2025-01-10",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    url: "https://medium.com/@ehtyalee1919",
    tags: ["AI Agents", "Enterprise AI", "Automation"]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Product Manager, TechVentures Inc.",
    location: "San Francisco, USA",
    rating: 5,
    text: "Ehtijad delivered an exceptional deepfake detection system that exceeded our expectations. His understanding of computer vision and deep learning is impressive. Communication was always clear and timely.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
  },
  {
    id: 2,
    name: "Markus Weber",
    role: "CTO, DataFlow Solutions",
    location: "Berlin, Germany",
    rating: 5,
    text: "Working with Ehtijad on our NLP pipeline was a game-changer. He brought deep technical expertise and a pragmatic approach to solving complex language processing challenges. Highly recommend.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
  },
  {
    id: 3,
    name: "Amina Khan",
    role: "Founder, PakTech Labs",
    location: "Islamabad, Pakistan",
    rating: 5,
    text: "Ehtijad built our AI interview system from scratch and it has transformed our hiring process. His ability to understand business requirements and translate them into technical solutions is remarkable.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
  },
  {
    id: 4,
    name: "Lukas Brunner",
    role: "Lead Developer, SwissAI",
    location: "Zurich, Switzerland",
    rating: 4,
    text: "Ehtijad's work on our BERT-based classification model was outstanding. He delivered clean, well-documented code and was proactive in suggesting improvements. A pleasure to collaborate with.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
  }
];

export const stats = [
  { label: "Projects Completed", value: 15, suffix: "+" },
  { label: "Happy Clients", value: 30, suffix: "+" },
  { label: "Certifications", value: 6, suffix: "" },
  { label: "Years Experience", value: 3, suffix: "+" }
];

export const topics = [
  "Machine Learning", "Deep Learning", "NLP", "Computer Vision",
  "LLM Fine-Tuning", "RAG Systems", "AI Ethics", "Data Engineering",
  "MLOps", "Python", "Cloud AI", "Prompt Engineering"
];

export const faqs = [
  {
    question: "What services do you offer?",
    answer: "I specialize in AI/ML engineering, including model development, NLP systems, computer vision solutions, and full-stack AI applications. I also offer data science consulting, ML pipeline development, and AI integration services."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on complexity. A simple ML model or API integration typically takes 1-2 weeks. Complex systems like RAG pipelines or computer vision applications usually take 3-6 weeks. I always provide a detailed timeline before starting."
  },
  {
    question: "Do you work with international clients?",
    answer: "Absolutely. I've worked with clients from the US, Germany, Switzerland, and Pakistan. I'm flexible with time zones and use async communication tools to ensure smooth collaboration across borders."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "My core stack includes Python, PyTorch, TensorFlow, LangChain, FastAPI, Docker, and cloud platforms (Azure, AWS, GCP). I work extensively with Hugging Face, OpenAI, and various vector databases for AI applications."
  },
  {
    question: "How can I get started with a project?",
    answer: "Simply reach out via the contact form, email, or LinkedIn. I typically respond within 24 hours. We'll discuss your requirements, I'll provide a proposal with timeline and pricing, and we can get started once aligned."
  }
];

export const values = [
  {
    title: "Curiosity-Driven",
    description: "Every project starts with a question. I dive deep into problems, exploring multiple approaches before landing on the best solution. Continuous learning is at the core of everything I do.",
    icon: "lightbulb"
  },
  {
    title: "Quality Over Speed",
    description: "I believe in doing things right the first time. Clean code, thorough testing, and well-documented solutions ensure that every project is maintainable and scalable.",
    icon: "shield"
  },
  {
    title: "Client-Centric",
    description: "Your success is my success. I take time to understand your business context, communicate transparently, and deliver solutions that create real, measurable impact.",
    icon: "heart"
  },
  {
    title: "Open Collaboration",
    description: "I thrive in collaborative environments. Whether it's pair programming, code reviews, or brainstorming sessions, I believe the best work happens when ideas flow freely.",
    icon: "users"
  }
];