// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';



// Education Section Logo's
import ciem from './assets/education_logo/ciem.png';
import Ramsagar from './assets/education_logo/Ramsagar.png';
import Teliberia from './assets/education_logo/Teliberia.png';

// Project Section Logo's
import todo from './assets/work_logo/todo.jpg';
import kabir from './assets/work_logo/kabir.jpg';
import calculator from './assets/work_logo/calculator.jpg';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  
  export const education = [
    {
      id: 0,
      img: ciem,
      school: "Calcutta Institute of Engineering and Management, Kolkata",
      date: "Sept 2022 - July 2026",
      grade: "approax 8 CGPA till now",
      desc: "I am pursuing my Bachelor (BTech) in Computer Science and engineering from CIEM, Kolkata. Till now at CIEM, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering.",
      degree: "Bachelor of Technology - BTech (Computer Science and Engineering)",
    },
    {
      id: 1,
      img: Ramsagar,
      school: "Ramsagar High School, Bankura, West Bengal",
      date: "Apr 2020 - March 2022",
      grade: "95%",
      desc: "I completed my class 12 education from Ramsagar High School, Bankura, West Bengal, under the WBCHSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Biology.",
      degree: "WBCHSE(XII) - PCMB",
    },
    {
      id: 2,
      img: Teliberia,
      school: "Teliberia SM High School, Bankura, West Bengal",
      date: "Apr 2019 - March 2020",
      grade: "90%",
      desc: "I completed my class 10 education from Teliberia SM High School, Bankura, West Bengal, under the WBBSE board.",
      degree: "WBBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Kabir - The Virtual Assistant",
      description:
        "Kabir is a smart, voice-enabled virtual assistant built for the browser. It responds to user commands using speech recognition and text-to-speech, offering features like answering questions, performing tasks, and engaging in simple conversation. With a clean interface and real-time voice interaction, it provides an intuitive and interactive user experience.",
      image: kabir,
      tags: ["HTML", "CSS", "JavaScript", "Speech Recognition", "Text-to-Speech"],
      github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
      webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "To-Do List Web App",
      description:
        "This is a simple and responsive To-Do List web application that helps users manage their daily tasks efficiently. Users can add, delete, and mark tasks as complete in a clean and intuitive interface. The app ensures tasks are saved in real-time using browser local storage, providing a seamless user experience.",
      image: todo,
      tags: ["React JS"],
      github: "https://github.com/subhadipsutradhar2004/to-do-list",
      webapp: "https://subhadip-to-do-list.netlify.app/",
    },
     {
      id: 2,
      title: "Calculator App",
      description:
        "This is a simple and responsive calculator web app that performs basic arithmetic operations like addition, subtraction, multiplication, and division. It features a clean UI and real-time results for a smooth user experience. Designed to work seamlessly across devices, it's fast, lightweight, and fully client-side.",
      image: calculator,
      tags: ["HTML", "CSS", "JavaScript"],
      github : "https://github.com/subhadipsutradhar2004/Calculator.git",
      webapp: "https://calculatorsubhadip.netlify.app/",
    }
    
  ];  