import { useState, useEffect } from "react";
import axios from "axios";

export function Index() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
            });
    }, []);
    return (
        <>
            {posts &&
                posts.map((post) => (
                    <div
                        key={post.id}
                        className="p-5 my-5 bg-white rounded-2xl shadow-md text-left"
                    >
                        <h2 className="mb-5 font-bold">{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
        </>
    );
}
