import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function Index() {
    const [posts, setPosts] = useState([]);

    const deletePost = (postId) => {
        axios.delete(import.meta.env.VITE_API_URL + "/posts/" + postId);
    };

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
                <Link to="/posts/create" className="button">
                    New Post
                </Link>
            </div>
            {posts &&
                posts.map((post) => (
                    <>
                        <div
                            key={post.id}
                            className="p-5 my-5 bg-white rounded-2xl shadow-md text-left"
                        >
                            <h2 className="text-2xl">{post.title}</h2>
                            <p className="text-md text-gray-500 mb-4">
                                {post.author}
                            </p>
                            <p className="font-serif">{post.body}</p>
                        </div>
                        <div className="flex space-x-4 justify-end">
                            <Link
                                to="/posts/update"
                                state={post}
                                className="button bg-white"
                            >
                                Edit
                            </Link>
                            <button
                                onClick={() => deletePost(post.id)}
                                className="button red"
                            >
                                Delete
                            </button>
                        </div>
                    </>
                ))}
        </>
    );
}
