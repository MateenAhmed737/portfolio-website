import React, { useState, useEffect, useLayoutEffect } from "react";
import { BiVolumeLow, BiVolumeFull } from 'react-icons/bi';
import data from "../../constants/data";
// import gsap from 'gsap'

const Pads = ({ links, clickHandler }) => {
    return (
        <div className="flex items-center justify-center flex-wrap px-0 sm:w-3/5 sm:px-5 lg:px-10">
            {links.map((e, i) => (
                <button
                    id={i}
                    onClick={() => clickHandler(e[1], e[2], i)}
                    key={i}
                    className={`drum-pad w-1/4 h-16 bg-gray-50 border border-gray-200 rounded-md m-1 transition-all duration-200 hover:bg-gray-100 hover:border-gray-300`}
                >
                    {e[0]}
                </button>
            ))}
        </div>
    );
};

function DrumMachine() {
    const links = data.drumPads;
    const [volume, setVolume] = useState(100);
    const [display, setDisplay] = useState("Volume: " + volume);

    // useLayoutEffect(() => {
    //     gsap.fromTo('#drum-machine', { opacity: 0, y: 100 }, { duration: 1, opacity: 1, y: 0 })
    // }, [])

    useEffect(() => {
        const func = e => {
            links.map((elem, i) =>
                "Key" + elem[0] == e.code ? (handleClick(elem[1], elem[2], i)) : null
            );
        };
        document.addEventListener("keydown", func);
        return () => {
            document.removeEventListener("keydown", func);
        };
    }, []);

    useEffect(() => {
        setDisplay("Volume: " + volume);
    }, [volume]);

    const handleClick = (...args) => {
        const [link, name, id] = args;

        let elem = document.getElementById(id);
        elem.classList.add('btn_Anime');
        setTimeout(() => {
            elem.classList.remove('btn_Anime');
        }, 200)
        setDisplay(name);

        let sound = new Audio(link);
        sound.volume = (volume / 100);
        sound.play();
    };

    return (
        <div
            id="drum-machine"
            className="flex items-center justify-center text-center animate-fadeUp"
            style={{ height: "100vh", width: "100vw" }}
        >
            <div className="flex flex-col-reverse sm:flex-row w-5/6 md:w-2/3 xl:w-1/2 font-jet font-medium text-xl bg-gray-50 border-2 p-5 rounded-xl">
                <Pads links={links} clickHandler={handleClick} />
                <div className="flex flex-col items-center justify-center sm:w-1/2 p-5">
                    <p id="display" className="px-4 py-2 bg-gray-200 w-44 h-10 mb-3">{display}</p>
                    <div className="flex items-center w-4/5 text-2xl select-none">
                        <BiVolumeLow title="Click to Volume Down" className='cursor-pointer' onClick={() => setVolume(prev => prev <= 0 || prev < 10 ? 0 : prev - 10)} />
                        <input type='range' value={volume} onChange={e => setVolume(Number(e.target.value))} className='max-w-xs w-4/5 m-1 z-0 cursor-pointer' />
                        <BiVolumeFull title="Click to Volume Up" className='cursor-pointer' onClick={() => setVolume(prev => prev >= 100 || prev > 90 ? 100 : prev + 10)} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DrumMachine;