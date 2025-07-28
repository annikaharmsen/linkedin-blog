import axios from "axios";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Update() {
    const location = useLocation();
    const navigate = useNavigate();

    const [title, setTitle] = useState(location.state.title);
    const [author, setAuthor] = useState(location.state.author);
    const [body, setBody] = useState(location.state.body);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.put(
                import.meta.env.VITE_API_URL + "/posts/" + location.state.id,
                {
                    title,
                    author,
                    body,
                }
            );
            setTitle("");
            setAuthor("");
            setBody("");
        } catch (error) {
            console.error("Error creating post:", error);
        }

        navigate("/");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="p-5 my-5 bg-white rounded-2xl shadow-md text-left">
                <h1 className="text-2xl pb-4 text-center mb-4">
                    Update{" "}
                    <span className="italic text-gray-600">
                        {location.state.title}
                    </span>
                </h1>

                <div className="w-full flex mb-4">
                    <label htmlFor="title" className="my-2 mr-4">
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="grow bg-gray-100 px-4 rounded-lg mr-4"
                    />

                    <label htmlFor="author" className="my-2 mr-4">
                        Author
                    </label>
                    <input
                        type="text"
                        name="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="grow bg-gray-100 px-4 rounded-lg mr-4"
                    />
                </div>

                <label htmlFor="body" className="my-2 mr-4 block">
                    Body
                </label>
                <textarea
                    name="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="block w-full h-36 bg-gray-100 px-4 py-2 rounded-lg mr-4"
                />
            </div>

            <div className="flex space-x-5 justify-end">
                <Link to="/" className="button red">
                    Cancel
                </Link>
                <button type="submit" className="button">
                    Save Changes
                </button>
            </div>
        </form>
    );
}
