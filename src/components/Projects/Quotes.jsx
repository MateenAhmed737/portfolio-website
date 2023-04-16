import React, { useState, useEffect } from "react";
import { FaTwitterSquare, FaTumblrSquare, FaQuoteLeft, FaRegCopy } from "react-icons/fa";
// import gsap from "gsap";

const Quotes = () => {
  const [bgColor, setBgColor] = useState("rgb(99 102 241)");
  const [quote, setQuote] = useState({
    quote:
      "Either write something worth reading or do something worth writing.",
    author: "Benjamin Franklin"
  });


  useEffect(() => {
    document.title = "Quotes Generator - Mateen Ahmed";
    const key = (e) => e.code == "Space" ? (e.preventDefault(), newQuote()) : null;
    document.addEventListener("keydown", key);

    return () => {
      document.removeEventListener("keydown", key);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const elem = document.getElementsByClassName("loader")[0];
      elem.style.opcaity = 0;
      elem.style.display = "none";
    }, 300);
    setBgColor(`rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`);
  }, [quote]);

  const randomNum = () => Math.floor(Math.random() * 200)

  const newQuote = async () => {
    let res = await fetch("https://dummyjson.com/quotes/random"),
      data = await res.json();

    setQuote(data);
  };

  const copyQuote = () => {
    navigator.clipboard.writeText(`"${quote.quote}" - ${quote.author}`);
  };

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={`w-full h-[100vh] flex justify-center items-center transition-all duration-300 mx-auto font-pop relative`}>
      <div
        className="loader absolute w-full bg-gray-50 z-20 top-0 transition-all duration-700"
        style={{ height: "100vh" }}></div>

      <div
        style={{ color: bgColor }}
        className="w-2/3 md:w-3/5 lg:w-1/2 xl:w-2/5 2xl:w-2/5 min-h-52 p-6 px-8 border bg-gray-50 rounded-xl shadow-lg animate-fadeUp">
        <div className="flex flex-col font-medium text-2xl break-words text-center">
          <div className="flex flex-col">
            <span className='text-2xl block text-left mb-1'><FaQuoteLeft /></span>
            <span className="block"> {quote.quote} </span>
            <span className='text-2xl block text-right mt-1 rotate-180'><FaQuoteLeft /></span>
          </div>
          <span className="text-center font-light text-lg">
            - {quote.author}
          </span>
        </div>
        <div className="flex flex-col xs:flex-row w-full justify-between items-center mt-3">
          <div className='flex text-4xl'>
            <a href={`"https://twitter.com/intent/tweet?hashtags=quotes&text=\"${quote.quote}"${quote.author}`} target="_blank" title='Tweet this quote!' className='self-center cursor-pointer active:scale-90'><FaTwitterSquare /></a>
            <a href={"https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,&caption=" + quote.author + '&content=' + quote.quote + "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"} target="_blank" title='Post this quote on tumblr!' className='self-center cursor-pointer active:scale-90'><FaTumblrSquare /></a>
            <button title='Click to Copy' className='active:scale-90 text-xl ml-0.5 text-white self-center p-1.5 rounded-[4px]' style={{ backgroundColor: bgColor }} onClick={() => copyQuote()}><FaRegCopy /></button>
          </div>
          <div className="hidden sm:block ml-4">{bgColor}</div>
          <div className="flex flex-row-reverse justify-center items-center mt-2">
            <button
              style={{ backgroundColor: bgColor }}
              className="active:scale-90 py-1.5 px-3 font-medium transition-all duration-300 bg-red-500 text-white rounded-[5px]"
              onClick={newQuote}>
              New Quote
            </button>
            <p className="hidden lg:block py-1.5 px-3">{"(Spacebar)"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
