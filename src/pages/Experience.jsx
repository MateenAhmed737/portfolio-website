import 'react-vertical-timeline-component/style.min.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { FaBriefcase, FaGraduationCap, FaSchool } from "react-icons/fa";

const Experience = () => {

  return (
    <div className="font-pop font-medium selection:text-primary selection:bg-white">
      <VerticalTimeline lineColor="#312e81">
        <VerticalTimelineElement
          contentStyle={{ background: "#6366f1", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #6366f1" }}
          dateClassName="min-[1170px]:text-black"
          date="May 2019 - May 2020"
          icon={<FaSchool />}
          iconStyle={{ background: "#6366f1", color: "#fff" }}>
          <h3 className="vertical-timeline-element-title text-xl font-semibold">Matriculation</h3>
          <h4 className="vertical-timeline-element-subtitle">Darul-Uloom High School</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "#6366f1", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #6366f1" }}
          dateClassName="min-[1170px]:text-black"
          date="July 2022 - Sep 2022"
          icon={<FaBriefcase />}
          iconStyle={{ background: "#6366f1", color: "#fff" }}>
          <h3 className="vertical-timeline-element-title text-xl font-semibold">Graphic Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">Jaffar Flex</h4>
          <p className='!font-normal'>
            Created designs for panaflex, pamphlets and standees for local businesses.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{
            background: "#6366f1", color: "#fff"
          }}
          contentArrowStyle={{ borderRight: "7px solid  #6366f1" }}
          dateClassName="min-[1170px]:text-black"
          date="Sep 2022 - Dec 2022"
          icon={<FaGraduationCap />}
          iconStyle={{ background: "#6366f1", color: "#fff" }}>
          <h3 className="vertical-timeline-element-title text-xl font-semibold">Web and Mobile Hybrid Application Dev</h3>
          <h4 className="vertical-timeline-element-subtitle">Saylani</h4>
          <p className='!font-normal'>
            This program provided me with comprehensive knowledge of creating interactive mobile applications using web && mobile based technologies like HTML, CSS, JavaScript, React, React Native and Redux.
            <br />
            <br />

            Throughout the course, I learned the best practices for designing, testing, and deploying hybrid mobile applications that are compatible with multiple operating systems like Android and iOS.
            <br />
            <br />

            Some specific topics covered in the course include:
            <ul>
              <li>- Introduction to Hybrid Mobile Applications.</li>
              <li>- Advantages and Disadvantages of Hybrid Mobile Applications.</li>
              <li>- Tools and Technologies used in Hybrid Mobile App Development.</li>
              <li>- Designing User Interface for Mobile Applications.</li>
              <li>- Navigation and Routing within Mobile Apps.</li>
              <li>- Building Form Inputs and Validations.</li>
              <li>- Working with Data and APIs.</li>
              <li>- Integration with Device Capabilities like Camera and GPS.</li>
              <li>- Testing and Debugging Mobile Applications.</li>
            </ul>
            <br />
            This course also emphasized the significance of responsive web design, ensuring that the created applications can seamlessly adjust to different screen sizes.
            <br />
            <br />

            Overall, this course equipped me with the fundamental skills required to develop cross-platform mobile applications with full functionality using web-based technologies.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "#6366f1", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #6366f1" }}
          dateClassName="min-[1170px]:text-black"
          date="Dec 2022 - Jan 2023"
          icon={<FaGraduationCap />}
          iconStyle={{ background: "#6366f1", color: "#fff" }}>
          <h3 className="vertical-timeline-element-title text-xl font-semibold">JavaScript Algorithms & Data Structures</h3>
          <h4 className="vertical-timeline-element-subtitle">freeCodeCamp (NPO)</h4>
          <p className='!font-normal'>
            In this program I learnt the basics of JavaScript (variables, arrays, objects, loops, functions) and basic concepts of Object-Oriented Programming (OOP) and Functional Programming (FP).
          </p>
          <a target='_blank' href="https://www.freecodecamp.org/certification/mateenahmed/javascript-algorithms-and-data-structures" className='text-primary text-center font-normal bg-white block rounded px-1.5 py-1.5 mt-3 hover:bg-white/80'>view certification</a>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "#6366f1", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #6366f1" }}
          dateClassName="min-[1170px]:text-black"
          date="Jan 2023 - Feb 2023"
          icon={<FaGraduationCap />}
          iconStyle={{ background: "#6366f1", color: "#fff" }}>
          <h3 className="vertical-timeline-element-title text-xl font-semibold">Front End Development Libraries</h3>
          <h4 className="vertical-timeline-element-subtitle">freeCodeCamp (NPO)</h4>
          <p className='!font-normal'>
            In this program I learnt:
            <ul>
              <li>- Bootstrap, for quickly building User Interfaces.</li>
              <li>- React, for creating powerful Single Page Applications (SPA).</li>
              <li>- Redux, for state management.</li>
              <li>- jQuery.</li>
              <li>- Sass (Preprocessor for CSS).</li>
            </ul>
          </p>
          <a target='_blank' href="https://www.freecodecamp.org/certification/mateenahmed/front-end-development-libraries" className='text-primary text-center font-normal bg-white block rounded px-1.5 py-1.5 mt-3 hover:bg-white/80'>view certification</a>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "#6366f1", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #6366f1" }}
          dateClassName="min-[1170px]:text-black"
          date="Feb 2022 - Mar 2022"
          icon={<FaBriefcase />}
          iconStyle={{ background: "#6366f1", color: "#fff" }}>
          <h3 className="vertical-timeline-element-title text-xl font-semibold">ReactJS Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Wetech.Sol</h4>
          <p className='!font-normal'>
            Built web apps with ReactJS
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience