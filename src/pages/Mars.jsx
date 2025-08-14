import React, { useState } from "react";
import Layout from "./Layout";
import { motion, AnimatePresence } from "motion/react";

const planet = {
    name: "Mars",
    overview: {
        content:
            'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".',
        source: "https://en.wikipedia.org/wiki/Mars",
    },
    structure: {
        content:
            "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",
        source: "https://en.wikipedia.org/wiki/Mars#Internal_structure",
    },
    surface: {
        content:
            "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.",
        source: "https://en.wikipedia.org/wiki/Mars#Surface_geology",
    },
    rotation: "1.03 Days",
    revolution: "1.88 Years",
    radius: "3,389.5 KM",
    temperature: "-28°c",
    images: {
        planet: "./assets/planet-mars.svg",
        internal: "./assets/planet-mars-internal.svg",
        surface: "./assets/geology-mars.png",
    },
};
const tabHeadings = ["overview", "structure", "surface"];

const Mars = () => {
    const [selectedTab, setSelectedTab] = useState(1);
    return (
        <Layout
            planet={planet}
            tabHeadings={tabHeadings}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            className="bg-clr-r"
            after="after:bg-clr-r"
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
                            className="w-[129px] h-[129px] sm:w-[213px] sm:h-[213px] lg:w-[336px] lg:h-[336px]"
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
                            className="w-[129px] h-[129px] sm:w-[213px] sm:h-[213px] lg:w-[336px] lg:h-[336px]"
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
                                className="w-[129px] h-[129px] sm:w-[213px] sm:h-[213px] lg:w-[336px] lg:h-[336px]"
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
                                className="absolute -top-18 sm:-top-5 lg:top-50 scale-20 sm:scale-30 lg:scale-50"
                            />
                        </>
                    )}
                </motion.div>
            </AnimatePresence>
        </Layout>
    );
};

export default Mars;
