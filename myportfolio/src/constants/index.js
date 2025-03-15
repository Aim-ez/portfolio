import project1 from "../assets/books.png";
import project2 from "../assets/platoon.png";
import project3 from "../assets/eyeball.png";
//import project4 from "../assets/carla.jpg";

export const HERO_CONTENT = `A computer scientist who loves solving problems and yearns to build things that benefit the world. I work with React and React Native for web and mobile development, and have a strong foundation in C, Java, and Python. Whether I'm working on the frontend, backend, or research-driven projects, I focus on writing clean, efficient code and am always looking for ways to improve.`;

export const ABOUT_TEXT = `No matter what I’m working on—whether it’s a school project, a passion project, or professional work—I always give it my best effort and look for ways to grow my skillset. I love diving deep into a subject, breaking down complex problems, and truly understanding how everything fits together. I find that finishing a project is even more rewarding when I am able to know not only that it works, but exactly why it does.

I first got into computer science in high school, creating small games for the school's shared files so other students could play them. That early love for programming led me to pursue a degree in computer science, which I’ll be graduating with in May of 2025.

I began coding in Java, so it will always have a special place in my heart. These days, I’m most comfortable with Python and C, which I actively use in my research and class projects. I also work with React and React Native, building web and mobile applications for fun in my spare time (such as this website). My experience ranges from developing CAV models in CARLA to mobile app development with Expo.

Beyond coding, I’m an avid reader, and am always eager to learn something new and engage in new experiences. I volunteer in my community, enjoy playing piano, and love video games, although I’ve always had more fun creating them than playing them. Above all, I strive to build up those around me and make a positive impact wherever I can.`

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "CAV Research Assistant",
    company: "Brandon University",
    description: `Conducted research and simulations using CARLA to optimize platoon models for connected autonomous vehicles (CAVs). Designed and implemented experiments to evaluate key performance metrics, including fuel efficiency and safety outcomes. Collaborated with the National Research Council of Canada to analyze data and adjust simulation parameters, contributing to ongoing advancements in autonomous vehicle technology.`,
    technologies: ["Python", "C/C++", "CARLA", "SUMO"],
  },
  /*
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
  */
];

export const PROJECTS = [
  {
    title: "Reading Recommendation App",
    image: project1,
    description:
      "Built a full-stack cross-platform mobile application for managing book recommendations. The app allows users to track their reading history and receive personalized suggestions. I used React Native with Expo for the frontend and Node.js for the backend, and MongoDB to store user data and recommendations. Integrated the Google Books API to fetch book details and implemented a recommendation system based on user preferences.",
    technologies: ["React Native", "Expo", "Node.js", "MongoDB", "Google API"],
  },
  {
    title: "CARLA Platoon Optimization",
    image: project2,
    description:
      "Developed Python scripts for platoon formation and car-following behavior in CARLA. Created a master script to reload the world and set up experiments, along with scripts to interact with the CARLA server. Automated the parameterization of vehicle behavior, traffic, and environmental conditions, optimizing experiment setup and data collection for efficient and reproducible simulations.",
    technologies: ["Python", "C/C++", "CARLA", "SUMO"],
  },
  {
    title: "Personal Portfolio Website",
    image: project3,
    description:
      "Designed and developed a personal portfolio website to showcase my skills and projects. Built using React, Tailwind CSS, and Node.js, the site features a dynamic, responsive layout and integrates with a backend for personalized content.",
    technologies: ["React", "Node.js", "Tailwind CSS", "Framer Motion"],
  },
  /*
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
  */
];

export const CONTACT = {
  address: "Brandon, MB, Canada ",
  phoneNo: "+1 (204) 596-9177 ",
  email: "theaimeeschmidt@gmail.com",
};