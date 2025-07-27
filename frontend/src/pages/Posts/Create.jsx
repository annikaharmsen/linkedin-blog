import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Create() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [body, setBody] = useState("");

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(import.meta.env.VITE_API_URL + "/posts", {
                title,
                author,
                body,
            });
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
                <h1 className="font-bold pb-4">Create New Post</h1>

                <div className="w-full flex">
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
                <Link
                    to="/"
                    className="text-sm bg-white rounded-lg py-2 px-4 shadow-md text-left hover:shadow-sm hover:bg-gray-100"
                >
                    Cancel
                </Link>
                <button
                    type="submit"
                    className="text-sm bg-white rounded-lg py-2 px-4 shadow-md text-left hover:shadow-sm hover:bg-gray-100"
                >
                    Create Post
                </button>
            </div>
        </form>
    );
}
