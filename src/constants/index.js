import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    figma,
    threejs,
    images,
    github,
    cookease

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "UI,UX Designer",
      icon: mobile,
    },
    {
      title: " Frontend Developer",
      icon: backend,
    },
    {
      title: "3D Artist",
      icon: creator,
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    
  ];
  
  const projects = [
    {
      name: "Pregassist",
      description:
        "",
      tags: [
        {
          name: "dart",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "pink-text-gradient",
        },
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
      ],
      image: images,
      source_code_link: "https://github.com/pulasthiBuddikaGit/PregAssist",
    },
    {
      name: "Cookease smart recipe app",
      description:
        "",
      tags: [
        {
          name: "react native",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "green-text-gradient",
        },
        {
          name: "google cloud vision",
          color: "pink-text-gradient",
        },
      ],
      image: cookease,
      source_code_link: "https://github.com/pulasthiBuddikaGit/CookEase",
    },
    {
      description:
        "Checkout my github for more projects ",
    
      image: github,
      source_code_link: "https://github.com/NisalkaJay",
    },
  ];
  
  export { services, technologies, projects };
