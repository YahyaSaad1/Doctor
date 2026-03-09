import { Link } from "react-router";

export default function Btn({title, to}){
    return(
        <Link to={to} className="text-center whitespace-nowrap w-fit bg-btn-color hover:bg-hover-btn-color duration-200 rounded-lg py-2 px-4 text-white">
            {title}
        </Link>
    )
}