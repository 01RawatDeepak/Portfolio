import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const myProjects = [
  {
    id: 1,
    title: "Learn2Earn Platform",
    description:
      "A full-featured Learning Management System (LMS) platform that enables students to learn through structured courses, video content, and interactive modules.",
    subDescription: [
      "Developed the complete project frontend using React, TailwindCSS, and modern UI libraries.",
      "Built the backend using Laravel 12 with a secure API architecture.",
      "Integrated role-based access for Master Admin, Mentor, and Student.",
      "Implemented dynamic course management, video player with progress tracking, and FAQ modules.",
      "Created dashboards for admins, mentors, and students for smooth management and learning experience.",
    ],
    href: "https://learn-2-earn.in/",
    logo: "",
    image: "/assets/projects/learn2earn.png", // you can add a screenshot of your project here
    tags: [
      {
        id: 1,
        name: "Javascript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 2,
        name: "Html",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 3,
        name: "Bootstrap",
        path: "/assets/logos/bootstrap-4.svg",
      },
      {
        id: 4,
        name: "MySQL",
        path: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        id: 5,
        name: "CSS",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 6,
        name: "PHP",
        path: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Swayam Vidya – EdTech Learning Platform",
    description:
      "An advanced EdTech learning platform offering courses, training, and educational content for students and professionals.",
    subDescription: [
      "Designed and developed complete frontend pages using HTML, CSS, JavaScript, and Bootstrap.",
      "Implemented backend CMS functionalities to allow admin to manage courses, content, banners, and leads.",
      "Built responsive UI with smooth navigation and engaging educational layouts.",
      "Created dynamic forms and database integration for enrollments and user interactions.",
      "Optimized performance and cross-browser compatibility for seamless user experience.",
    ],
    href: "https://swayamvidya.com/",
    logo: "",
    image: "/assets/projects/swayamvidaya.png",
    tags: [
      { id: 1, name: "HTML", path: "/assets/logos/html5.svg" },
      { id: 2, name: "CSS", path: "/assets/logos/css3.svg" },
      { id: 3, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 4, name: "Bootstrap", path: "/assets/logos/bootstrap-4.svg" },
      {
        id: 5,
        name: "PHP",
        path: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
      },
      {
        id: 6,
        name: "MySQL",
        path: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Bikeverse Media – Bikers Community Portal",
    description:
      "A modern blogging and updates platform for bike enthusiasts, featuring latest news, bike launches, and expert reviews.",
    subDescription: [
      "Built fully responsive and SEO-friendly frontend interfaces for smooth reading experience.",
      "Implemented admin CMS for article publishing, categories, and media management.",
      "Integrated dynamic banner sections, blog listings, and detailed single blog pages.",
      "Improved UI performance, caching, and optimized asset delivery.",
      "Worked on form handling for newsletter subscription and user engagement features.",
    ],
    href: "https://www.bikeversemedia.com/",
    logo: "",
    image: "/assets/projects/bikeverse.png",
    tags: [
      { id: 1, name: "HTML", path: "/assets/logos/html5.svg" },
      { id: 2, name: "CSS", path: "/assets/logos/css3.svg" },
      { id: 3, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 4, name: "Bootstrap", path: "/assets/logos/bootstrap-4.svg" },
      {
        id: 5,
        name: "PHP",
        path: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
      },
      {
        id: 6,
        name: "MySQL",
        path: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
    ],
  },
  {
  id: 4,
  title: "EduHealthBridge – Healthcare & LMS Portal",
  description:
    "A hybrid healthcare and training platform providing medical education, hospital details, and online learning support.",
  subDescription: [
    "Developed complete frontend UI with clean layouts and mobile responsiveness.",
    "Built CMS and backend operations using PHP along with database management.",
    "Integrated training modules, educational sections, and hospital information pages.",
    "Added admin control pages for updating blogs, services, and media content.",
    "Enhanced site navigation structure and improved accessibility for users."
  ],
  href: "https://eduhealthbridge.com/",
  logo: "",
  image: "/assets/projects/eduhealth.png",
  tags: [
    { id: 1, name: "HTML", path: "/assets/logos/html5.svg" },
    { id: 2, name: "CSS", path: "/assets/logos/css3.svg" },
    { id: 3, name: "JavaScript", path: "/assets/logos/javascript.svg" },
    { id: 4, name: "Bootstrap", path: "/assets/logos/bootstrap-4.svg" },
    { id: 5, name: "PHP", path: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" },
    { id: 6, name: "MySQL", path: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" }
  ]
}

];

export const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/01RawatDeepak",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/deepak-singh-rawat-3569a81ba",
    icon: FaLinkedin,
  },
  {
    name: "Gmail",
    href: "mailto:deepakrawat17082000@gmail.com",
    icon: SiGmail,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/91xxxxxxxxxx",
    icon: FaWhatsapp,
  },
];
export const experiences = [
 {
    title: "Frontend Developer",
    job: "EdTech Innovate Pvt. Ltd. — Full-Time",
    date: "Oct 2023 – Present",
    contents: [
      "Developing and maintaining scalable EdTech platforms using React.js, JavaScript, and TailwindCSS with modern UI/UX best practices.",
      "Collaborating with backend teams to integrate secure APIs built with Laravel 12 + Inertia.js, ensuring smooth state management and data workflows.",
      "Created fully-responsive dashboards for Administrators, Mentors, and Students, improving user engagement and usability.",
      "Implemented reusable component architecture, reducing UI development time by more than 40%.",
      "Optimized page load performance through code splitting, lazy loading, and caching strategies.",
      "Worked on course management modules — including progress tracking, pricing, FAQ integration, filters, and search optimization.",
      
    ],
  },
  
];

export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
