import { useState } from "react";
import arrow from "/assets/icon-chevron.svg";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

const planetNames = [
    { color: "#def4fc", name: "mercury" },
    { color: "#f7cc7f", name: "venus" },
    { color: "#545bfe", name: "earth" },
    { color: "#ff6a45", name: "mars" },
    { color: "#ecad7a", name: "jupiter" },
    { color: "#fccb6b", name: "saturn" },
    { color: "#65f0d5", name: "uranus" },
    { color: "#497efa", name: "neptune" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="border-b border-w/20">
            <div className="header py-6 sm:pt-10 sm:pb-7 lg:py-7 flex sm:flex-col lg:flex-row sm:gap-11 items-center justify-between sm:justify-center lg:justify-between">
                <NavLink to="/">
                    <p className="logo uppercase relative z-50">the planets</p>
                </NavLink>
                <div
                    onClick={() => setIsOpen((curr) => !curr)}
                    className="sm:hidden relative z-50"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="17"
                    >
                        <g fill="#FFF" fill-rule="evenodd">
                            <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
                        </g>
                    </svg>
                </div>
                <div className="hidden sm:flex gap-7.75">
                    {planetNames.map((planet) => (
                        <NavLink
                            to={planet.name === "earth" ? "/" : planet.name}
                            key={planet.name}
                            style={{ "--before-color": planet.color }}
                            className="nav relative uppercase font-ls font-bold text-g-1 text-[0.5625rem] tracking-[1.93px] sm:text-[0.85rem] sm:tracking-[1px] sm:leading-[25px] lg:text-[0.75rem] lg:tracking-[2.57px] sm:before:absolute sm:before:-bottom-7 lg:before:-top-7.5 sm:before:left-0 sm:before:h-0.75 lg:before:h-1.25 sm:before:w-0 sm:before:transition-all sm:before:duration-500"
                        >
                            {planet.name}
                        </NavLink>
                    ))}
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="fixed top-[71px] left-0 right-0 bottom-0 sm:hidden overflow-clip bg-nb z-50"
                        >
                            <div className="grid px-6 pt-5.5 ">
                                {planetNames.map((planet, index) => (
                                    <NavLink
                                        to={
                                            planet.name === "earth"
                                                ? "/"
                                                : planet.name
                                        }
                                        key={index}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center justify-between py-5 not-first:border-t-1 border-w/20"
                                    >
                                        <div className="flex items-center gap-7">
                                            <div
                                                style={{
                                                    backgroundColor:
                                                        planet.color,
                                                }}
                                                className={`size-5 rounded-full`}
                                            ></div>
                                            <h2 className="uppercase font-ls text-w text-[16px] leading-[25px] tracking-[3.36px]">
                                                {planet.name}
                                            </h2>
                                        </div>
                                        <div className="px-2">
                                            <img src={arrow} alt="" />
                                        </div>
                                    </NavLink>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Navbar;
