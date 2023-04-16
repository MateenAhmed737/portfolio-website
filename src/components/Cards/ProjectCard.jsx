import { FaArrowRight } from "react-icons/fa"
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ image, title, skills, path }) => {
    const navigate = useNavigate();

    return (
        <div
            className="group/card card w-full xs:w-[45%] max-w-[350px] m-1 lg:m-2 my-3">
            <div className="w-full border-[1.5px] border-gray-300 rounded-lg overflow-hidden">
                <div
                    className={`flex items-center justify-center text-gray-500 h-40 border-b overflow-hidden`}>
                    <img
                        src={image}
                        alt={title + " image"}
                        className={`blur-sm transition-all duration-300 h-full w-auto saturate-0 group-hover/card:saturate-100 group-hover/card:blur-0 ${title == "Quote Generator" ? "scale-105" : ""
                            }`}
                    />
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
                        className="group/button flex justify-center items-center w-full mt-4 mb-2 px-2 py-2 font-semibold tracking-wide rounded transition-all duration-300 border border-primary hover:bg-primary"
                        onClick={() => path.includes('https') ? window.open(path) : navigate(path)}>
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