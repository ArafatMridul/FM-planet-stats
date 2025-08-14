import React, { useState } from "react";
import Layout from "./Layout";
import { motion, AnimatePresence } from "motion/react";

const planet = {
    name: "Earth",
    overview: {
        content:
            "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
        source: "https://en.wikipedia.org/wiki/Earth",
    },
    structure: {
        content:
            "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
        source: "https://en.wikipedia.org/wiki/Earth#Internal_structure",
    },
    surface: {
        content:
            "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",
        source: "https://en.wikipedia.org/wiki/Earth#Surface",
    },
    rotation: "0.99 Days",
    revolution: "365.26 Days",
    radius: "6,371 KM",
    temperature: "16°c",
    images: {
        planet: "./assets/planet-earth.svg",
        internal: "./assets/planet-earth-internal.svg",
        surface: "./assets/geology-earth.png",
    },
};
const tabHeadings = ["overview", "structure", "surface"];

const Earth = () => {
    const [selectedTab, setSelectedTab] = useState(1);
    return (
        <Layout
            planet={planet}
            tabHeadings={tabHeadings}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            className="bg-clr-e"
            after="after:bg-clr-e"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={selectedTab} // AnimatePresence detects changes here
                    className="relative flex items-center justify-center mt-24 sm:mt-36 lg:mt-24 lg:pl-18"
                >
                    {selectedTab === 1 ? (
                        // Planet only
                        <motion.img
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                            }}
                            src={planet.images.planet}
                            alt=""
                            className="w-[173px] h-[173px] sm:w-[285px] sm:h-[285px] lg:w-[450px] lg:h-[450px]"
                        />
                    ) : selectedTab === 2 ? (
                        // Internal only
                        <motion.img
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                            }}
                            src={planet.images.internal}
                            alt=""
                            className="w-[173px] h-[173px] sm:w-[285px] sm:h-[285px] lg:w-[450px] lg:h-[450px]"
                        />
                    ) : (
                        // Planet + Surface overlay
                        <>
                            <motion.img
                                key={`planet-${selectedTab}`}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeInOut",
                                }}
                                src={planet.images.planet}
                                alt=""
                                className="w-[173px] h-[173px] sm:w-[285px] sm:h-[285px] lg:w-[450px] lg:h-[450px]"
                            />
                            <motion.img
                                key={`surface-${selectedTab}`}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeInOut",
                                    delay: 0.2, // surface comes in after planet
                                }}
                                src={planet.images.surface}
                                alt=""
                                className="absolute -top-16 sm:-top-5 lg:top-50 scale-20 sm:scale-30 lg:scale-50"
                            />
                        </>
                    )}
                </motion.div>
            </AnimatePresence>
        </Layout>
    );
};

export default Earth;
