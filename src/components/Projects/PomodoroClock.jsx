import React, { useEffect, useState, useLayoutEffect } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import beep from '../../assets/audios/beep.mp3';
import gsap from 'gsap'

const PomodoroClock = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [mins, setMins] = useState(sessionLength);
  const [secs, setSecs] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timerLabel, setTimerLabel] = useState("Session");
  const style = {
    btnStyle: 'px-3 py-1.5 text-red-500 hover:text-white border border-red-500 rounded transition-all duration-300 hover:bg-red-500 active:bg-red-700 m-1',
    iconStyle: 'cursor-pointer active:text-gray-600',
  };
  const audio = document.getElementById('beep');

  useLayoutEffect(() => {
    document.title = "Pomodoro Clock - Mateen Ahmed";
    gsap.fromTo('.first, .second', { opacity: 0, y: 100 }, { duration: 1, opacity: 1, y: 0, stagger: 0.1 })
  }, []);

  useEffect(() => {
    const counter = isRunning && setInterval(() => {
      setSecs(prev => {
        if (prev == 0) {
          setMins(prev => prev - 1);
          return 59;
        } else {
          return prev - 1;
        }
      });
    }, 1000);

    return () => {
      clearInterval(counter);
    };
  }, [isRunning]);

  useEffect(() => {
    if (mins == 0 && secs == 0) {
      audio.play();
      setTimerLabel(timerLabel == "Break" ? "Session" : "Break");
    }
  }, [secs])

  useEffect(() => {
    if (timerLabel == "Session") {
      setMins(sessionLength);
      setSecs(0)
    }
  }, [sessionLength, timerLabel]);

  useEffect(() => {
    if (timerLabel == "Break") {
      setMins(breakLength);
      setSecs(0)
    }
  }, [breakLength, timerLabel]);

  const handle_start = () => {
    setIsRunning(true);
  };

  const handle_stop = () => {
    audio.pause();
    audio.currentTime = 0;
    setIsRunning(false);
  };

  const handleReset = () => {
    audio.pause();
    audio.currentTime = 0;
    setMins(25);
    setSecs(0);
    setTimerLabel("Session");
    setIsRunning(false);
    setBreakLength(5);
    setSessionLength(25);
  };

  return (
    <section className="flex items-center justify-around flex-wrap md:h-[100vh] max-w-[1280px] font-jet p-2 py-8 mx-auto">
      <div className="first select-none flex items-center flex-col text-center my-3">
        <p className="text-xl xs:text-4xl relative top-[23.3px] left-5 xs:left-7 -rotate-45">
          🍅
        </p>
        {/* <h1 className='text-[25px] xs:text-[35px] font-semibold mb-1'>P<span className='text-[20px] p-[1px] relative bottom-1'>🍅</span>m<span className='text-[20px] p-[1px] relative bottom-1'>🍅</span>d<span className='text-[20px] p-[1px] relative bottom-1'>🍅</span>r<span className='text-[20px] p-[1px] relative bottom-1'>🍅</span> Cl<span className='text-[20px] p-[1px] relative bottom-1'>🍅</span>ck</h1> */}
        <h1 className="text-[25px] xs:text-[35px] font-semibold mb-1">
          Pomodoro Clock
        </h1>

        {/* Increment & Decrement buttons */}
        <div className="flex flex-wrap self-center justify-center text-xl xs:text-2xl">
          <div
            id="break-label"
            className="max-w-[175px] inline-block text-center mx-3 my-1">
            <h2 className="text-base xs:text-[20px]">Break Length</h2>
            <div className="flex items-center justify-evenly mt-0.5 xs:mt-2">
              <FaAngleDown
                id="break-decrement"
                className={style.iconStyle}
                onClick={() =>
                  setBreakLength((prev) =>
                    isRunning ? prev : prev == 1 ? 1 : prev - 1
                  )
                }
              />
              <div id="break-length">{breakLength}</div>
              <FaAngleUp
                id="break-increment"
                className={style.iconStyle}
                onClick={() =>
                  setBreakLength((prev) =>
                    isRunning ? prev : prev == 60 ? prev : prev + 1
                  )
                }
              />
            </div>
          </div>

          <div
            id="session-label"
            className="max-w-[190px] inline-block text-center mx-3 my-1">
            <h2 className="text-base xs:text-[20px]">Session Length</h2>
            <div className="flex items-center justify-evenly mt-0.5 xs:mt-2">
              <FaAngleDown
                id="session-decrement"
                className={style.iconStyle}
                onClick={() =>
                  setSessionLength((prev) =>
                    isRunning ? prev : prev == 1 ? 1 : prev - 1
                  )
                }
              />
              <div id="session-length">{sessionLength}</div>
              <FaAngleUp
                id="session-increment"
                className={style.iconStyle}
                onClick={() =>
                  setSessionLength((prev) =>
                    isRunning ? prev : prev == 60 ? prev : prev + 1
                  )
                }
              />
            </div>
          </div>
        </div>

        {/* Display */}
        <div
          className={`w-full max-w-[250px] p-3 mt-2 text-center text-[20px] ${mins < 1
            ? "text-red-600 bg-red-100 border border-red-300"
            : "text-black bg-gray-100 border border-gray-300"
            }`}>
          <h2 id="timer-label">{timerLabel}</h2>
          <p id="time-left" className="text-4xl font-semibold">
            {
              `${mins < 10 ? "0" : ''}${mins}:${secs < 10 ? "0" : ''}${secs}`
            }
          </p>
          <audio id="beep" src={beep}></audio>
        </div>

        {/* Start, Stop & Reset buttons */}
        <div className="flex flex-wrap mt-2">
          <button
            id="start_btn"
            className={style.btnStyle}
            onClick={handle_start}>
            Start
          </button>
          <button
            id="stop_btn"
            className={style.btnStyle}
            onClick={handle_stop}>
            Stop
          </button>
          <button id="reset" className={style.btnStyle} onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>

      <div className="second relative max-w-[410px] text-center text-sm xs:text-base sm:text-lg text-red-700 my-3 mt-10 p-4 pt-5 bg-red-100 rounded">
        <h2 className="absolute -top-5 right-0 scale-90 font-medium text-white w-full bg-red-600 p-1.5 px-3 rounded-full">
          What Is Pomodoro Clock?
        </h2>
        <p>
          Pomodoro Clock is derived from the Pomodoro Technique (Pomodoro is the
          Italian word for tomato 🍅). This popular time management technique
          requires you to alternate pomodoros (focused work sessions) with
          frequent short breaks to promote sustained concentration and avoid
          mental fatigue.
        </p>
      </div>
    </section>
  );
}

export default PomodoroClock