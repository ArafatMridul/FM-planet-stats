import React, { useState } from "react";
import Layout from "./Layout";
import { motion, AnimatePresence } from "motion/react";

const planet = {
    name: "Venus",
    overview: {
        content:
            "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
        source: "https://en.wikipedia.org/wiki/Venus",
    },
    structure: {
        content:
            "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
        source: "https://en.wikipedia.org/wiki/Venus#Internal_structure",
    },
    surface: {
        content:
            "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
        source: "https://en.wikipedia.org/wiki/Venus#Surface_geology",
    },
    rotation: "243 Days",
    revolution: "224.7 Days",
    radius: "6,051.8 KM",
    temperature: "471°c",
    images: {
        planet: "./assets/planet-venus.svg",
        internal: "./assets/planet-venus-internal.svg",
        surface: "./assets/geology-venus.png",
    },
};

const tabHeadings = ["overview", "structure", "surface"];

const Venus = () => {
    const [selectedTab, setSelectedTab] = useState(1);
    return (
        <Layout
            planet={planet}
            tabHeadings={tabHeadings}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            className="bg-clr-v"
            after="after:bg-clr-v"
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
                            className="w-[154px] h-[154px] sm:w-[253px] sm:h-[253px] lg:w-[400px] lg:h-[400px]"
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
                            className="w-[154px] h-[154px] sm:w-[253px] sm:h-[253px] lg:w-[400px] lg:h-[400px]"
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
                                className="w-[154px] h-[154px] sm:w-[253px] sm:h-[253px] lg:w-[400px] lg:h-[400px]"
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

export default Venus;
