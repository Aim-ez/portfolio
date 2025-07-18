import project1 from "../assets/books.png";
import project2 from "../assets/platoon.png";
import project3 from "../assets/eyeball.png";
//import project4 from "../assets/carla.jpg";

export const HERO_CONTENT = `Making life better, one line of code at a time.`;

export const ABOUT_TEXT = `I'm a Full Stack Developer and CAV Researcher driven by the belief that technology should improve lives. My journey began in high school, creating small games for classmates, and today, I design web and mobile apps, develop CAV models, and optimize tech solutions for real-world problems.

I’m passionate about continuously evolving my skill set. Whether it’s diving into complex code or collaborating with diverse teams, I aim to craft clean, scalable solutions. From coding in Python, C, and Java, to building React and React Native applications, I enjoy tackling challenges and making a tangible impact.

When I’m not coding, I’m reading, playing piano, or contributing to my community. I believe in the power of collaboration and strive to help others grow, too.`

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