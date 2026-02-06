import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Vishwas Singh',
    title: 'Machine Learning Engineer & Student',
    subtitle: 'AI & Deep Learning Specialist',
    tagline: 'Building intelligent systems that learn and adapt to solve real-world problems',
    resumeUrl: '/resume.pdf',
    availability: 'Seeking ML/AI Internship Opportunities - Summer 2025',
  },
  about: {
    bio: [
      'Passionate Machine Learning Engineering student at IIIT Guwahati (2023-2027) with hands-on experience in deep learning, natural language processing, and computer vision.',
      'Built and deployed production-ready ML models using TensorFlow, Keras, and PyTorch with focus on real-world applications and performance optimization.',
      'Active competitive programmer with 340+ problems solved on LeetCode and strong foundation in data structures and algorithms.',
      'Seeking Summer 2025 internship opportunities to apply ML expertise in solving challenging real-world problems.',
    ],
    interests: [
      'Deep Learning',
      'Natural Language Processing',
      'Computer Vision',
      'Data Science',
      'Neural Networks',
      'AI Research',
    ],
    education: [
      {
        degree: 'Bachelor of Technology in Computer Science',
        institution: 'Indian Institute of Information Technology Guwahati',
        year: '2023 - 2027',
        location: 'Assam, India',
      },
    ],
  },
  experiences: [],
  skills: [
    {
      name: 'Programming Languages',
      skills: [
        { name: 'C++', level: 90 },
        { name: 'Python', level: 95 },
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'SQL', level: 80 },
      ],
    },
    {
      name: 'Frameworks & Libraries',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'TensorFlow', level: 90 },
        { name: 'PyTorch', level: 85 },
        { name: 'Vite', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'YOLOv8', level: 80 },
        { name: 'PaddleOCR', level: 80 },
      ],
    },
    {
      name: 'Tools & Platforms',
      skills: [
        { name: 'Docker', level: 75 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'Postman', level: 85 },
        { name: 'Google Gemini API', level: 85 },
        { name: 'Linux', level: 80 },
        { name: 'Jupyter Notebook', level: 90 },
      ],
    },
    {
      name: 'Databases',
      skills: [
        { name: 'MySQL', level: 80 },
        { name: 'MongoDB', level: 80 },
      ],
    },
  ],
  projects: [
    {
      id: '1',
      title: 'Automatic Number Plate Recognition (ANPR) System',
      description: 'Developed an intelligent ANPR system using computer vision and deep learning for automatic vehicle license plate detection and recognition. Achieved 92% accuracy on Indian license plates using custom CNN architecture. Implemented real-time processing with OpenCV achieving 15 FPS on standard hardware. Deployed on Streamlit with 500+ user interactions.',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Streamlit', 'NumPy', 'PIL', 'Computer Vision'],
      imageUrl: '/projects/anpr.jpg',
      liveUrl: 'https://anpr-system-vishwas-singh09.streamlit.app/',
      githubUrl: 'https://github.com/VISHWAS-SINGH09/anpr-system',
      featured: true,
    },
    {
      id: '2',
      title: 'IMDB Movie Sentiment Analysis using RNN',
      description: 'Built a sentiment classifier using Simple RNN achieving 87% accuracy on IMDB dataset. Trained on 25,000 movie reviews with 128-dimensional word embeddings and 500-token sequences. Implemented custom preprocessing pipeline reducing training time by 40%. Deployed interactive web app with real-time predictions on Streamlit.',
      technologies: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Streamlit', 'Jupyter Notebook'],
      imageUrl: '/projects/sentiment.jpg',
      liveUrl: 'https://rnn-imdb-sentiment-analysis-rnn.streamlit.app/',
      githubUrl: 'https://github.com/VISHWAS-SINGH09/imdb-sentiment-analysis',
      featured: true,
    },
    {
      id: '3',
      title: 'AlgoMaster AI - Interactive DSA Learning Platform',
      description: 'Created an AI-powered DSA learning platform with Google Gemini AI integration. Features 100+ curated problems with difficulty-based filtering and real-time AI explanations. Implemented intelligent code review system providing instant feedback. Built with React and TypeScript, deployed on Vercel with 1000+ monthly active users.',
      technologies: ['React', 'TypeScript', 'Gemini AI', 'Vite', 'CSS3', 'JavaScript'],
      imageUrl: '/projects/algomaster.jpg',
      liveUrl: 'https://algomaster-withai.vercel.app/',
      githubUrl: 'https://github.com/VISHWAS-SINGH09/algomaster-ai',
      featured: true,
    },
  ],
  contact: {
    email: 'vishwassingh2272@gmail.com',
    phone: '',
    location: 'Assam, India',
    socialLinks: [
      {
        platform: 'GitHub',
        url: 'https://github.com/VISHWAS-SINGH09',
        icon: 'github',
      },
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/in/vishwas-singh-ba9497283/',
        icon: 'linkedin',
      },
      {
        platform: 'Email',
        url: 'mailto:vishwassingh2272@gmail.com',
        icon: 'email',
      },
    ],
  },
  codingProfiles: [
    {
      platform: 'LeetCode',
      username: 'vishwas_singh22',
      url: 'https://leetcode.com/vishwas_singh22',
      problemsSolved: 340,
      rating: '1650',
      rank: 'Knight',
      icon: 'fas fa-code',
      color: '#FFA116',
    },
    {
      platform: 'GeeksforGeeks',
      username: 'vishwassingh',
      url: 'https://auth.geeksforgeeks.org/user/vishwassingh',
      problemsSolved: 200,
      rank: 'Institute Rank 20',
      icon: 'fas fa-laptop-code',
      color: '#2F8D46',
    },
  ],
  githubStats: {
    username: 'VISHWAS-SINGH09',
    profileUrl: 'https://github.com/VISHWAS-SINGH09',
    totalRepos: 25,
    totalStars: 45,
    totalCommits: '500+',
    contributions: 450,
  },
};
