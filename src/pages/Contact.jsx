import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/Si";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Breadcrumbs from "../components/Breadcrumbs";
import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";

const Contact = () => {
  const indicator = useRef();
  const alertMessage = useRef();
  const alertRef = useRef();
  const initialMessage = { fullName: '', email: '', subject: '', message: '' }
  const [message, setMessage] = useState(initialMessage)

  const [alert, setAlert] = useState({
    state: false,
    success: false
  })

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.registerEffect({
        name: "indicator",
        effect: (targets, config) => {
          return gsap.fromTo(
            targets,
            { width: '100%' },
            {
              duration: config.duration,
              width: 0,
            }
          );
        },
        defaults: { duration: 9 },
        extendTimeline: true
      });
      gsap.fromTo(
        ".fadeLeft",
        { opacity: 0, x: -100 },
        {
          scrollTrigger: { trigger: ".fadeLeft", start: "top bottom+=100" },
          duration: 1.5,
          opacity: 1,
          x: 0,
          ease: "back",
        }
      );
      gsap.fromTo(
        ".fadeRight",
        { opacity: 0, x: 100 },
        {
          scrollTrigger: { trigger: ".fadeRight", start: "top bottom-=100" },
          duration: 1.5,
          opacity: 1,
          x: 0,
          ease: "back",
        }
      );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem('messageSentFirstTime') != null) {
      sessionStorage.setItem('messageSentFirstTime', false);
    }
  }, []);

  const handleChange = (e) => {
    setMessage(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(prev => ({ ...prev, subject: '', message: '' }));
    let submitTime = {
      date: new Date().toLocaleDateString(),
      time: new Date().toTimeString()
    }, docRef = '';

    try {
      docRef = await addDoc(collection(db, 'messages'), {
        fullName: message.fullName,
        email: message.email,
        subject: message.subject,
        message: message.message,
        submitTime
      })

      if (docRef.id) {
        setAlert({ state: true, success: true });
        setTimeout(() => setAlert({ state: false, success: false }), 10000);

        if (sessionStorage.getItem('messageSentFirstTime') == 'false') {
          sessionStorage.setItem('messageSentFirstTime', true);
        }
        else {
          alertMessage.current.innerHTML = 'Message Sent!';
        }
      }
    } catch (error) {
      setAlert({ state: true, success: false });
      alertMessage.current.innerHTML = 'An error occurred while sending your message!';
      console.log(error);
    }
  };

  const handleReset = () => setMessage(initialMessage);

  useEffect(() => {
    if (alert.state) {
      const tl = gsap.timeline();
      tl.fromTo(
        alertRef.current,
        { opacity: 0, y: 150 },
        { duration: 1, opacity: 1, y: 0, ease: "back" }
      ).to(alertRef.current, { duration: 1, y: 100, ease: "back", delay: 7 }
      )

      const alertIndicator = gsap.timeline();
      alertIndicator.fromTo(
        indicator.current,
        { width: '100%' },
        {
          duration: 9,
          width: 0,
        }
      ).to(indicator.current, { width: '100%' });
    }
  }, [alert.state]);


  return (
    <div className="flex flex-col justify-center items-center font-pop max-w-[1280px] font-poppins p-1 xs:p-8 mx-auto">
      <div
        ref={alertRef}
        className={`${alert.state ? "flex" : "hidden"
          } max-w-[95%] xs:max-w-[80%] fixed bottom-2 xs:bottom-3 xs:left-3 rounded-lg ${alert.success ? 'bg-green-300' : 'bg-red-200'} p-3 py-2 xs:py-3 xs:px-6 xs:text-base text-sm text-center text-green-800 z-10 overflow-hidden`}
        role="alert">
        <span ref={alertMessage} className={`${alert.success ? 'text-green-600' : 'text-red-500'}`}>
          Thank you for your consideration;&nbsp;
          <b>I'll send you an email shortly.</b>
        </span>
        <div ref={indicator} className={`absolute left-0 bottom-0 h-1 ${alert.success ? 'bg-green-700' : 'bg-red-500'}`} />
      </div>
      <Breadcrumbs
        obj={{ title: "Contact" }}
        style="p-2 sm:pb-5"
      />
      <div className="fadeLeft w-full flex flex-col text-black mt-2">
        <h1 className="text-2xl font-semibold text-center">Get in touch</h1>

        <form
          onSubmit={handleSubmit}
          onReset={handleReset}
          className="w-full mt-4 flex flex-col items-center">
          <Feild
            title="Name"
            type="text"
            handleChange={handleChange}
            name="fullName"
            value={message.fullName}
            placeholder="Eg: John Doe"
          />
          <Feild
            title="Email"
            type="email"
            handleChange={handleChange}
            name="email"
            value={message.email}
            placeholder="Eg: johndoe@gmail.com"
          />
          <Feild
            title="Subject"
            type="text"
            handleChange={handleChange}
            name="subject"
            value={message.subject}
            placeholder="Eg: Query"
          />
          <label className="w-full max-w-md">
            <textarea
              onChange={handleChange}
              name="message"
              value={message.message}
              className="w-full h-48 border-2 border-gray-700 bg-transparent p-2 mt-1 focus:outline-none placeholder:text-black"
              placeholder="Message..."
              required></textarea>
          </label>
          <div className="w-full max-w-md flex justify-between">
            <button
              className="w-[49%] max-w-md bg-gray-700 text-white uppercase px-2 py-2.5 font-medium hover:bg-gray-800 active:bg-gray-900"
              type="reset">
              Reset
            </button>
            <button
              className="w-[49%] max-w-md bg-gray-700 text-white uppercase px-2 py-2.5 font-medium hover:bg-gray-800 active:bg-gray-900"
              type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
      <div className="fadeRight border-2 border-gray-800 bg-black/10 w-full flex flex-wrap justify-center text-center py-5 mt-4">
        <span>
          <a
            href="https://www.google.com/maps/@24.884498,67.047415,16z?hl=en"
            target="_blank"
            className="flex flex-col md:flex-row items-center justify-center m-4 cursor-pointer">
            <FaMapMarkerAlt className="text-xl" />
            <span className="ml-3 break-word">
              Near Durkash-e-Mashriq Girls Collage, Bihar colony, Jamshed road
              #2, Karachi
            </span>
          </a>
        </span>
        <span className="flex flex-wrap justify-center">
          <a
            href="mailto:mateensoomro737@gmail.com"
            className="flex flex-col sm:flex-row items-center justify-center m-4 cursor-pointer">
            <SiGmail className="text-2xl" />
            <span className="ml-3 break-word">mateensoomro737@gmail.com</span>
          </a>
          <a
            href="tel:+923363040789"
            className="flex flex-col sm:flex-row items-center justify-center m-4 cursor-pointer">
            <FaPhone className="text-xl" />
            <span className="ml-3 break-word">+92 336 3040789</span>
          </a>
        </span>
      </div>
    </div>
  );
};

const Feild = ({ title, type, handleChange, name, value, placeholder }) => {
  return (
    <label className="w-full max-w-md mt-3">
      <span className="text-lg font-semibold">{title}</span>
      <input
        type={type}
        onChange={handleChange}
        name={name}
        value={value}
        className="w-full h-12 bg-transparent border-2 border-gray-700 px-2 focus:outline-none placeholder:text-black"
        placeholder={placeholder}
        required
      />
    </label>
  );
};

export default Contact;
