import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import commventure from "@/public/commventure.png";
import gameclub from "@/public/gameclub.png";
import tedx from "@/public/tedx.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Mohirdev online platform",
    description:
      "I graduated Frontend React.js course after 8 months of studying. I am currently working as a freelancer.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Front-End Developer",
    location: "Tashkent, Uzbekistan",
    description:
      "I have been building responsive and interactive web interfaces using modern technologies like React and Next.js. During this time, I improved my skills in component-based architecture, API integration, and state management.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote",
    description:
      "Currently, I am working as a full-stack developer on freelance projects. My tech stack includes React, Next.js, TypeScript, Tailwind CSS, Prisma, and Supabase. I am passionate about building dynamic web applications and always open to new full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CommVenture",
    description:
      "CommVenture is a volunteer onboarding platform created for the IT Community of Uzbekistan. It serves as a simple and effective way to introduce new volunteers to the community.",
    tags: ["React","Typescript", "Next.js", "MongoDB", "Tailwind", ],
    imageUrl: commventure,
    live: "https://commventure-it.vercel.app/"
  },
  {
    title: "Ajou TEDx",
    description:
      "This site shares information about the upcoming TEDx event at Ajou University in Tashkent, including details about our speakers, program, venue, and sponsors.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: tedx,
    live: "https://tedx.ajou.uz/"
  },
  {
    title: "Anfield Arena",
    description:
      "Game Club, a platform designed for gaming enthusiasts! This site provides information about the latest games, game reviews, and a seamless user experience with interactive features.",
    tags: ["HTML", "CSS", "Bootstrap", "Javacript"],
    imageUrl: gameclub,
    live: "https://anfield-arena.netlify.app/"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Bootstrap",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Three.js",
  "Git",
  "TailwindCSS",
  "Redux",
  "Python",
  "Django",
  "Framer Motion",
] as const;
