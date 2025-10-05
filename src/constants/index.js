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
    job: "EdTech Innovate Company",
    date: "Oct 2023 – Now",
    contents: [
      "Building and maintaining scalable web applications with React, JavaScript, and TailwindCSS.",
      "Developing dashboards, course management systems, and admin panels using Laravel + Inertia.js.",
      "Collaborating with designers and back-end teams to deliver seamless, responsive user experiences.",
      "Optimizing application performance, accessibility, and SEO across multiple platforms.",
    ],
  },
  {
    title: "Full-Stack Developer (Freelance Project)",
    job: "Learn2Earn Platform",
    date: "2023 – 2024",
    contents: [
      "Designed and developed a complete Learning Management System (LMS) with React frontend and Laravel 12 backend.",
      "Implemented role-based dashboards for Master Admin, Mentor, and Student.",
      "Integrated video streaming, progress tracking, FAQs, and course management features.",
      "Deployed and maintained the live platform at https://learn-2-earn.in/.",
    ],
  },
  {
    title: "Intern (Trainee)",
    job: "National Informatics Centre (NIC)",
    date: "2021",
    contents: [
      "Contributed to a file storage synchronization project by developing efficient server-side systems.",
      "Utilized C programming and Qt Creator IDE for software design and testing.",
      "Gained hands-on experience in coding standards, debugging, and project collaboration.",
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
