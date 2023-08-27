import { useLayoutEffect, useState } from "react";
import data from "../constants/data";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Breadcrumbs from "../components/Breadcrumbs";
import ProjectCard from "../components/Cards/ProjectCard";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { BsChevronLeft, BsChevronRight } from 'react-icons/Bs'

const Portfolio = () => {
  const projects = data.projects;
  const [slider, setSlider] = useState({ isOpen: false, currentImage: 0, images: [] });

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    document.title = "Portfolio - Mateen Ahmed";

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

  console.log('slider', slider)

  return (
    <section className="flex justify-center items-center p-2 pb-5 font-pop">
      <div className="flex flex-wrap justify-evenly max-w-[1280px] w-full h-full">
        <Breadcrumbs obj={{ title: "Portfolio" }} style="p-2 sm:p-4" />
        {
          projects.map((data) => <ProjectCard key={data.title} {...data} slider={slider} setSlider={setSlider} />)
        }


        <Lightbox
          open={slider.isOpen}
          close={() => setSlider({ ...slider, isOpen: false })}
          slides={slider.images}
          index={slider.currentImage}
          render={{
            iconPrev: () => slider.images.length > 1 ? <div className="text-3xl bg-gray-800/60 hover:bg-gray-800/100 transition-all duration-300 p-1.5 rounded-full ml-1"><BsChevronLeft /></div> : null,
            iconNext: () => slider.images.length > 1 ? <div className="text-3xl bg-gray-800/60 hover:bg-gray-800/100 transition-all duration-300 p-1.5 rounded-full ml-1"><BsChevronRight /></div> : null,
            // iconClose: () => <MyCloseIcon />,
          }}
        />
      </div>
    </section>
  );
};

export default Portfolio;
