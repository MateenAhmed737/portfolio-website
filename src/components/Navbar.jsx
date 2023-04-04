import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import data from "../constants/data";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const Navbar = () => {

  const navbarRef = useRef();
  const location = useLocation();
  const [pagesVisited, setPagesVisited] = useState([]);
  const [toggledOn, setToggledOn] = useState(false);

  const pushPagesVisited = async (userId) => {
    await updateDoc(doc(db, 'usersActivity', userId), {
      pagesVisited: [...pagesVisited, window.location.pathname]
    })
  }

  const fetchPageVisites = async (userId) => {
    let data = await getDoc(doc(db, 'usersActivity', userId));
    setPagesVisited([...data.data().pagesVisited, window.location.pathname]);
  }

  useEffect(() => {
    let userId = localStorage.getItem('user');

    setToggledOn(false);
    if (pagesVisited.length == 0 && userId) {
      fetchPageVisites(userId);
    } else {
      pushPagesVisited(userId);
      setPagesVisited(prev => [...prev, window.location.pathname]);
    }
  }, [location]);

  useEffect(() => {
    const func = () => {
      if (window?.scrollY > 60) {
        navbarRef?.current?.classList?.remove("sticky");
        navbarRef?.current?.classList?.add("fixed");
        navbarRef?.current?.classList?.add("shadow-lg");
      } else {
        navbarRef?.current?.classList?.remove("fixed");
        navbarRef?.current?.classList?.add("sticky");
        navbarRef?.current?.classList?.remove("shadow-lg");
      }
    };

    window.addEventListener("scroll", func);

    return () => {
      window.addEventListener("scroll", func);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="w-screen sticky top-0 font-pop bg-white/30 border-b backdrop-saturate-[180%] backdrop-blur-[10px] transition-all duration-700 select-none"
      style={{ zIndex: 10 }}>
      <div
        className={`flex justify-between items-center justify-self-center max-w-[1280px] min-h-[50px] px-4 py-3 sm:py-0 sm:px-8 m-auto bg-transparent`}>
        <Link to="/">
          <h2 className="text-2xl font-semibold tracking-[0.5px]">
            <span
              className={`text-white font-medium bg-primary p-1 px-2.5 rounded-full`}>
              M
            </span>{" "}
            Mateen
          </h2>
        </Link>

        <div
          className={`flex sm:flex-row items-center w-full xs:w-[70%] md:w-[65%] lg:w-[50%] h-[100vh] sm:h-auto bg-white sm:bg-transparent border-l sm:border-l-0 sm:static absolute top-0 right-0 transition-all duration-500 ease-out ${toggledOn
            ? "flex-col translate-x-0"
            : "translate-x-full sm:translate-x-0"
            }`}>
          <CgClose
            className={`${toggledOn ? "block sm:hidden" : "hidden sm:hidden"
              } absolute top-3 right-4 text-4xl text-primary active:text-indigo-700 cursor-pointer `}
            onClick={() => setToggledOn(false)}
          />
          <ul
            className={`flex flex-col sm:flex-row justify-between tracking-[1px] font-medium w-full transition-all duration-300 mt-[25%] sm:mt-0`}>
            {data.navLinks.map(({ title, id, path }) => (
              <li key={id}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    (isActive ||
                      (location.pathname.includes("/project/") &&
                        id == "portfolio")
                      ? `sm:after:w-full bg-gray-100 text-primary `
                      : " sm:after:w-0 ") +
                    `relative flex py-4 px-2 justify-center sm:bg-transparent hover:bg-gray-50 sm:hover:bg-transparent border-b sm:border-b-0 sm:after:block sm:after:h-[3px] sm:after:absolute sm:after:bottom-0 sm:after:transition-all sm:after:duration-300 sm:after:bg-primary hover:sm:after:w-full hover:text-primary focus:outline-none focus:sm:after:w-full focus:text-primary`
                  }>
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <FaBars
          className="sm:hidden text-2xl text-primary cursor-pointer"
          onClick={() => setToggledOn((prev) => !prev)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
