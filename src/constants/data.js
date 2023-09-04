import Home from "../assets/images/home.png";
import Store from "../assets/images/Store.jpg";
import Md from "../assets/images/md.jpg";
import Drum from "../assets/images/drum.jpg";
import Quotes from "../assets/images/quotes.png";
import Pomodoro from "../assets/images/pomodoro.jpg";
import Plandrome from "../assets/images/plandrome.jpg";
import Kirista from "../assets/images/kirista.jpg";
import Kaci1 from "../assets/images/kaci1.jpg";
import Kaci2 from "../assets/images/kaci2.jpg";
import Kaci3 from "../assets/images/kaci3.jpg";
import Kaci4 from "../assets/images/kaci4.jpg";
import Kaci5 from "../assets/images/kaci5.jpg";
import Kaci6 from "../assets/images/kaci6.jpg";
import Kaci7 from "../assets/images/kaci7.jpg";
import Kaci8 from "../assets/images/kaci8.jpg";
import Kaci9 from "../assets/images/kaci9.jpg";
import Kaci10 from "../assets/images/kaci10.jpg";
import Kaci11 from "../assets/images/kaci11.jpg";
import Kaci12 from "../assets/images/kaci12.jpg";
import Kaci13 from "../assets/images/kaci13.jpg";
import Kaci14 from "../assets/images/kaci14.jpg";
import Kaci15 from "../assets/images/kaci15.jpg";
import Kaci16 from "../assets/images/kaci16.jpg";
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
      title: "Kaci Web App",
      skills: [
        "ReactJS",
        "Redux",
        "TailwindCSS",
        "Echarts",
        "React Quill",
        "Data Structure Algorithms",
      ],
      // link: "https://kacihelp.com/login",
      images: [
        Kaci1,
        Kaci2,
        Kaci3,
        Kaci4,
        Kaci5,
        Kaci6,
        Kaci7,
        Kaci8,
        Kaci9,
        Kaci10,
        Kaci11,
        Kaci12,
        Kaci13,
        Kaci14,
        Kaci15,
        Kaci16,
      ],
    },
    {
      title: "Kirista Web App",
      skills: [
        "ReactJS",
        "Redux",
        "TailwindCSS",
        "React Quill",
        "Data Structure Algorithms",
      ],
      // link: "https://manager.kirista.com/login",
      images: [Kirista],
    },
    {
      title: "Ecommerce store",
      skills: ["NextJS", "ReactJS", "TailwindCSS", "Stripe"],
      link: "https://tradezone.vercel.app",
      images: [Store],
    },
    {
      title: "Quote Generator",
      skills: ["ReactJS", "TailwindCSS", "GSAP"],
      path: "/project/quotes-generator",
      images: [Quotes],
    },
    {
      title: "Pomodoro Clock",
      skills: ["ReactJS", "TailwindCSS", "GSAP"],
      path: "/project/pomodoro",
      images: [Pomodoro],
    },
    {
      title: "Drum Machine",
      skills: ["ReactJS", "TailwindCSS", "GSAP"],
      path: "/project/drum-machine",
      images: [Drum],
    },
    // {
    //   title: "My Portfolio Website",
    //   skills: ["ReactJS", "TailwindCSS", "GSAP", "Redux"],
    //   path: "/",
    //   images: [Home],
    // },
    {
      title: "Plandrome Checker",
      skills: ["ReactJS", "TailwindCSS", "GSAP"],
      path: "/project/plandrome",
      images: [Plandrome],
    },
    {
      title: "Markdown Previewer",
      skills: ["ReactJS", "TailwindCSS", "GSAP"],
      path: "/project/markdown-previewer",
      images: [Md],
    },
  ],
  titles: ["Jr. ReactJS Developer", "React Native Developer", "Web Developer"],
};

export default data;
