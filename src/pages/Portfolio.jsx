import { useLayoutEffect } from "react";
import data from "../constants/data";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Breadcrumbs from "../components/Breadcrumbs";
import ProjectCard from "../components/Cards/ProjectCard";

const Portfolio = () => {
  const projects = data.projects;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.registerEffect({
        name: "fadeUp",
        effect: (targets, config, set) => {
          gsap.set(targets, set);
          return gsap.to(targets, {
            scrollTrigger: {
              trigger: targets,
              start: config.start,
            },
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
        extendTimeline: false,
      });

      gsap.utils.toArray(".card").forEach(e => gsap.effects.fadeUp(e, null, { opacity: 0, y: 100 }));
    });

    return () => {
      ctx.revert();
    }
  }, []);

  return (
    <section className="flex justify-center items-center p-2 pb-5 font-pop">
      <div className="flex flex-wrap justify-evenly max-w-[1280px] w-full h-full">
        <Breadcrumbs obj={{ title: "Portfolio" }} style="p-2 sm:p-4" />

        {
          projects.map((data) => <ProjectCard key={data.title} {...data} />)
        }
      </div>
    </section>
  );
};

export default Portfolio;
