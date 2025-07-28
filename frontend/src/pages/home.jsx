import { Index as Posts } from "./Posts";

export default function Home() {
    return (
        <div>
            <h1 className="text-4xl">Welcome to my Blog</h1>

            <Posts />
        </div>
    );
}
