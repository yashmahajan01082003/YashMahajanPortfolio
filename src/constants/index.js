import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  flexos,
  secureApp,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Android Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
  {
    title: "Machine Learning Enthusiast",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web3 Developer",
    company_name: "Google Developer Student Clubs - VIT, Pune",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Oct 2024 - Present",
    points: [
      "Developing decentralized applications and smart contracts for blockchain-based projects.",
      "Collaborating with a team to build innovative Web3 solutions.",
      "Integrating Web3 technologies into user-friendly interfaces.",
    ],
  },
  {
    title: "Junior Software Engineer Intern",
    company_name: "InsideWin Media Solutions Pvt. Ltd.",
    icon: shopify,
    iconBg: "#383E56",
    date: "March 2024 - Aug 2024",
    points: [
      "Contributed to the development of an e-commerce platform.",
      "Worked on SQL and used Django in the platform development.",
      "Optimized performance for database operations and API endpoints.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Automatic Electric Limited",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2024 - Aug 2024",
    points: [
      "Successfully developed an app that could handle records of AE9000 hardware devices.",
      "Collaborated with cross-functional teams to streamline operations.",
      "Implemented robust authentication and data validation systems.",
    ],
  },
  {
    title: "Freelance Software Developer",
    company_name: "Self-employed",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2023 - Oct 2023",
    points: [
      "Successfully completed over 10 projects for diverse clients.",
      "Developed custom web and mobile solutions for various industries.",
      "Delivered projects on time with consistent positive feedback from clients.",
    ],
  },
  {
    title: "President of ComEIt",
    company_name: "Government Polytechnic Pune",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Oct 2022 - Mar 2023",
    points: [
      "Led the Computer and IT department, organizing events and seminars to enhance technical skills.",
      "Successfully managed cross-functional teams and project initiatives.",
    ],
  },
  {
    title: "Full-stack Developer Intern",
    company_name: "Dhrumi Technologies",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jul 2022 - Sep 2022",
    points: [
      "Worked as a full-stack developer during a 6-week internship program.",
      "Designed and implemented scalable solutions for client requirements.",
    ],
  },
];

const projects = [
  {
    name: "FlexOS",
    description:
      "A versatile OS simulation designed to enhance accessibility, featuring AI-based hand and retina controls with real-time image processing and speech-to-text capabilities.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "mediapipe",
        color: "green-text-gradient",
      },
      {
        name: "opencv",
        color: "pink-text-gradient",
      },
    ],
    image: { flexos },
    source_code_link: "https://github.com/yashmahajan01082003/FlexOS-Version-1.2",
  },
  {
    name: "Institution and Constitution",
    description:
      "An educational platform to educate users on the Indian Constitution and institutions using interactive content, including games and AI-powered learning modules.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: "https://via.placeholder.com/300",
    source_code_link: "https://github.com/yashmahajan01082003/Sansthaein-Aur-Samvidhan",
  },
  {
    name: "Secure Exam App",
    description:
      "A secure, AI-driven examination application that uses real-time face and gesture recognition to monitor users during online exams.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "mediapipe",
        color: "green-text-gradient",
      },
      {
        name: "opencv",
        color: "pink-text-gradient",
      },
    ],
    image: { secureApp },
    source_code_link: "https://github.com/yashmahajan01082003/Secured-Exam-App",
  },
  {
    name: "Fitness Training and Yoga App",
    description:
      "An app that tracks user movements during workouts and yoga sessions, offering real-time corrections using computer vision.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "mediapipe",
        color: "green-text-gradient",
      },
      {
        name: "opencv",
        color: "pink-text-gradient",
      },
    ],
    image: "https://via.placeholder.com/300",
    source_code_link: "https://github.com/yashmahajan01082003/Yoga-Trainer-Application",
  },
  {
    name: "Workplace Wingman",
    description:
      "A cameraless self-driving prototype for autonomous workplace navigation using audio and text commands.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pygame",
        color: "green-text-gradient",
      },
      {
        name: "django",
        color: "pink-text-gradient",
      },
    ],
    image: "https://via.placeholder.com/300",
    source_code_link: "https://github.com/yashmahajan01082003/WorkplaceWingman",
  },
  {
    name: "Knowledge Pilot",
    description:
      "A lightweight knowledge-sharing platform that utilizes large language models to assist users in file conversions and content management.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "django",
        color: "pink-text-gradient",
      },
    ],
    image: "https://via.placeholder.com/300",
    source_code_link: "https://github.com/yashmahajan01082003/LitEncryptDecrypt",
  },
];


const achievements = [
  {
    title: "ETHIndia",
    description: "Winner",
    level: "International",
    rank: "Won Prize Pool",
    competition: "ETHIndia Akave Sponsor",
    date: "December 2024",
  },
  {
    title: "Pitch-A-Thon",
    description: "Winner",
    level: "National",
    rank: "1st",
    competition: "Pitch Compeititon at IIT Dhanbad",
    date: "May 2024",
  },
  {
    title: "TechOlympics",
    description: "Winner",
    level: "National",
    rank: "1st",
    competition: "Project Competition",
    date: "March 2024",
  },
  {
    title: "GIH",
    description: "Finalist",
    level: "International",
    rank: "Top 30 among 1000+ groups",
    competition: "Hackathon",
    date: "June 2024",
  },
  {
    title: "Castodia",
    description: "Winner",
    level: "National",
    rank: "1st",
    competition: "Project Competition",
    date: "April 2024",
  },
  {
    title: "Planet Hunt Hackathon",
    description: "2nd Runner-Up",
    level: "National",
    rank: "2nd Runner-Up",
    competition: "Hackathon at IIT BHU",
    date: "April 2024",
  },
  {
    title: "Avinya",
    description: "Runner-Up",
    level: "National",
    rank: "Runner-Up",
    competition: "Innovation Competition at DYP Pimpri",
    date: "April 2024",
  },
  {
    title: "Internal SIH",
    description: "Winner",
    level: "National",
    rank: "Top 50",
    competition: "Smart India Hackathon",
    date: "September 2024",
  },
  {
    title: "CBSE Exhibition",
    description: "Winner",
    level: "District",
    rank: "1st",
    competition: "Maths Exhibition",
    date: "December 2019",
  },
  {
    title: "Universe X",
    description: "Finalist",
    level: "National",
    rank: "Top 16 out of 2000+ groups",
    competition: "Hackathon",
    date: "June 2024",
  },
  {
    title: "TechVilla Entrepreneurship",
    description: "Finalist",
    level: "National",
    rank: "Top 8 among 600+ groups",
    competition: "Entrepreneurship",
    date: "April 2024",
  },
  {
    title: "TechExpo",
    description: "Finalist",
    level: "National",
    rank: "Top 20 among 800+ groups",
    competition: "IIT Guwahati",
    date: "September 2024",
  },
  {
    title: "MHTECHIN",
    description: "Finalist",
    level: "National",
    rank: "Finalist",
    competition: "Innoavtion Challenge",
    date: "December 2024",
  },

  {
    title: "Elevator Pitch",
    description: "2nd Runner-Up",
    level: "National",
    rank: "2nd Runner-Up",
    competition: "Pitch Competition at St. Xavier Kolkata",
    date: "November 2024",
  },
  {
    title: "Vishwacon 2024",
    description: "Winner",
    level: "National",
    rank: "1st",
    competition: "VIT Pune Innovation Challenge",
    date: "November 2024",
  },
];

export { services, technologies, experiences, achievements, projects };
