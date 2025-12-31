import {
  finsight,
  launchpad,
  portfolio,
  backend,
  creator,
  coursera,
  hr,
  cp,
  fcc,
  mobile,
  web,
  ideas,
  concepts,
  designs,
  code,
} from "../assets";

/* ================= NAV LINKS ================= */
export const navLinks = [
  { id: "about", title: "About" },
  { id: "achievement", title: "Achievement" },
  { id: "contact", title: "Contact" },
];

/* ================= SERVICES ================= */
const services = [
  { title: "Frontend Developer", icon: web },
  { title: "React Developer", icon: mobile },
  { title: "UI Engineer", icon: backend },
  { title: "Web Animator", icon: creator },
];

/* ================= ACHIEVEMENTS ================= */
const achievements = [
  {
    title: ["FreeCodeCamp"],
    company_name: "freeCodeCamp",
    icon: fcc,
    iconBg: "#383E56",
    date: "May 2024",
    points: ["Responsive Web Design", "JavaScript"],
    credential: [
      "https://freecodecamp.org/certification/Jayant-1/responsive-web-design",
    ],
  },
  {
    title: ["HackerRank"],
    company_name: "HackerRank",
    icon: hr,
    iconBg: "#E6DEDD",
    date: "Apr 2025",
    points: [
      "Python (Basic)",
      "SQL (Basic)",
      "CSS (Basic)",
      "Go (Basic)",
    ],
    credential: [
      "https://www.hackerrank.com/certificates/b011ba865ccf",
      "https://www.hackerrank.com/certificates/633d92ea00fe",
      "https://www.hackerrank.com/certificates/c9bfa3c0b9e7",
      "https://www.hackerrank.com/certificates/b5ee5bc85229",
    ],
  },
  {
    title: ["Certiport"],
    company_name: "Certiport",
    icon: cp,
    iconBg: "#383E56",
    date: "Apr 2025",
    points: [
      "IT Specialist - HTML & CSS",
      "IT Specialist - Databases",
    ],
    credential: [
      "https://www.credly.com/badges/c59ff7d1-7af2-4dcb-8c57-d2bd6a6d1f44",
      "https://www.credly.com/badges/61128af2-38bc-4299-b862-157ba2ca2edb",
    ],
  },
  {
    title: ["Coursera"],
    company_name: "Coursera",
    icon: coursera,
    iconBg: "#0056d2",
    date: "Jul 2025",
    points: ["IBM Full Stack Software Developer"],
    credential: [
      "https://coursera.org/verify/professional-cert/8R7RY7URFI6O",
    ],
  },
];

/* ================= TESTIMONIALS ================= */
const testimonials = [
  {
    testimonial:
      "Jayant transformed our ideas into a visually stunning and high-performance website.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "A developer who truly understands UI, animations, and user experience.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Our engagement increased massively after the redesign by Jayant.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

/* ================= PROJECTS ================= */
const projects = [
  {
    name: "Launchpad",
    description:
      "A modern web starter platform to kickstart full-stack projects with clean UI, authentication, and scalable architecture.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "TypeScript", color: "pink-text-gradient" },
      { name: "Firebase", color: "violet-text-gradient" },
    ],
    image: launchpad,
    source_code_link: "https://launchpad0.vercel.app/",
  },
  {
    name: "Finsight",
    description:
      "A personal finance app to track income, expenses, and savings for smarter financial decisions.",
    tags: [
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "Next.js", color: "green-text-gradient" },
      { name: "shadcn/ui", color: "pink-text-gradient" },
    ],
    image: finsight,
    source_code_link: "https://github.com/Hon3y9718/finsight",
  },
  {
    name: "3D Portfolio",
    description:
      "An immersive 3D animated portfolio built with React, featuring smooth transitions and interactive sections.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Tailwind", color: "green-text-gradient" },
      { name: "Framer Motion", color: "pink-text-gradient" },
      { name: "Three.js", color: "orange-text-gradient" },
      { name: "Spline", color: "violet-text-gradient" },
    ],
    image: portfolio,
    source_code_link: "https://github.com/uttrakayast/3D-portfolio",
  },
];

/* ================= WORDS ================= */
const words = [
  { text: "Ideas", imgPath: ideas, font: "Arial, sans-serif" },
  { text: "Concepts", imgPath: concepts, font: "Courier New, monospace" },
  { text: "Designs", imgPath: designs, font: "Georgia, serif" },
  { text: "Code", imgPath: code, font: "Source Code Pro, monospace" },
];

export { services, achievements, testimonials, projects, words };
