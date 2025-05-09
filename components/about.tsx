"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        While studying <span className="font-medium">Electrical and Computer Engineering</span>, 
        I discovered my true passion in <span className="font-medium">web development</span>. 
        I have been focusing on building modern and interactive websites using{" "}
        <span className="font-medium">React, Next.js, and Tailwind CSS</span>.{" "}
        <span className="italic">My favorite part of frontend development</span> is creating 
        beautiful, responsive, and smooth user experiences. I <span className="underline"> enjoy </span> 
         turning ideas into reality through code. My core stack is{" "}
        <span className="font-medium">React, Next.js, and Three.js</span>. 
        I am also familiar with TypeScript and Supabase. 
        I am always eager to learn new technologies and improve my skills. 
        I am currently looking for <span className="font-medium">freelance projects</span> 
        and opportunities as a <span className="font-medium">frontend developer</span>.
      </p>


      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">Data Science and AI</span>
      </p>
    </motion.section>
  );
}
