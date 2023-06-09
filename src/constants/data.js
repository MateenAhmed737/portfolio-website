import Home from "../assets/images/home.png";
import Store from "../assets/images/Store.jpg";
import Md from "../assets/images/md.jpg";
import Drum from "../assets/images/drum.jpg";
import Quotes from "../assets/images/quotes.png";
import Pomodoro from "../assets/images/pomodoro.jpg";
import Plandrome from "../assets/images/plandrome.jpg";
// import Calc from "../assets/images/calc.jpg";

const data = {
  navLinks: [
    {
      title: "Home",
      id: "home",
      path: "/",
    },
    {
      title: "Experience",
      id: "experience",
      path: "/experience",
    },
    {
      title: "Portfolio",
      id: "portfolio",
      path: "/portfolio",
    },
    {
      title: "Contact",
      id: "contact",
      path: "/contact",
    },
  ],
  drumPads: [
    [
      "Q",
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      "Heater 1",
    ],
    [
      "W",
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      "Heater 2",
    ],
    [
      "E",
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      "Heater 3",
    ],
    [
      "A",
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      "Heater 4",
    ],
    ["S", "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", "Clap"],
    ["D", "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", "Open HH"],
    [
      "Z",
      "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      "Kick n' Hat",
    ],
    ["X", "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", "Kick"],
    [
      "C",
      "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      "Closed HH",
    ],
  ],
  calcKeys: {
    name: [
      "Escape",
      "/",
      "*",
      "7",
      "8",
      "9",
      "-",
      "4",
      "5",
      "6",
      "+",
      "1",
      "2",
      "3",
      "0",
      ".",
      "Enter",
    ],
    value: [
      "AC",
      "/",
      "x",
      "7",
      "8",
      "9",
      "-",
      "4",
      "5",
      "6",
      "+",
      "1",
      "2",
      "3",
      "0",
      ".",
      "=",
    ],
    id: [
      "clear",
      "divide",
      "multiply",
      "seven",
      "eight",
      "nine",
      "subtract",
      "four",
      "five",
      "six",
      "add",
      "one",
      "two",
      "three",
      "zero",
      "decimal",
      "equals",
    ],
  },
  projects: [
    // {
    //   title: "Calculator",
    //   skills: ["ReactJS", "TailwindCSS", 'GSAP'],
    //   path: "/project/calculator",
    //   image: Calc,
    // },
    {
      title: "Ecommerce store",
      skills: ["NextJS", "ReactJS", "TailwindCSS", "Stripe"],
      path: "https://tradezone.vercel.app",
      image: Store,
    },
    {
      title: "Quote Generator",
      skills: ["ReactJS", "TailwindCSS", "GSAP"],
      path: "/project/quotes-generator",
      image: Quotes,
    },
    {
      title: "Pomodoro Clock",
      skills: ["ReactJS", "TailwindCSS", "GSAP"],
      path: "/project/pomodoro",
      image: Pomodoro,
    },
    {
      title: "Drum Machine",
      skills: ["ReactJS", "TailwindCSS", "GSAP"],
      path: "/project/drum-machine",
      image: Drum,
    },
    {
      title: "My Portfolio Website",
      skills: ["ReactJS", "TailwindCSS", "GSAP", "Redux"],
      path: "/",
      image: Home,
    },
    {
      title: "Plandrome Checker",
      skills: ["ReactJS", "TailwindCSS", "GSAP"],
      path: "/project/plandrome",
      image: Plandrome,
    },
    {
      title: "Markdown Previewer",
      skills: ["ReactJS", "TailwindCSS", "GSAP"],
      path: "/project/markdown-previewer",
      image: Md,
    },
  ],
  titles: [
    "React.js Developer.",
    "React Native Developer.",
    "Web Developer.",
    "Mobile App Developer.",
  ],
};

export default data;
