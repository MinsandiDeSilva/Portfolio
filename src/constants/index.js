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
  // docker,
  angular,
  postgresql,
  mysql,
  flask,
  next,
  springboot,
  java,
  python,

  carrent,
  jobit,
  tripguide,
  threejs,

  leco,
  openarc,
  akila,
  chandrasiri,
  harshani,

  lawfirm,
  ceylonmine,
  ticket_app,
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
    title: "Web Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
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
    name: "Java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Python",
    icon: python,
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
    name: "Next JS",
    icon: next,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Springboot",
    icon: springboot,
  },
  // {
  //   name: "Flask",
  //   icon: flask,
  // },
  {
    name: "angular",
    icon: angular,
  },
];

const experiences = [
  {
    title: "Intern",
    company_name: "LECO",
    icon: leco,
    iconBg: "#FFFF00",
    date: "June 2023 - September 2023",
    points: [
      "Worked under the IT division, assisting in organizing and managing documents, including arranging and formatting documents, creating presentations, and compiling manuals to support team projects.",
      "Conducted procedures to validate and verify data, making sure it was accurate, and Maintained track of information in Excel spreadsheets.",
    ],
  },
  {
    title: "Intern",
    company_name: "OpenArc Systems Management",
    icon: openarc,
    iconBg: "#E6DEDD",
    date: " June 2024 - September 2024",
    points: [
      "Supported data management and analysis for an educational app(BrightUp), ensuring accurate data entry and effective insights to inform application features. ",
      "Developed and maintained front-end components using HTML, CSS, and  Angular, enhancing user experience and interface responsiveness. ",
      "Utilized Java and Spring Boot to build backend services, ensuring seamless  integration of data with frontend systems",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Her drive and determination are truly inspiring, making her a powerhouse in everything she takes on.",
    name: "Akila Delapalage",
    designation: "Software Architect ",
    company: "OpenArc Systems Management",
    image: akila,
  },
  {
    testimonial:
      "She seamlessly integrates with the team, bringing enthusiasm and a strong eagerness to learn and grow.",
    name: "Chandrasiri Weerasekara",
    designation: "Deputy General Manager IT",
    company: "LECO",
    image: chandrasiri,
  },
  {
    testimonial:
      "She demonstrated a strong eagerness to learn, proactively seeking tasks and opportunities to contribute.",
    name: "Harshani Wattegedara",
    designation: "QA team leader",
    company: "OpenArc Systems Management",
    image: harshani,
  },
];

const projects = [
  {
    name: "Law Firm",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: lawfirm,
    source_code_link: "https://github.com/MinsandiDeSilva/Law_Firm_Management_System",
  },
  {
    name: "CeylonMine",
    description:
      "MineCeylon is a web app that digitizes and centralizes mining operations in Sri Lanka, streamlining licensing, compliance, and industry management.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "supabase",
        color: "pink-text-gradient",
      },
    ],
    image: ceylonmine,
    source_code_link: "https://github.com/CeylonMine",
  },
  {
    name: "Ticketing System",
    description:
      "Built a real-time ticketing system using Java multithreading and Angular, showcasing expertise in concurrency and the producer-consumer model",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: ticket_app,
    source_code_link: "https://github.com/Real-time_Ticketing_App_Frontend",
  },
  {
    name: "Jobs Management System",
    description:
      "Built a real-time ticketing system using Java multithreading and Angular, showcasing expertise in concurrency and the producer-consumer model",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: ticket_app,
    source_code_link: "https://github.com/Real-time_Ticketing_App_Frontend",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
