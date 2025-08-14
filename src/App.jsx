import { AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Earth from "./pages/Earth";
import Jupiter from "./pages/Jupiter";
import Marcury from "./pages/Marcury";
import Mars from "./pages/Mars";
import Neptune from "./pages/Neptune";
import Saturn from "./pages/Saturn";
import Uranus from "./pages/Uranus";
import Venus from "./pages/Venus";
import bgStars from "/assets/background-stars.svg";
import { Routes, Route, useLocation } from "react-router-dom";

const App = () => {
    const location = useLocation();
    return (
        <div>
            <div className="relative z-50">
                <div className="absolute bg-nb inset-0 -z-10">
                    <img
                        src={bgStars}
                        alt="background with many stars"
                        className="w-full h-full object-cover"
                    />
                </div>
                <Navbar />
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Earth />} />
                        <Route path="mercury" element={<Marcury />} />
                        <Route path="venus" element={<Venus />} />
                        <Route path="mars" element={<Mars />} />
                        <Route path="jupiter" element={<Jupiter />} />
                        <Route path="saturn" element={<Saturn />} />
                        <Route path="uranus" element={<Uranus />} />
                        <Route path="neptune" element={<Neptune />} />
                    </Routes>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default App;
