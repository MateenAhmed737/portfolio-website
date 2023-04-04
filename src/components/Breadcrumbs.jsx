import { Link } from "react-router-dom";

const Breadcrumbs = props => {
    return (
        <ol className={`list-reset flex items-center w-full text-neutral-500 ${props.style}`}>
            <li>
                <Link to='/' className="text-primary transition duration-150 ease-in-out">Home</Link>
            </li>
            <li>
                <span className="inline mx-2">{'/'}</span>
            </li>
            <li>
                <span className="text-neutral-400">{props.obj.title}</span>
            </li>
        </ol>
    );
};

export default Breadcrumbs;
