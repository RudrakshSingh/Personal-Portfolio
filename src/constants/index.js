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
  docker,
  nagarro,
  bharatpe,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Native(Basics)",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Travel Junky",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Mad-Monkey",
    // icon: nagarro,
    iconBg: "#383E56",
    date: "January 2023 - March 2023",
    points: [
      "Developing and maintaining web applications using React.js from scratch and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility .",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Associate Software developer",
    company_name: "Nagarro",
    icon: nagarro,
    iconBg: "#E6DEDD",
    date: "March 2023 - July 2023",
    points: [
      "Worked on Techonlogies like HTML, CSS, JavaScript React.js, Angular.js, Three.js for frontend part.",
      "Worked with Node.js, Java, Springboot, Maven, Docker, SQL for backend part.",
      "Sucessfully delivered a complete Shipping And Transport Website to the client.",
      "Worked on the Frontend Part using Angular.js making the login page, landing page and the transaction page single handedly.",
      "Got to workd with and excellent team of higly motivated people",
    ],
  },
  {
    title: "SDE Intern (Frontend)",
    company_name: "BharatPe",
    icon: bharatpe,
    iconBg: "#383E56",
    date: "August 2023 - December 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Older people sit down and ask, 'What is it?' but the boy asks, 'What can I do with it?",
    name: "Steve Jobs",
    designation: "Founder",
    company: "Apple",
    /* image:
      "https://www.imore.com/sites/imore.com/files/field/image/2014/03/topic_steve_jobs.png ",*/
  },
  {
    testimonial:
      "Don’t read success stories, you will only get a message. Read failure stories, you will get some ideas to get success.",
    name: "Dr. A.P.J Abdul Kalam Sir",
    designation: "EX-President",
    company: "India",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "Man is made by his belief. As he believes, so he is.",
    name: "Lord Krishna ",
    designation: "Bhagwat Geeta",
    /*company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",*/
  },
];

const projects = [
  {
    name: "Personal Portfolio",
    description:
      "Personal Portfolio which is used to showcase my development skills made using React.js, Three.js and TailwindCss",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "FoodCode",
    description:
      "Web application that enables users to order food, view estimated prices and comparisons, and live tracing of delivery.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/RudrakshSingh/FoodCode",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
