import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap/gsap-core";
import ScrollTrigger from "gsap/ScrollTrigger";
import data from "../constants/data";
import Typewriter from "typewriter-effect/dist/core";
import { FaPhone, FaMapMarkerAlt, FaHtml5, FaJs, FaCss3, FaReact, FaBootstrap, FaGitAlt } from "react-icons/fa";
import { SiAdobephotoshop, SiFirebase, SiGmail, SiGreensock, SiJquery, SiMicrosoftexcel, SiRedux, SiTailwindcss } from "react-icons/Si";
import { MdMessage } from "react-icons/Md";
import { BsArrowRight } from 'react-icons/Bs';
import CV from '../assets/documents/CV_Mateen_Ahmed.pdf';
import ContactButton from '../components/Buttons/ContactButton';

const Home = () => {
  const titleRef = useRef();
  const projects = data.projects.slice(0, 3);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      gsap.registerEffect({
        name: "fadeUp",
        effect: (targets, config, set) => {
          gsap.set(targets, set);
          return gsap.to(targets, {
            scrollTrigger: {
              trigger: targets,
              start: config.start,
            },
            ...config.extraProps,
            duration: config.duration,
            opacity: 1,
            y: 0,
            ease: config.ease,
            stagger: config.stagger,
          });
        },
        defaults: {
          duration: 1,
          start: "top bottom+=100",
          ease: "back",
          stagger: { each: 0.3 },
        },
      });

      gsap.registerEffect({
        name: "bars",
        effect: (target, config) => {
          return gsap.from(target, {
            scrollTrigger: {
              trigger: target,
              start: config.start,
            },
            duration: config.duration,
            ease: config.ease,
            stagger: config.stagger,
            width: 0
          });
        },
        defaults: {
          duration: 3,
          start: "top bottom+=150",
          ease: 'power2',
        },
      });

      gsap.registerEffect({
        name: "counter",
        effect: (target, config) => {
          return gsap.from(target, {
            scrollTrigger: {
              trigger: target,
              start: config.start,
            },
            duration: config.duration,
            ease: config.ease,
            stagger: config.stagger,
            innerText: 0,
            snap: { innerText: 1 },
          });
        },
        defaults: {
          duration: 3,
          start: "top bottom+=150",
          ease: 'power2',
        },
      });


      const blink = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
      blink
        .fromTo(".blink", { opacity: 1 }, { duration: 0.4, opacity: 0.99 })
        .fromTo(".blink", { opacity: 0.99 }, { duration: 0.1, opacity: 0 });

      gsap.effects.fadeUp(".gsap-fadeUp, .paragraph", null, { opacity: 0, y: 100 });

      gsap.utils.toArray(".gsap-section-fadeUp, .skills, .gsap-languages-fadeUp, .gsap-libraries-fadeUp, .gsap-tools-fadeUp, .gsap-project-fadeUp").forEach(e => gsap.effects.fadeUp(e, null, { opacity: 0, y: 100 }));
      gsap.utils.toArray('.progressBar').forEach(e => gsap.effects.bars(e, null));
      gsap.utils.toArray('.percentage').forEach(e => gsap.effects.counter(e, null));

    });

    const paraTypeWriter = new Typewriter(".paragraph", {
      strings:
        "Seeking an entry-level position as an Application Developer to utilize my skills and knowledge in software development, while continuously learning and expanding my expertise in the field. Aiming to make meaningful contributions to a company's success by taking on challenging projects and producing high-quality and innovative software solutions.",
      autoStart: true,
      loop: false,
      delay: 25,
    });

    const titleTypeWriter = new Typewriter(titleRef.current, {
      strings: data.titles,
      autoStart: true,
      loop: true,
      delay: "natural",
      cursor: false
    });

    return () => {
      titleTypeWriter;
      paraTypeWriter;
      ctx.revert();
    };
  }, []);


  return (
    <div
      className="flex flex-col max-w-[1280px] font-pop mx-auto transition-height duration-1000">
      <main className="py-10 px-3 w-full flex flex-col lg:flex-row  items-center justify-between">
        <div className="font-light text-center lg:text-left text-lg xs:text-[21px] sm:text-2xl">
          <span className="gsap-fadeUp inline-block">
            Hi, I'm{" "}
            <strong className="font-bold inline-block relative">
              Mateen Ahmed
              <span className="absolute right-0 bottom-0 rounded inline-block w-full h-1 from-indigo-900 to-indigo-500 bg-gradient-to-tr"></span>
            </strong>
          </span>
          <br />
          <span className="gsap-fadeUp inline-block font-medium text-2xl xs:text-[30px] sm:text-4xl mt-2">
            a{" "}
            <strong
              ref={titleRef}
              className="font-bold from-indigo-900 to-primary bg-gradient-to-bl bg-clip-text text-transparent break-keep">
              ReactJS Developer
            </strong>
            <span className="blink inline-block font-light text-[25px] xs:text-[35px] -translate-x-2">
              |
            </span>
          </span>
          <div className="mt-2">
            <div className="inline-block gsap-fadeUp mx-auto">
              <a
                href={CV}
                download={true}
                className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium font-mont uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-indigo-600 focus:outline-none active:scale-95">
                Download CV
              </a>
            </div>
            <br />
            <div className="text-sm inline-flex items-center mt-4 mx-auto lg:mx-0 text-center">
              <ContactButton link='https://www.google.com/maps/@24.884498,67.047415,16z?hl=en' icon={FaMapMarkerAlt} text='Near Durkash-e-Mashriq Girls Collage Bihar colony, Jamshed road #2, Karachi' />
              <ContactButton link='mailto:mateensoomro737@gmail.com' icon={SiGmail} text='mateensoomro737@gmail.com' />
              <ContactButton link='tel:+923363040789' icon={FaPhone} text='+92 336 3040789' />
              <Link
                to="/contact"
                title="Send message"
                className="gsap-fadeUp from-indigo-500 to-indigo-50 bg-gradient-to-tr shadow-2xl shadow-slate-600 p-3 rounded-full relative group flex flex-col sm:flex-row items-center justify-center m-2 cursor-pointer">
                <MdMessage className="text-xl" />
              </Link>
            </div>
            <br />
          </div>
        </div>
        <p className="paragraph from-indigo-50 to-indigo-500 bg-gradient-to-bl rounded-lg w-full lg:w-1/2 max-w-2xl text-center lg:text-left text-base xs:text-lg p-5 mt-5"></p>
      </main>

      <Section title="Skills" >
        <SkillSet title='Languages' class='gsap-languages-fadeUp'>
          <Skill classes='gsap-languages-fadeUp' title='JavaScript (ES6)' value='90' icon={FaJs} color='text-yellow-500' />
          <Skill classes='gsap-languages-fadeUp' title='HTML5' value='80' icon={FaHtml5} color='text-orange-600' />
          <Skill classes='gsap-languages-fadeUp' title='CSS3' value='80' icon={FaCss3} color='text-blue-600' />
        </SkillSet>
        <SkillSet title='Frameworks & Libraries' class='gsap-libraries-fadeUp'>
          <Skill classes='gsap-libraries-fadeUp' title='ReactJS' value='70' icon={FaReact} color='text-blue-600' />
          <Skill classes='gsap-libraries-fadeUp' title='React Native' value='45' icon={FaReact} color='text-blue-600' />
          <Skill classes='gsap-libraries-fadeUp' title='Redux' value='70' icon={SiRedux} color='text-purple-700' />
          <Skill classes='gsap-libraries-fadeUp' title='TailwindCSS' value='70' icon={SiTailwindcss} color='text-blue-700' />
          <Skill classes='gsap-libraries-fadeUp' title='Bootstrap' value='55' icon={FaBootstrap} color='text-purple-700' />
          <Skill classes='gsap-libraries-fadeUp' title='jQuery' value='35' icon={SiJquery} color='text-blue-600' />
          <Skill classes='gsap-libraries-fadeUp' title='GSAP' value='45' icon={SiGreensock} color='text-green-700' />
        </SkillSet>
        <SkillSet title='Tools' class='gsap-tools-fadeUp'>
          <Skill classes='gsap-tools-fadeUp' title='Firebase' value='50' icon={SiFirebase} color='text-yellow-500' />
          <Skill classes='gsap-tools-fadeUp' title='Photoshop' value='80' icon={SiAdobephotoshop} color='text-blue-800' />
          <Skill classes='gsap-tools-fadeUp' title='MS Excel' value='20' icon={SiMicrosoftexcel} color='text-green-700' />
          <Skill classes='gsap-tools-fadeUp' title='Git' value='20' icon={FaGitAlt} color='text-orange-500' />
        </SkillSet>
      </Section >

      <Section title='Projects'>
        <div className="flex justify-center xs:justify-around pt-2 flex-wrap">

          {projects.map((data, i) => (
            <Project key={data.title} {...data} extraImageClass={i == 0 ? 'scale-75 group-hover:scale-[0.8]' : 'group-hover:scale-105'} />
          ))}

          <div className="gsap-project-fadeUp flex justify-center items-center w-full max-w-xs xs:w-1/4 md:w-full xs:min-w-[210px] h-[150px] xs:h-[100px] md:h-[150px] rounded-md overflow-hidden text-black font-semibold m-2">
            <Link to='/portfolio' className="hover:text-primary text-lg underline cursor-pointer">
              See More
            </Link>
          </div>

        </div>
      </Section>

      <Section extraSectionClass='flex justify-center mb-10 gsap-section-fadeUp'>
        <Link to='/contact' role='button' className="group/button text-center w-full max-w-[150px] mt-4 mb-2 px-2 py-2 font-semibold tracking-wide rounded transition-all duration-300 border border-primary hover:bg-primary text-primary hover:text-white">Let's talk</Link>
      </Section>
    </div >
  );
};

