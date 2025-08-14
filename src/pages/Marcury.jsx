import React, { useState } from "react";
import Layout from "./Layout";
import { motion, AnimatePresence } from "motion/react";

const planet = {
    name: "Mercury",
    overview: {
        content:
            "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
        source: "https://en.wikipedia.org/wiki/Mercury_(planet)",
    },
    structure: {
        content:
            "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
        source: "https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure",
    },
    surface: {
        content:
            "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
        source: "https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology",
    },
    rotation: "58.6 Days",
    revolution: "87.97 Days",
    radius: "2,439.7 KM",
    temperature: "430°c",
    images: {
        planet: "./assets/planet-mercury.svg",
        internal: "./assets/planet-mercury-internal.svg",
        surface: "./assets/geology-mercury.png",
    },
};

const tabHeadings = ["overview", "structure", "surface"];

const Marcury = () => {
    const [selectedTab, setSelectedTab] = useState(1);
    return (
        <Layout
            planet={planet}
            tabHeadings={tabHeadings}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            className="bg-clr-m"
            after="after:bg-clr-m"
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
                            className="w-[111px] h-[111px] sm:w-[184px] sm:h-[184px] lg:w-[290px] lg:h-[290px]"
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
                            className="w-[111px] h-[111px] sm:w-[184px] sm:h-[184px] lg:w-[290px] lg:h-[290px]"
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
                                className="w-[111px] h-[111px] sm:w-[184px] sm:h-[184px] lg:w-[290px] lg:h-[290px]"
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
                                className="absolute -top-1/1 sm:-top-5 lg:top-50 scale-20 sm:scale-30 lg:scale-50"
                            />
                        </>
                    )}
                </motion.div>
            </AnimatePresence>
        </Layout>
    );
};

export default Marcury;
