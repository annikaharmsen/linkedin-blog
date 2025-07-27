import "./App.css";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Create from "./pages/Posts/Create";

function App() {
    return (
        <div className="w-3/5 mx-auto my-10">
            <Navigation />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="posts/create" element={<Create />} />
            </Routes>
        </div>
    );
}

export default App;
