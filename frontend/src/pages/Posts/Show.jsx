import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Show() {
    const location = useLocation();

    return (
        <>
            <div className="relative p-5 my-5 bg-white rounded-2xl shadow-md text-left">
                <Link
                    to="/"
                    className="absolute h-6 w-6 rounded-4xl -top-2 -right-2 flex justify-center items-center text-xs bg-red-800 text-white shadow-md hover:bg-red-900 hover:shadow-sm"
                >
                    X
                </Link>
                <h1 className="text-2xl text-center">{location.state.title}</h1>
                <p className="text-center text-gray-500 mb-4">
                    By {location.state.author}
                </p>
                <p className="font-serif indent-12">{location.state.body}</p>
            </div>
            <div className="flex space-x-5 justify-center">
                <Link to="/" className="button w-1/2">
                    Go Back
                </Link>
            </div>
        </>
    );
}
