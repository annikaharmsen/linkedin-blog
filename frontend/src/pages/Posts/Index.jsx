import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function Index() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get(import.meta.env.VITE_API_URL + "/posts")
            .then((response) => {
                setPosts(response.data.data);
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
            });
    }, []);
    return (
        <>
            <div className="flex">
                <Link
                    to="/posts/create"
                    className="text-sm bg-white rounded-lg py-2 px-4 shadow-md text-left hover:shadow-sm hover:bg-gray-100"
                >
                    New Post
                </Link>
            </div>
            {posts &&
                posts.map((post) => (
                    <div
                        key={post.id}
                        className="p-5 my-5 bg-white rounded-2xl shadow-md text-left"
                    >
                        <h2 className="font-bold">{post.title}</h2>
                        <p className="mb-5 text-md text-gray-500">
                            {post.author}
                        </p>
                        <p>{post.body}</p>
                    </div>
                ))}
        </>
    );
}
