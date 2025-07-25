"use client";
import { cn } from "../utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";
import {
    IconBoxAlignRightFilled,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Footer() {
    return (
        <BentoGrid className="max-w-[1400px] mx-auto md:auto-rows-[20rem] pb-20 px-8">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    className={cn("[&>p:text-lg]", item.className)}
                    icon={item.icon}
                />
            ))}
        </BentoGrid>
    );
}


const SkeletonOne = () => {
    const variants = {
        initial: {
            x: 0,
        },
        animate: {
            x: 10,
            rotate: 5,
            transition: {
                duration: 0.2,
            },
        },
    };
    const variantsSecond = {
        initial: {
            x: 0,
        },
        animate: {
            x: -10,
            rotate: -5,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
            <motion.div
                variants={variants}
                className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
            >
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
                <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
            </motion.div>
            <motion.div
                variants={variantsSecond}
                className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
            >
                <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
            </motion.div>
            <motion.div
                variants={variants}
                className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
            >
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
                <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
            </motion.div>
        </motion.div>
    );
};
const SkeletonTwo = () => {
    const variants = {
        initial: {
            width: 0,
        },
        animate: {
            width: "100%",
            transition: {
                duration: 0.2,
            },
        },
        hover: {
            width: ["0%", "100%"],
            transition: {
                duration: 2,
            },
        },
    };
    const arr = new Array(6).fill(0);
    return (
        <motion.div
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
            {arr.map((_, i) => (
                <motion.div
                    key={"skelenton-two" + i}
                    variants={variants}
                    style={{
                        maxWidth: Math.random() * (100 - 40) + 40 + "%",
                    }}
                    className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
                ></motion.div>
            ))}
        </motion.div>
    );
};
const SkeletonThree = () => {
    const variants = {
        initial: {
            backgroundPosition: "0 50%",
        },
        animate: {
            backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
        },
    };
    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={variants}
            transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
            }}
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
            style={{
                background:
                    "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
                backgroundSize: "400% 400%",
            }}
        >
            <motion.div className="h-full w-full rounded-lg"></motion.div>
        </motion.div>
    );
};
const SkeletonFour = () => {
    const first = {
        initial: {
            x: 20,
            rotate: -5,
        },
        hover: {
            x: 0,
            rotate: 0,
        },
    };
    const second = {
        initial: {
            x: -20,
            rotate: 5,
        },
        hover: {
            x: 0,
            rotate: 0,
        },
    };
    return (
        <motion.div
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] md:flex-row flex-col  space-x-2"
        >
            <motion.div
                variants={first}
                className="h-full md:w-1/3 w-full rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
            >
                                <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
                    Connect on Instagram
                </p>
                <Link href={"https://www.instagram.com/shubhamm_1223"} className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4 cursor-pointer">
                    Click
                </Link>
            </motion.div>
            <motion.div className="h-full relative z-20 md:w-1/3 w-full rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
               
                <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
                    Mail Here
                </p>
                <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
                    nerd.shubh.dev@gmail.com
                </p>
            </motion.div>
            <motion.div
                variants={second}
                className="h-full md:w-1/3 w-full rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
            >
               
                <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
                    Message for freelancing works and opportunities
                </p>
                <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
                    +91 8708574656
                </p>
            </motion.div>
        </motion.div>
    );
};
const SkeletonFive = () => {
    const variants = {
        initial: {
            x: 0,
        },
        animate: {
            x: 10,
            rotate: 5,
            transition: {
                duration: 0.2,
            },
        },
    };
    const variantsSecond = {
        initial: {
            x: 0,
        },
        animate: {
            x: -10,
            rotate: -5,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
            <motion.div
                variants={variants}
                className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
            >
                
                <p className="text-xs text-neutral-500">
                    Interested in web design/development services?
                </p>
            </motion.div>
            <motion.div
                variants={variantsSecond}
                className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
            >
                <p className="text-xs text-neutral-500">Consider it Done.</p>
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
            </motion.div>
            <motion.div
                variants={variants}
                className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
            >
                
                <p className="text-xs text-neutral-500">
                    How do we start?
                </p>
            </motion.div>
            <motion.div
                variants={variantsSecond}
                className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
            >
                <p className="text-xs text-neutral-500">Schedule a consultation today!</p>
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
            </motion.div>
        </motion.div>
    );
};
const items = [
    {
        title: "Web development Services",
        description: (
            <span className="text-sm">
                Experienced in Front-End/Fullstack Developement.
            </span>
        ),
        header: <SkeletonOne />,
        className: "md:col-span-1",
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Web designing Services",
        description: (
            <span className="text-sm">
                Let us create beautiful and modern UI designs for your business.
            </span>
        ),
        header: <SkeletonTwo />,
        className: "md:col-span-1",
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Igniting Digital Excellence",
        description: (
            <span className="text-sm">
                Transforming ideas into impactful digital experiences. {"Let's"} collaborate to unlock your digital potential and achieve unparalleled success.
            </span>
        ),
        header: <SkeletonThree />,
        className: "md:col-span-1",
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Personal Information",
        description: (
            <span className="text-sm">
                All the ways you can get connected to me.
            </span>
        ),
        header: <SkeletonFour />,
        className: "md:col-span-2",
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },

    {
        title: "Client Satisfaction",
        description: (
            <span className="text-sm">
                We provide unlimited revisions and 24X7 support for Client.
            </span>
        ),
        header: <SkeletonFive />,
        className: "md:col-span-1",
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
];
