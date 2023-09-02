import { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { BsChevronLeft, BsChevronRight } from "react-icons/Bs";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ images, title, skills, path, link }) => {
    const navigate = useNavigate();
    const [currentImage, setCurrentImage] = useState(0);

    const handleArrowClick = (e) => {
        if (e.target.id == 'next') {
            setCurrentImage((prev) => prev == images.length - 1 ? 0 : prev + 1)
        } else {
            setCurrentImage((prev) => prev == 0 ? images.length - 1 : prev - 1)
        }
    }

    return (
        <div
            className="group/card card w-full xs:w-[45%] max-w-[350px] m-1 lg:m-2 my-3">
            <div className="w-full border-[1.5px] border-gray-300 rounded-lg overflow-hidden">
                <div className={`relative flex items-center justify-center text-gray-500 h-40 border-b overflow-hidden`}>
                    <img
                        src={images[currentImage]}
                        alt={title + " image" + (currentImage + 1)}
                        className={`blur-sm transition-all duration-300 h-full w-auto saturate-0 group-hover/card:saturate-100 group-hover/card:blur-0 ${title == "Quote Generator" ? "scale-105" : ""}`}
                    />

                    {/* Next && Prev Buttons */}
                    {images.length > 1 && (
                        <>
                            <BsChevronLeft id='prev' onClick={handleArrowClick} className='absolute top-[45%] left-2 text-3xl font-semibold p-2 rounded-full text-white transition-all duration-300 -translate-x-10 bg-black/40 hover:bg-black/70 group-hover/card:translate-x-0 cursor-pointer' />
                            <BsChevronRight id='next' onClick={handleArrowClick} className='absolute top-[45%] right-2 text-3xl font-semibold p-2 rounded-full text-white transition-all duration-300 translate-x-10 bg-black/40 hover:bg-black/70 group-hover/card:translate-x-0 cursor-pointer' />
                        </>
                    )}

                    {images.length > 1 && (
                        <div className="absolute flex items-center p-1 px-1.5 bottom-0 -translate-x-[50%] left-1/2 bg-white rounded-t-md z-[2] transition-all duration-300 translate-y-10 group-hover/card:translate-y-0">
                            {images.map((_, indx) => (
                                <div key={'indicator' + indx} onClick={() => setCurrentImage(indx)} className={`h-2 m-[1.5px] rounded cursor-pointer transition-all duration-300 hover:bg-black/70 ${indx == currentImage ? 'w-5 bg-black/70' : 'w-2 bg-black/50'}`} />
                            ))}
                        </div>
                    )}
                </div>

                <div className="p-3 px-4 bg-gray-50">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <div className="mt-2">
                        <span className="font-medium">Skills:</span> <br />
                        <ul>
                            {skills.map((e, idx) => (
                                <li key={idx}>- {e}</li>
                            ))}
                        </ul>
                    </div>
                    <button
                        className={`group/button ${link || path ? 'flex' : 'hidden'} justify-center items-center w-full mt-4 mb-2 px-2 py-2 font-semibold tracking-wide rounded transition-all duration-300 border border-primary hover:bg-primary`}
                        onClick={() => link ? window.open(link) : navigate(path)}>
                        <span className="transition-all duration-300 group-hover/button:-translate-x-1 text-primary group-hover/button:text-white">
                            View
                        </span>
                        <FaArrowRight className="opacity-0 ml-1 text-white transition-all duration-500 translate-y-5 group-hover/button:opacity-100 group-hover/button:translate-y-0" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard