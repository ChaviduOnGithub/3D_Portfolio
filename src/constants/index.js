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
      name: "XXXX",
      description:
        "djkfnjonuiog uionrtjoe grturt grti9ghmrtiomgb btrjnbt btnb tbtbu tmb4ubjt guinghn enjkbyuguirhegrtioeghrtuo uiengr5gt rntgb54un g5ugn45guin5.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: images,
      source_code_link: "https://github.com/",
    },
    {
      name: "XXXX",
      description:
        "rghuireouig uieargjkrnegu uienruigrbhe hiberuij guirtebgui g buier gherbuig rej gui uier gh ergu rejh gryuinguiregurngj erigrjienguin g.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: images,
      source_code_link: "https://github.com/",
    },
    {
      name: "XXXX",
      description:
        "wjinrfgerg rengjkrgj uiergkj eg ger gebrg er vguiegr rbeg regvhie gre bui bi bjbte dbf fg h  g rtgfgdbtghwregwre dbrthwr etrthrt.",
      tags: [
        {
          name: "xml",
          color: "blue-text-gradient",
        },
        {
          name: "kotlin",
          color: "green-text-gradient",
        },
      ],
      image: images,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, projects };