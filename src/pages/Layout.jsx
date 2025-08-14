import { twMerge } from "tailwind-merge";
import iconsource from "/assets/icon-source.svg";
import { motion, AnimatePresence } from "motion/react";

const Layout = ({
    planet,
    tabHeadings,
    children,
    selectedTab,
    setSelectedTab,
    className, 
    after
}) => {
    return (
        <div>
            <div>
                <div className="flex sm:hidden items-center justify-around gap-8 border-b-2 border-w/15 px-2">
                    {tabHeadings.map((tabHeading, index) => (
                        <div
                            key={index + 1}
                            className={twMerge(
                                "py-4 cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:transition-all after:duration-500",
                                selectedTab === index + 1 && "after:w-full", `${after}`
                            )}
                            onClick={() => setSelectedTab(index + 1)}
                        >
                            <h3 className="text-[0.65rem] uppercase">
                                {tabHeading}
                            </h3>
                        </div>
                    ))}
                </div>

                <div className="wrapper lg:grid lg:grid-cols-2">
                    {/* PLANET IMAGE */}
                    {children}

                    {/* DESCRIPTION */}
                    <div className="sm:grid grid-cols-2 lg:grid-cols-1 lg:pl-52">
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={selectedTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeInOut",
                                }}
                            >
                                <div className="mt-23 sm:mt-32">
                                    <h1 className="uppercase text-center sm:text-start">
                                        {planet.name}
                                    </h1>

                                    <p className="text-center sm:text-start text-[0.87rem] h-[120px] sm:h-auto lg:text-[1.15rem] text-g-1 mt-2.5 sm:mt-4 lg:h-[132px]">
                                        {selectedTab === 1
                                            ? planet.overview.content
                                            : selectedTab === 2
                                            ? planet.structure.content
                                            : planet.surface.content}
                                    </p>

                                    <div className="flex items-center justify-center sm:justify-start capitalize text-center text-[0.88rem] gap-2 text-g-1 mt-9">
                                        <p className="text-[0.88rem]">
                                            source :
                                        </p>
                                        <a
                                            href={
                                                selectedTab === 1
                                                    ? planet.overview.source
                                                    : selectedTab === 2
                                                    ? planet.structure.source
                                                    : planet.surface.source
                                            }
                                            target="_blank"
                                            className="underline underline-offset-2"
                                        >
                                            Wikipedia
                                        </a>
                                        <img src={iconsource} alt="" />
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                        <div>
                            <div className="hidden pl-16 lg:pl-0 mt-48 lg:mt-10 sm:grid gap-2 lg:gap-4">
                                {tabHeadings.map((heading, index) => (
                                    <div
                                        key={index}
                                        onClick={() =>
                                            setSelectedTab(index + 1)
                                        }
                                        className={twMerge(
                                            "ring-1 ring-w/20 flex items-center gap-6 px-4 py-2 lg:py-3 transition-colors duration-500 cursor-pointer",
                                            selectedTab === index + 1 &&
                                                className
                                        )}
                                    >
                                        <span className="text-[0.8rem] lg:text-[1.2rem] text-w/50 font-ls">
                                            0{index + 1}
                                        </span>{" "}
                                        <h3 className="text-w uppercase">
                                            {heading}{" "}
                                            {index + 1 === 2
                                                ? "structure"
                                                : index + 1 === 3
                                                ? "geology"
                                                : ""}
                                        </h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wrapper grid gap-2 lg:gap-8 mt-8 sm:grid-cols-4 lg:mt-20 pb-12 lg:pb-15">
                    <Info label="rotation time" stat={planet.rotation} />
                    <Info label="revolution time" stat={planet.revolution} />
                    <Info label="radius" stat={planet.radius} />
                    <Info label="average temp" stat={planet.temperature} />
                </div>
            </div>
        </div>
    );
};

function Info({ label, stat }) {
    return (
        <div className="flex sm:flex-col items-center justify-between sm:items-start ring-1 ring-w/15 px-4 py-2 lg:py-4">
            <div>
                <h3 className="text-[0.75rem] uppercase">{label}</h3>
            </div>
            <div>
                <h2 className="uppercase">{stat}</h2>
            </div>
        </div>
    );
}

export default Layout;