const Section = ({ title, children, extraSectionClass }) => {

  return (
    <section className={`w-full py-2 sm:py-5 md:py-10 px-3 ${extraSectionClass}`}>
      <h2 className="skills text-[30px] font-bold text-center"> {title} </h2>
      {children}
    </section>
  )
}


const Project = ({ title, skills, path, image, extraImageClass }) => {
  const style1 = "transition-all duration-500 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0";

  return (
    <Link to={path} className={`gsap-project-fadeUp flex items-center w-full max-w-[315px] xs:w-1/4 md:w-full xs:min-w-[210px] h-[200px] xs:h-[150px] md:h-[200px] rounded-md overflow-hidden border border-black/90 m-2 cursor-pointer group text-white relative ${title == 'Quote Generator' ? 'bg-[#8A6E9F]' : ''}`}>
      <img src={image} alt={title} className={`w-full transition-all duration-300 ${extraImageClass}`} />
      <div className={`absolute inset-0 bg-black/50 p-2 transition-all duration-500 opacity-0 group-hover:opacity-100`} >
        <div className={style1 + 'text-sm md:text-base text-center mb-1'}>
          <h3 className="text-xl md:text-2xl font-medium mb-1"> {title} </h3>
          Skills: {skills.join(', ')}
        </div>
        <div className="h-full max-h-[100px] xs:h-10 md:h-full flex items-center justify-center">
          <BsArrowRight className={`text-4xl mt-5 xs:text-2xl sm:text-2xl md:text-4xl hover:text-gray-200 delay-200 ${style1}`} />
        </div>
      </div>
    </Link>
  )
}

const SkillSet = props => {
  return (
    <div>
      <h3 className={"text-[22px] text-center sm:text-left font-semibold text-primary mt-5 " + props.class}>{props.title}</h3>
      <div className="flex justify-center xs:justify-around lg:justify-between pt-2 flex-wrap">
        {props.children}
      </div>
    </div>
  )
}

const Skill = ({ title, value, classes, ...props }) => {

  return (
    <div className={"w-full xs:w-1/4 md:w-full xs:min-w-[220px] max-w-xs p-2.5 mb-2 " + classes}>
      <span className="flex justify-between font-medium mb-2.5">
        <span className="flex items-center justify-center">
          &nbsp;
          <props.icon className={props.color + ' text-xl'} />
          &nbsp;
          {title}
        </span>
        <span><span className="percentage">{value}</span>%</span>
      </span>
      <div className="h-2.5 w-full bg-primary-tint relative bottom-2 rounded-full" >
        <div className={`h-full rounded-full from-primary to-primary-shade bg-gradient-to-b progressBar`} style={{ width: value + '%' }} ></div>
      </div>
    </div >
  )
}


export default Home;
