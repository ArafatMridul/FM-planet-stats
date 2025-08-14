import React, { useState } from "react";
import Layout from "./Layout";
import { motion, AnimatePresence } from "motion/react";

const planet = {
    name: "Jupiter",
    overview: {
        content:
            "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
        source: "https://en.wikipedia.org/wiki/Jupiter",
    },
    structure: {
        content:
            "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
        source: "https://en.wikipedia.org/wiki/Jupiter#Internal_structure",
    },
    surface: {
        content:
            "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
        source: "https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices",
    },
    rotation: "9.93 Hours",
    revolution: "11.86 Years",
    radius: "69,911 KM",
    temperature: "-108°c",
    images: {
        planet: "./assets/planet-jupiter.svg",
        internal: "./assets/planet-jupiter-internal.svg",
        surface: "./assets/geology-jupiter.png",
    },
};
const tabHeadings = ["overview", "structure", "surface"];

const Jupiter = () => {
    const [selectedTab, setSelectedTab] = useState(1);
    return (
        <Layout
            planet={planet}
            tabHeadings={tabHeadings}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            className="bg-clr-j"
            after="after:bg-clr-j"
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
                            className="w-[224px] h-[224px] sm:w-[386px] sm:h-[386px] lg:w-[482px] lg:h-[482px]"
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
                            className="w-[224px] h-[224px] sm:w-[386px] sm:h-[386px] lg:w-[482px] lg:h-[482px]"
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
                                className="w-[224px] h-[224px] sm:w-[386px] sm:h-[386px] lg:w-[482px] lg:h-[482px]"
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
                                className="absolute -top-10 sm:top-10 lg:top-50 scale-30 sm:scale-50 lg:scale-60"
                            />
                        </>
                    )}
                </motion.div>
            </AnimatePresence>
        </Layout>
    );
};

export default Jupiter;
